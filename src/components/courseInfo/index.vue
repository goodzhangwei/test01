<template>
  <div class="container-style">
    <!-- <Header></Header> -->
    <div class="move_header" v-if="navBarFixed">
      <HomeHeader2 :flagInfo="infoState"></HomeHeader2>
    </div>
    <div>
      <HomeHeader :flagInfo="infoState"></HomeHeader>
    </div>
    <div class="background-style">
      <div class="back-text">
        <h1>{{courseInfo.name}}</h1>
        <p>{{courseInfo.subtitle}}</p>
      </div>
      <div class="fixed_bg">
        <div class="con">
          <div>
            <div class="money-text">
                 <!--<span >-->
                   <!--￥ 999.00-->
                 <!--</span>-->
            </div>
            <div class="icon-pay">
              <span>微信付款</span>
            </div>
            <div class="icon-pay-two">
              <span>支付宝付款</span>
            </div>
          </div>
          <div class="icon-pay-text">
              <span>
                难度
              </span>
            <span class="nodistance">中级</span>
            <span class="imv2-dot_samll">·</span>
            <span>时长</span>
            <span class="nodistance">35小时</span>
            <span class="imv2-dot_samll">·</span>
            <span>
                综合评分
              </span>
            <span class="nodistance">10.00</span>
          </div>
        </div>
        <!-- <div v-if="enrollStatus ">
          <div class="btns" @click="gotoPay" v-if="Paystatus !== 1">
            <span>立即购买</span>
          </div>
          <div class="btns" v-else @click="gotoPy">
            <span>立即观看</span>
          </div>
        </div>
        <div v-else>
          <div class="btns" @click="gotoSecret" v-if="Paystatus !== 1">
            <span>立即报名</span>
          </div>
          <div class="btns" v-else @click="gotoPy">
            <span>立即观看</span>
          </div>
        </div> -->
        <div v-if="Paystatus !== 1 && courseInfo.studymodel === '201001'">
          <div class="btns" @click="gotoPay" >
            <span>立即购买</span>
          </div>
        </div>
        <div v-if="enrollStatus === false && courseInfo.studymodel === '201002'">
          <div class="btns" @click="gotoSecret" >
            <span>输入密钥</span>
          </div>
        </div>
        <div v-if="enrollStatus === true || Paystatus == 1">
          <div class="btns" @click="gotoView" >
            <span>立即观看</span>
          </div>
        </div>
        
      </div>
    </div>
    <div class="tags">
      <div class="content-tags">
        <ul>
          <li @click="getClassIntroduce">
            <div :class="{tagstext : tagsShow === '课程介绍'}">课程介绍</div>
            <div class="borderLine" :class="{borderLine2: tagsShow === '课程介绍'}"></div>
          </li>
          <li @click="getCatalogue">
            <div :class="{tagstext : tagsShow === '章节目录'}">章节目录</div>
            <div class="borderLine" :class="{borderLine2: tagsShow === '章节目录'}"></div>
          </li>
          <li @click="getConsult">
            <div :class="{tagstext : tagsShow === '课程咨询'}">课程咨询</div>
            <div class="borderLine" :class="{borderLine2: tagsShow === '课程咨询'}"></div>
          </li>
          <!-- <li @click="getEvaluate">
            <div :class="{tagstext : tagsShow === '用户评价'}">用户评价</div>
            <div class="borderLine" :class="{borderLine2: tagsShow === '用户评价'}"></div>
          </li> -->
        </ul>
      </div>
    </div>
    <div v-show="tagsShow === '课程介绍' ">
      <div class="contents">
        <div class="content-intro">
          <div class="intro-text">
            <div class="iconbofang">
              <div class="iconbofang-text">
                <i class="iconfont ymq-iconbofang" @click="gotoPy"></i>
                <div class="bofang-text">
                  <span>观看试看视频</span>
                </div>
              </div>

            </div>
            <div class="intro-text-content">
              <div class="introP">
                <h1>{{courseInfo.name}}</h1>
                <p>{{courseInfo.description}}</p>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="intro-header">
            <div class="intro-img">
              <img :src="teacherInfo.src"/>
              <div class="nickname">
                <span>{{teacherInfo.teachername}}</span>
              </div>
              <div class="nickdetail">
                <span>{{teacherInfo.des}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="detailCont">
        <div class="detail-content">
          <div class="detail-head-text">
            <h1>Python趣味编程+乐高MINDSTORMS®头脑风暴EV3机器人</h1>
            <h4>编程很难？不要紧，跟随着有趣的案例走，实践出真知，在实践中学习！</h4>
          </div>
          <div class="detail-left">
          </div>
          <div class="detail-cards">
            <div>
              <div class="detail-card1-left">
                <div class="box">
                  <div class="box-icon">
                    <i class="iconfont ymq-iconshebeizhuangtai"></i>
                  </div>
                  <div class="box-title">
                  <span>
                    自己动手创作机器人
                  </span>
                  </div>
                  <div class="box-content">
                    同学可以发挥想象制作
                    <br>
                    不同的乐高机器人
                  </div>
                </div>
              </div>
              <div class="detail-card1-right">
                <div class="box">
                  <div class="box-icon">
                    <i class="iconfont ymq-iconcharutupian"></i>
                  </div>
                  <div class="box-title">
                  <span>
                    图文结合讲解
                  </span>
                  </div>
                  <div class="box-content">
                    面对生硬数据上图说话，直观且通俗
                    <br>
                    易懂，学习过程不再枯燥
                  </div>
                </div>
              </div>
            </div>
            <div class="detail-card-bottom">
              <div class="detail-card2-left">
                <div class="box">
                  <div class="box-icon">
                    <i class="iconfont ymq-iconzhunbeiliangchan"></i>
                  </div>
                  <div class="box-title">
                  <span>
                    十几种实战案例
                  </span>
                  </div>
                  <div class="box-content">
                    在实战案例中让学生
                    <br>
                    感觉到编程的乐趣
                  </div>
                </div>
              </div>
              <div class="detail-card2-right">
                <div class="box">
                  <div class="box-icon">
                    <i class="iconfont ymq-iconkongxinwenhao"></i>
                  </div>
                  <div class="box-title">
                  <span>
                   设计互动问答环节
                  </span>
                  </div>
                  <div class="box-content">
                    课程中穿插互动问答
                    <br>
                    带你吃透核心知识点
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!--<div class="section1">-->
        <!--<div class="section-content">-->
          <!--<h1>结合实战案例&#45;&#45;&#45;&#45;构建完整知识体系</h1>-->
          <!--<h4>50%原理讲解+50%项目实战，知识点与实战完美结合</h4>-->
          <!--<div class="section-detail">-->
            <!--<img src="../../assets/zhishitu.png">-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <div class="section2">
        <div class="section2-content">
          <div class="section2-card1">
            <h1>学员专享增值服务</h1>
            <div class="section2-item">
              <div class="item-left">
                <div class="item1-left">
                  <div class="left-img">
                    <i class="iconfont ymq-iconcodepen-circle-fill"></i>
                  </div>
                </div>
                <div class="item1-right">
                  <div class="item-title">
                    问答专区
                  </div>
                  <div class="item-content">
                    关于课程的问题都可在问答区随时提问,讲师会进行
                    <br>
                    集中答疑
                  </div>
                </div>
              </div>
              <div class="item-right">
                <div class="item1-left">
                  <div class="left-img">
                    <i class="iconfont ymq-icongithub-fill"></i>
                  </div>
                </div>
                <div class="item1-right">
                  <div class="item-title">
                    源码开放
                  </div>
                  <div class="item-content">
                    课程案例代码完全开放给你，你可以根据所学知
                    <br>
                    识，自行修改、优化
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div class="section2-card2">
            <el-row :gutter="30">
              <el-col :span="12">
                <div class="card2-left">
                  <div class="card2-left-title">
                    适合人群
                  </div>
                  <div class="card2-left-content">
                    只要你对编程感兴趣，想要在系统的学习Python之前
                    <br>
                    那本课程非常适合你，针对没有编程基础的小学生。
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="card2-left">
                  <div class="card2-left-title">
                    技术储备要求
                  </div>
                  <div class="card2-left-content">
                    {{courseInfo.requireskill}}
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>
    <div v-show="tagsShow === '章节目录'">
      <div class="evaluate">
        <div class="eval-left" v-for="(item, index) in list" :key="index">
          <div class="eval-left-icon">
            <i class="iconfont ymq-iconmulu"></i>
          </div>
          <div class="eval-right-text">
            <h1 class="class-name">
              {{item.pname}}
            </h1>
            <div class="line-left" v-for="(item2, index2) in item.children" :key="index2">
              <i class="iconfont ymq-iconcaret-right"></i>
              <span>{{item2.pname}}</span>
              <span class="sikan" style="font-size: 12px" v-if="index2 === 0 && index === 0" @click="gotoPy">试看</span>
              <span class="sikan2" style="font-size: 12px" v-if="item2.already === null">未观看</span>
              <span class="sikan3" style="font-size: 12px" v-else>已观看</span>
            </div>
          </div>
        </div>
        <div class="eval-right">
          <div class="eval-top-right">
            <h2>试看</h2>
            <div class="eval-shikan">
              <div class="eval-shikan-icon">
                <div @click="gotoPy">
                  <i class="iconfont ymq-iconbofang"></i>
                </div>
                <div class="eval-icon-text">
                  观看试看视频
                </div>
              </div>
            </div>
          </div>
          <div class="eval-top-right">
            <h2>讲师</h2>
            <div style="overflow: hidden">
              <img :src="teacherInfo.src" class="eval-img"/>
              <div class="eval-img-text">
                <div class="text1">{{teacherInfo.teachername}}</div>
                <div class="text2">{{teacherInfo.des}}</div>
              </div>
            </div>
            <p class="eval-content">
              骨灰级Python讲师师。广泛涉猎各种前沿技术，包括：前端工程化、性能优化、数据可视化、小程序、中后台等领域，一个集技术和讲课能力于一身的才子，一句话概括：他出课，必卖爆！
            </p>
          </div>

        </div>
      </div>

    </div>
    <div v-show="tagsShow === '课程咨询'">
      <div class="consult">
        <h1>
          若有咨询需要，请用发送邮件到教师邮箱
        </h1>
        <img :src="teacherInfo.src">
        <div class="icontent">
          <!-- <i class="iconfont ymq-iconphone"></i> -->
          <span>邮箱：{{teacherInfo.email}}</span>
        </div>
      </div>
    </div>
    <!-- <div v-show="tagsShow === '用户评价'">
      <div class="second-container">
        <div class="picture">
          <img src="../../assets/nocontent.png">
        </div>
        <div class="picture-text">
          <span >暂无内容</span>
        </div>
      </div>
    </div> -->

    

    <Footer class="footer"></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  // import Header from '@/components/common/header5'
  import HomeHeader from '@/components/common/header'
  import HomeHeader2 from '@/components/common/header2'
  export default {
    name: "CourseInfo",
    components: {
      HomeHeader,
      HomeHeader2,
      Footer
    },
    data() {
      return {
        navBarFixed: false,
        infoState: false,
        enrollStatus: false,
        tagsShow: '课程介绍',
        list: [],
        Paystatus: -1,
        flag_state: false,
        courseId: '',
        courseInfo: {
            name: '',
            description: '',
            price: '',
            subtitle: '',
            requireskill: '',
            studymodel: ''
        },
        teacherInfo: {
          teachername: '',
          des: '',
          src: '',
          email: ''
        }
      }
    },
    created () {
      if (localStorage.getItem('flag_class') === null) {
        this.flag_state = true
      } else {
        this.flag_state = false
      }
    },
    mounted() {
        console.log("课程ID", this.$route.query.courseId)
        this.courseId = this.$route.query.courseId
        this.getCourseInfo(this.courseId)
        this.getClassList()
        this.getCourseStatus()
        this.getTeacherInfo()
        window.addEventListener('scroll', this.watchScroll)
        this.getInfo()
        
    },
    methods: {
      watchScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 49) {
          this.navBarFixed = true
        } else {
          this.navBarFixed = false
        }
        //console.log(scrollTop)
      },
      getInfo() {
        var url = `http://58.119.112.14:11020/cms/system/user/${localStorage.getItem('userId')}`
        this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
          // this.$store.dispatch('changeMsg', res.data.userInfo.headimg);
          this.infoState = res.data.infoState
        })
      },
      getClassIntroduce() {
        this.tagsShow = '课程介绍'
      },
      getCatalogue() {
        this.tagsShow = '章节目录'
      },
      getConsult() {
        this.tagsShow = '课程咨询'
      },
      getEvaluate() {
        this.tagsShow = '用户评价'
      },
      gotoPy() {
        this.$router.push({
          path: '/videoclass',
          query: {
            class_id: this.courseId
          }
        })
      },
      gotoSecret() {
        this.$prompt('请输入密钥', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
         
          var userId = localStorage.getItem('userId')
          var url = `http://58.119.112.14:11020/cms/chen/course/add?userId=${userId}&courseId=${this.courseId}&uuid=${value}`
          this.$axios.post(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
            console.log("返回的res",res)
            if(res.data.code === 200) {
              this.$message({
                type: 'success',
                message: res.data.msg
              });
              this.enrollStatus = true
            } else {
              this.$message({
                type: 'danger',
                message: res.data.msg
              });
            }
          })
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      gotoView() {},
      getClassList() {
        //var url = 'https://www.zhongkeruitong.top/towerImg/cms/course/courseview/ff80808172a7363b0172a8765d35017c/' + localStorage.getItem('name')
        var url = `http://58.119.112.14:11020/cms/course/courseview/${this.courseId}/${localStorage.getItem('name')}`
       // var url = `http://58.119.112.14:11020/cms/course/getTeachPlanFlag?courseid=${this.courseId}&userid=${localStorage.getItem('userId')}`
        this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
          this.list = res.data.teachplanNode.children
          this.Paystatus = res.data.status
        })
      },
      getCourseStatus() {

        var userId = localStorage.getItem('userId')
        var url = `http://58.119.112.14:11020/cms/chen/course/list?userId=${userId}&courseId=${this.courseId}`
        this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
          if(res.data.rows.length === 0) {
            this.enrollStatus = false
          } else {
            this.enrollStatus = true
          }
        })
      },
      getTeacherInfo() {
        var url = `http://58.119.112.14:11020/cms/course/teacher/get/${this.courseId}`
        this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
          
          this.teacherInfo.src = res.data.src
          this.teacherInfo.teachername = res.data.teachername
          this.teacherInfo.des = res.data.des
          this.teacherInfo.email = res.data.email
          console.log("teacherInfo:", this.teacherInfo.teachername )
        })
      },
      gotoPay() {
        if (this.flag_state === true) {
          alert('请先登录！')
          this.$router.push('/login')
        } else {
          this.$router.push({
            path: '/ClassPay',
            query: {
              class_id: this.courseId
            }
          })
        }
      },
      getCourseInfo(id) {
        var url = `http://58.119.112.14:11020/cms/course/coursebase/get/${id}`
        this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
           console.log("课程信息,",res.data)
           this.courseInfo = res.data
          

        })
       
      }
    }
  }
