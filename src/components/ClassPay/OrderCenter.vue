<template>
  <div class="containers-style">
    <div class="paycode_style" v-show="show_cancel_order">
      <div class="paybox">
        <div class="paybox-title">
          <div>
            <i class="iconfont ymq-icongaojingkongxin"></i>
          </div>
          <h3>取消订单之后将无法恢复，是否继续？</h3>
        </div>
        <div class="button-styles">
          <el-button type="info" class="cancel_button" @click="close_cancel">再想想</el-button>
          <el-button type="text" class="cancel_button2" @click="cancel_submit">确定</el-button>
        </div>
      </div>

    </div>
    <Header></Header>
    <div class="order-content">
      <div class="order-content-detail">
        <div class="slider">
          <h1>订单中心</h1>
        </div>
        <div class="right-main">
          <div class="right-title">
            <h2>我的订单</h2>
            <ul>
              <li :class="{action : showTag === '全部'}" @click="getALL"><a :class="{action_a : showTag === '全部'}">全部<span v-if="allOrder.length !==0" class="orders">{{allOrder.length}}</span></a></li>
              <li :class="{action : showTag === '未支付'}" @click="getNoPay"><a :class="{action_a : showTag === '未支付'}">未支付<span v-if="noPay.length !==0" class="order-nopay">{{noPay.length}}</span></a></li>
              <li :class="{action : showTag === '已支付'}" @click="getPay"><a :class="{action_a : showTag === '已支付'}">已支付 <span v-if="Payed.length !==0" class="order-successpay">{{Payed.length}}</span></a></li>
              <li :class="{action : showTag === '已失效'}" @click="getDel"><a :class="{action_a : showTag === '已失效'}">已失效<span v-if="delPay.length !==0" class="order-delpay">{{delPay.length}}</span> </a></li>
            </ul>
            <div class="clear_float"></div>
          </div>
          <div class="Order">
            <div class="Order-card" v-for="(item ,index) in changeOrder" :key="index" v-if="changeOrder.length !== 0">
              <div class="myOrder-number">
                <i class="iconfont ymq-icongongdan iconorder"></i>
                <span class="order_num">订单编号：{{item.outTradeNo}}</span>
                <span class="data">{{item.createtime | formatDate}}</span>
                <span class="data2">{{item.createtime | formatDate2}}</span>
              </div>
              <div class="myOrder-course">
                <img :src="item.headImg">
                <div class="del-box">
                  <p class="del-box-name">{{item.videoTitle}}</p>
                  <p class="price-btn-box">
                    <span class="truepay-text">实付</span>
                    <span class="course-little-price"> ￥999.00</span>
                  </p>
                </div>
                <div class="course-money">
                  <div class="type-box">
                    <span class="type-text">原价</span>
                    <span class="type-price"> ￥ 999.00</span>
                  </div>
                  <div class="type-box">
                    <span class="type-text">折扣</span>
                    <span class="type-price2">- ￥ 0.00</span>
                  </div>
                  <div class="type-box">
                    <span class="type-text">实付</span>
                    <span class="type-price3"> ￥ 999.00</span>
                  </div>
                </div>
                <div class="course-action">
                  <div class="course-action" v-if="item.state === 1">
                    已支付
                  </div>
                  <div class="course-action" v-if="item.del === 1">
                    已失效
                  </div>
                  <div class="course-action2" v-if="item.state === 0 && item.del === 0">
                    <div class="pay_now" @click="gotoPay(item.videoId, item.outTradeNo)">
                      立即支付
                    </div>
                    <a class="order-cancel" @click="cancel_order(item.outTradeNo)">取消订单</a>
                  </div>
                </div>
                <div class="clear_float">
                </div>
              </div>
            </div>
            <div class="NoOrder" v-if="changeOrder.length === 0">
              <div class="NoOrder-content">
                <div>
                  <i class="iconfont ymq-iconzanwushuju2"></i>
                </div>
                <div class="NoOrder-text">暂无订单信息</div>
              </div>
            </div>
          </div>

        </div>
        <div class="clear_float">
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header2'
  import dateFormat from '../ClassPay/Date'
    export default {
        name: "OrderCenter",
      components: {
        Header,
        Footer
      },
      data() {
          return {
            showTag: '全部',
            noPay: [],
            Payed: [],
            delPay: [],
            allOrder: [],
            changeOrder: [],
            show_cancel_order: false,
            outTradeNo: ''
          }
      },
      filters: {
        formatDate (time) {
          let date = new Date(time)
          return dateFormat.formatDate(date, 'yyyy-MM-dd')
        },
        formatDate2 (time) {
          let date = new Date(time)
          return dateFormat.formatDate(date, 'hh:mm:ss')
        }
      },
      mounted() {
          this.getALLlist()
      },
      methods: {
          getALL() {
            this.showTag = '全部'
            this.changeOrder = this.allOrder
          },
        getNoPay() {
            this.showTag = '未支付'
          this.changeOrder = this.noPay
        },
        getPay() {
            this.showTag = '已支付'
          this.changeOrder = this.Payed
        },
        getDel() {
            this.showTag = '已失效'
          this.changeOrder = this.delPay
        },
        getALLlist() {
            var url = 'https://zhongkeruitong.top/towerImg/cms/order/getAllOrderInfo?username=' + localStorage.getItem('name')
          this.$axios.get(url).then((res) => {
            if (res.data.code === 0) {
              this.noPay = res.data.data.noPay
              this.Payed = res.data.data.isPay
              this.delPay = res.data.data.delPay
              var list = []
              list = res.data.data.noPay.concat(res.data.data.isPay).concat(res.data.data.delPay)
              console.log(list)
              this.allOrder = list
              this.changeOrder = list
            }
          })
        },
        gotoPay(classId, outTradeNo) {
          this.$router.push({
            path: '/PayCenter',
            query: {
              class_id: classId,
              outTradeNo: outTradeNo
            }
          })
        },
        cancel_order(val) {
            this.show_cancel_order = true
          document.body.style.overflow = 'hidden'
          this.outTradeNo = val
        },
        cancel_submit() {
            var url = 'https://zhongkeruitong.top/towerImg/cms/order/delPayOrder?outTradeNo=' + this.outTradeNo
          this.$axios.post(url).then((res) => {
            if (res.data.code === 0) {
              this.show_cancel_order = false
              document.body.style.overflow = ''
              this.$notify({
                title: res.data.msg,
              })
              this.getALLlist()
            }else {
              alert('系统繁忙，请稍后再试！')
            }
          })
        },
        close_cancel() {
          this.show_cancel_order = false
          document.body.style.overflow = ''
        }
       }
    }
