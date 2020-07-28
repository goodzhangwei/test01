<template>
  <div>
    <Header></Header>
    <div class="content-box">
      <div class="wrap">
        <div class="content">
          <h1>Python高阶—项目实战与编程大赛</h1>
          <h4>Python高阶课程，结合前沿领域的项目实战，与大赛培训</h4>
          <el-row :gutter="60">
            <el-col :span="8">
              <div class="content-cards">
                <div class="title">
                  博弈算法对抗
                </div>
                <div class="content-img" @click="gotosuanfa">
                  <img src="../../assets/class4_bg1.jpg" class="imgs">
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="content-cards">
                <div class="title">
                  智能家居
                </div>
                <div class="content-img" @click="gotojiajv">
                  <img src="../../assets/class4_bg3.jpg" class="imgs">
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="content-cards">
                <div class="title">
                  我爱信息推送
                </div>
                <div class="content-img" @click="open3">
                  <img src="../../assets/class4_bg2.jpg" class="imgs">
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="60">
            <el-col :span="8">
              <div class="content-cards">
                <div class="title">
                  智能芯片
                </div>
                <div class="content-img" @click="open3">
                  <img src="../../assets/class4_bg4.jpg" class="imgs">
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="content-cards">
                <div class="title">
                  智能机器人
                </div>
                <div class="content-img" @click="open3">
                  <img src="../../assets/class4_bg5.jpg" class="imgs">
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="content-cards">
                <div class="title">
                  智慧交通
                </div>
                <div class="content-img" @click="open3">
                  <img src="../../assets/class4_bg6.jpg" class="imgs">
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
      open3() {
        this.$notify({
          title: '提示',
          message: '对不起，此模块暂未对您开放！',
          type: 'warning',
          duration: 3000
        });
      },
      gotojiajv() {
        this.$router.push('/ClassShowEight')
      },
      gotosuanfa() {
        this.$router.push('/ClassShowNine')
      }
    }
  }
</script>

<style scoped>
  .content-box {
    width: 100%;
    height: 1080px;
    position: relative;
    background-image: url("../../assets/class3_bg6.jpg");
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