</script>

<style scoped>
  .container-style {

  }
  .move_header {
    background-color: rgba(255, 255, 255, 0.9);position: fixed;width: 100%;z-index: 999
  }
  .background-style {
    background-image: url("../../assets/class_bg6.jpg");
    height: 500px;
    background-size: 100% 100%;
    position: relative;
  }
  .back-text {
    text-align: center;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .back-text h1{
    font-size: 50px;
  }
  .back-text p {
    font-size: 20px;
  }
  .fixed_bg {
    width: 1400px;
    min-height: 150px;
    background-image: url("../../assets/fixed_bg.png");
    position: absolute;
    left: 50%;
    margin-left: -700px;
    bottom: -75px;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 18px;
    box-shadow: 0 8px 16px 0 rgba(28,31,33,.1)
  }
  .con {
    height: 100%;
    width: 100%;
    padding: 42px 50px;
    position: relative;
    box-sizing: border-box;
  }
  .money-text {
    font-size: 42px;
    color: #f01414;
    line-height: 32px;
    font-weight: 700;
    float: left;
  }
  .icon-pay {
    background-image: linear-gradient(90deg,#6c61d3 0,#53a0fd 100%);
    border-radius: 12px;
    padding: 6px 10px;
    float: left;
    margin-top: 3px;
    margin-left: 12px;
    line-height: 16px;
  }
  .icon-pay span {
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
  .icon-pay-two {
    margin-top: 3px;
    margin-left: 17px;
    line-height: 16px;
    padding: 6px 10px;
    background-image:linear-gradient(90deg,#ff323f 0,#f76469 100%);
    border-radius: 12px;
    float: left;
  }
  .icon-pay-two span{
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
  .icon-pay-text {
    clear: both;
    font-size: 14px;
    /*padding-top: 10px;*/
    font-weight: 700;
    color: #545c63;
    line-height: 32px
  }
  .nodistance {
    font-weight: 400;
    margin-left: 10px;
  }
  .imv2-dot_samll {
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .btns {
    position: absolute;
    top: 40px;
    right: 40px;
    background: #f01414;
    border-radius: 34px;
    font-size: 18px;
    color: #fff;
    letter-spacing: 0;
    line-height: 34px;
    font-weight: 700;
    padding: 12px 48px;
    -webkit-transition: all .3s;
    cursor: pointer;
  }
  .contents {
    /*background-color: black;*/
    width: 1400px;
    margin: 0 auto;
    /*height: 500px;*/
    /*padding-top: 20px;*/
  }
  .tags {
    width: 1400px;
    margin: 0 auto;
    padding-top: 20px;
    margin-top: 100px;
  }
  .content-tags {
    text-align: center;
  }
  .content-tags li {
    display: inline-block;
    list-style: none;
    margin-right: 80px;
    font-size: 22px;
    color: #545c63;
    font-weight: 700;

  }
  .content-tags li:hover div {
    cursor: pointer;
    color: #f20d0d;
  }
  .content-tags li:hover .borderLine {
    display: block;
  }
  .tagstext {
    color: #f20d0d;
  }
  .borderLine {
    display: none;
    /*position: absolute;*/
    width: 20px;
    height: 3px;
    /*top: 40px;*/
    /*left: 50px;*/
    /*margin-left: -8px;*/
    background: #f20d0d;
    margin: 0 auto;
    margin-top: 12px;
  }
  .borderLine2 {
    display: block;
  }
  .content-intro {
    height: 550px;
    margin-top: 50px;
    background-image: url("../../assets/class_bg7.jpg");
    padding: 74px 0 82px 0;
    border-radius: 16px;
    box-shadow: 0 4px 8px 0 rgba(7,17,27,.1);
    background-size: cover;
    background-position: center;
  }
  .intro-text {
    /*height: 414px;*/
    height: 100%;
    width: 1018px;
    float: left;
    /*background-color: black;*/
  }
  .intro-header {
    float: right;
    width: 382px;
    height: 100%;
    display: table;
  }

  .iconbofang {
    float: left;
    width: 400px;
    height: 100%;
    /*background-color: black;*/
    position: relative;
  }
  .iconbofang i{
    font-size: 100px;
    color: white;
  }
  .iconbofang-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .iconbofang-text i:hover {
    cursor: pointer;
  }
  .bofang-text {
    color: white;
  }
  .intro-text-content {
    position: relative;
    width: 618px;
    float: right;
    height: 100%;
    padding-right: 90px;
    display: table;

  }
  .introP {
    /*top: 50%;*/
    /*transform: translateY(-50%);*/
    /*position: absolute;*/
    display: table-cell;
    vertical-align: middle;
  }
  .introP h1{
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    line-height: 36px
  }
  .introP p{
    color: #fff;
    font-size: 20px;
    margin-top: 20px;
    line-height: 28px;
  }
  .line {
    position: absolute;
    top: 0;
    right: 3px;
    width: 2px;
    height: 100%;
    background: rgba(255,255,255,.4);
  }
  .intro-img {
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    height: 100%;
  }
  .intro-img img {
    width: 175px;
    height: 175px;
    border-radius: 50%;
  }
  .nickname {
    font-size: 28px;
    font-weight: 700;
    line-height: 30px;
    margin-top: 10px;
    color: #fff;
  }
  .nickdetail {
    margin-top: 5px;
    color: #fff;
    font-size: 18px;
    line-height: 12px
  }
  .detailCont {
    height: 760px;
    margin-top: 70px;
    width: 100%;
    background-image: url("../../assets/class_bg8.jpg");
    background-size: cover;
    background-position: center;
  }
  .detail-content {
    height: 100%;
    width: 1400px;
    margin: 0 auto;
    padding-top: 84px;
    box-sizing: border-box;
    position: relative;
  }
  .detail-head-text {
    text-align: center;
  }
  .detail-head-text h1 {
    font-size: 40px;
    color: #fff;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 10px;
  }
  .detail-head-text h4 {
    font-size: 22px;
    line-height: 24px;
    color: #fff;
  }
  .detail-left {
    width: 600px;
    height: 517px;
    background-image: url("../../assets/class_bg99.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 160px;
    left: -200px;
  }
  .detail-cards {
    width: 740px;
    /*height: 400px;*/
    /*background-color: black;*/
    position: absolute;
    top: 260px;
    left: 500px;
    /*clear: both;*/
  }
  .detail-card1-left {
    float: left;
    width: 350px;
    height: 175px;
    background-color: white;
    border-radius: 8px;
  }
  .detail-card1-right {
    float: right;
    width: 350px;
    height: 175px;
    background-color: white;
    border-radius: 8px;
  }
  .detail-card2-left {
    float: left;
    width: 350px;
    height: 175px;
    background-color: white;
    border-radius: 8px;
  }
  .detail-card2-right {
    float: right;
    width: 350px;
    height: 175px;
    background-color: white;
    border-radius: 8px;
  }
  .detail-card-bottom {
    margin-top: 240px;
  }
  .box {
    width: 100%;
    padding-top: 50px;
    background-color: #fff;
    position: relative;
  }
  .box-title {
    text-align: center;
    font-size: 20px;
    color: #1c1f21;
    line-height: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .box-content {
    text-align: center;
    color: #1c1f21;
    line-height: 22px;
    font-size: 18px;
    margin-top: 10px;
  }
  .box-icon {
    width: 60px;
    height: 60px;
    border: 5px solid #2e52ad;
    background: #fff;
    border-radius: 30px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: -30px;
    margin: 0 auto;
    /*font-size: 24px;*/
    line-height: 50px;
    color: #ff8539;
    text-align: center;
  }
  .box-icon i {
    font-size: 24px;
  }
  .section1 {
    width: 100%;
    padding-bottom: 100px;
    background-color: #f8fafc;
  }
  .section-content {
    width: 1400px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .section-content h1 {
    text-align: center;
    font-size: 40px;
    color: #1c1f21;
    line-height: 48px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .section-content h4 {
    text-align: center;
    font-size: 20px;
    color: #1c1f21;
    line-height: 24px;
  }
  .section-detail img {
    width: 1400px;
  }
  .section2 {
    width: 100%;
    background-color: #fff;
    height: 500px;
  }
  .section2-content {
    width: 1400px;
    margin: 0 auto;
    padding-top: 50px;
    height: 100%;
  }
  .section2-card1 {
    width: 100%;
    text-align: center;
    height: 322px;
    padding-top: 40px;
    background-color: #FEE140;
    background-image: linear-gradient(90deg, #FEE140 0%, #FA709A 100%);
    border-radius: 24px;
    box-sizing: border-box;
  }
  .section2-card1 h1 {
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 36px;
    font-weight: 700;
    margin-bottom: 32px;
  }
  .section2-item {
    width: 1050px;
    height: 100px;
    margin: 0 auto;
  }
  .item-left {
    float: left;
    height: 100%;
    width: 525px;
    /*background-color: white;*/
  }
  .item-right {
    width: 525px;
    height: 100%;
    float: right;
  }
  .item1-left {
    width: 60px;
    height: 100%;
    float: left;
  }
  .item1-right {
    width: 465px;
    height: 100%;
    float: right;
    padding-left: 30px;
    padding-top: 10px;
  }
  .left-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    text-align: center;
    color: #32569F;
    line-height: 60px;
  }
  .left-img i {
    font-size: 30px;
  }
  .item-title {
    font-size: 20px;
    color: #fff;
    line-height: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: left;
  }
  .item-content {
    font-size: 18px;
    color: #fff;
    line-height: 22px;
    text-align: left;
  }
  .section2-card2 {
    width: 100%;
    margin-top: 50px;
  }
  .card2-left {
    height: 250px;
    background-color: #f3f5f6;
    border-radius: 40px;
    padding-top: 65px;
    box-sizing: border-box;
  }
  .card2-left-title {
    font-size: 30px;
    color: #32569f;
    text-align: center;
    line-height: 46px;
    font-weight: 700;
    margin-bottom: 24px;
  }
  .card2-left-content {
    font-size: 20px;
    color: #383d42;
    text-align: center;
    line-height: 30px;
    margin-top: 30px;
  }
  .footer {
    margin-top: 300px;
  }
  .evaluate {
    width: 1400px;
    margin: 40px auto;
    border-top: 1px solid rgba(28,31,33,.1);
    clear: both;
    position: relative;
    overflow: hidden;
  }
  .eval-left {
    width: 1000px;
    padding: 32px 0 20px 0;
    border-bottom: 1px solid rgba(28,31,33,.1);
    vertical-align: middle;
    /*background-color: #777777;*/
    float: left;
  }
  .eval-left-line {
    border-bottom: 1px solid rgba(28,31,33,.1);
  }
  .eval-right {
    width: 400px;
    height: 100px;
    /*background-color: black;*/
    float: left;
    position: absolute;
    top: 0;
    right: 0;
  }
  .eval-left-icon {
    width: 100px;
    float: left;
    text-align: center;
    padding-top: 10px;
  }
  .eval-left-icon i {
    font-size: 40px;
    color: #93999f;
  }
  .eval-right-text {
    width: 900px;
    float: left;
  }
  .class-name {
    font-weight: 700;
    font-size: 20px;
    color: #07111b;
    margin-bottom: 20px;
  }
  .line-left {
    /*margin-top: 20px;*/
    border-top: 1px solid rgba(28,31,33,.1);
    /*width: 400px;*/
    padding: 15px 20px 15px 20px;
  }
  .line-left i{
    color: #9199a1;
    margin-right: 20px;
  }
  .line-left span {
    font-size: 20px;
  }
  .sikan {
    float: right;
    padding: 2px 20px;
    /*font-size: 8px;*/
    background-color: rgba(242,13,13,.1);
    border-radius: 16px;
    color: #f20d0d;
    font-weight: 700;
    cursor: pointer;
  }
  .sikan:hover {
    color: #fff;
    background-color: #f20d0d;
  }
  .sikan2 {
    float: right;
    padding: 2px 20px;
    /*font-size: 8px;*/
    background-color:grey;
    border-radius: 16px;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
  .sikan3 {
    float: right;
    padding: 2px 20px;
    /*font-size: 8px;*/
    background-color:rgb(60, 131, 78);
    border-radius: 16px;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
  
  .eval-top-right {
    padding: 32px 5px 20px 60px;
    border-bottom: 1px solid rgba(28,31,33,.1);
  }
  .eval-top-right h2{
    font-size: 20px;
    color: #07111b;
    font-weight: 700;
    padding-bottom: 20px;
  }
  .eval-shikan {
    width: 100%;
    height: 200px;
    background-image: url("../../assets/class_bg5.jpg");
    background-position: center;
    background-size: cover;
    border-radius: 16px;
    position: relative;
    margin-bottom: 20px;

  }
  .eval-shikan-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #ffffff;



  }
  .eval-shikan-icon i {
    font-size: 50px;
    cursor: pointer;
  }
  .eval-icon-text {
    font-size: 20px;
  }
  .eval-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    float: left;
  }
  .eval-img-text {
    float: left;
    margin-left: 10px;
  }
  .text1 {
    font-weight: 700;
    color: #4d555d;
    font-size: 20px;
    line-height: 26px;
  }
  .text2 {
    font-size: 16px;
    color: #4d555d;
  }
  .eval-content {
    /*padding: 0 24px;*/
    line-height: 24px;
    font-size: 16px;
    word-break: break-all;
    margin-top: 10px;
  }
  .consult {
    width: 1400px;
    margin: 40px auto;
    text-align: center;
  }
  .consult h1{
    text-align: center;
    font-size: 20px;
    color: #07111b;
    font-weight: 700;
  }
  .consult img {
    width: 400px;
    margin-top: 30px;
  }
  .second-container {
    width: 1400px;
    margin: 50px auto;
  }
  .picture {
    text-align: center;
  }
  .picture-text {
    text-align: center;
    margin-top: 20px;
    color: #636363;
  }
  .icontent {
    font-size: 20px;
    margin-top: 20px;
  }
</style>
