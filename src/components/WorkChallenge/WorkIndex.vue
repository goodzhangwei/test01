<template>
    <div>
      <transition name="fade">
        <div class="header-overflow" v-if="navBarFixed">
          <!-- <HeaderOne></HeaderOne> -->
          <HomeHeader2 :flagInfo="infoState"></HomeHeader2>
        </div>
      </transition>

      <div class="banner">
        <div class="banner-top">
          <!-- <HeaderOne></HeaderOne> -->
          <HomeHeader :flagInfo="infoState"></HomeHeader>
          <div class="banner-content">
            <el-carousel class="carousel-img" height="585px" @change="carouselChange">
              <el-carousel-item  v-for="(item, index) in schna" :key="index">
                <img :src="item" alt="" >
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
      <div class="jx-work">
        <div class="jx-work-cards">
          <div class="kp-title">
            <span>精选作品</span>
            <div class="hot-icon-util">
              <span class="hot-icon-util-de"><i class="iconfont ymq-iconhuanyipi"></i> 换一批</span>
              <span class="hot-icon-util-de">更多 > ></span>
            </div>

          </div>
          <div class="jx-work-content">
            <el-row :gutter="15">
              <el-col :span="6">
                <div class="js-work-card" >
                  <div class="js-work-card-img" @click="showVideo">
                    <img src="../../assets/js-work-img4.png">
                    <img src="../../assets/play_05.png"  class="play-btn">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>贪吃蛇吃果子</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="js-work-card" @click="showVideo2">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img2.png">
                    <img src="../../assets/play_05.png"  class="play-btn">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>贪吃蛇对抗挑战</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="js-work-card" @click="showVideo3">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img3.png">
                    <img src="../../assets/play_05.png"  class="play-btn">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>四色圆形螺旋图形</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="js-work-card" @click="showVideo4">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img4.png">
                    <img src="../../assets/play_05.png"  class="play-btn">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>六边六色螺旋图形</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="15" class="row-two">
              <el-col :span="6">
                <div class="js-work-card" @click="showVideo5">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img5.png">
                    <img src="../../assets/play_05.png"  class="play-btn">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>航空母舰大战外星人</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="js-work-card" @click="showVideo6">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img2.png">
                    <img src="../../assets/play_05.png"  class="play-btn">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>智能控制家居产品</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="js-work-card" @click="showVideo7">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img7.png">
                    <img src="../../assets/play_05.png"  class="play-btn">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>乐高智能机器人</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="js-work-card" @click="showVideo8">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img8.png">
                    <img src="../../assets/play_05.png"  class="play-btn">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>智能地理信息系统</span>
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
      <div class="hot-work">
        <div class="hot-work-cards">
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
                  <img src="../../assets/sz-text-img2.png" class="sz-text-img">
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
      <Footer></Footer>
      <!-- 视频弹窗 -->
      <div class="videoPop" >
        <el-dialog
          class="videoDialog"
          :title="videoTitle"
          :visible.sync="centerDialogVisible"
          width="50%"
          center>
            <video-player class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions"
            ></video-player>
          
        </el-dialog>

      </div>
    </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  //import HeaderOne from '@/components/common/header4'
  import HomeHeader from '@/components/common/header'
  import HomeHeader2 from '@/components/common/header2'
    export default {
        name: "WorkIndex",
      components: { HomeHeader,  HomeHeader2, Footer },
      data() {
          return {
            infoState: false,
            schna: [ 'https://www.zhongkeruitong.top/CCZX_image/banner5.png','https://www.zhongkeruitong.top/CCZX_image/photo2.jpg','https://www.zhongkeruitong.top/CCZX_image/photo4.jpg'],
            navBarFixed: false,
            bannerH: '',
            videoTitle: '',
            centerDialogVisible: false,
            playerOptions : {
              playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
              autoplay: true, //如果true,浏览器准备好时开始回放。
              muted: false, // 默认情况下将会消除任何音频。
              loop: false, // 导致视频一结束就重新开始。
              preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
              language: 'zh-CN',
              aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
              fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
              sources: [{
                type: "",
                src: ''//url地址          
                // src: "" //url地址
              }],
              poster: "", //你的封面地址
              // width: document.documentElement.clientWidth,
              notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
              controlBar: {
                timeDivider: true,
                durationDisplay: true,
                remainingTimeDisplay: false,
                fullscreenToggle: true  //全屏按钮
              }
            }
          }
      },
      mounted() {
        window.addEventListener('scroll', this.watchScroll)
        this.setBannerH()
        window.addEventListener('resize', () => {
          this.setBannerH()
        }, false)
        this.getInfo()
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
        gotoDetail() {
          this.$router.push('/WorkDetail')
        },
        carouselChange() {

        },
        open2() {
          this.$notify({
            title: '提示',
            message: '对不起，此模块暂未对您开放！',
            type: 'warning',
            duration: 3000
          });
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
        showVideo() {
          console.log("123")
          this.centerDialogVisible = true
          this.videoTitle = '贪吃蛇吃果子'
          this.playerOptions['sources'][0]['src'] = 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4';
        },
        showVideo2() {
          console.log("123")
          this.centerDialogVisible = true
          this.videoTitle = '贪吃蛇对抗挑战'
          this.playerOptions['sources'][0]['src'] = 'http://vjs.zencdn.net/v/oceans.mp4';
        },
        showVideo3() {
          console.log("123")
          this.centerDialogVisible = true
          this.videoTitle = '四色圆形螺旋图形'
          this.playerOptions['sources'][0]['src'] = 'https://media.w3.org/2010/05/sintel/trailer.mp4';
        },
        showVideo4() {
          console.log("123")
          this.centerDialogVisible = true
          this.videoTitle = '六边六色螺旋图形'
          this.playerOptions['sources'][0]['src'] = 'http://mirror.aarnet.edu.au/pub/TED-talks/911Mothers_2010W-480p.mp4';
        },
        showVideo5() {
          console.log("123")
          this.centerDialogVisible = true
          this.videoTitle = '航空母舰大战外星人'
          this.playerOptions['sources'][0]['src'] = 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4';
        },
        showVideo6() {
          console.log("123")
          this.centerDialogVisible = true
          this.videoTitle = '智能控制家居产品'
          this.playerOptions['sources'][0]['src'] = 'https://www.w3schools.com/html/movie.mp4';
        },
        showVideo7() {
          console.log("123")
          this.centerDialogVisible = true
          this.videoTitle = '乐高智能机器人'
          this.playerOptions['sources'][0]['src'] = 'https://player.vimeo.com/external/188355959.sd.mp4?s=e5eea0f749282013db81a7e5cd047c57e066e2b9&profile_id=164';
        },
        showVideo8() {
          console.log("123")
          this.centerDialogVisible = true
          this.videoTitle = '智能地理信息系统'
          this.playerOptions['sources'][0]['src'] = 'https://player.vimeo.com/external/188421287.sd.mp4?s=bdbf8a61c40502211971571fef384f52fe79dbbe&profile_id=164';
        },
        getInfo() {
          var url = 'https://zhongkeruitong.top/towerImg/cms/user/getUserInfo?username=' + this.username
          this.$axios.get(url).then((res) => {
            // this.$store.dispatch('changeMsg', res.data.userInfo.headimg);
            this.infoState = res.data.infoState
          })
        },
        
      }
    }
</script>

<style scoped>
  .header-overflow {
    position: fixed;width: 100%;z-index: 999;background-color: rgba(0, 0, 0, 0.7);
  }
  .banner {
    height: 965px;
  }
  .banner-top {
    height: 766px;
    background-image: url("../../assets/banner-work.png");
    background-size: 100% 100%;
    padding-top: 40px;
  }
  .banner-content {
    width: 1500px;
    margin: 40px auto;
  }
  .carousel-img {
    width: 100%;
    border-radius: 20px;
  }
  .carousel-img img {
    width: 100%;
    height: 100%;
  }
  .jx-work {
    height: 1000px;
    background-color: #f7f8fa;
  }
  .jx-work-cards {
    width: 1500px;
    margin: 0 auto;
    padding-top: 70px;
  }
  .kp-title {
    font-weight: bold;
    font-size: 36px;
    letter-spacing: 3px;
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
  .jx-work-content {
    margin-top: 55px;
  }
  .js-work-card {
    height: 355px;
    cursor: pointer;
  }
  .js-work-card-img {
    height: 220px;
    overflow: hidden;
    position: relative;
  }
  .js-work-card-img img {
    /* width: 100%;
    height: 100%; */
    /* transition: all 0.6s; */
  }
  /* .js-work-card:hover img{
    transform: scale(1.2);
  } */
  .play-btn {
    position: absolute;
    width: 100px;
    height: 100px;
    z-index: 100;
    top:30%;
    right: 30%;
  }
  .js-work-text {
    height: 135px;
    background-color: white;
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .js-title {
    font-size: 24px;
    font-family: "Microsoft YaHei";
    letter-spacing: 3px;
    font-weight: bold;
  }
  .hot-card-right-icon {
    font-size: 18px;
    margin-top: 30px;
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
  .row-two {
    margin-top: 50px;
  }
  .hot-work {
    height: 995px;
    background-image: url("../../assets/hot-work-img.png");
    background-size: 100% 100%;
  }
  .hot-work-cards {
    width: 1500px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .sz-content-title {
    color: white;
    font-size: 36px;
    font-weight: bold;
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .videoDialog {
    color: white;
  }
  .videoPop >>> .el-dialog--center  {
    padding: 0;
  }
  .videoPop >>> .el-dialog__body {
    padding: 0;
  }
  .videoPop >>> .el-dialog__header {
    background:#0a0505;
    
  }
  .videoPop >>> .el-dialog__title {
    color: white;
    /* font-size: 16px; */
    
  }
</style>
