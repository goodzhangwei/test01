<template>
  <div class="container_live">
    <Header class="header">
    </Header>
    <div class="video_container">
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="video_cantainer_style">
            <div class="video_header">
              <div class="video-header-child">
                <div class="img_header">
                  <img src="http://imgsrc.baidu.com/forum/w=580/sign=a9714efaaf86c91708035231f93c70c6/ddd3ab59d109b3dea0394e6ac4bf6c81810a4c48.jpg">
                </div>
                <div class="video_header_title">
                  <div>
                    <el-tag effect="plain" size="mini">
                      直播
                    </el-tag>
                    <span class="zbcs">直播测试</span>
                    <i class="iconfont ymq-iconteam icon_video">
                      <span class="zbcs-ispan">5637</span>
                    </i>
                    <i class="iconfont ymq-iconshare1 icon_video">
                      <span class="zbcs-ispan">分享</span>
                    </i>
                    <i class="iconfont ymq-iconjubao icon_video">
                      <span class="zbcs-ispan">举报</span>
                    </i>
                  </div>
                  <div class="icon-marg">
                    <svg t="1586586185896" class="icon icon-svg1" viewBox="0 0 1127 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="237236" width="200" height="200"><path d="M893.415774 1024H231.63386a101.90667 101.90667 0 0 1-101.906669-101.90667v-499.342682a101.90667 101.90667 0 0 1 101.906669-101.90667h661.781914a101.90667 101.90667 0 0 1 101.90667 101.90667v499.342682a101.90667 101.90667 0 0 1-101.90667 101.90667z" fill="#FB705B" p-id="237237"></path><path d="M17.833667 226.682215h1090.401367a18.037481 18.037481 0 0 1 17.833667 17.833668v212.271593a18.037481 18.037481 0 0 1-17.833667 17.833667H17.833667A18.037481 18.037481 0 0 1 0 456.787476V244.515883a17.731761 17.731761 0 0 1 17.833667-17.833668z" fill="#F03E41" p-id="237238"></path><path d="M257.008621 161.258133s-129.319564-24.967134-154.796231-33.629201l45.858001 65.627896-82.442496 32.610134a1378.287709 1378.287709 0 0 0 400.595119 5.095334l-100.174256-45.450375c-0.61144-0.509533-109.040137-24.253787-109.040137-24.253788zM349.641784 4.729489a130.644351 130.644351 0 0 0-96.70943 11.209733l-17.833667 113.52403a136.860658 136.860658 0 0 1 101.29523-17.833667 445.23024 445.23024 0 0 1 160.808725 118.619364v-77.347163S438.81012 20.525022 349.641784 4.729489z m634.267113 187.813992l45.858001-65.627895c-25.986201 8.662067-154.796231 33.629201-154.796231 33.629201l-108.93823 23.948067-100.276163 45.858002a1357.702562 1357.702562 0 0 0 400.595119-5.095334z m-87.945456-63.589762L878.5374 15.939222a130.644351 130.644351 0 0 0-96.709429-11.209733c-89.066429 15.795534-147.662765 148.172298-147.662765 148.172297v77.347163a450.631294 450.631294 0 0 1 160.910632-119.128897 136.860658 136.860658 0 0 1 101.29523 17.833667z" fill="#FFCA3E" p-id="237239"></path><path d="M489.253922 141.692053h148.172298v877.62024H489.253922z" fill="#FFCA3E" p-id="237240"></path><path d="M489.253922 478.187876h148.172298v541.124417H489.253922zM384.901492 128.444186c-64.608829-37.195934-141.548364-24.967134-149.700898 0-9.1716 28.024334 36.686401 57.984895 102.82383 92.633163a402.225626 402.225626 0 0 0 159.789658 8.662066 432.491907 432.491907 0 0 0-112.60687-101.295229z m511.571482 0c-8.662067-25.476667-84.990163-38.215001-149.700898 0a435.4472 435.4472 0 0 0-112.097336 101.90667 412.110573 412.110573 0 0 0 159.789658-8.662067c65.831709-34.750174 111.180177-64.710735 102.008576-92.73507z" fill="#FFB82C" p-id="237241"></path></svg>
                    <span class="icon-svg1-span">124.4万</span>
                    <svg t="1586586847135" class="icon icon-svg2" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="278925" width="200" height="200"><path d="M193.521 410.59h174.432V782.42H193.52V410.59z" fill="#8CB700" p-id="278926"></path><path d="M434.643 258.643H598.84v523.776H434.643V258.643z" fill="#F9CF8C" p-id="278927"></path><path d="M665.436 534.537h164.197V782.42H665.436V534.537z" fill="#FD6000" p-id="278928"></path><path d="M67.76 780.884h890.784v3.07H67.76v-3.07z" fill="#C1C0C0" p-id="278929"></path></svg>
                    <span class="icon-svg2-span">NO.56</span>
                    <div  class="span-p">
                      <p>4456</p>
                    </div>
                    <el-button size="mini" type="primary" class="button-p"><i class="iconfont ymq-iconxin"></i> 关注</el-button>

                  </div>
                </div>
              </div>

            </div>
            <div class="video_content">
              <div class="prism-player" id="player-con" v-show="showvideo"></div>
              <div  v-show="!showvideo" class="video-text">
                <span>暂未开播</span>
              </div>
            </div>
            <div class="video_footer">
              <div class="video_footer_text">
                <span>{{'当前在线人数：' + online_man.length + '人'}}</span>
                <span @click="showOnline" class="video-span-text">查看更多在线人数</span>
              </div>
              <div class="onlineman" v-for="(item, index) in online_man" :key="index">
                <img src="http://img.qqzhi.com/uploads/2018-12-10/132631700.jpg" >
                <div>
                  <span>{{item}}</span>
                </div>
              </div>
            </div>
            <el-dialog
              title="当前在线用户"
              :visible.sync="dialogVisible"
              :modal="false"
              width="30%">
              <div class="onlineman" v-for="(item, index) in online_man" :key="index">
                <img src="http://img.qqzhi.com/uploads/2018-12-10/132631700.jpg">
                <div class="online-span">
                  <span>{{item}}</span>
                </div>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">关闭</el-button>
                <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
              </span>
            </el-dialog>
          </div>

        </el-col>
        <el-col :span="6">
          <el-container class="video_right_content">
            <el-header class="right-header" style="height: 125px">
              <div class="video_right_content_title">
                <ul>
                  <li>
                    <a href="#">七日榜</a>
                  </li>
                  <li class="space"></li>
                  <li>
                    <a href="#">七日榜</a>
                  </li>
                  <li class="space"></li>
                  <li>
                    <a href="#">七日榜</a>
                  </li>
                  <li class="space"></li>
                  <li>
                    <a href="#">七日榜</a>
                  </li>
                  <li class="space"></li>
                  <li>
                    <a href="#">七日榜</a>
                  </li>
                </ul>
              </div>
              <div class="header-text-img">
                <div style="text-align: center;">
                  <div class="video_right_img">
                    <img src="http://img.qqzhi.com/uploads/2018-12-10/132631700.jpg" class="img_video_right">
                    <div>
                      <span class="img-header-text">聪明小灰</span>
                    </div>
                  </div>
                  <div class="video_right_img">
                    <img src="http://img.qqzhi.com/uploads/2018-12-10/132631700.jpg" class="video_right_img_img">
                    <div>
                      <span class="img-header-text">路易十三点</span>
                    </div>
                  </div>
                  <div class="video_right_img">
                    <img src="http://img.qqzhi.com/uploads/2018-12-10/132631700.jpg" class="img_video_right">
                    <div>
                      <span class="img-header-text">hegbe</span>
                    </div>
                  </div>
                </div>

              </div>
            </el-header>
            <el-main id="msgContents" class="main-text">
              <div id="msgContent" >
               <div v-for="(item, index) in messageList" :key="index" class="msgContent_div">
                <span class="msgContent_div_span1">{{item.fromusername + ':'}}</span>
                 <span class="msgContent_div_span2">{{item.textMessage}}</span>
               </div>
              </div>
            </el-main>
            <el-footer class="footer_el_text" style="height: 120px">
              <div>
                <div>
                  <i class="iconfont ymq-iconshebeizhuangtai icon_text"></i>
                  <i class="iconfont ymq-iconmoshubang icon_text"></i>
                  <i class="iconfont ymq-iconbianjisekuai icon_text"></i>
                  <i class="iconfont ymq-iconzitixiabiao icon_text"></i>
                  <i class="iconfont ymq-icontuoguan icon_text"></i>
                  <i class="iconfont ymq-iconshoucang icon_text"></i>
                </div>
                <el-input
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="textarea"
                  class="input-text"
                >
                </el-input>
                <div class="input-button-div">
                  <el-button size="mini" type="primary" :disabled="textarea === ''" class="input-button" @click="send">发送</el-button>
                </div>
              </div>
            </el-footer>
          </el-container>
        </el-col>
      </el-row>
    </div>
   <Footer style="margin-top: 100px;"></Footer>
  </div>
