<template>
    <div>
      <transition name="fade">
        <div class="header-overflow" v-if="navBarFixed">
          <HeaderOne></HeaderOne>
        </div>
      </transition>
      <Header></Header>
      <div class="work-content">
        <div class="work-detail">
          <div class="work-title">
            <span>
              Java基础-继承与组合
            </span>
          </div>
          <div class="work-detail-card">
            <div class="work-start-point">
              <div class="start-point-value">
                <span>8.7分</span>
              </div>
              <div class="start-point-text">
                <el-rate v-model="value1"></el-rate>
                <div class="start-point-text-con">
                  <span>3897人已评价</span>
                </div>
              </div>

            </div>
            <div>
              <el-row :gutter="35">
                <el-col :span="16">
                  <div>
                    <div class="detail-left-text">
                      <span>科技风学习编程</span>
                      <span class="detail-title-icon2"><i class="iconfont ymq-iconzitiyulan"></i> 234567</span>
                      <span class="detail-title-icon1"><i class="iconfont ymq-icondianzan_kuai"></i> 2345</span>
                    </div>
                    <div class="detail-left-img">
                      <img src="../../assets/work-detial-img.png">
                    </div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="detail-right">
                    <div class="author-tag">
                      <span>作者标签</span>
                    </div>
                    <div class="author-tags">
                      <el-tag effect="plain" size="medium" type="info" class="tag-info">PHP</el-tag>
                      <el-tag effect="plain" size="medium" type="info" class="tag-info">JS</el-tag>
                      <el-tag effect="plain" size="medium" type="info" class="tag-info">Java</el-tag>
                      <el-tag effect="plain" size="medium" type="info" class="tag-info">Python</el-tag>
                    </div>
                    <div class="author-info">
                      <div class="author-header">
                        <img src="../../assets/sz-img4.png" class="author-img">
                        <div class="author-name">
                          <div class="author-name-style">
                            <span>{{username}}</span>
                          </div>
                          <div class="author-info-style">
                            查看我的<span class="num-color">288</span>个作品
                          </div>
                        </div>
                        <el-button class="button-gz">关注</el-button>
                      </div>
                      <div class="author-info-text">
                        <div class="info-num">
                          <span>编号：356465754646</span>
                        </div>
                        <div class="work-content-info">
                          <div class="work-info-title">
                            <span>作品介绍：</span>
                          </div>
                          <div class="work-info-cont">
                            <span>作品还没添加介绍哦！</span>
                          </div>
                        </div>
                        <div class="work-sm">
                          <div class="work-info-title">
                            <span>操作说明：</span>
                          </div>
                          <div class="work-info-cont">
                            <span>作者还没添加操作说明哦！</span>
                          </div>
                          <div class="work-info-cont">
                            <span>作者还没添加操作说明哦！</span>
                          </div>
                          <div class="work-info-cont">
                            <span>作者还没添加操作说明哦！</span>
                          </div>
                        </div>
                      </div>
                      <div class="button-container">
                        <el-button class="xigai-button">修改源码</el-button>
                      </div>

                    </div>
                  </div>

                </el-col>
              </el-row>
            </div>
            <div class="work-comment">
              <el-row :gutter="35">
                <el-col :span="16">
                  <div class="work-comment-left">
                    <div class="class-start">
                      <span>为课程评分：</span>
                      <el-rate
                        class="star-rate"
                        v-model="value2"
                        :colors="colors">
                      </el-rate>
                    </div>
                    <div class="class-tags">
                      <span>难易度程度：</span>
                      <el-tag type="info" size="small" class="class-tag">太简单</el-tag>
                      <el-tag type="info" size="small" class="class-tag">简单</el-tag>
                      <el-tag type="info" size="small" class="class-tag">适中</el-tag>
                      <el-tag type="info" size="small" class="class-tag">有点难</el-tag>
                      <el-tag type="info" size="small" class="class-tag">太难了</el-tag>
                    </div>
                    <div class="class-input">
                      <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="textarea"
                        maxlength="200"
                        style="font-size: medium"
                        :autosize="{ minRows: 5, maxRows: 5}"
                        show-word-limit
                      >
                      </el-input>
                      <div class="class-button">
                        <el-button  :disabled="textarea===''" class="button-input">发表评论</el-button>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :span="8">
                  <div class="update-work">
                    <div class="update-work-header">
                      <span>上传作品</span>
                    </div>
                    <div class="update-work-text">
                      <p>
                        参与第109期Python作品大奖赛，上传作品赢大奖，并有专业老师点评作品。
                      </p>
                    </div>
                    <div class="update-button">
                      <el-button class="update-button-style">上传作品</el-button>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <div class="xg-work">
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
                <div class="js-work-card">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img1.png">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>自然语言处理</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <img src="../../assets/sz-img4.png">
                      <span class="name-card">admin</span>
                      <div class="name-icon">
                        <span class="name-icon1"><i class="iconfont ymq-icondianzan_kuai"></i> 2345</span>
                        <span class="name-icon2"><i class="iconfont ymq-iconzitiyulan"></i> 234567</span>
                      </div>
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
                      <img src="../../assets/sz-img4.png">
                      <span class="name-card">admin</span>
                      <div class="name-icon">
                        <span class="name-icon1"><i class="iconfont ymq-icondianzan_kuai"></i> 2345</span>
                        <span class="name-icon2"><i class="iconfont ymq-iconzitiyulan"></i> 234567</span>
                      </div>
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
                      <img src="../../assets/sz-img4.png">
                      <span class="name-card">admin</span>
                      <div class="name-icon">
                        <span class="name-icon1"><i class="iconfont ymq-icondianzan_kuai"></i> 2345</span>
                        <span class="name-icon2"><i class="iconfont ymq-iconzitiyulan"></i> 234567</span>
                      </div>
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
                      <img src="../../assets/sz-img4.png">
                      <span class="name-card">admin</span>
                      <div class="name-icon">
                        <span class="name-icon1"><i class="iconfont ymq-icondianzan_kuai"></i> 2345</span>
                        <span class="name-icon2"><i class="iconfont ymq-iconzitiyulan"></i> 234567</span>
                      </div>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="15" class="row-two">
              <el-col :span="6">
                <div class="js-work-card">
                  <div class="js-work-card-img">
                    <img src="../../assets/js-work-img5.png">
                  </div>
                  <div class="js-work-text">
                    <div class="js-title">
                      <span>自然语言处理</span>
                    </div>
                    <div class="hot-card-right-icon">
                      <img src="../../assets/sz-img4.png">
                      <span class="name-card">admin</span>
                      <div class="name-icon">
                        <span class="name-icon1"><i class="iconfont ymq-icondianzan_kuai"></i> 2345</span>
                        <span class="name-icon2"><i class="iconfont ymq-iconzitiyulan"></i> 234567</span>
                      </div>
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
                      <img src="../../assets/sz-img4.png">
                      <span class="name-card">admin</span>
                      <div class="name-icon">
                        <span class="name-icon1"><i class="iconfont ymq-icondianzan_kuai"></i> 2345</span>
                        <span class="name-icon2"><i class="iconfont ymq-iconzitiyulan"></i> 234567</span>
                      </div>
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
                      <img src="../../assets/sz-img4.png">
                      <span class="name-card">admin</span>
                      <div class="name-icon">
                        <span class="name-icon1"><i class="iconfont ymq-icondianzan_kuai"></i> 2345</span>
                        <span class="name-icon2"><i class="iconfont ymq-iconzitiyulan"></i> 234567</span>
                      </div>
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
                      <img src="../../assets/sz-img4.png">
                      <span class="name-card">admin</span>
                      <div class="name-icon">
                        <span class="name-icon1"><i class="iconfont ymq-icondianzan_kuai"></i> 2345</span>
                        <span class="name-icon2"><i class="iconfont ymq-iconzitiyulan"></i> 234567</span>
                      </div>
                    </div>
                  </div>
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
  import Header from '@/components/common/header3'
  import Footer from '@/components/common/footer'
  import HeaderOne from '@/components/common/header4'
    export default {
        name: "WorkDetail",
      components: {
        Header,
        Footer,
        HeaderOne
      },
      data() {
          return {
            username: '',
            value2: null,
            colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
            textarea: '',
            value1: 5,
            navBarFixed: false,
            bannerH: ''
          }
      },
      mounted() {
        this.username = localStorage.getItem('name')
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
          //console.log(scrollTop)
        },
      }
    }
