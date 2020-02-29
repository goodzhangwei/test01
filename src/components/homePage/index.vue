<template>
  <div class="app_container">
    <!--<header>-->
      <!--<nav>-->
        <!--<div class="logo">-->
          <!--<img src="../../assets/new.png">-->
        <!--</div>-->
        <!--<div class="navbar">-->
          <!--<ul>-->
            <!--<li><span>首页</span></li>-->
            <!--<li @click="gotoAllclasses"><span>全部课程</span></li>-->
            <!--<li @click="gotoCompetition"><span>编程比赛</span></li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="personal">-->
          <!--<user-setting-popover></user-setting-popover>-->
<!--&lt;!&ndash;          <el-button @click="gotonima">点我跳</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;          <a href="#"><img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;margin-right:20px;border-radius: 50%">杨启航</a>&ndash;&gt;-->
        <!--</div>-->
      <!--</nav>-->
    <!--</header>-->
    <Header :flags = flag_class></Header>
    <div class="banner contaier">
      <div class="banner-in">
        <el-carousel height="420px">
          <el-carousel-item  v-for="(item, index) in schna" :key="index">
            <img :src="item" alt="" style="width: 100%;height: 100%">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="recom-products contaier">
      <div class="recom-hd">
        <h4>推荐课程</h4>
        <a>查看全部</a>
      </div>
      <div class="recom-bd contaier" style=" display: table;content: none;">
        <ul>
          <li>
            <img style="background-color: #a68b56;height: 150px;width: 400px;border-radius: 20px 20px 0 0" src="../../assets/picturetwo.jpg">
            <h5 @click="goToCourseIndex">python计算思维实践基础课</h5>
            <p>适合零基础的同学，学会简单语法和简单编程逻辑思维，掌握调用模块的能力，然后独立完成小型项目。</p>
            <div style="margin-top: 12px;"></div>
            <h5>推荐指数:</h5>
            <span class="star"><el-rate v-model="value1" disabled></el-rate></span>
          </li>
          <li>
            <img style="background-color: #a68b56;height: 150px;width: 400px;border-radius: 20px 20px 0 0" src="../../assets/classpicture.jpg">
            <h5>python机器人实践课</h5>
            <p>适合python零基础的同学，学习使用python编程语言控制智能机器人，锻炼动手能力，掌握python编程语言，最后完成智能机器人相关项目。</p>
            <h5>推荐指数:</h5>
            <span class="star"><el-rate v-model="value1" disabled></el-rate></span>
          </li>
          <li>
            <img style="background-color: #a68b56;height: 150px;width: 400px;border-radius: 20px 20px 0 0" src="../../assets/classpicture3.jpg">
            <h5>python算法实践高阶课程</h5>
            <p>适合python算法零基础的同学，使用python编程语言完成算法实验，学习递归、贪心、排序等主流算法与python编程语言基础，最后完成python算法实践相关项目。</p>
            <h5>推荐指数:</h5>
            <span class="star"><el-rate v-model="value1" disabled></el-rate></span>
          </li>
        </ul>
      </div>
    </div>
    <div class="fea-class contaier">
      <div class="fea-head">
        <h4>精选直播课程</h4>
      </div>
      <div class="fea-body">
        <el-row>
          <el-col :span="12">
            <div class="fea-img">
              <img style="width: 600px;height: 250px;background-color: #a68b56" src="../../assets/pictureone.jpg">
            </div>
          </el-col>
          <el-col :span="12">
            <div class="fea-content">
              <ul>
                <li>
                  <div>
                    <el-row>
                      <el-col :span="8">
                        <h4>Python人工智能大讲堂系列五</h4>
                        <p>2019-06-01  16:00</p>
                      </el-col>
                      <el-col :span="8">
                        <span style="font-size: 16px;color: skyblue">直播中</span>
                        <img src="../../assets/zhibo.png">
                      </el-col>
                      <el-col :span="8">
                        <el-button type="primary">观看直播</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </li>
                <li>
                  <div>
                    <el-row>
                      <el-col :span="8">
                        <h4>Python人工智能大讲堂系列四</h4>
                        <p>2019-05-01  14:00</p>
                      </el-col>
                      <el-col :span="8">
                        <span style="font-size: 16px;color: skyblue">直播中</span>
                        <img src="../../assets/zhibo.png">
                      </el-col>
                      <el-col :span="8">
                        <el-button type="primary">观看直播</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </li>
                <li>
                  <div>
                    <el-row>
                      <el-col :span="8">
                        <h4>Python人工智能大讲堂系列三</h4>
                        <p>2019-04-01  16:00</p>
                      </el-col>
                      <el-col :span="8">
                        <span style="font-size: 16px;color: skyblue">直播中</span>
                        <img src="../../assets/zhibo.png">
                      </el-col>
                      <el-col :span="8">
                        <el-button type="primary">观看直播</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </li>
                <li>
                  <div>
                    <el-row>
                      <el-col :span="8">
                        <h4>Python人工智能大讲堂系列二</h4>
                        <p>2019-03-01  14:00</p>
                      </el-col>
                      <el-col :span="8">
                        <span style="font-size: 16px;color: skyblue">直播中</span>
                        <img src="../../assets/zhibo.png">
                      </el-col>
                      <el-col :span="8">
                        <el-button type="primary">观看直播</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </li>
                <li>
                  <div>
                    <el-row>
                      <el-col :span="8">
                        <h4>Python人工智能大讲堂系列一</h4>
                        <p>2019-02-01  14:00</p>
                      </el-col>
                      <el-col :span="8">
                        <span style="font-size: 16px;color: skyblue">直播中</span>
                        <img src="../../assets/zhibo.png">
                      </el-col>
                      <el-col :span="8">
                        <el-button type="primary">观看直播</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="class_header">
      <span>热门课程</span>
    </div>
    <div style="width: 1400px;margin: 0 auto;height: 20px">
      <div class="link">
        <span @click="gotoContentClass">查看全部</span>
      </div>
    </div>
    <div class="contaier" style="margin-bottom: 40px">
      <el-row>
        <!--<el-col :span="12" class="col_style">-->
          <!--<div class="img_div" @click="gotocontent('ff808081704e6a9b01705121995f0000')">-->
            <!--<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581660082158&di=a42d2cbbe93c70153478b713442f1d92&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fq100%2Fimg1.ugc.ifeng.com%2Fnewugc%2F20190520%2F15%2Fwemedia%2Fc1024597eac12eb5d088951616fb2e45491581a0_size43_w1078_h516.jpg" class="img_class">-->
          <!--</div>-->
          <!--<div class="class_text">-->
            <!--<h3 @click="gotocontent('ff808081704e6a9b01705121995f0000')">-->
             <!--Python计算思维基础课程-->
            <!--</h3>-->
            <!--<div class="content_class">-->
              <!--<span>本路线精选程序员必修的数学基础课和计算机基础核心知识</span>-->
            <!--</div>-->
            <!--<div class="content_class_start">-->
              <!--<span>4步骤 · 6门课</span>-->
              <!--<span style="margin-left: 40px"><i class="iconfont ymq-iconshoucang_shixin star_icon"></i>8848人收藏</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="12" class="col_style">-->
          <!--<div class="img_div" @click="gotocontent('ff808081704e6a9b01705121995f0000')">-->
            <!--<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=807728785,154855664&fm=26&gp=0.jpg" class="img_class">-->
          <!--</div>-->
          <!--<div class="class_text">-->
            <!--<h3 @click="gotocontent('ff808081704e6a9b01705121995f0000')">-->
              <!--MySQL数据库直通车：从入门到面试-->
            <!--</h3>-->
            <!--<div class="content_class">-->
              <!--<span>一举吃透最耗时的数据库，学会数据库的基本使用、业务库的设计与架构，面试收尾升华所学。</span>-->
            <!--</div>-->
            <!--<div class="content_class_start">-->
              <!--<span>4步骤 · 6门课</span>-->
              <!--<span style="margin-left: 40px"><i class="iconfont ymq-iconshoucang_shixin star_icon"></i>8848人收藏</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="12" class="col_style">-->
          <!--<div class="img_div" @click="gotocontent('ff808081704e6a9b01705121995f0000')">-->
            <!--<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581784329660&di=382e742aca7a65bb44705a1c6602fe5a&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn11%2F600%2Fw900h500%2F20180525%2Fbd28-haysviy5752494.jpg" class="img_class">-->
          <!--</div>-->
          <!--<div class="class_text">-->
            <!--<h3 @click="gotocontent('ff808081704e6a9b01705121995f0000')">-->
              <!--大数据基础入门求职路线-->
            <!--</h3>-->
            <!--<div class="content_class">-->
              <!--<span>路线面向零基础用户，从入门实现大数据综合实战，助力大家快速入行转型！</span>-->
            <!--</div>-->
            <!--<div class="content_class_start">-->
              <!--<span>4步骤 · 6门课</span>-->
              <!--<span style="margin-left: 40px"><i class="iconfont ymq-iconshoucang_shixin star_icon"></i>8848人收藏</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="12" class="col_style">-->
          <!--<div class="img_div" @click="gotocontent('ff808081704e6a9b01705121995f0000')">-->
            <!--<img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=397204868,3222677914&fm=26&gp=0.jpg" class="img_class">-->
          <!--</div>-->
          <!--<div class="class_text">-->
            <!--<h3 @click="gotocontent('ff808081704e6a9b01705121995f0000')">-->
              <!--Java从初级到高级的进阶面试路线图-->
            <!--</h3>-->
            <!--<div class="content_class">-->
              <!--<span>路线吃透面试学问，伴随身Java工程师的你一路成长，高效充分准备拿下面试offer</span>-->
            <!--</div>-->
            <!--<div class="content_class_start">-->
              <!--<span>4步骤 · 6门课</span>-->
              <!--<span style="margin-left: 40px"><i class="iconfont ymq-iconshoucang_shixin star_icon"></i>8848人收藏</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="12" class="col_style">-->
          <!--<div class="img_div" @click="gotocontent('ff808081704e6a9b01705121995f0000')">-->
            <!--<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3111860246,1925938903&fm=26&gp=0.jpg" class="img_class">-->
          <!--</div>-->
          <!--<div class="class_text">-->
            <!--<h3 @click="gotocontent('ff808081704e6a9b01705121995f0000')">-->
              <!--Go语言从入门到达人之路-->
            <!--</h3>-->
            <!--<div class="content_class">-->
              <!--<span>零基础入门Go语言，在掌握基础语法后向并发提升，并用Go去构建微服务、上手区块链项目</span>-->
            <!--</div>-->
            <!--<div class="content_class_start">-->
              <!--<span>4步骤 · 6门课</span>-->
              <!--<span style="margin-left: 40px"><i class="iconfont ymq-iconshoucang_shixin star_icon"></i>8848人收藏</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="12" class="col_style">-->
          <!--<div class="img_div" @click="gotocontent('ff808081704e6a9b01705121995f0000')">-->
            <!--<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3228285589,4093988690&fm=11&gp=0.jpg" class="img_class">-->
          <!--</div>-->
          <!--<div class="class_text">-->
            <!--<h3 @click="gotocontent('ff808081704e6a9b01705121995f0000')">-->
              <!--Python爬虫工程师养成计划-->
            <!--</h3>-->
            <!--<div class="content_class">-->
              <!--<span>路线从零起步，系统培养爬虫工程师，步步为营打造爬虫工程师的核心竞争力。</span>-->
            <!--</div>-->
            <!--<div class="content_class_start">-->
              <!--<span>4步骤 · 6门课</span>-->
              <!--<span style="margin-left: 40px"><i class="iconfont ymq-iconshoucang_shixin star_icon"></i>8848人收藏</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
        <el-col :span="12" class="col_style" v-for="(item, index) in list" :key="index">
          <div class="img_div">
            <img v-if="item.pic === null" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3111860246,1925938903&fm=26&gp=0.jpg" class="img_class" @click="gotocontent(item.id)">
            <img v-else :src="'http://'+item.pic" class="img_class" @click="gotocontent(item.id)">
          </div>
          <div class="class_text">
            <h3 @click="gotocontent(item.id)">
              {{item.name}}
            </h3>
            <div class="content_class">
              <span>{{item.description}}</span>
            </div>
            <div class="content_class_start">
              <span>4步骤 · 6门课</span>
              <span style="margin-left: 40px"><i class="iconfont ymq-iconshoucang_shixin star_icon"></i>8848人收藏</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="copyrightContainer">
      <span style="font-size: 12px">Copyright&nbsp;&nbsp;&nbsp;中科智禾教育大大数据中心   ©2019</span>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/header'
