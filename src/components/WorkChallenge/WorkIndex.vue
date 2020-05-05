<template>
    <div>
      <transition name="fade">
        <div class="header-overflow" v-if="navBarFixed">
          <HeaderOne></HeaderOne>
        </div>
      </transition>

      <div class="banner">
        <div class="banner-top">
          <HeaderOne></HeaderOne>
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
                <div class="js-work-card" @click="gotoDetail">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img1.png">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>自然语言处理</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="js-work-card">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img2.png">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>图像处理</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="js-work-card">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img3.png">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>大数据技术</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="js-work-card">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img4.png">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>python数据分析</span>
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
                <div class="js-work-card" @click="gotoDetail">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img5.png">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>自然语言处理</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="js-work-card">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img2.png">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>图像处理</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="js-work-card">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img7.png">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>大数据技术</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                      <span class="hot-icon-right">4步骤·6门课</span>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div class="js-work-card">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img8.png">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>python数据分析</span>
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
                <div class="sz-card sz-card-img1">
                  <img src="../../assets/sz-text-img1.png" class="sz-text-img">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img2">
                  <img src="../../assets/sz-text-img2.png" class="sz-text-img">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img3">
                  <img src="../../assets/sz-text-img3.png" class="sz-text-img3">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img4">
                  <img src="../../assets/sz-text-img4.png" class="sz-text-img3">
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="sz-card sz-card-img5">
                  <img src="../../assets/sz-text-img5.png" class="sz-text-img">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img6">
                  <img src="../../assets/sz-text-img6.png" class="sz-text-img3">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img7">
                  <img src="../../assets/sz-text-img7.png" class="sz-text-img3">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img8">
                  <img src="../../assets/sz-text-img8.png" class="sz-text-img8">
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import HeaderOne from '@/components/common/header4'
    export default {
        name: "WorkIndex",
      components: { HeaderOne, Footer },
      data() {
          return {
            schna: [ 'http://58.119.112.12/CCZX_image/banner5.png','http://58.119.112.12/CCZX_image/photo2.jpg','http://58.119.112.12/CCZX_image/photo4.jpg'],
            navBarFixed: false,
            bannerH: ''
          }
      },
      mounted() {
        window.addEventListener('scroll', this.watchScroll)
        this.setBannerH()
        window.addEventListener('resize', () => {
          this.setBannerH()
        }, false)
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
          console.log(scrollTop)
        },
        gotoDetail() {
          this.$router.push('/WorkDetail')
        },
        carouselChange() {

        }
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
  }
  .js-work-card-img img {
    width: 100%;
    height: 100%;
    transition: all 0.6s;
  }
  .js-work-card:hover img{
    transform: scale(1.2);
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
    width: 260px;
  }
  .sz-text-img8 {
    margin-top: 40px;
    width: 280px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