</template>

<script>
  import Header from '@/components/common/header3'
  import Footer from '@/components/common/footer'
  import $ from 'jquery'
  export default {
      name: "VideoLive",
    components: { Header, Footer },
    // watch: {
    //   $route: {
    //     handler: function(val, oldVal){
    //       console.log(val);
    //       console.log(oldVal);
    //     },
    //     // 深度观察监听
    //     deep: true
    //   }
    // },
    data() {
        return {
          playervideo: '',
          dialogVisible: false,
          LiveUrl: '',
          navBarFixed: false,
          textarea: '',
          showvideo: false,
          path: 'ws://58.119.112.14:11020/websocket/' + localStorage.getItem('name'),
          socket: '',
          online_man: [],
          shang_online_man: '',
          xia_online_man: '',
          textMessage: '',
          fromusername: '',
          messageList: []
        }
    },

    created() {

      // setTimeout(() => {
      //   this.init()
      // }, 200)
    },
    mounted() {
      window.addEventListener('scroll', this.watchScroll)
      this.setBannerH()
      window.addEventListener('resize', () => {
        this.setBannerH()
      }, false)
      this.init()
      this.initWebSocket()
      // setTimeout(() => {
      //   this.initLive()
      // }, 2000)


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
      init() {
        var username = ''
        username = this.$route.query.username
        var url = 'http://58.119.112.14:11030/cms/video/pullVideo?username=' + username
        this.$axios.get(url).then((res) => {
          if (res.data.code === undefined) {
            this.initLive(res.data)
            this.showvideo = true
          } else  {
            this.showvideo = false
            // alert(res.data.message)

          }

        })

        },
      initLive(str) {
        // console.log(str)
        var player = new Aliplayer({
          id: "player-con",
          source: str,
          width: "100%",
          height: "510px",
          autoplay: true,
          isLive: true,
          // controlBarVisibility: 'hover',    /* The mode of the status bar, which is set to Click. */
          // showBarTime: '10000',             /* The time period that you must wait before the status bar is hidden, which is set to 10,000 milliseconds. */
          rePlay: false,
          // showBuffer: true,
          playsinline: true,
          preload: true,
          controlBarVisibility: true,
          useH5Prism: true,
          // components: [{
          //   name: 'AliplayerDanmuComponent',
          //   type: AliPlayerComponent.AliplayerDanmuComponent,
          //   args: [danmukuList]
          // }]
        }, function (player) {
          console.log(player);
        });
        // player._options.source = _this.LiveUrl
        this.playervideo = player
      },
      initWebSocket() {
        if(typeof(WebSocket) === "undefined"){
          alert("您的浏览器不支持socket")
        }else{
          // 实例化socket
          console.log(this.path)
          var socket = new WebSocket(this.path)
          this.socket = socket
          console.log(socket)
          // 监听socket连接
          socket.onopen = this.open
          // 监听socket错误信息
          socket.onerror = this.error
          // 监听socket消息
          socket.onmessage = this.getMessage
         //  socket.onopen = function () {
         //    //webSocket.send( document.getElementById('username').value+"已经上线了");
         //    console.log("已经连通了websocket");
         //    setMessageInnerHTML("已经连通了websocket");
         //  }
        }
      },
      open: function () {
        console.log("socket连接成功")
      },
      error: function () {
        console.log("连接错误")
      },
      getMessage: function (msg) {
        // console.log(msg.data)
        var obj = JSON.parse(msg.data)
          // 1代表上线 2代表下线 3代表在线名单 4代表普通消息
        if (obj.messageType === 1) {
          this.shang_online_man = obj.username
          this.online_man.push(this.shang_online_man)
          $("#msgContent").append('<div style="color: red;font-size: 14px;margin-top: 10px">' + this.shang_online_man +' 上线了</div>')
          this.scrolly()
        } else if (obj.messageType === 2) {
          this.xia_online_man = obj.username
          $("#msgContent").append('<div style="color: red;font-size: 14px;margin-top: 10px">' + this.xia_online_man +' 下线了</div>')
          this.scrolly()
          this.online_man = obj.onlineUsers
        } else if (obj.messageType === 3) {
          this.online_man = obj.onlineUsers
        } else {
          var objMsg = {
            textMessage: '',
            fromusername: ''
          }
          objMsg.textMessage = obj.textMessage
          objMsg.fromusername = obj.fromusername
          this.messageList.push(objMsg)
          this.textMessage = obj.textMessage
          this.fromusername = obj.fromusername
         this.scrolly()


          // $("#msgContent").append('<div style="font-size: 14px;margin-top: 10px"><span style="color: #3a8ee6">' + obj.fromusername +' :</span><span style="color: #8c939d">'+obj.textMessage + '</span></div>')
        }
        // console.log(this.msgobj)
        console.log(msg.data)
      },
      send: function () {
        var message = {
          "message": this.textarea,
          "username": localStorage.getItem('name'),
          "to": 'All'
        };
        this.socket.send(JSON.stringify(message))
        this.textarea = ''
      },
      close: function () {
        console.log("socket已经关闭")
      },
      showOnline() {
        this.dialogVisible = true
      },
      scrolly() {
        setTimeout(() => {
          var div = document.getElementById('msgContents');
          div.scrollTop = div.scrollHeight;
        })
      }
    },
    destroyed () {
      // 销毁监听
      this.socket.onclose = this.close
    }
  }