</script>

<style scoped>
  .header-overflow {
    position: fixed;width: 100%;z-index: 999;background-color: rgba(0, 0, 0, 0.7);
  }
  .work-content {
    height: 1510px;
  }
  .work-detail {
    width: 1500px;
    margin: 0 auto;
    padding-top: 70px;
  }
  .work-title {
    font-size: 30px;
    font-family: "Microsoft YaHei";
    color: #898989;
    letter-spacing: 3px;
  }
  .work-detail-card {
    margin-top: 25px;
    height: 1290px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    padding: 35px;
    position: relative;
  }
  .work-start-point {
    padding: 10px 20px 10px 20px;
    width: 255px;
    height: 55px;
    background-color: #fdf6e1;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    position: absolute;
    top: 35px;
    right: 0;
    z-index: 10;
  }
  .start-point-value {
    float: left;
    color: #FF9900;
    font-size: 27px;
  }
  .start-point-text {
    float: left;
    margin-left: 10px;
  }
  .start-point-text-con {
    font-size: 14px;
    color: #898989;
    margin-left: 10px;
  }
  .detail-left-text {
    font-size: 24px;
    font-family: "Microsoft YaHei";
    color: #898989;
    letter-spacing: 3px;
  }
  .detail-title-icon1 {
    float: right;
    font-size: 16px;
    letter-spacing: 0;
    color: #c1c2c3;
  }
  .detail-title-icon1 i {
    color: #c53520;
  }
  .detail-title-icon2 {
    float: right;
    font-size: 16px;
    letter-spacing: 0;
    margin-left: 30px;
    color: #c1c2c3;
  }
  .detail-title-icon2 i {
    color: #78deb7;
  }
  .detail-left-img {
    margin-top: 35px;
    height: 560px;
  }
  .detail-left-img img{
    width: 100%;
    height: 100%;
  }
  .detail-right {
    margin-top: 55px;
    height: 560px;
    padding-top: 20px;
  }
  .author-tag {
    font-size: 18px;
  }
  .author-tags {
    margin-top: 10px;
  }
  .tag-info {
    margin-right: 10px;
  }
  .author-info {
    margin-top: 45px;
  }
  .author-header {
    height: 65px;
  }
  .author-img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: #46b8b0 solid 1px;
    float: left;
  }
  .author-name {
    float: left;
    font-size: 18px;
    margin-left: 10px;
    margin-top: 10px;
    letter-spacing: 2px;
  }
  .author-name-style {
    color: #7a7e84;
  }
  .author-info-style {
    color: #ada8a7;
  }
  .num-color {
    color: #68dc77;
  }
  .button-gz {
    float: right;
    background-color: #5dccc4;
    color: white;
    margin-top: 10px;
  }
  .author-info-text {
    margin-top: 20px;
    margin-left: 74px;
  }
  .info-num {
    font-size: 18px;
  }
  .work-content-info {
    margin-top: 20px;
  }
  .work-info-title {
    font-size: 20px;
  }
  .work-info-cont {
    font-size: 18px;
    color: #ada8a7;
    margin-top: 10px;
  }
  .work-sm {
    margin-top: 20px;
  }
  .button-container {
    width: 300px;margin: 30px auto;

  }
  .xigai-button {
    width: 100%;
    background-color: #5dccc4;
    color: white;
    margin-top: 10px;
    height: 50px;
    letter-spacing: 3px;
    font-size: 20px;
  }
  .work-comment {
    height: 422px;
    background-color: #fafafa;
    margin-top: 90px;
  }
  .work-comment-left {
    padding: 40px;
  }
  .class-start {
    font-size: 24px;
    /*font-family: "Microsoft YaHei";*/
  }
  .class-start span {
    float: left;
    margin-right: 20px;

  }
  .star-rate {
    float: left;
    margin-top: 5px;
  }
  .class-tags {
    margin-top: 60px;
    font-size: 24px;
  }
  .class-tag {
    margin-left: 20px;
  }
  .class-input {
    margin-top: 50px;
  }
  .class-button {
    width: 100%;margin-top: 20px
  }
  .button-input {
    float: right;
    background-color: #5dccc4;
    color: white;;
  }
  .update-work {
    width: 385px;
    height: 270px;
    border-radius: 10px;
    border: #DCDFE6 solid 1px;
    margin-top: 140px;
    padding: 10px;
  }
  .update-work-header {
    padding: 10px;
    border-bottom: #DCDFE6 solid 1px;
    font-size: 22px;
  }
  .update-work-text {
    padding: 10px;
    margin-top: 20px;
    font-size: 20px;
    color: #949494;
  }
  .update-button {
    padding: 10px;
  }
  .update-button-style {
    width: 100%;
    background-color: #f3b143;
    height: 50px;
    font-size: 18px;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-top: 10px;
  }
  .xg-work {
    height: 1025px;
    background-color: #f7f8fa;
  }
  .jx-work-cards {
    width: 1500px;
    margin: 0 auto;
    padding-top: 80px;
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
    padding-top: 10px;
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
  .name-card {
    float: left;
    margin-left: 10px;
    margin-top: 5px;
  }
  .name-icon {
    float: right;
    font-size: 16px;
    color: #898989;
    margin-top: 5px;
  }
  .name-icon1 {
    margin-right: 20px;
  }
  .name-icon1 i{
    color: #c53520;
  }
  .name-icon2 i {
    color: #78deb7;
  }
  .hot-card-right-icon img {
    width: 35px;
    height: 35px;
    float: left;
    border-radius: 50%;
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