export default {
  name: 'index',
  components: { Header },
  data () {
    return {
      value1: '5',
      schna: ['http://58.119.112.11:11028/picture/ai/20191228161134.jpg', 'http://58.119.112.11:11028/picture/ai/20191227160509.jpg'],
      bannerthree: require('../../assets/bannerthree.jpg'),
      page: 1,
      size: 100,
      list: [],
      flag_class: '未登录',
      flag_state: true
    }
  },
  created () {
    if (localStorage.getItem('flag_class') === null) {
      this.flag_state = true
    } else {
      this.flag_state = false
    }
  },
  mounted () {
    this.getList()
    // console.log(this.$route.query.flag_class)
    // if (this.$route.query.flag_class === undefined) {
    //
    // } else {
    //     // localStorage.setItem('ff', '已登录')
    //     this.flag_class = '已登录'
    // }
    // if (this.$route.query.flag_class === 'yidenglu') {
    //   // localStorage.setItem('ff', '已登录')
    //   this.flag_class = '已登录'
    // }
    // if (localStorage.getItem('flag_class') === null) {
    //   console.log('ewff' + localStorage.getItem('flag_class'))
    // } else {
    //   console.log('ewff' + localStorage.getItem('flag_class'))
    //   this.flag_class = localStorage.getItem('flag_class')
    // }
  },
  methods: {
    gotoCompetition: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        console.log('我要跳转界面了')
        this.$router.push('/codingCompetition')
      }
    },
    goToCourseIndex: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        console.log('我要跳转界面了')
        this.$router.push('/coursestudy')
      }
    },
    gotoAllclasses: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        console.log('我要跳转界面了')
        this.$router.push('/allclasses')
      }
    },
    gotoVideoClass () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/videoclass')
      }
    },
    getList () {
      var url = 'http://58.119.112.14:11030/cms/user/coursePub/list/1/8'
      this.$axios.get(url).then((res) => {
        this.list = res.data.queryResult.list
      })
    },
    gotocontent (id) {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push({
          path: '/videoclass',
          query: {
            class_id: id
          }
        })
      }
    },
    gotoContentClass () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        console.log('efwfewf')
        this.$router.push('/ContentClass')
      }
    }
  }
}
</script>

