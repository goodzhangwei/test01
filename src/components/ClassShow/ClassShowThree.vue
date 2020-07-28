<template>
  <div>
    <Header></Header>
    <div class="content-box">
      <div class="wrap">
        <div class="content">
          <h1>Python专题系列</h1>
          <h4>Python人工智能专题课程，针对单一领域深入剖析</h4>
          <el-row :gutter="60">
            <el-col :span="8">
              <div class="content-cards">
                <div class="title">
                  人脸识别
                </div>
                <div class="content-img" @click="gotoAIFace">
                  <img src="../../assets/class_bg11.jpg" class="imgs">
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="content-cards">
                <div class="title">
                  数据爬虫
                </div>
                <div class="content-img" @click="gotopachong">
                  <img src="../../assets/class3_bg3.png" class="imgs">
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="content-cards">
                <div class="title">
                  数据分析
                </div>
                <div class="content-img" @click="gotoshujv">
                  <img src="../../assets/class3_bg5.png" class="imgs">
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
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header5'
    export default {
        name: "ClassShowThree",
      components: {
        Header,
        Footer
      },
      methods: {
        gotoAIFace() {
          this.$router.push('/ClassShowFive')
        },
        gotopachong() {
          this.$router.push('/ClassShowSix')
        },
        open3() {
          this.$notify({
            title: '提示',
            message: '对不起，此模块暂未对您开放！',
            type: 'warning',
            duration: 3000
          });
        },
        gotoshujv() {
          this.$router.push('/ClassShowSeven')
        }
      }
    }
</script>

<style scoped>
  .content-box {
    width: 100%;
    height: 680px;
    position: relative;
    background-image: url("../../assets/class3_bg1.png");
    background-size: cover;
    background-position: center;
  }
  .wrap {
    height: 100%;
    width: 1400px;
    margin: 0 auto;
  }
  .content {
    position: relative;
    padding-top: 84px;
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
  }
  .content h1 {
    font-size: 40px;
    color: #ffffff;
    text-align: center;
    line-height: 48px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .content h4 {
    font-family: "PingFang SC";
    font-size: 20px;
    color: #ffffff;
    text-align: center;
    line-height: 24px;
  }
  .content-cards {
    margin-top: 40px;
  }
  .content-cards .title {
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 24px;
  }
  .content-img {
    width: 100%;
    height: 248px;
    border-radius: 20px;
    overflow: hidden;
    margin-top: 34px;
    cursor: pointer;
    transition: all 0.6s;
  }
  .content-img img {
    width: 100%;
    height: 100%;
  }
  .imgs {
    transition: all 0.6s;
  }
  .content-img:hover {
    transform: translateY(-10px);
  }
  .content-img:hover .imgs {
    transform: scale(1.2);
  }
</style>
