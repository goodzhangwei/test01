<template>
  <div class="app_container">
    <transition name="fade">
      <div  v-if="navBarFixed" class="header-show">
        <HeaderTwo :flags = flag_class class="header" :flagInfo="infoState"></HeaderTwo>
      </div>
    </transition>

    <Header :flags = flag_class class="header" :flagInfo="infoState"></Header>

    <div >
      <el-carousel class="carousel-img" height="665px" @change="carouselChange">
        <el-carousel-item  v-for="(item, index) in schna" :key="index" class="carousel-item" @click.native="itemClick(item, index)">
          <img :src="item" alt="" >
          <div class="header-text" v-show="index === 0">
            <h1>首届泰安市青少年编程与智能设计大赛获奖公告</h1>
            <span class="header-button">立即查看</span>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content-tag">
      <div @click="gotopszn">
        <span>AI系列课程</span>
      </div>
      <!-- <div @click="gotose">
        <span>Python少儿趣味编程</span>
      </div> -->
      <div @click="gotoStudy">
        <span>研学项目</span>
      </div>
      <div @click="gotocomOne">
        <span>师资培训</span>
      </div>
      <div @click="gotoBisai">
        <span>编程比赛</span>
      </div>
      <div @click="gotozaixian">
        <span>在线教学</span>
      </div>
      <div @click="gotozhibo">
        <span>资源云平台</span>
      </div>
    </div> 
    <div class="xl-course" id="zaixian">
      <div class="content-xl">
        <div class="xl-title">
          <span>系列学习课程</span>
        </div>
        <div class="xl-tag">
         <span class="xl-tags">
              Python编程
            </span>
          <span class="xl-tags">
            智能机器人编程
            </span>
          <span class="xl-tags">
             硬件编程
            </span>
          <span class="xl-tags">
             数学算法编程
            </span>
          <span class="xl-tags">
             青少年编程能力测试
            </span>
          <span class="xl-tags-more">查看更多课程 > ></span>
        </div>
        <div class="xl-course-card">
          <el-row :gutter="30">
            <el-col :span="6">
              <div class="xl-card" @click="gotoLeGo">
                <div class="xl-card-img xl-card-img1"></div>
                <div class="xl-card-text">
                  <div class="xl-card-title">
                    <span>Python入门兴趣编程</span>
                  </div>
                  <div class="xl-card-footer">
                    <span class="xl-footer-tag">适中</span>
                    <div class="xl-footer-icon">
                      <i class="iconfont ymq-iconuser xl-iconfont"></i>
                      <span class="xl-footer-text1">4-6年级</span>
                      <!--<span> | </span>-->
                      <span class="xl-footer-text2">13人评价</span>
                    </div>

                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="xl-card" @click="gotoPy">
                <div class="xl-card-img xl-card-img2"></div>
                <div class="xl-card-text">
                  <div class="xl-card-title">
                    <span>Python进阶—编程与逻辑能力训练</span>
                  </div>
                  <div class="xl-card-footer">
                    <span class="xl-footer-tag">适中</span>
                    <div class="xl-footer-icon">
                      <i class="iconfont ymq-iconuser xl-iconfont"></i>
                      <span class="xl-footer-text1">6-9年级</span>
                      <!--<span> | </span>-->
                      <span class="xl-footer-text2">136人评价</span>
                    </div>

                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="xl-card" @click="gotoPyAIface">
                <div class="xl-card-img xl-card-img3"></div>
                <div class="xl-card-text">
                  <div class="xl-card-title">
                    <span>Python专题—人脸识别等</span>
                  </div>
                  <div class="xl-card-footer">
                    <span class="xl-footer-tag">适中</span>
                    <div class="xl-footer-icon">
                      <i class="iconfont ymq-iconuser xl-iconfont"></i>
                      <span class="xl-footer-text1">中学</span>
                      <!--<span> | </span>-->
                      <span class="xl-footer-text2">67人评价</span>
                    </div>

                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="xl-card" @click="gotoZhineng">
                <div class="xl-card-img xl-card-img4"></div>
                <div class="xl-card-text">
                  <div class="xl-card-title">
                    <span>Python高阶—项目实战与编程大赛</span>
                  </div>
                  <div class="xl-card-footer">
                    <span class="xl-footer-tag">适中</span>
                    <div class="xl-footer-icon">
                      <i class="iconfont ymq-iconuser xl-iconfont"></i>
                      <span class="xl-footer-text1">中学</span>
                      <!--<span> | </span>-->
                      <span class="xl-footer-text2">163人评价</span>
                    </div>

                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="detailCont">
      <div class="detail-content">
        <div class="detail-head-text" @click="gotoTen">
          <h1 >Python人工智能编程--师资培训与课程研讨班</h1>
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
                  在实战案例中穿插知识点
                  <br>
                  在动手操作中融会贯通
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
                   专家分享
                  </span>
                </div>
                <div class="box-content">
                  与产业界的资深专家
                  <br>
                  交流分享
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-icon" @click="gotoTen">
          <i class="iconfont ymq-iconlogout"></i>
          <span>查看课程详情>>></span>

        </div>
      </div>
    </div>
    <div class="hot-course">
      <div class="content-hot">
        <div class="kp-title">
          <span>热门课程</span>
          <div class="hot-icon-util">
            <span class="hot-icon-util-de"><i class="iconfont ymq-iconhuanyipi"></i> 换一批</span>
            <span class="hot-icon-util-de">更多 > ></span>
          </div>

        </div>
        <div class="hot-content">
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="hot-card hot-card-left">
                <div class="hot-card-left-text1">
                  <span>热门课程</span>
                </div>
                <div class="hot-card-left-text2">
                  <span>共1970节课</span>
                </div>
                <div class="hot-card-left-text3">
                  <a>查看更多教程>></a>
                </div>
              </div>
            </el-col>
            <el-col :span="5" v-for="(item, index) in list" :key="index">
              <div class="hot-card">
                <div class="hot-card-img" @click="gotocontent(item.id)">
                  <img :src="imgList[index]" class="hot-img-style">
                </div>
                <div class="hot-card-right-text">
                  <div class="hot-card-right-title" @click="gotocontent(item.id)">
                    <span>{{item.name.substring(0, 10)}}</span>
                  </div>
                  <div class="hot-card-right-icon">
                    <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                    <span class="hot-icon-right">4步骤·6门课</span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="kp-con">
      <div class="content-kp">
        <div class="kp-title">
          <span>AI大讲堂</span>
        </div>
        <div class="kp-tag">
          <div class="kp-tag-card kp-bg1" @click="gotoAIkepu">
            <div class="kp-text-title">
              <span>AI&机器人</span>
            </div>
            <div class="kp-text-con">
              <span>从未接触过编程的爱好者</span>
            </div>

            <img src="../../assets/circle1-icon.png" class="tag-img">
          </div>
          <div class="kp-tag-card kp-bg2" @click="gotoERtong">
            <div class="kp-text-title">
              <span>儿童编程思维</span>
            </div>
            <div class="kp-text-con">
              <div>
                <span>迈入AI时代学习</span>
              </div>
              <div>
                <span>的启蒙指导</span>
              </div>
            </div>

            <img src="../../assets/circle2-icon.png" class="tag-img2">
          </div>
          <div class="kp-tag-card kp-bg3" @click="gotoPyAI">
            <div class="kp-text-title">
              <span>Python编程</span>
            </div>
            <div class="kp-text-con">
              <span>人工智能领域的重要工具</span>
            </div>

            <img src="../../assets/circle3-icon.png" class="tag-img">
          </div>
          <div class="kp-tag-card kp-bg4" @click="gotoYingjian">
            <div class="kp-text-title">
              <span>硬件编程</span>
            </div>
            <div class="kp-text-con">
              <span>软硬件结合编程新体验</span>
            </div>

            <img src="../../assets/circle4-icon.png" class="tag-img">
          </div>
          <div class="kp-tag-card kp-bg5" @click="gotoRenlian">
            <div class="kp-text-title">
              <span>人脸识别</span>
            </div>
            <div class="kp-text-con">
              <div>
                <span>深度学习&图像处理</span>
              </div>
            </div>

            <img src="../../assets/circle5-icon.png" class="tag-img2">
          </div>
        </div>
      </div>
    </div>
    <div class="zhichang-con"id="pszn">
      <div class="content-zc">
        <div class="kp-title">
          <span>编程认知体验</span>
        </div>
        <div class="zc-tag">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="zc-card zc-bg1" @click="gotoqinsho">
                <div class="zc-card-title">
                  <span>青少年编程课程</span>
                </div>
                <div class="zc-card-con">
                  <span>浓缩从工程师到CTO的10年成长经验</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="zc-card zc-bg2" @click="gotocomOne">
                <div class="zc-card-title">
                  <span>博弈算法挑战赛</span>
                </div>
                <div class="zc-card-con">
                  <div>
                    <span>高含金量+全周期</span>
                  </div>
                  <div>
                    <span>+高水平大赛</span>
                  </div>

                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="zc-card zc-bg3" @click="gotoPyjc">
                <div class="zc-card-title">
                  <span>Python数据科学基础</span>
                </div>
                <div class="zc-card-con">
                  <span>跟随千万级项目从0-100一起成长</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="live-course" id="zhibo">
      <div class="live-content">
        <div class="kp-title">
          <span>热门直播</span>
          <div class="hot-icon-util">
            <span class="hot-icon-util-de"><i class="iconfont ymq-iconhuanyipi"></i> 换一批</span>
            <span class="hot-icon-util-de">更多 > ></span>
          </div>

        </div>
        <div class="content-live">
          <el-row :gutter="15">
            <el-col :span="6">
              <div class="live-card" @click="gotoVideoLive">
                <div class="live-card-img">
                  <img src="../../assets/live-card-img-bg1.png" class="live-card-img-bg">
                  <img src="../../assets/live-card-img-bg2.png" class="live-card-img-bg2">
                </div>
                <div class="live-card-text">
                  <div class="live-card-title">
                    <span>自然语言处理</span>
                  </div>
                  <div class="live-card-icon">
                    <span class="live-icon-text"><i class="el-icon-star-on"></i>8456人收藏</span>
                    <span class="live-icon-right">初级练习</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="live-card" @click="open2">
                <div class="live-card-img">
                  <img src="../../assets/live-card-img2.png" class="live-card-img-bg">
                </div>
                <div class="live-card-text">
                  <div class="live-card-title">
                    <span>Linux入门</span>
                  </div>
                  <div class="live-card-icon">
                    <span class="live-icon-text"><i class="el-icon-star-on"></i>6742人收藏</span>
                    <span class="live-icon-right2">中级拔高</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="live-card" @click="open2">
                <div class="live-card-img">
                  <img src="../../assets/live-card-img3.png" class="live-card-img-bg">
                </div>
                <div class="live-card-text">
                  <div class="live-card-title">
                    <span>大数据技术</span>
                  </div>
                  <div class="live-card-icon">
                    <span class="live-icon-text"><i class="el-icon-star-on"></i>9742人收藏</span>
                    <span class="live-icon-right3">新手入门</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="live-card" @click="open2">
                <div class="live-card-img">
                  <img src="../../assets/live-card-img4.png" class="live-card-img-bg">
                </div>
                <div class="live-card-text">
                  <div class="live-card-title">
                    <span>Python数据分析</span>
                  </div>
                  <div class="live-card-icon">
                    <span class="live-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                    <span class="live-icon-right3">新手入门</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6" v-for="(item, index) in LiveList" :key="index" v-if="LiveList.length !== 0">
              <div class="live-card" @click="gotoVideoLive(item)">
                <div class="live-card-img">
                  <img src="../../assets/live-card-img4.png" class="live-card-img-bg">
                </div>
                <div class="live-card-text">
                  <div class="live-card-title">
                    <span>{{item.schoolname}}</span>
                  </div>
                  <div class="live-card-icon">
                    <span class="live-icon-text"><i class="el-icon-star-on"></i>8765人收藏</span>
                    <span class="live-icon-right3">新手入门</span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="sz-project">
      <div class="sz-top" id="shaoer">
        <div class="sz-content">
          <div class="sz-content-title">
            <span>实战项目</span>
          </div>
          <div class="sz-content-card">
            <el-row>
              <el-col :span="6">
                <div class="sz-card sz-card-img1" @click="gotoWorkOne">
                  <img src="../../assets/sz-text1-img1.png" class="sz-text-img">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img2" @click="gotoWorkTwo">
                  <img src="../../assets/sz-text1-img2.png" class="sz-text-img">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img3" @click="gotoWorkThree">
                  <img src="../../assets/sz-text1-img3.png" class="sz-text-img3">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img4" @click="gotoWorkFour">
                  <img src="../../assets/sz-text1-img4.png" class="sz-text-img3">
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="sz-card sz-card-img5" @click="gotoWorkFive">
                  <img src="../../assets/sz-text1-img5.png" class="sz-text-img">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img6" @click="gotoWorkSix">
                  <img src="../../assets/sz-text1-img6.png" class="sz-text-img3">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img7" @click="gotoWorkSeven">
                  <img src="../../assets/sz-text1-img7.png" class="sz-text-img7">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img8" @click="gotoWorkEight">
                  <img src="../../assets/sz-text1-img8.png" class="sz-text-img8">
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <el-backtop :bottom="60" class="backtop-style">
      <div class="backtop-text">
        <span>返回顶部</span>
      </div>
      <i class="el-icon-caret-top backtop-icon" ></i>

    </el-backtop>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import HeaderTwo from '@/components/common/header2'
