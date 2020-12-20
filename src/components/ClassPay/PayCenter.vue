<template>
  <div class="containers-style">
    <div class="paycode_style" v-show="code_show">
      <div class="paybox">
        <h1>微信支付 ￥999.00</h1>
        <img :src="Paycode"/>
        <p>使用微信扫描二维码付款</p>
      </div>

    </div>
    <Header></Header>
    <div>
      <div class="cart-header">
        <div class="cart-header-warp">
          <h1>支付中心</h1>
        </div>
      </div>
      <div class="cart-body">
        <div class="title-box">
          <p class="goods-info-title">
            <span>订单：{{outTradeNo}}</span>
            <span class="shouqi" @click="gotoshowClass" v-if="showClass">收起</span>
            <span class="shouqi" @click="gotoshowClass" v-else>详情</span>
          </p>
        </div>
        <div class="detail-box" v-if="showClass">
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
          <div class="pay_text1">
            <span>支付方式</span>
          </div>
          <div class="pay_ul">
            <ul class="pay-method">
              <li class="wxpay li-style" @click="selectwxPay" :class="{tagstext : showPay === '微信'}">
                <div class="bottomright" :class="{righttext : showPay === '微信'}">
                  <div class="triangle">
                  </div>
                  <i class="iconfont ymq-iconduigou iconbottom" ></i>
                </div>
              </li>
              <li class="zhifubao li-style" @click="selectzfbPay" :class="{tagstext : showPay === '支付宝'}">
                <div class="bottomright"  :class="{righttext : showPay === '支付宝'}">
                  <div class="triangle">
                  </div>
                  <i class="iconfont ymq-iconduigou iconbottom" ></i>
                </div>
              </li>
            </ul>
            <div class="clearfloat"></div>
          </div>

        </div>
        <div>
          <div class="warning">
            <i class="iconfont ymq-icontixingshixin"></i>
            <span>已为你锁定课程席位，请在 {{m +':' +s}} 内完成支付即可</span>

          </div>
          <div class="summary">
            <div>
              <span class="pay_text2">应付金额：</span>
              <span class="pay_text3">￥ 999.00</span>
            </div>
            <div class="pay-summary" @click="pay_submit">
              立即支付
            </div>
          </div>
          <div class="clearfloat"></div>
        </div>
      </div>
    </div>
    <!--<el-dialog-->
      <!--:visible.sync="dialogVisible"-->
      <!--width="30%">-->
      <!--<img :src="Paycode" width="100" height="100"/>-->
    <!--</el-dialog>-->

    <Footer class="footers"></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header2'
  export default {
    name: "PayCenter",
    components: {
      Header,
      Footer
    },
    data() {
      return {
        classId: '',
        list: {},
        endTime: '',
        showPay: '微信',
        showClass: true,
        imageurl: '',
        Paycode: '',
        dialogVisible: false,
        code_show: false,
        checkCode: '',
        outTradeNo: '',
        maver: '',
        day: '',
        hour: '',
        m: '',
        s: ''
      }
    },
    mounted() {
      this.getClassList()

    },
    methods: {
      getClassList() {
        this.classId = this.$route.query.class_id
        this.outTradeNo = this.$route.query.outTradeNo
        var url = 'https://www.zhongkeruitong.top/towerImg/cms/course/courseview/' + this.classId + '/' + localStorage.getItem('name')
        this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
          this.list = res.data
          this.imageurl = res.data.coursePic.pic
          // this.countDown(res.data.endTime)
          this.endTime = res.data.endTime
          this.countDown()

        })
      },
      selectwxPay() {
        this.showPay = '微信'
      },
      selectzfbPay() {
        this.showPay = '支付宝'
      },
      gotoshowClass() {
        this.showClass = !this.showClass
      },
      pay_submit() {
        if (this.showPay === '微信') {
          var url = 'https://zhongkeruitong.top/towerImg/cms/order/weiXinPay?out_trade_no=' + this.outTradeNo
          // this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
          //   console.log(res)
          // })
          this.Paycode = url
          this.code_show = true
          if (this.code_show === true) {
            document.body.style.overflow = 'hidden'
          }
          // this.checkPay()
          this.maver = setInterval(() => {
            this.checkPay()
          }, 1000)
          // if (this.checkCode === 1) {
          //   clearInterval(maver)
          //   this.code_show = false
          //   // this.$message.success('支付成功！')
          // }
        }
      },
      checkPay() {
        var url = 'https://zhongkeruitong.top/towerImg/cms/order/orderPayState?out_trade_no=' + this.outTradeNo
        this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
          this.checkCode = res.data.code
          console.log(res.data.msg)
          console.log(this.checkCode)
          if (this.checkCode === 1) {
            this.code_show = false
            document.body.style.overflow = ''
            clearInterval(this.maver)
            this.PaySuccessPage()
          }
        })
      },
      PaySuccessPage() {
        this.$router.push({
          path: '/PaySuccess',
          query: {
            outTradeNo: this.outTradeNo,
            classId: this.classId
          }
        })
      },
      countDown() {
        var nowtime = new Date()
        // console.log(nowtime.getTime())
        var lefttime = parseInt((this.endTime - nowtime.getTime()) / 1000);
        console.log(lefttime)
        var d = parseInt(lefttime / (24*60*60))
        var h = parseInt(lefttime / (60 * 60) % 24);
        var m = parseInt(lefttime / 60 % 60);
        var s = parseInt(lefttime % 60);
        d = this.addZero(d)
        h = this.addZero(h);
        m = this.addZero(m);
        s = this.addZero(s);
        this.day = d
        this.hour = h
        this.m = m
        this.s = s
        setTimeout(this.countDown, 1000)
      },
      addZero(i) {
        return i < 10 ? "0" + i: i + "";
      }
    },
    destroyed() {
      clearInterval(this.maver)
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
    margin-top: 30px;
    border-top: 1px solid #d9dde1;
    border-bottom: 1px solid #d9dde1;
    padding: 30px;

  }
  .pay_text1 {
    font-size: 20px;
  }
  .pay_text2 {
    font-size: 20px;
  }
  .pay_text3 {
    color: #f01414;
    font-size: 36px;
    font-weight: 700;
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
  .shouqi {
    float: right;
    color: #f01414;
    font-size: 20px;
    cursor: pointer;
  }
  .pay_ul {

  }
  .pay_ul ul {
    list-style: none;
    display: block;
  }
  .pay_ul li {
    float: left;
    margin-right: 30px;
    width: 250px;
    height: 110px;
    border: 3px solid #f3f5f7;
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    background-color: #f3f5f7;
    position: relative;
    background-image: url("../../assets/pay_s.png");
  }
  .li-style:hover {
    border-color: #f01414!important;
  }
  .li-style:hover .bottomright {
    opacity: 1;
  }
  .clearfloat {
    clear: both;
  }
  .wxpay {
    background-position: 40px -535px;
    background-repeat: no-repeat;

  }
  .zhifubao {
    background-position: 50px -385px;
    background-repeat: no-repeat;
  }
  .bottomright {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
  .triangle {
    width: 0;
    height: 0;
    border-bottom: 30px solid red;
    border-left: 30px solid transparent;
  }
  .iconbottom {
    position: absolute;
    right: -1px;
    bottom: 0;
    color: #fff;
    font-size: 16px;
  }
  .tagstext {
    border-color: #f01414!important;
  }
  .righttext {
    opacity: 1;
  }
  .warning {
    font-size: 18px;
    color: #f90;
    padding-top: 50px;
    line-height: 20px;
    float: left;
  }
  .summary {
    float: right;
    padding-top: 50px;
  }
  .pay-summary {
    width: 180px;
    height: 50px;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    text-align: center;
    border-radius: 2px;
    line-height: 50px;
    cursor: pointer;
    background-color: #f04646;
    float: right;
    margin-top: 30px;
  }
  .footers {
    margin-top: 800px;
  }
  .pay-summary:hover {
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
  .paycontent {
    position: relative;
  }
  .paybox {
    /*width: 400px;*/
    /*height: 450px;*/
    background-color: #fff;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
    box-shadow: 0 0 10px 10px rgba(0,0,0,0.1);
    padding: 36px;
  }
  .paybox h1{
    color: #545c63;
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    text-align: center;
  }
  .paybox img {
    width: 350px;
    height: 350px;
  }
  .paybox p{
    font-size: 14px;
    color: #545c63;
    line-height: 18px;
    text-align: center;
  }
</style>
