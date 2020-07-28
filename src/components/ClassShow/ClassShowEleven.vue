<template>
  <div class="container-style">
    <Header></Header>
    <div class="background-style">
      <div class="back-text">
        <h1>Python人工智能编程公益课堂</h1>
        <p>
          本次公益课堂由临沂市科技馆联合“青程在线”青少年科技编程平台，推出的人工智能体验课程。
        </p>
        <div class="btns2" @click="gotoPy" v-if="stateCode === -1">
          <span>立即报名</span>
        </div>
        <div class="btns2" @click="gotoInfo" v-else>
          <span>已报名</span>
        </div>
      </div>
      <!--<div class="fixed_bg">-->
        <!--<div class="con">-->
          <!--<div>-->
            <!--<div class="money-text">-->
              <!--&lt;!&ndash;<span >&ndash;&gt;-->
              <!--&lt;!&ndash;￥ 999.00&ndash;&gt;-->
              <!--&lt;!&ndash;</span>&ndash;&gt;-->
            <!--</div>-->
            <!--<div class="icon-pay">-->
              <!--<span>微信付款</span>-->
            <!--</div>-->
            <!--<div class="icon-pay-two">-->
              <!--<span>支付宝付款</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="icon-pay-text">-->
              <!--<span>-->
                <!--难度-->
              <!--</span>-->
            <!--<span class="nodistance">中级</span>-->
            <!--<span class="imv2-dot_samll">·</span>-->
            <!--<span>时长</span>-->
            <!--<span class="nodistance">35小时</span>-->
            <!--<span class="imv2-dot_samll">·</span>-->
            <!--<span>-->
                <!--综合评分-->
              <!--</span>-->
            <!--<span class="nodistance">10.00</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="btns" @click="gotoPay" v-if="Paystatus !== 1">-->
          <!--<span>立即购买</span>-->
        <!--</div>-->
        <!--<div class="btns" v-else @click="gotoPy">-->
          <!--<span>立即观看</span>-->
        <!--</div>-->
      <!--</div>-->
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
            <div :class="{tagstext : tagsShow === '售前咨询'}">售前咨询</div>
            <div class="borderLine" :class="{borderLine2: tagsShow === '售前咨询'}"></div>
          </li>
          <li @click="getEvaluate">
            <div :class="{tagstext : tagsShow === '用户评价'}">用户评价</div>
            <div class="borderLine" :class="{borderLine2: tagsShow === '用户评价'}"></div>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="tagsShow === '课程介绍' ">
      <div class="contents">
        <div class="content-intro">
          <div class="intro-text">
            <div class="iconbofang">
              <div class="iconbofang-text">
                <i class="iconfont ymq-iconbofang" @click="gotoPy2"></i>
                <div class="bofang-text">
                  <span>观看试看视频</span>
                </div>
              </div>

            </div>
            <div class="intro-text-content">
              <div class="introP">
                <h1>Python人工智能编程公益课堂</h1>
                <p>2018年1月，教育部颁发的《新课标》指出：信息技术将从兴趣课程变为必修课程。大幅度提升学生在编程、计算思维、算法方面的思维要求，提出人工智能要进入基础教育课堂。</p>
                <p>为辅助科技老师提升人工智能编程类课程教学实践，更好地认识和设计课程，进一步提高对学生的指导能力，同时使学校的科技课程得到优化、提升并能够取得显著成果，特举办首期“Python人工智能编程”公益课程。</p>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="intro-header">
            <div class="intro-img">
              <img src="../../assets/class_himg1.jpg"/>
              <div class="nickname">
                <span>SYM</span>
              </div>
              <div class="nickdetail">
                <span>python讲师</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detailCont">
        <div class="detail-content">
          <div class="detail-head-text">
            <h1>Python人工智能编程公益课堂</h1>
            <h4>专为教师授课打造的Python人工智能编程基石课程，为辅助科技老师提升人工智能编程类课程教学实践</h4>
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
                    Python知识系统化讲解
                  </span>
                  </div>
                  <div class="box-content">
                    梳理Python核心知识点+项目实战+
                    <br>
                    案例讲解+算法涉及
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
                    PBL教学研讨
                  </span>
                  </div>
                  <div class="box-content">
                    研讨学习如何设置实践教学
                    <br>
                    PBL教学模式实践
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
                    项目实践
                  </span>
                  </div>
                  <div class="box-content">
                    Python精选项目
                    <br>
                    实践与提升
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
                   人工智能认知
                  </span>
                  </div>
                  <div class="box-content">
                    增强对人工智能的认识
                    <br>
                    交流分享
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section1">
        <div class="section-content">
          <h1>课程学习安排</h1>
          <!--<h4>50%原理讲解+50%项目实战，知识点与实战完美结合</h4>-->
          <div class="section-detail">
            <!--<img src="../../assets/zhishitu2.png">-->
            <div>
              <div class="section-left">
                <img class="section-left-img" src="../../assets/section3-1.png"/>
                <div class="section-left-text">
                  本期公益课堂为5次课，20学时，课程以实践带动python学习与认识。
                </div>
              </div>
              <div class="section-right">
                <img class="section-left-img" src="../../assets/section3-1.png"/>
                <div class="section-left-text">
                  本次学习对Python的知识体系梳理、了解课程特点及与实践的结合。
                </div>
              </div>
              <div class="clearBoth"></div>
            </div>
            <div>
              <img class="section-left-img" src="../../assets/section3-1.png"/>
              <div class="section-left-text">
                这样参加培训的老师不仅获得Python人工智能编程的初步掌握，同时对学生的辅导就更加清晰明，对课程讲授及指导学生参加大赛都会有很大帮助。
              </div>
              <div class="clearBoth"></div>
            </div>
            <div class="anpai">
              授课内容及安排如下：
            </div>
            <div class="table-content">
              <table border="1" class="table-detail">
                <tr>
                  <td class="td-style-left td-style" align="center">课次</td>
                  <td class="td-style" align="center">内容</td>
                </tr>
                <tr>
                  <td class="td-style-left td-style" align="center">课次1</td>
                  <td class="td-style">
                    <div>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;初识Python，从编程语言引入Python语言，Python编程特点与优势。实践环节进行Python环境及PyCharm编程软件的安装与应用。
                      </p>
                      <div class="td-img">
                        <img src="../../assets/class_eleven_bg1.png" class="td-img-left">
                        <img src="../../assets/class_eleven_bg2.png" class="td-img-right">
                      </div>
                    </div>

                  </td>
                </tr>
                <tr>
                  <td class="td-style-left td-style" align="center">课次2</td>
                  <td class="td-style">
                    <div>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本次课程分为两部分，第一部分主要讲述的是Python中的绘画大师小海龟—turtle（编程基础）。课程通过5个实践来循序渐进地介绍turtle，小海龟画正方形案例、小海龟画正方形螺旋、小海龟画圆形、小海龟画圆形螺旋及彩色螺旋。
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同时把如range函数、for循环使用、circle函数、right函数等知识点融合到课程实践中。
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;同从简单的案例一步一步进行拓展和优化，既能有趣又实用。
                      </p>
                      <div class="td-img">
                        <img src="../../assets/class_eleven_bg3.png" class="td-img-three">
                      </div>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二部分主讲Python程序中的基石—变量，涉及定义、概念、声明，以及使用变量命名时的约束规则等。通过小海龟画六色六边螺旋来介绍变量。
                      </p>
                      <div class="td-img">
                        <img src="../../assets/class_eleven_bg4.png" class="td-img-three">
                      </div>
                    </div>

                  </td>
                </tr>
                <tr>
                  <td class="td-style-left td-style" align="center">课次3</td>
                  <td class="td-style">
                    <div>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本次课程分为两部分，第一部分主要介绍多彩缤纷的Python世界——数据类型和运算符，重点介绍Number和String这两种基本的数据类型，以及这两种数据类型的一些常用方法。每一种运算符都会在命令行模式下进行操作。
                      </p>
                      <div class="td-img">
                        <img src="../../assets/class_eleven_bg5.png" class="td-img-three">
                      </div>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二部分主要讲述的是Python编程的数字路口——控制语句和循环语句。通过现实生活中的红绿灯，引入python中的控制语句，主要讲if语句、if...else语句以及if...elif...else语句等。通过实践环节，综合这几种控制语句来巩固控制语句的知识点。
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此外，通过打印直角三角形的项目实践，学习python中的循环语句——while循环和for循环。
                      </p>
                      <div class="td-img">
                        <img src="../../assets/class_eleven_bg6.png" class="td-img-three">
                      </div>
                    </div>

                  </td>
                </tr>
                <tr>
                  <td class="td-style-left td-style" align="center">课次4</td>
                  <td class="td-style">
                    <div>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本次课程分为两部分，第一部分主要讲述的是Python中的数据结构，分别介绍了列表、元组、字典、集合、栈以及队列这6中常用的数据结构。
                      </p>
                      <div class="td-img">
                        <img src="../../assets/class_eleven_bg7.png" class="td-img-three">
                      </div>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第二部分主要讲述的是Python中的工具箱—函数，从现实生活中的案例来引入函数的概念，比如电饭煲的功能。对函数的概念、定义、使用，函数中的形参，实参，以及参数的传递等进行学习。通过一个“比大小”实践环节，串联起知识体系掌握。
                      </p>
                      <div class="td-img">
                        <img src="../../assets/class_eleven_bg8.png" class="td-img-three">
                      </div>
                    </div>

                  </td>
                </tr>
                <tr>
                  <td class="td-style-left td-style" align="center">课次5</td>
                  <td class="td-style">
                    <div>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本次课程主要是讲述的是经典算法—递归，在python中有着举足轻重的经典算法。
                      </p>
                      <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;该课程通过一个益智游戏（汉诺塔游戏）引入。把递归的特点以及递归的优缺点，以及通过使用递归，通过该实践游戏项目实现。
                      </p>
                      <div class="td-img">
                        <img src="../../assets/class_eleven_bg9.png" class="td-img-three">
                      </div>
                    </div>

                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="section3">
        <div class="section3-content">
          <h1>
            培训模式：采取线上授课方式，采取多方式的交流互动。
          </h1>
          <div class="section3-cards">
            <div class="section3-left-card">
              <img src="../../assets/class_ten_img.png"/>
            </div>
            <div class="section3-right-card">
              <div class="box2">
                <div class="box-icon">
                  <i class="iconfont ymq-iconcharutupian"></i>
                </div>
                <div class="box-title2">
                  <span>
                    采用PBL教学法实践
                  </span>
                </div>
                <div class="box-content2">
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;采用PBL教学法实践：PBL（Problem-Based Learning method）教学法，是基于项目的学习方法和项目实践式教学模式，突破单纯知识点的学习和记忆，重点通过围绕解决项目问题的实践方式，引导学生以问题为导向进行科技实践训练，形成在科技编程实践过程中对所学知识的掌握与问题的解决能力。
                  <br>
                  &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;课程适应性强：考虑到了不同老师的基础差异， Python课程从基础讲起，梳理好重点内容，既保证了初步入门老师的需求，同时也增加了更多实践，满足具有一定基础老师的提升。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                    对编程感兴趣，没有编程基础。
                    <br>
                    针对教师群体，并感兴趣参加培训。
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div class="card2-left">
                  <div class="card2-left-title">
                    技术储备要求
                  </div>
                  <div class="card2-left-content">
                    需要有基本的计算能力
                    <br>
                    有良好的思维逻辑能力
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
              <span class="namestyle">{{item2.pname}}</span>
              <span class="sikan" style="font-size: 12px" v-if="index2 === 0 && index === 0" @click="gotoPy2">试看</span>
            </div>
          </div>
        </div>
        <div class="eval-right">
          <div class="eval-top-right">
            <h2>试看</h2>
            <div class="eval-shikan">
              <div class="eval-shikan-icon">
                <div @click="gotoPy2">
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
              <img src="../../assets/class_himg1.jpg" class="eval-img"/>
              <div class="eval-img-text">
                <div class="text1">SYM</div>
                <div class="text2">Python讲师</div>
              </div>
            </div>
            <p class="eval-content">
              骨灰级Python讲师师。广泛涉猎各种前沿技术，包括：前端工程化、性能优化、数据可视化、小程序、中后台等领域，一个集技术和讲课能力于一身的才子，一句话概括：他出课，必卖爆！
            </p>
          </div>

        </div>
      </div>

    </div>
    <div v-show="tagsShow === '售前咨询'">
      <div class="consult">
        <h1>
          若有咨询需要，请用手机扫描下面二维码
        </h1>
        <img src="../../assets/code2.jpg">
        <div class="icontent">
          <i class="iconfont ymq-iconphone"></i>
          <span>联系电话：13381173397</span>
        </div>
      </div>
    </div>
    <div v-show="tagsShow === '用户评价'">
      <div class="second-container">
        <div class="picture">
          <img src="../../assets/nocontent.png">
        </div>
        <div class="picture-text">
          <span >暂无内容</span>
        </div>
      </div>
    </div>

    <Footer class="footer"></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header5'
  export default {
    name: "ClassShowOne",
    components: {
      Header,
      Footer
    },
    data() {
      return {
        tagsShow: '课程介绍',
        list: [],
        Paystatus: -1,
        flag_state: false,
        infoState: false,
        stateCode: -1,
        phoneNum: ''
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
      if (this.flag_state === true) {

      } else {
        this.getPhone()
      }
      this.getClassList()
      this.getInfo()
    },
    methods: {
      getClassIntroduce() {
        this.tagsShow = '课程介绍'
      },
      getCatalogue() {
        this.tagsShow = '章节目录'
      },
      getConsult() {
        this.tagsShow = '售前咨询'
      },
      getEvaluate() {
        this.tagsShow = '用户评价'
      },
      gotoPy2() {
        this.$router.push({
          path: '/videoclass',
          query: {
            class_id: 'ff808081732c7ece0173413b3e1e0069'
          }
        })
      },
      gotoPy() {
        if (this.flag_state === true) {
          alert('请先登录！')
          this.$router.push('/login')
        } else {
          if (this.infoState === false) {
            this.openInfo()
          } else {
            this.$router.push({
              query: {
                phoneNum: this.phoneNum
              },
              path: '/applyPage'
            })
          }
        }
      },
      gotoInfo() {
        alert('您已经报名！')
      },
      getTeacherState() {
        var url = 'https://www.zhongkeruitong.top/towerImg/cms/sign/getSignUp?phone=' + this.phoneNum
        this.$axios.get(url).then((res) => {
          this.stateCode = res.data.code
        })
      },
      getPhone() {
        var url = 'https://www.zhongkeruitong.top/towerImg/cms/user/ifPhone?username='+localStorage.getItem('name')
        this.$axios.post(url).then((res) => {
          if (res.data.code === 10009) {
            // this.$confirm('请尽快绑定手机号', '提示信息', {
            //   confirmButtonText: '确定',
            //   type: 'warning',
            //   center: true,
            // }).then(() => {
            //   // this.$router.push('/userSetting/personalInformation')
            // }).catch(() => {
            // })
          } else {
            this.phoneNum = res.data.user.phone
            this.getTeacherState()
            console.log(this.phoneNum)
          }
        })
      },
      getClassList() {
        var url = 'https://www.zhongkeruitong.top/towerImg/cms/course/courseview/ff808081732c7ece0173413b3e1e0069/' + localStorage.getItem('name')
        this.$axios.get(url).then((res) => {
          this.list = res.data.teachplanNode.children
          this.Paystatus = res.data.status
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
              class_id: 'ff808081732c7ece0173413b3e1e0069'
            }
          })
        }
      },
      getInfo() {
        if (this.flag_state === false) {
          var url = 'https://zhongkeruitong.top/towerImg/cms/user/getUserInfo?username=' + localStorage.getItem('name')
          this.$axios.get(url).then((res) => {
            // this.$store.dispatch('changeMsg', res.data.userInfo.headimg);
            // localStorage.setItem('headimg', res.data.userInfo.headimg)
            // localStorage.setItem('city', res.data.userInfo.city)
            this.infoState = res.data.infoState
          })
        }
      },
      openInfo() {
        this.$confirm('请尽快完善个人资料', '提示信息', {
          confirmButtonText: '立即前往',
          type: 'warning',
          center: true,
        }).then(() => {
          this.$router.push('/userSetting/personalInformation')
        }).catch(() => {
        })
      }
    }
  }