</script>

<style scoped>
  .container_live {
    background-image: url("../../assets/bbfb.jpg");
    background-size: 100% 100%;
  }
  .header {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .video_container {
    width: 1200px;
    margin: 20px auto;
  }
  .video_cantainer_style {
    border-radius: 10px;overflow: hidden
  }
  .video_header {
    height: 96px;
    position: relative;
    background-color: white;
  }
  .video-header-child {
    position: absolute;top: 50%;transform: translateY(-50%)
  }
  .img_header {
    height: 64px;
    width: 64px;
    float: left;
    /*line-height: 96px;*/
    /*position: absolute;*/
    /*top: 50%;*/
    /*transform: translateY(-50%);*/
    margin-left: 20px;
  }
  .img_header img {
    border-radius: 50%;text-align: center;width: 100%;
  }
  .video_content {
    height: 510px;
  }
  .video_footer {
    height: 124px;
    /*background-image: url("../../assets/beff.jpg");*/
    background-color: white;
    background-size: 100% 100%;
    overflow: hidden;
    position: relative;
  }
  .video_right_content {
    height: 730px;border-radius: 10px;overflow: hidden;
  }
  .video_header_title {
    height: 64px;float: left;width: 782px;margin-left: 20px
  }
  .icon_video {
    color: #8c939d;
    float: right;
    margin-left: 20px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
    color: #8c939d;
  }
  .video_right_content_title {
    height: 30px;line-height: 30px;font-size: 12px;
  }
  .video_right_content_title li{
    float: left;
  }
  .space {
    width: 1px;
    height: 10px;
    background-color: #8c939d;
    margin: 10px 10px 0;
  }
  .video_right_img {
    float: left;margin-left: 20px;margin-top: 20px;
  }
  .icon_text {
    font-size: 18px;
    margin-left: 5px;
    color: #8c939d;
  }
  .img_video_right {
    width: 60px;height: 60px;border-radius: 50%
  }
  .onlineman {
    width: 80px;height: 80px;text-align: center;float: left;margin-top: 10px;margin-left: 20px
  }
  .zbcs {
    margin-left: 10px
  }
  .zbcs-ispan {
    font-size: 12px;margin-left: 5px
  }
  .icon-marg {
    margin-top: 20px;margin-left: 5px;
  }
  .icon-svg1 {
    width: 20px;height: 20px
  }
  .icon-svg1-span {
    color: #8c939d;font-size: 12px;
  }
  .icon-svg2 {
    width: 25px;height: 25px;margin-left: 30px
  }
  .icon-svg2-span {
    color: #8c939d;font-size: 12px;
  }
  .span-p {
    float: right;width: 75px;height: 32px;text-align: center;line-height: 32px;color: #8c939d;font-size: 12px;background-color: rgba(0,0,0,0.03);border-radius: 2px
  }
  .button-p {
    float: right;
    height: 30px;
  }
  .video-text {
    background-color: black;height: 100%;color: white;text-align: center;line-height: 510px
  }
  .video_footer_text {
    font-size: 14px;padding-top: 10px;margin-left: 20px
  }
  .video-span-text {
    float: right;font-size: 14px;margin-right: 20px;cursor: pointer;color: #8c939d
  }
  .onlineman img{
    width: 50px;border-radius: 50%
  }
  .online-span {
    padding: 5px
  }
  .right-header {
    background-color: white;padding: 5px;height: 170px
  }
  .header-text-img {
    height: 125px;
  }
  .img-header-text {
    font-size: 14px;color: #8c939d;font-weight: bolder
  }
  .video_right_img_img {
    width: 70px;height: 70px;border-radius: 50%
  }
  .main-text {
    background-color: #F8F8F8;
  }
  .msgContent_div {
    margin-top: 10px;width: 100%
  }
  .msgContent_div_span1 {
    color: #3a8ee6;font-size: 14px
  }
  .msgContent_div_span2 {
    font-size: 14px;color: #8c939d
  }
  .footer_el_text {
    background-color: white;height: 120px
  }
  .input-text {
    margin-top: 10px
  }
  .input-button-div {
    margin-top: 2px
  }
  .input-button {
    float: right;
  }
</style>