<style scoped>
  .contaier {
    width: 1400px;
    margin: 0 auto;
  }
  a {
    color: #050505;
    text-decoration: none;
  }
  header{
    height: 100px;
    background-color: white;
    overflow: hidden;
  }
  nav {
    width: 1400px;
    height: 60px;
    background-color: white;
    margin: 0 auto;
    margin-top: 20px;
  }
  .logo {
    float: left;
    margin-left: 5%;
  }
  .navbar {
    float: left;
    height: 60px;
    line-height: 60px;
    margin-left: 100px;
  }
  .navbar li {
    float: left;
    list-style-type: none;
    margin-left: 150px;
    height: 60px;
    cursor: pointer;
  }
  .logo img {
    height: 50px;
    width: 150px;
  }
  .navbar li span {
    padding:0 8px;
    /*border-bottom: 1px solid red ;*/
    height: 60px;
    display: block;
    cursor: pointer;
  }
  .navbar li span:hover {
    border-bottom: 2px solid #a68b56;
    cursor: pointer;
  }
  .personal {
    float: right;
    height: 60px;
    line-height: 60px;
    margin-right: 15px;
  }
  .banner {
    height:420px;
    background-color: hotpink;
  }
  .banner-in{
    background-color: #42b983;
  }
  /*.el-carousel__item:nth-child(1) {*/
  /*  background-image: url("../../assets/lunboone.jpg");*/
  /*}*/
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .recom-products {
    margin-top: 35px;
  }
  .recom-hd {
    height: 40px;
  }
  .recom-hd h4 {
    float: left;
    color: #494949;
  }
  .recom-hd a {
    float: right;
    margin-top: 10px;
    margin-right: 30px;
    font-size: 14px;
    color: #a5a5a5;
  }
  .recom-bd {
    position: relative;
  }
  .star {
    position: absolute;
    margin-top: -23px;
    margin-left: 100px;
  }
  .recom-bd ul li {
    width:400px;
    height: 300px;
    border-radius: 20px;
    background-color: #f4f4f4;
    list-style-type: none;
    box-shadow: 0 3px 2px rgba(0,0,0,0.4) ;
    float: left;
    margin-right: 65px;
  }
  .recom-bd li h5,
  .recom-bd li p {
    padding: 0 20px 0 24px;
    font-size: 14px;
  }
  .recom-bd li h5 {
    margin-top: 12px;
    line-height: 22px;
    cursor:pointer
  }
  .recom-bd li p {
    color:#999;
  }
  .fea-class {
    margin-top: 30px;
    /*height: 300px;*/
    margin-bottom: 30px;
  }
   .fea-head h4 {
    color: #494949;
  }
   .fea-body {
     width: 1400px;
     background-color: white;
     box-shadow: 0 3px 2px rgba(0,0,0,0.4) ;;
     border-radius: 20px;
     margin-top: 15px;
     padding-bottom: 20px;
   }
   .fea-img{
     padding: 20px;
   }
   .fea-content ul li {
     list-style-type: circle;
     list-style-type: none;
     margin-top: 20px;
   }
   .fea-content p{
     font-size: 14px;
     color: #999;
   }
   .fea-content img {
     width: 30px;
     height: 30px;
     display: block;
     margin-top: -7px;
     float: left;
     margin-right: 30px
   }
   /*.fea-pic-con{*/
   /*  padding: 20px;*/
   /*  float: left;*/
   /*}*/
   /*.fea-content-con {*/
   /*  padding: 20px;*/
   /*  display: block;*/
   /*}*/

  /*// 清除浮动*/
  .clearfix:before, .clearfix:after {
    display: table;
    content: none;
  }
  .clearfix:after {
    clear: both;
  }
  .clearfix {
    *zoom: 1;
  }
  .copyrightContainer {
    text-align: center;
    margin-bottom: 20px;
  }
  .class_header {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
    font-size: 28px;
    font-weight: bold;
  }
  .img_class {
    width: 100%;
    height: 100%;
  }
  .img_class {
    transition: all 0.6s;
  }
  .img_div:hover .img_class{
    transform: scale(1.2);
    cursor: pointer;
  }
  .img_div {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    float: left;
  }
  .class_text {
    float: left;
    padding-left: 30px;
    width: 500px;
  }
  .class_text h3 {
    margin-top: 10px;
  }
  .class_text h3:hover {
    cursor: pointer;
  }
  .content_class {
    margin-top: 10px;
    font-size: 14px;
    color: #666666;
    letter-spacing: 1px;
  }
  .content_class_start {
    margin-top: 20px;
    font-size: 13px;
    color: #999999;
    font-weight: bolder;
  }
  .star_icon {
    font-size: 13px;margin-right: 2px;
  }
  .col_style {
    margin-top: 20px;
  }
  .link {
    float: right;
    font-size: 14px;
    color: #A5A5A5;
  }
  .link:hover {
    cursor: pointer;
  }
</style>