import Footer from '@/components/common/footer'
import $ from 'jquery'
export default {
  name: 'index',
  components: { Header, HeaderTwo, Footer },
  data () {
    return {
      value1: '5',
      navBarFixed: false,
      bannerH: '',
      schna: [ 'https://www.zhongkeruitong.top/CCZX_image/newBanner2.jpg','https://www.zhongkeruitong.top/CCZX_image/banner5.png','https://www.zhongkeruitong.top/CCZX_image/photo2.jpg'],
      bannerthree: require('../../assets/bannerthree.jpg'),
      page: 1,
      size: 100,
      list: [],
      infoState: false,
      flag_class: '未登录',
      flag_state: true,
      bannerStyle: 'background-banner',
      LiveList: [],
      imgList: ['https://www.zhongkeruitong.top/CCZX_image/hot-card-img1.png','https://www.zhongkeruitong.top/CCZX_image/hot-card-img2.png','https://www.zhongkeruitong.top/CCZX_image/hot-card-img3.png', 'https://www.zhongkeruitong.top/CCZX_image/hot-card-img4.png']

    }
  },
  created () {
    if (localStorage.getItem('flag_class') === null) {
      this.flag_state = true
    } else {
      this.flag_state = false
    }
  },
  computed: {
    username (){
      if (localStorage.getItem('name') === null) {
        return 'ceshi'
      } else {
        return localStorage.getItem('name')
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.watchScroll)
    this.setBannerH()
    window.addEventListener('resize', () => {
      this.setBannerH()
    }, false)
    this.getInfo()
    this.getList()
    this.getLive()
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
    setBannerH(){
      this.bannerH = document.body.clientWidth / 4
    },
    watchScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 49) {
        this.navBarFixed = true

      } else {
        this.navBarFixed = false
      }
      //console.log(scrollTop)
    },
    itemClick(item, index) {
      if (index === 0) {
        this.$router.push('/noticePage')
      }
    },
    gotoCompetition: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        console.log('我要跳转界面了')
        // if (this.infoState === false) {
        //   this.openInfo()
        // } else {
        //   this.$router.push('/codingCompetition')
        // }
        this.$router.push('/codingCompetition')

      }
    },
    goToCourseIndex: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        // if (this.infoState === false) {
        //   this.openInfo()
        // } else {
        //   this.$router.push('/coursestudy')
        // }
        this.$router.push('/coursestudy')

      }
    },
    gotoVideoLive () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        // if (this.infoState === false) {
        //   this.openInfo()
        // } else {
        //   this.$router.push('/VideoLive')
        // }
        this.$router.push({
          path: '/VideoLive',
          query: {
            username: localStorage.getItem('name')
          }
        })
      }
    },
    gotoAllclasses: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        // if (this.infoState === false) {
        //   this.openInfo()
        // } else {
        //   this.$router.push('/allclasses')
        // }
        this.$router.push('/allclasses')

      }
    },
    gotoVideoClass () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        // if (this.infoState === false) {
        //   this.openInfo()
        // } else {
        //
        // }
        this.$router.push('/videoclass')

      }
    },
    getList () {
      // var url = 'http://58.119.112.14:11020/cms/user/coursePub/list/1/8'
      var url = 'https://www.zhongkeruitong.top/towerImg/cms/user/coursePub/mylist/2/10?username=' + this.username
      this.$axios.get(url).then((res) => {
        this.list = res.data.queryResult.list.slice(2, 6)
      })
    },
    gotoWorkOne() {
      this.$router.push('/WorkOne')
    },
    gotoWorkTwo () {
      this.$router.push('/WorkTwo')
    },
    gotoWorkThree () {
      this.$router.push('/WorkThree')
    },
    gotoWorkFour () {
      this.$router.push('/WorkFour')
    },
    gotoWorkFive () {
      this.$router.push('/WorkFive')
    },
    gotoWorkSix () {
      this.$router.push('/WorkSix')
    },
    gotoWorkSeven () {
      this.$router.push('/WorkSeven')
    },
    gotoWorkEight () {
      this.$router.push('/WorkEight')
    },
    open2() {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$notify({
          title: '提示',
          message: '对不起，此模块暂未对您开放！',
          type: 'warning',
          duration: 3000
        });
      }
    },
    open3() {
      this.$notify({
        title: '提示',
        message: '对不起，此模块暂未对您开放！',
        type: 'warning',
        duration: 3000
      });
    },
    gotocontent (id) {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        // if (this.infoState === false) {
        //   this.openInfo()
        // } else {
        //
        // }
        this.$router.push({
          path: '/videoclass',
          query: {
            class_id: id
          }
        })

      }
    },
    gotoPy() {
      // this.$router.push({
      //   path: '/videoclass',
      //   query: {
      //     class_id: 'ff808081704e6a9b01705121995f0000'
      //   }
      // })
      this.$router.push('/ClassShowOne')
    },
    gotoPyAI() {
      // this.$router.push({
      //   path: '/videoclass',
      //   query: {
      //     class_id: 'ff80808172a7363b0172a7a6ec5d00a3'
      //   }
      // })
      // if (this.flag_state === true) {
      //   this.$router.push('/ClassShowEleven')
      // } else {
      //   // if (this.infoState === false) {
      //   //   this.openInfo()
      //   // } else {
      //   //   this.$router.push('/ClassShowEleven')
      //   // }
      //   this.$router.push('/ClassShowEleven')
      // }
      this.$router.push('/ClassShowEleven')
      // if (this.infoState === false) {
      //   this.openInfo()
      // } else {
      //   this.$router.push('/ClassShowEleven')
      // }
    },
    gotoPyjc() {
      this.$router.push({
        path: '/videoclass',
        query: {
          class_id: 'ff80808172a7363b0172a7f6d8830108'
        }
      })
    },
    gotoPyAIface() {
      // this.$router.push({
      //   path: '/videoclass',
      //   query: {
      //     class_id: 'ff80808172a7363b0172a7ad263100b2'
      //   }
      // })
      // this.open2()
      this.$router.push('/ClassShowThree')
    },
    gotoqinsho() {
      this.$router.push({
        path: '/videoclass',
        query: {
          class_id: 'ff80808172a7363b0172a88a98c70192'
        }
      })
    },

    gotobs() {
      var url = 'http://istpa.cas.cn/acme/ssgz/201909/t20190912_4552494.html'
      window.open(url)
    },
    gotoLeGo() {
      // this.$router.push({
      //   path: '/videoclass',
      //   query: {
      //     class_id: 'ff80808172a7363b0172a8765d35017c'
      //   }
      // })
      this.$router.push('/ClassShowTwo')
    },
    gotoTen() {
      this.$router.push('/ClassShowTen')
    },
    gotoYingjian() {
      this.$router.push({
        path: '/videoclass',
        query: {
          class_id: 'ff80808172a7363b0172a7bc0a9f00d5'
        }
      })
    },
    gotoRenlian() {
      this.$router.push({
        path: '/videoclass',
        query: {
          class_id: 'ff80808172a7363b0172a88f020d0199'
        }
      })
    },
    gotoAIkepu() {
      this.$router.push({
        path: '/videoclass',
        query: {
          class_id: 'ff80808172a7363b0172a892f36401a0'
        }
      })
    },
    gotozaixian () {
      if (this.flag_state === true) {
        alert('网站提供教师录制视频，学生观看视频的在线学习方式，请先注册登录！')
      } else {
        setTimeout(() => {
          var hshight = $($('#zaixian')).offset().top
          $('html,body').animate({
            scrollTop: hshight
          }, 700)
        })
      }
    },
    gotose() {
      setTimeout(() => {
        var hshight = $($('#shaoer')).offset().top
        $('html,body').animate({
          scrollTop: hshight
        }, 700)
      })
    },
    gotoStudy() {
      this.$router.push('/StudyProject')
    },
    gotopszn() {
      setTimeout(() => {
        var hshight = $($('#pszn')).offset().top
        $('html,body').animate({
          scrollTop: hshight
        }, 700)
      })
    },
    gotozhibo() {
      if (this.flag_state === true) {
        alert('网站提供教师直播，学生观看直播的在线学习方式，请先注册登录！')
      } else {
        setTimeout(() => {
          var hshight = $($('#zhibo')).offset().top
          $('html,body').animate({
            scrollTop: hshight
          }, 700)
        })
      }
    },
    gotoERtong() {
      // this.$router.push({
      //   path: '/videoclass',
      //   query: {
      //     class_id: 'ff80808172a7363b0172a7c51bbe00df'
      //   }
      // })
      this.$router.push('/ClassShowTwelve')

    },
    gotocomOne() {
      this.$router.push('/competitionOne')
    },
    gotocomTwo () {
      this.$router.push('/competitionTwo')
    },
    gotoBisai() {
      this.$router.push('/competition')
    },
    gotoZhineng() {
      // this.$router.push({
      //   path: '/videoclass',
      //   query: {
      //     class_id: 'ff80808172a7363b0172a7dfcc8a00f1'
      //   }
      // })
      // this.open2()
      this.$router.push('/ClassShowFour')
    },
    gotoContentClass () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        console.log('efwfewf')
        this.$router.push('/ContentClass')
      }
    },
    carouselChange(data) {
      if (data === 0) {
        this.bannerStyle = 'background-banner'
      } else if (data === 1) {
        this.bannerStyle = 'background-banner1'
      } else if (data === 2) {
        this.bannerStyle = 'background-banner2'
      }
    },
    getLive() {
      var url = 'https://www.zhongkeruitong.top/towerImg/cms/video/getVideos?username=' + this.username
      this.$axios.get(url).then((res) => {
        if (res.data.queryResult.total === 0) {
          this.LiveList = []
        } else {
          this.LiveList = res.data.queryResult.list
        }
      })
    },
    goToLive(item) {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        var url = 'https://www.zhongkeruitong.top/towerImg/cms/video/pullVideo?username=' + item.username
        this.$axios.get(url).then((res) => {
          if (res.data.code === undefined) {
            this.$router.push({
              query: { username: item.username},
              path: '/VideoLive'
            })
          } else  {
            alert('暂未开播')
          }
        })

      }
    },
    getInfo() {
      if (this.flag_state === false) {
        var url = 'https://zhongkeruitong.top/towerImg/cms/user/getUserInfo?username=' + this.username
        this.$axios.get(url).then((res) => {
          // this.$store.dispatch('changeMsg', res.data.userInfo.headimg);
          localStorage.setItem('headimg', res.data.userInfo.headimg)
          localStorage.setItem('city', res.data.userInfo.city)
          this.infoState = res.data.infoState
          if (res.data.infoState === false) {
            setTimeout(() => {
              this.openInfo()
            }, 1000)
          }
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
  .content-tag {
    display: flex;
    width: 100%;
    height: 100px;
  }
  .content-tag div {
    flex: 1;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
    font-weight: bold;
    /*letter-spacing: 3px;*/
  }
  .content-tag div:hover {
    color: #16bcb4;
    cursor: pointer;
    font-weight: bold;
  }
  .carousel-img {
    width: 100%;
    /*height: 665px;*/
  }
  .carousel-img img {
    width: 100%;
    height: 100%;
  }
  .header-show {
    position: fixed;width: 100%;z-index: 999;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .kp-con {
    background-color: #f7f8fa;
    padding-top: 50px;
    height: 615px;
  }
  .content-kp {
    width: 1500px;
    /*height: 100px;*/
    margin: 0 auto;
  }
  .kp-title {
    /*font-weight: bold;*/
    font-size: 36px;
    /*letter-spacing: 3px;*/
  }
  .kp-tag {
    margin-top: 30px;
    height: 406px;
    width: 100%;
    display: flex;
  }
  .kp-tag-card {
    flex: 1;
    margin-right: 10px;
    border-radius: 10px;
    background-size: 100% 100%;
    text-align: center;
    transition: all 0.5s;
    cursor: pointer;
  }
  .kp-tag-card:hover {
    transform: scale(1.2);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5)
  }
  .kp-text-title {
    color: white;
    font-weight: bold;
    font-size: 30px;
    margin-top: 44px;
    /*letter-spacing: 4px;*/
  }
  .kp-text-con {
    color: white;
    /*font-weight: bold;*/
    margin-top: 22px;
    font-size: 18px;
    letter-spacing: 3px;
  }
  .tag-img2 {
    height: 205px;
    margin-top: 16px;
  }
  .tag-img {
    /*width: 215px;*/
    height: 205px;
    margin-top: 34px;
  }

  .kp-bg1 {
    background-image: url("../../assets/circle1.png");
  }
  .kp-bg2 {
    background-image: url("../../assets/circle2.png");
  }
  .kp-bg3 {
    background-image: url("../../assets/circle3.png");
  }
  .kp-bg4 {
    background-image: url("../../assets/circle4.png");
  }
  .kp-bg5 {
    background-image: url("../../assets/circle5.png");
  }
  .zhichang-con {
    height: 418px;
    width: 100%;
    padding-top: 50px;
  }
  .content-zc {
    width: 1500px;
    margin: 0 auto;
  }
  .zc-tag {
    margin-top: 30px;
    width: 100%;
    /*height: 214px;*/
  }
  .zc-card {
    height: 214px;
    background-size: 100% 100%;
    text-align: center;
    padding-top: 40px;
    cursor: pointer;
    transition: all 0.6s;
  }
  .zc-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 5px;

  }
  .zc-card-title {
    color: white;
    font-weight: bold;
    font-size: 36px;
  }
  .zc-card-con {
    color: white;
    font-size: 24px;
    margin-top: 20px;
  }
  .zc-bg1 {
    background-image: url("../../assets/zc-bg1.png");
  }
  .zc-bg2 {
    background-image: url("../../assets/zc-bg2.png");
  }
  .zc-bg3 {
    background-image: url("../../assets/zc-bg3.png");
  }
  .xl-course {
    height: 760px;
    width: 100%;
    background-color: #3dc5a4;
    margin-top: 23px;
    padding-top: 50px;
  }
  .content-xl {
    width: 1500px;
    margin: 0 auto;
  }
  .xl-title {
    font-size: 36px;
    /*font-weight: bold;*/
    /*letter-spacing: 3px;*/
    color: white;
  }
  .xl-tag {
    margin-top: 30px;
    /*height: 86px;*/
    background-color: #d2fff4;
    padding: 30px 18px 30px 18px;
  }
  .xl-tags {
    padding: 10px 20px 10px 20px;
    background-color: #77c5c2;
    color: white;
    text-align: center;
    border-radius: 5px;
    border: #249094 solid 1px;
    margin-left: 20px;
    letter-spacing: 2px;
    font-size: 18px;
  }
  .xl-tags-more {
    font-size: 24px;
    float: right;
    margin-right: 50px;
    letter-spacing: 3px;
    color: #636363;
  }
  .xl-course-card {
    margin-top: 55px;

  }
  .xl-card {
    height: 411px;
    transition: all 0.6s;
    cursor: pointer;
  }
  .xl-card:hover {
    transform: scale(1.2);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5)

  }
  .xl-card-img {
    height: 270px;
    background-size: 100% 100%;
  }
  .xl-card-text {
    padding: 20px;
    background-color: white;
    height: 141px;
  }
  .xl-card-img1 {

    background-image: url("../../assets/class_bg10.jpg");
  }
  .xl-card-img2 {
    background-image: url("../../assets/Python.jpg");
  }
  .xl-card-img3 {
    background-image: url("../../assets/class_bg11.jpg");
  }
  .xl-card-img4 {
    background-image: url("../../assets/class_bg12.jpg");
  }
  .xl-card-title {
    font-size: 20px;
    font-weight: bold;
    color: #333333;
    letter-spacing: 2px;
  }
  .xl-card-footer {
    margin-top: 20px;
  }
  .xl-footer-tag {
    padding: 5px 10px 5px 10px;
    color: white;
    background-color: #f4ab00;
    font-size: 16px;
    /*letter-spacing: 3px;*/
    border-radius: 5px;
  }
  .xl-footer-icon {
    float: right;
  }
  .xl-iconfont {
    font-size: 20px;
    color: #bababa;
  }
  .xl-footer-text1 {
    font-size: 16px;
    color: #bababa;
  }
  .xl-footer-text2 {
    font-size: 16px;
    color: #3dc5a4;
    letter-spacing: 2px;
  }
  .hot-course {
    width: 100%;
    height: 434px;
    margin-bottom: 20px;
  }
  .content-hot {
    width: 1500px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .hot-icon-util {
    float: right;
  }
  .hot-icon-util-de {
    padding: 5px 10px 5px 10px;
    border: #dfdfdf solid 1px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: normal;
    cursor: pointer;
  }
  .hot-icon-util-de i {
    font-size: 14px;
  }
  .hot-icon-util-de:hover {
    background-color: #16bcb4;
    color: white;
  }
  .hot-content {
    margin-top: 36px;
  }
  .hot-card {
    height: 290px;
  }
  .hot-card-left {
    background-image: url("../../assets/hot-card-left.png");
    background-size: 100% 100%;
    text-align: center;
    padding: 10px 30px 10px 30px;
  }
  .hot-card-left-text1 {
    color: white;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-top: 30px;
  }
  .hot-card-left-text2 {
    color: white;
    /*font-weight: bold;*/
    font-size: 26px;
    /*letter-spacing: 3px;*/
    margin-top: 35px;
  }
  .hot-card-left-text3 {
    /*font-weight: bold;*/
    font-size: 22px;
    /*letter-spacing: 3px;*/
    margin-top: 35px;
  }
  .hot-card-left-text3 a {
    color: white;
    cursor: pointer;
  }
  .hot-card-img {
    height: 179px;
    overflow: hidden;

  }
  .hot-img-style {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.6s;
  }
  .hot-card:hover .hot-img-style {
    transform: scale(1.2);
  }
  .hot-card-right-text {
    height: 111px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    background-color: #f7f8fa;
  }
  .hot-card-right-title {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;

  }
  .hot-card-right-icon {
    font-size: 18px;
    margin-top: 20px;
  }
  .hot-icon-text {
    color: #959493;
    font-weight: bold;
  }
  .hot-icon-text i {
    color: #d81e06;
    margin-right: 10px;
  }
  .hot-icon-right {
    float: right;
    color: #fe6549;
    font-weight: bold;
  }
  .live-course {
    padding-bottom: 50px;
  }
  .live-content {
    width: 1500px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .content-live {
    margin-top: 36px;
  }
  .live-card {
    height: 372px;
  }
  .live-card-img {
    height: 240px;
    overflow: hidden;
    position: relative;
  }
  .live-card-img-bg {
    width: 100%;
    height: 100%;
    transition: all 0.6s;
    cursor: pointer;
  }
  .live-card:hover .live-card-img-bg{
    transform: scale(1.2);
  }
  .live-card-img-bg2 {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .live-card-text {
    height: 132px;
    background-color: #f7f8fa;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 25px;
  }
  .live-card-title {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .live-card-icon {
    margin-top: 20px;
    font-size: 18px;
  }
  .live-icon-text {
    color: #959493;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .live-card-text i {
    color: #d81e06;
    margin-right: 10px;
  }
  .live-icon-right {
    float: right;
    color: #fe6549;
    font-weight: bold;
  }
  .live-icon-right2 {
    float: right;
    color: #f9ad3c;
    font-weight: bold;
  }
  .live-icon-right3 {
    float: right;
    color: #3dc5a4;
    font-weight: bold;
  }
  .sz-project {
    width: 100%;
    height: 983px;
    margin-top: 10px;

  }
  .sz-top {
    height: 502px;
    width: 100%;
    background-image: url("../../assets/sz-bg.png");
    background-size: 100% 100%;
    /*position: relative;*/

  }
  .sz-content {
    width: 1500px;
    padding-top: 40px;
    /*height: 983px;*/
    /*position: absolute;*/
    /*left: 50%;*/
    /*transform: translateX(-50%);*/
    margin: 0 auto;
  }
  .sz-content-title {
    color: white;
    font-size: 36px;
    /*font-weight: bold;*/
    letter-spacing: 3px;
  }
  .sz-content-card {
    margin-top: 39px;
  }
  .sz-card {
    height: 373px;
    background-size: 100% 100%;
    text-align: center;
    cursor: pointer;
    transition: all 0.6s;
  }
  .sz-card:hover {
    transform: scale(1.2);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5)
  }
  .sz-card-img1 {
    background-image: url("../../assets/sz-img1.png");
  }
  .sz-card-img2 {
    background-image: url("../../assets/sz-img2.png");
  }
  .sz-card-img3 {
    background-image: url("../../assets/sz-img3.png");
  }
  .sz-card-img4 {
    background-image: url("../../assets/sz-img4.png");
  }
  .sz-card-img5 {
    background-image: url("../../assets/sz-img5.png");
  }
  .sz-card-img1 {
    background-image: url("../../assets/sz-img1.png");
  }
  .sz-card-img6 {
    background-image: url("../../assets/sz-img6.png");
  }
  .sz-card-img7 {
    background-image: url("../../assets/sz-img7.png");
  }
  .sz-card-img8 {
    background-image: url("../../assets/sz-img8.png");
  }
  .sz-text-img {
    width: 240px;
    margin-top: 40px;
  }
  .sz-text-img3 {
    margin-top: 40px;
    width: 280px;
  }
  .sz-text-img7 {
    margin-top: 40px;
    width: 220px;
  }
  .sz-text-img8 {
    margin-top: 40px;
    width: 230px;
  }
  .sz-text-style {
    font-size: 16px;
    color: #8937b2;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .el-message-box__content {
    font-size: 18px;
  }
  .backtop-style {
    width: 45px;height: 45px;text-align: center;padding: 5px;
  }
  .backtop-text {
    font-size: 14px;
    display: none;
  }
  .backtop-icon {
    font-size: 24px;

  }
  .backtop-style:hover .backtop-text{
    display: block;
  }
  .backtop-style:hover .backtop-icon {
    display: none;
  }
  .detailCont {
    height: 760px;
    /*margin-top: 70px;*/
    width: 100%;
    background-image: url("../../assets/section0.jpg");
    background-size: cover;
    background-position: center;
  }

  .detail-content {
    height: 100%;
    width: 1400px;
    margin: 0 auto;
    padding-top: 64px;
    box-sizing: border-box;
    position: relative;
  }
  .detail-icon {
    position: absolute;
    right: 50px;
    text-align: center;
    top: 200px;
    color: #fff;
    cursor: pointer;
    font-size: 20px;
  }
  .detail-icon:hover {
    color: #e6a23c;
  }
  .detail-head-text {
    text-align: center;
    transition: all 0.6s;
    cursor: pointer;
  }
  .detail-head-text h1 {
    font-size: 40px;
    color: #fff;
    font-weight: 700;
    line-height: 48px;
    margin-bottom: 10px;


  }
  .detail-head-text:hover {
    transform: translateY(-10px);
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
  .carousel-item:hover {
    cursor: pointer;
  }
  .header-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 100%;
    padding: 50px 0 50px 0;
    background-color: rgba(0,0,0,0.4);
  }
  .header-text h1{
    width: 100%;
    color: white;
    font-size: 50px;
  }
  .header-button {
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
  .header-button:hover {
    transform: translateY(-10px);
    border-color: #c20a0a;
    background-color: #c20a0a;
  }
</style>
