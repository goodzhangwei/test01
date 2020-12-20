<template>
  <div class="containers-style">
    <div class="paycode_style" v-show="show_pay_order">
      <div class="paybox">
        <div class="paybox-title">
          <h3>此课程已存在未支付订单，请移步订单中心完成支付或取消未支付订单！</h3>
        </div>
        <div>
          <div class="submit-btn2" @click="gotoOrderCenter">
            移步订单中心
          </div>
        </div>
        <!--<div class="button-styles">-->
          <!--<el-button type="info" class="cancel_button">再想想</el-button>-->
          <!--<el-button type="text" class="cancel_button2" @click="cancel_submit">确定</el-button>-->
        <!--</div>-->
      </div>

    </div>
    <Header></Header>
    <div class="cart-header">
      <div class="cart-header-warp">
        <h1>确认订单</h1>
      </div>
    </div>
    <div class="cart-body">
      <div class="title-box">
        <p class="goods-info-title">商品信息</p>
      </div>
      <div class="detail-box">
        <div class="detail-box-content">
          <img :src="imageurl"/>
          <div class="right-text">
            <span class="right-text-con">{{list.courseBase.name + '-' + list.teachplanNode.pname}}</span>
          </div>
          <div class="paymoney">
            ￥ 999.00
          </div>
        </div>
      </div>
      <div class="pay_action">
        <span class="pay_text1">
          商品总金额： ￥ 999.00
        </span>
        <span class="pay_text2">
          应付：
        </span>
        <span class="pay_text3">
          ￥ 999.00
        </span>
        <div class="submit-btn" @click="gotoPay">
          提交订单
        </div>
      </div>
    </div>
    <!--<div>-->
      <!--{{day+hour+':'+m+':'+s}}-->
    <!--</div>-->
    <Footer style="margin-top: 500px"></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header2'
    export default {
        name: "ClassPay",
      components: {
        Header,
        Footer
      },
      data() {
          return {
            classId: '',
            list: {},
            imageurl: '',
            show_pay_order: false,
            // day: '',
            // hour: '',
            // m: '',
            // s: ''
          }
      },
      mounted() {
        this.getClassList()
        // this.countDown()

      },
      methods: {
        getClassList() {
          this.classId = this.$route.query.class_id
          var url = 'https://www.zhongkeruitong.top/towerImg/cms/course/courseview/' + this.classId + '/' + localStorage.getItem('name')
          this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
            this.list = res.data
            this.imageurl = res.data.coursePic.pic
            if (res.data.status === 0) {
              this.show_pay_order = true
            }
          })
        },
        gotoPay() {
          var url = 'https://zhongkeruitong.top/towerImg/cms/order/addPayOrder?username=' + localStorage.getItem('name') + '&video_id=' +this.classId
          this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
            if (res.data.code === 0) {
              this.$router.push({
                path: '/PayCenter',
                query: {
                  class_id: this.classId,
                  outTradeNo: res.data.data.outTradeNo
                }
              })
            } else {
              this.$message.success('系统繁忙，请稍后再试！')
            }

          })

        },
        gotoOrderCenter() {
          this.$router.push('/OrderCenter')
        },
        // countDown() {
        //   var nowtime = new Date()
        //   console.log(nowtime.getTime())
        //   var endtime = new Date("2020/07/8,12:30:00");
        //   var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
        //   console.log(lefttime)
        //   var d = parseInt(lefttime / (24*60*60))
        //   var h = parseInt(lefttime / (60 * 60) % 24);
        //   var m = parseInt(lefttime / 60 % 60);
        //   var s = parseInt(lefttime % 60);
        //   d = this.addZero(d)
        //   h = this.addZero(h);
        //   m = this.addZero(m);
        //   s = this.addZero(s);
        //   this.day = d
        //   this.hour = h
        //   this.m = m
        //   this.s = s
        //   setTimeout(this.countDown, 1000)
        // },
        // addZero(i) {
        //   return i < 10 ? "0" + i: i + "";
        // }
      }
    }
</script>

<style scoped>
  .containers-style {
    position: relative;
  }
  .cart-header {
    height: 260px;
    background-color: #e3e6e9;
    background-image: url("../../assets/cart-header-bg.jpg");
    position: relative;
  }
  .cart-header-warp {
    /*width: 1200px;*/
    /*height: 220px;*/
    position: absolute;
    top: 50%;
    left: 300px;
    transform: translateY(-50%);
  }
  .cart-header-warp h1 {
    font-size: 40px;
    line-height: 115px;
    margin-right: 25px;
    color: #07111b;
    font-weight: 200;
  }
  .cart-body {
    width: 1400px;
    padding: 0 36px 32px;
    background-color: #fff;
    margin-top: -40px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 8px 16px 0 rgba(7,17,27,.1);
    border-radius: 15px;
    box-sizing: border-box;
    position: absolute;
  }
  .title-box {
    padding-top: 40px;
    padding-bottom: 24px;
  }
  .goods-info-title {
    margin-left: 20px;
    color: #07111b;
    font-size: 20px;
    line-height: 16px;
  }
  .detail-box {
    width: 100%;
    padding: 30px;
    background-color: #f3f5f7;
  }
  .detail-box-content {
    height: 120px;
    clear: both;
    position: relative;
  }
  .detail-box-content img {
    width: 240px;
    height: 100%;
    float: left;
  }
  .right-text {
    float: left;
    padding-left: 30px;
    padding-top: 10px;
  }
  .right-text-con {
    font-size: 24px;
    line-height: 24px;
    color: #07111b;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .paymoney {
    position: absolute;
    top: 50%;
    right: 250px;
    transform: translateY(-50%);
    color: #f01414;
    font-size: 20px;
  }
  .pay_action {
    margin-top: 60px;
    border-top: 1px solid #d9dde1;
    border-bottom: 1px solid #d9dde1;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .pay_text1 {
    font-size: 20px;
  }
  .pay_text2 {
    font-size: 20px;
    margin-left: 30px;
  }
  .pay_text3 {
    color: #f01414;
    font-size: 36px;
    font-weight: 700;
  }
  .submit-btn2 {
    width: 148px;
    height: 48px;
    margin: 20px auto;
    line-height: 48px;
    font-size: 16px;
    border-radius: 24px;
    background-color: #f01414;
    color: #fff;
    text-align: center;
    cursor: pointer;
  }
  .submit-btn2:hover {
    border-color: #c20a0a;
    background: #c20a0a;
  }
  .submit-btn {
    width: 148px;
    height: 48px;
    line-height: 48px;
    font-size: 20px;
    border-radius: 24px;
    background-color: #f01414;
    color: #fff;
    text-align: center;
    float: right;
    cursor: pointer;
  }
  .submit-btn:hover {
    border-color: #c20a0a;
    background: #c20a0a;
  }
  .paycode_style {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    position: fixed;
  }
  .paybox {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    box-shadow: 0 0 10px 10px rgba(0,0,0,0.1);
    padding: 36px;
  }
  .paybox-title {
    text-align: center;
  }
  .paybox-title h3 {
    font-size: 20px;
    color: #1c1f21;
    line-height: 24px;
    font-weight: 700;
  }
</style>