</script>

<style scoped>
  .containers-style {
    background-color: #F8FAFC;
  }
  .order-content {
    padding-top: 120px;
    margin-bottom: 100px;
  }
  .order-content-detail {
    width: 1400px;
    margin: 0 auto;
  }
  .slider {
    width: 200px;
    margin-right: 50px;
    box-sizing: border-box;
    float: left;
  }
  .slider h1 {
    padding-bottom: 24px;
    font-size: 18px;
    color: #4d555d;
    line-height: 40px;
    border-bottom: 1px solid #d9dde1;
    margin-top: 0;
  }
  .clear_float {
    clear: both;
  }
  .right-main {
    float: left;
    width: 1150px;
  }
  .right-title {
    margin-bottom: 24px;
  }
  .right-title h2 {
    margin-right: 24px;
    float: left;
    font-size: 20px;
    color: #07111b;
    line-height: 40px;
    font-weight: 700;
    margin-top: 0;
  }
  .right-title ul {
    float: left;
    list-style: none;

  }
  .right-title ul li {
    float: left;
    width: 115px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;

  }
  .right-title ul::before {
    float: left;
    margin-top: 2px;
    margin-right: 16px;
    content: '|';
    color: #d9dde1;
  }
  .right-title ul li a {
    color: #5e5e5e;
    text-decoration: none;
  }
  .right-title ul li a:hover {
    color: red;
  }
  .action {
    background-color: #4d555d;
    border-radius: 20px;
  }
  .action_a {
    color: #fff !important;
  }
  .Order {
    width: 100%;
  }
  .Order-card {
    padding: 40px;
    box-shadow: 0 2px 8px 2px rgba(0,0,0,.1);
    margin-bottom: 30px;
    background: #fff;
    border-radius: 10px;
    position: relative;
    transition: all 0.6s;
  }
  .Order-card:hover {
    box-shadow: 0 2px 8px 5px rgba(0,0,0,.1);
  }
  .myOrder-number {
    border-bottom: 1px solid #b7bbbf;
    padding-bottom: 20px;
  }
  .iconorder {
    color: #f01414;
    font-size: 18px;
    margin-right: 15px;
  }
  .order_num {
    color: #4d555d;
    font-size: 16px;
    font-weight: 700;
  }
  .data {
    color: #93999f;
    font-size: 14px;
    font-weight: 500;
    margin-left: 24px;
  }
  .data2 {
    color: #93999f;
    font-size: 14px;
    font-weight: 500;
    margin-left: 5px;
  }
  .myOrder-course {
    margin-top: 25px;
  }
  .myOrder-course img {
    width: 200px;
    height: 110px;
    float: left;
  }
  .del-box {
    width: 400px;
    float: left;
    margin-left: 10px;
    border-right: 1px solid #d9dde1;
  }
  .del-box-name {
    word-break: break-word;
    color: #07111b;
    font-size: 18px;
    margin-bottom: 10px;
    line-height: 22px;
  }
  .price-btn-box {
    font-size: 16px;
    line-height: 12px;
  }
  .truepay-text {
    color: #93999f;
    margin-right: 5px;
  }
  .course-little-price {
    color: #f01414;
  }
  .course-money {
    width: 200px;
    height: 100%;
    padding-left: 24px;
    padding-right: 24px;
    text-align: left;
    color: #93999f;
    font-size: 20px;
    box-sizing: border-box;
    line-height: 20px;
    float: left;
    border-right: 1px solid #d9dde1;
  }
  .type-box {
    margin-bottom: 5px;
  }
  .type-text {
    font-size: 16px;
    color: #93999f;

  }
  .type-price {
    text-decoration: line-through;
    font-size: 14px;
    color: #93999f;
  }
  .type-price2 {
    font-size: 14px;
    color: #93999f;
  }
  .type-price3 {
    font-size: 18px;
    color: #f01414;
  }
  .course-action {
    width: 250px;
    height: 100%;
    text-align: center;
    float: left;
  }
  .course-action {
    color: #93999f;
    margin-top: 20px;
  }
  .orders {
    /*font-size: 18px;*/
    margin-left: 5px;
  }
  .course-action2 {

  }
  .pay_now {
    margin: 0 auto;
    width: 120px;
    height: 36px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    background-color: rgba(240,20,20,.8);
    border-radius: 20px;
    line-height: 36px;
  }
  .pay_now:hover{
    border-color: #c20a0a;
    background: #c20a0a;
  }
  .order-cancel {
    color: #93999f;
    font-size: 16px;
    line-height: 12px;
    margin-top: 10px;
    cursor: pointer;
  }
  .order-nopay {
    color: red;
    margin-left: 8px;
  }
  .order-successpay {
    color: lightseagreen;
    margin-left: 8px;
  }
  .order-delpay {
    color: #e6a23c;
    margin-left: 8px;
  }
  .NoOrder {
    height: 600px;
    background-color: #fff;
    width: 100%;
    text-align: center;
    position: relative;
  }
  .NoOrder-content {
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    position: absolute;
  }
  .NoOrder-content i {
    font-size: 50px;
  }
  .NoOrder-text {
    font-size: 20px;
  }
  .paycode_style {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    position: fixed;
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
  .paybox-title {
    text-align: center;
  }
  .paybox-title i {
    font-size: 60px;
  }
  .paybox-title h3 {
    font-size: 20px;
    color: #1c1f21;
    line-height: 24px;
    font-weight: 700;
  }
  .button-styles {
    margin-top: 20px;
    float: right;
  }
  .cancel_button {
    border-radius: 20px;
  }
  .cancel_button2 {
    font-size: 20px;
    color: #1c1f21;
  }
  .cancel_button2:hover {
    color: red;
  }
</style>