</script>

<style scoped>
  .container-style {

  }
  .background-style {
    background-image: url("../../assets/class_ten_bg1.png");
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
  .btns2 {
    margin-top: 10px;
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
    display: inline-block;
    transition: all .6s;
  }
  .btns2:hover {
    transform: translateY(-10px);
    border-color: #c20a0a;
    background-color: #c20a0a;
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
    margin-top: 20px;
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
    background-image: url("../../assets/class_ten_bg2.png");
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
    background-image: url("../../assets/section0.jpg");
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
    width: 1018px;
    height: 517px;
    background-image: url("../../assets/section0-img.png");
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 160px;
    left: -300px;
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
  .box-title2 {
    text-align: center;
    font-size: 22px;
    color: #1c1f21;
    line-height: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .box-content2 {
    color: #1c1f21;
    line-height: 28px;
    font-size: 20px;
    margin-top: 10px;
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
  .section-detail {
    /*width: 1400px;*/
    margin-top: 30px;
  }
  .section-left {
    width: 700px;
    float: left;
    padding: 0 0 35px 0;
  }
  .section-left-img {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    float: left;
  }
  .section-left-text {
    float: left;
    margin-left: 20px;
    font-size: 20px;
    color: #383d42;
    line-height: 55px;
  }
  .section-right {
    width: 700px;
    float: left;
    padding: 0 0 35px 0;
  }
  .clearBoth {
    clear: both;
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
    background-image: linear-gradient(90deg,#074381 22%,#3f5ba8 100%);
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
  .section3 {
    width: 100%;
    height: 600px;
    background-image: url("../../assets/class_ten_bg3.png");
    background-size: cover;
    background-position: center;
  }
  .section3-content {
    width: 1400px;
    margin: 0 auto;
    padding-top: 30px;
  }
  .section3-content h1 {
    font-size: 40px;
    color: #fff;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 10px;
    text-align: center;
  }
  .section3-cards {
    margin-top: 30px;
  }
  .section3-left-card {
    float: left;
    width: 700px;
    height: 400px;
  }
  .section3-left-card img {
    width: 100%;
    height: 100%;
  }
  .section3-right-card {
    float: left;
    width: 700px;
    height: 400px;
    padding-left: 30px;
  }
  .box2 {
    width: 100%;
    height: 100%;
    padding: 50px 30px 30px 30px;
    background-color: #fff;
    position: relative;
    border-radius: 5px;
  }
  .anpai {
    margin-top: 30px;
    font-size: 18px;
    color: #1c1f21;
    line-height: 24px;
    padding-left: 100px;
  }
  .table-content {
    width: 1200px;
    margin: 20px auto;
  }
  .table-detail {
    width: 100%;
  }
  .td-style-left {
    width: 200px;
  }
  .td-style {
    padding: 20px;
    font-size: 20px;
  }
  .td-img {
    margin-top: 20px;
    text-align: center;
  }
  .td-img-left {
    float: left;
    width: 400px;
  }
  .td-img-right {
    float: left;
    width: 400px;
    margin-left: 40px;
  }
  .td-img-three {
    width: 500px;
  }
</style>
