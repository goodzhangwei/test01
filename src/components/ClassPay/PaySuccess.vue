<template>
  <div>
    <HeaderTwo></HeaderTwo>
    <div class="content">
      <div class="text-content">
        <div class="header-text">
          <i class="el-icon-success iconsuc"></i>
          <span class="header-text-span">恭喜您，支付成功！</span>
        </div>
        <div class="content-text">
          <div>
            <span>订单金额：￥999.00</span>
          </div>
          <div>
            <span>订单编号：{{outTradeNo}}</span>
          </div>

        </div>
        <div class="button-style">
          <el-button type="success" @click="gotoHome">返回主页</el-button>
          <el-button type="warning" plain @click="gotoClass">查看课程</el-button>
        </div>

      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import HeaderTwo from '@/components/common/header2'
  import Footer from '@/components/common/footer'
    export default {
        name: "PaySuccess",
      components: { HeaderTwo, Footer },
      data() {
          return {
            outTradeNo: ''
          }
      },
      mounted() {
        this.outTradeNo = this.$route.query.outTradeNo
      },
      methods: {
        gotoHome() {
          this.$router.push('/')
        },
        gotoClass() {
          this.$router.push('/userSetting/myLesson')
        }
      }

    }
</script>

<style scoped>
  .content {
    margin-top: 100px;
  }
  .text-content {
    width: 600px;
    height: 700px;
    padding: 36px;
    margin: 0 auto;
    text-align: center;
  }
  .iconsuc {
    color: #0aa858;
    font-size: 30px;
  }
  .header-text-span {
    font-size: 30px;
  }
  .content-text {
    margin-top: 30px;
    text-align: left;
  }
  .content-text div {
    font-size: 20px;
    margin-top: 10px;
  }
  .button-style {
    margin-top: 40px;
    text-align: center;
  }
</style>
