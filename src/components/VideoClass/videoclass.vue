<template>
  <div>
    <Header></Header>
    <div class="container">
      <div style="margin-bottom: 15px;margin-left: 28%">
        <h2>{{class_header}}</h2>
      </div>
      <el-container>
        <el-aside width="25%" style="max-height: 600px">
          <div class="left_container">
            <div class="left_nav">
              <!--<el-menu-->
                <!--router-->
                <!--:default-active="$route.path"-->
                <!--class="el-menu-vertical-demo"-->
                <!--@open="handleOpen"-->
                <!--@close="handleClose">-->
                <!--<el-submenu index="1">-->
                  <!--<template slot="title">-->
                    <!--<i class="el-icon-menu"></i>-->
                    <!--<span>Python计算思维基础课程</span>-->
                  <!--</template>-->
                  <!--<el-menu-item-group>-->
                    <!--&lt;!&ndash;                    <template slot="title">分组一</template>&ndash;&gt;-->
                    <!--<el-menu-item index="/videoclass">-->
                      <!--<i class=" iconfont ymq-iconyunhang"></i>-->
                      <!--<span slot="title">第一章 初识python</span>-->
                    <!--</el-menu-item>-->
                    <!--<el-menu-item index="#">-->
                      <!--<i class=" iconfont ymq-iconyunhang"></i>-->
                      <!--<span slot="title">第二章 海龟画图</span>-->
                    <!--</el-menu-item>-->
                    <!--<el-menu-item index="#">-->
                      <!--<i class=" iconfont ymq-iconyunhang"></i>-->
                      <!--<span slot="title">第三章 旋转的海龟</span>-->
                    <!--</el-menu-item>-->
                    <!--<el-menu-item index="#">-->
                      <!--<i class=" iconfont ymq-iconyunhang"></i>-->
                      <!--<span slot="title">第四章 变量与数据类型</span>-->
                    <!--</el-menu-item>-->
                    <!--<el-menu-item index="#">-->
                      <!--<i class=" iconfont ymq-iconyunhang"></i>-->
                      <!--<span slot="title">第五章 控制语句</span>-->
                    <!--</el-menu-item>-->
                    <!--<el-menu-item index="#">-->
                      <!--<i class=" iconfont ymq-iconyunhang"></i>-->
                      <!--<span slot="title">第六章 数据结构</span>-->
                    <!--</el-menu-item>-->
                    <!--<el-menu-item index="#">-->
                      <!--<i class=" iconfont ymq-iconyunhang"></i>-->
                      <!--<span slot="title">第七章 函数</span>-->
                    <!--</el-menu-item>-->
                    <!--<el-menu-item index="#">-->
                      <!--<i class=" iconfont ymq-iconyunhang"></i>-->
                      <!--<span slot="title">第八章 递归</span>-->
                    <!--</el-menu-item>-->
                    <!--<el-menu-item index="#">-->
                      <!--<i class=" iconfont ymq-iconyunhang"></i>-->
                      <!--<span slot="title">第六章 控制语句</span>-->
                    <!--</el-menu-item>-->
                  <!--</el-menu-item-group>-->
                <!--</el-submenu>-->
                <!--&lt;!&ndash;<el-submenu index="2">&ndash;&gt;-->
                  <!--&lt;!&ndash;<template slot="title">&ndash;&gt;-->
                    <!--&lt;!&ndash;<i class="el-icon-location"></i>&ndash;&gt;-->
                    <!--&lt;!&ndash;<span>在线比赛</span>&ndash;&gt;-->
                  <!--&lt;!&ndash;</template>&ndash;&gt;-->
                  <!--&lt;!&ndash;<el-menu-item-group>&ndash;&gt;-->
                    <!--&lt;!&ndash;&lt;!&ndash;                    <template slot="title">分组一</template>&ndash;&gt;&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-menu-item index="">&ndash;&gt;-->
                      <!--&lt;!&ndash;<i class="el-icon-menu"></i>&ndash;&gt;-->
                      <!--&lt;!&ndash;<span slot="title">小学组</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</el-menu-item>&ndash;&gt;-->
                    <!--&lt;!&ndash;<el-menu-item index="">&ndash;&gt;-->
                      <!--&lt;!&ndash;<i class="el-icon-document"></i>&ndash;&gt;-->
                      <!--&lt;!&ndash;<span slot="title">中学组</span>&ndash;&gt;-->
                    <!--&lt;!&ndash;</el-menu-item>&ndash;&gt;-->
                  <!--&lt;!&ndash;</el-menu-item-group>&ndash;&gt;-->
                <!--&lt;!&ndash;</el-submenu>&ndash;&gt;-->
              <!--</el-menu>-->
              <el-menu
               default-active="0-0"
               :default-openeds="open_list"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu v-for="(item, index) in list" :key="index" :index="index">
                  <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{item.pname}}</span>
                  </template>
                  <el-menu-item-group>
                    <!--                    <template slot="title">分组一</template>-->
                    <el-menu-item v-for="(item2, index2) in item.children" :key="index2" :index="index+ '-' + index2" @click="openVideo(item2)">
                      <i class=" iconfont ymq-iconyunhang" v-show="item2.ptype === '1'"></i>
                      <i class=" iconfont ymq-iconDOC" v-show="item2.ptype !== '1'"></i>
                      <span slot="title">{{item2.pname}}</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <!--<el-submenu index="2">-->
                <!--<template slot="title">-->
                <!--<i class="el-icon-location"></i>-->
                <!--<span>在线比赛</span>-->
                <!--</template>-->
                <!--<el-menu-item-group>-->
                <!--&lt;!&ndash;                    <template slot="title">分组一</template>&ndash;&gt;-->
                <!--<el-menu-item index="">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span slot="title">小学组</span>-->
                <!--</el-menu-item>-->
                <!--<el-menu-item index="">-->
                <!--<i class="el-icon-document"></i>-->
                <!--<span slot="title">中学组</span>-->
                <!--</el-menu-item>-->
                <!--</el-menu-item-group>-->
                <!--</el-submenu>-->
              </el-menu>
            </div>
          </div>
        </el-aside>
        <el-main>
          <div class="main_content">
            <!--<div class='demo'>-->
              <!--<video-player class="video-player vjs-custom-skin"-->
                            <!--ref="videoPlayer"-->
                            <!--:playsinline="true"-->
                            <!--:options="playerOptions">-->
              <!--</video-player>-->
            <!--</div>-->
            <div style="margin-bottom: 5px;width: 100%;height: 20px">
              <div class="logos">
              </div>
              <div style="margin-left: 20px">
                <span>{{class_title_1}}</span>
              </div>
            </div>
            <div @contextmenu.prevent="disPlayer">
              <video-player class="video-player vjs-custom-skin"
                            ref="videoPlayer"
                            id="video"
                            :playsinline="true"
                            :options="playerOptions"
                            @pause="onPlayerPause($event)"
                            @play="onPlayerPlay($event)"
                            @ended="onPlayerEnded($event)"
                            @timeupdate="onPlayerTimeupdate($event)"
                            @ready="playerReadied">
              </video-player>
            </div>

          </div>
        </el-main>
      </el-container>
      <div style="margin-top: 50px">
        <span>讨论区</span>
      </div>
      <el-container style="margin-top: 20px">
        <el-aside width="25%" style="box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);background-color: white">
          <div style="padding: 20px">
            <el-input placeholder="请输入要搜索的帖子">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
          <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose" style="min-height: 500px">
            <el-menu-item index="1-11" @click="click_content">
              <i class="el-icon-chat-dot-round"></i>
              <span>全部帖子</span>
            </el-menu-item>
            <el-menu-item index="4-11" @click="click_update">
              <i class="el-icon-set-up"></i>
              <span>上传作业</span>
            </el-menu-item>
            <el-menu-item index="2-11">
              <i class="el-icon-coin"></i>
              <span>我的发布</span>
            </el-menu-item>
            <el-menu-item index="3-11">
              <i class="el-icon-user"></i>
              <span>老师参与</span>
            </el-menu-item>


          </el-menu>
        </el-aside>
        <el-main style="padding: 0;padding-left: 40px;padding-right: 40px">
          <div v-show="contentShow">
            <el-card style="height: 200px;padding-right: 40px;padding-left: 40px">
              <el-input
                type="textarea"
                placeholder="请输入内容"
                v-model="textarea"
                maxlength="30"
                :autosize="{ minRows: 4, maxRows: 4}"
                show-word-limit
              >
              </el-input>
              <div style="width: 100%;margin-top: 20px">
                <!--<el-button type="primary" plain>图片</el-button>-->
                <el-button type="primary" :disabled="textarea===''" style="float: right" @click="submit_content">发表评论</el-button>
              </div>
            </el-card>
            <div class="line_style">
              <!--<div style="margin-top: 20px">-->
              <!--<span>{{'#' + class_header + '-&#45;&#45;' + class_title_1}}</span>-->
              <!--</div>-->
              <!--<div class="video_text">-->
              <!--<div class="video_img">-->
              <!--<img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3228285589,4093988690&fm=11&gp=0.jpg" style="height: 100%;width: 100%;border-radius: 5px">-->
              <!--<i class="el-icon-video-play" style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);color: white;font-size: 40px"></i>-->
              <!--</div>-->
              <!--<div style="float: left;line-height: 100px;margin-left: 20px">-->
              <!--<span><i class="iconfont ymq-iconyunhang"></i>{{class_title_1}}</span>-->
              <!--</div>-->
              <!--</div>-->
              <!--<div style="float: right;margin-top: 10px">-->
              <!--<i class="iconfont ymq-iconlike"></i>-->
              <!--<span>0</span>-->
              <!--<span> | </span>-->
              <!--<i class="el-icon-chat-dot-square"></i>-->
              <!--<span>1</span>-->
              <!--</div>-->
              <div style="margin-top: 30px;border-top: 1px solid #C1C1C1;padding-top: 20px;padding-bottom: 20px" v-for="(item, index) in content_list" :key="index">
                <div>
                  <img src="http://img.qqzhi.com/uploads/2018-12-10/132631700.jpg" style="width: 25px;height: 25px;border-radius: 50%;float: left">
                  <div style="margin-left: 30px;font-size: 14px;line-height: 25px">
                    <span style="font-size: 12px">{{item.username}}</span>
                    <!--<span style="margin-left: 20px;font-size: 12px;color: grey">2020-02-11/11:30</span>-->
                  </div>
                  <div style="margin-top: 10px;margin-left: 30px">
                  <span>
                    {{item.info}}
                  </span>
                  </div>
                  <div style="margin-top: 10px;margin-left: 30px;font-size: 12px;color: grey">
                    <span>{{item.createtime | timestampToTime}}</span>
                    <i class="iconfont ymq-iconlike" style="margin-left: 20px"></i>10
                    <i class="iconfont ymq-iconunlike" style="margin-left: 20px"></i>3
                    <span style="margin-left: 20px;cursor: pointer" @click="showText2(index)">回复</span>
                    <div style="margin-top: 10px" v-show="showIndex === index">
                      <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="textarea2"
                        :autosize="{ minRows: 4, maxRows: 4}"
                      >
                      </el-input>
                      <div style="width: 100%;margin-top: 20px">
                        <!--<el-button type="primary" plain>图片</el-button>-->
                        <el-button type="primary" :disabled="textarea2===''" style="float: right" @click="submit_reply(item)">发表评论</el-button>
                      </div>
                    </div>
                  </div>
                </div>
                <div style="margin-left: 30px;margin-top: 10px" v-for="(item2, index2) in item.takeInfos" :key="index2">
                  <img src="http://img.qqzhi.com/uploads/2018-12-10/132631700.jpg" style="width: 25px;height: 25px;border-radius: 50%;float: left">
                  <div style="margin-left: 30px;font-size: 14px;line-height: 25px">
                    <span style="font-size: 12px">{{item2.username}}</span>
                    <span>回复</span>
                    <span style="color: #3a8ee6">{{'@' + item2.askuser}}</span>
                    <span style="margin-left: 40px">
                    {{item2.ask}}
                  </span>
                  </div>
                  <div style="margin-top: 10px;margin-left: 30px;font-size: 12px;color: grey">
                    <span>{{item2.createtime | timestampToTime}}</span>
                    <i class="iconfont ymq-iconlike" style="margin-left: 20px"></i>23
                    <i class="iconfont ymq-iconunlike" style="margin-left: 20px"></i>5
                    <span style="margin-left: 20px;cursor: pointer" @click="showText3(item2)">回复</span>
                    <div style="margin-top: 10px" v-show="showIndex2 === item2">
                      <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="textarea2"
                        :autosize="{ minRows: 4, maxRows: 4}"
                      >
                      </el-input>
                      <div style="width: 100%;margin-top: 20px">
                        <!--<el-button type="primary" plain>图片</el-button>-->
                        <el-button type="primary" :disabled="textarea2===''" style="float: right" @click="submit_reply2(item2, item.takeid)">发表评论</el-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--<div style="width: 700px;margin: 10px auto;height: 100px;border-top: 1px solid #C1C1C1;padding-top: 10px">-->
              <!--<div>-->
              <!--<img src="http://image.biaobaiju.com/uploads/20180803/23/1533308847-sJINRfclxg.jpeg" style="width: 25px;height: 25px;border-radius: 50%;float: left">-->
              <!--<div style="margin-left: 30px;font-size: 14px;line-height: 25px">-->
              <!--<span>展梦</span>-->
              <!--</div>-->
              <!--<div style="margin-top: 10px">-->
              <!--<div style="font-size: 12px;float: left;margin-left: 40px">-->
              <!--<span>什么是函数？</span>-->
              <!--<div>-->
              <!--<span style="font-size: 12px;color: grey">2020-02-11/11:30</span>-->
              <!--</div>-->
              <!--</div>-->
              <!--<div style="float: right;font-size: 12px">-->
              <!--<i class="iconfont ymq-iconlike"></i>-->
              <!--<span>0</span>-->
              <!--<span> | </span>-->
              <!--<i class="el-icon-chat-dot-square"></i>-->
              <!--<span>1</span>-->
              <!--</div>-->
              <!--</div>-->
              <!--</div>-->

              <!--</div>-->
              <!--<div style="width: 700px;margin: 10px auto;height: 100px;border-top: 1px solid #C1C1C1;padding-top: 10px">-->
              <!--<img src="http://pic4.zhimg.com/50/v2-8f994b17abb6299eb65084b505b9872f_hd.jpg" style="width: 25px;height: 25px;border-radius: 50%;float: left">-->
              <!--<div style="margin-left: 30px;font-size: 14px;line-height: 25px">-->
              <!--<span>yjn345</span>-->
              <!--</div>-->
              <!--<div style="margin-top: 10px">-->
              <!--<div style="font-size: 12px;float: left;margin-left: 40px">-->
              <!--<span>函数的形参与实参是什么意思？</span>-->
              <!--<div>-->
              <!--<span style="font-size: 12px;color: grey">2020-02-11/11:30</span>-->
              <!--</div>-->
              <!--</div>-->
              <!--<div style="float: right;font-size: 12px">-->
              <!--<i class="iconfont ymq-iconlike"></i>-->
              <!--<span>0</span>-->
              <!--<span> | </span>-->
              <!--<i class="el-icon-chat-dot-square"></i>-->
              <!--<span>1</span>-->
              <!--</div>-->
              <!--</div>-->
              <!--</div>-->
              <!--<div style="width: 700px;margin: 10px auto;height: 100px;border-top: 1px solid #C1C1C1;padding-top: 10px">-->
              <!--<img src="http://pic1.zhimg.com/50/v2-0d9c0088606a09bedb29e91c1aca4893_hd.jpg" style="width: 25px;height: 25px;border-radius: 50%;float: left">-->
              <!--<div style="margin-left: 30px;font-size: 14px;line-height: 25px">-->
              <!--<span>云风</span>-->
              <!--</div>-->
              <!--<div style="margin-top: 10px">-->
              <!--<div style="font-size: 12px;float: left;margin-left: 40px">-->
              <!--<span>数据结构怎么这么难？</span>-->
              <!--<div>-->
              <!--<span style="font-size: 12px;color: grey">2020-02-11/11:30</span>-->
              <!--</div>-->
              <!--</div>-->
              <!--<div style="float: right;font-size: 12px">-->
              <!--<i class="iconfont ymq-iconlike"></i>-->
              <!--<span>0</span>-->
              <!--<span> | </span>-->
              <!--<i class="el-icon-chat-dot-square"></i>-->
              <!--<span>1</span>-->
              <!--</div>-->
              <!--</div>-->
              <!--</div>-->
            </div>
          </div>
          <div v-show="updateImg">
            上传图片
            <el-upload
              action="http://58.119.112.14:11020/cms//filesystem/upload"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :before-upload="setuploaddata"
              :on-success="handleAvatarSuccess"
              :on-exceed="rejectupload"
              :before-remove="handleRemove"
              name="multipartFile">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </div>

        </el-main>
      </el-container>
    </div>
    <Footer style="margin-top: 50px"></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
import $ from 'jquery'
export default {
  name: 'videoclass',
  components: { Header, Footer },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  },
  data () {
    return {
      video_url: '',
      text: '',
      textarea: '',
      contentShow: true,
      updateImg: false,
      dialogImageUrl: '',
      dialogVisible: false,
      playerOptions: {
        // 播放速度
        playbackRates: [0.5, 1, 1.5, 2],
        // 如果true,浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: 'auto',
        language: 'zh-CN',
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: '16:9',
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [{
          // 类型
          type: 'video/mp4',
          // url地址
          // src: 'http://q5p312pcj.bkt.clouddn.com/lprzpX16yy0XQSyjVyMT64_iA9wR_zm'
          src: ''
        }],
        // 你的封面地址
        poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581660082158&di=a42d2cbbe93c70153478b713442f1d92&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fq100%2Fimg1.ugc.ifeng.com%2Fnewugc%2F20190520%2F15%2Fwemedia%2Fc1024597eac12eb5d088951616fb2e45491581a0_size43_w1078_h516.jpg',
        // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          // 全屏按钮
          fullscreenToggle: true
        }
      },
      class_id: '',
      class_header: '',
      list: [],
      class_title_1: '',
      open_list: [],
      teachPlanId: '',
      videoState: '',
      src: '',
      oldTime: 0,
      newTime: 0,
      maxTimes: 0,
      maxTimess: 0,
      isMousedown: false,
      isMousedown2: true,
      TimeList: [],
      courseIdFirst: '',
      username: '',
      content_list: [],
      textarea2: '',
      showreply: false,
      showreply2: false,
      showIndex: -1,
      showIndex2: ''
    }
  },
  created () {
    // this.$router.afterEach((to, from, next) => {
    //   window.scrollTo(0, 0)
    // })
    // window.addEventListener('beforeunload', this.updateHandler())
  },
  mounted () {
    // localStorage.setItem('time', this.player.currentTime())
    console.log(localStorage.getItem('time'))
    this.username = localStorage.getItem('name')

    this.getList()
    this.getContent()
    setTimeout(() => {
      this.videoRulesState()
      // this.captureImage()
    }, 200)
    // window.onbeforeunload = function () {
    //   // localStorage.setItem('time', this.player.currentTime())
    //   console.log('当前')
    //   // console.log(this.player.currentTime())
    // }
  },
  beforeDestroy () {
    localStorage.setItem('time', this.player.currentTime())
    console.log(this.player.currentTime())

    // localStorage.setItem('tim', '销毁')
    // console.log('销毁')
    // this.beforeunloadFn()
  },
  destroyed () {
    // console.log('销毁之后')

    // window.removeEventListener('beforeunload', this.updateHandler())
  },
  filters: {
    timestampToTime: function (timestamp) {
      var date = ''
      if (timestamp.toString().length === 10) {
        date = new Date(timestamp * 1000)
      } else {
        date = new Date(timestamp)
      }
      // var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + '-';
      var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      var D = date.getDate() + ' ';
      var h = date.getHours() + ':';
      var m = date.getMinutes() + ':';
      var s = date.getSeconds();
      return Y+M+D+h+m+s;
    }
  },
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    setuploaddata(res, file) {

    },
    handleAvatarSuccess(res, file) {
      console.log(res)
      this.$message.success(res.message)
    },
    rejectupload(file) {

    },
    click_content() {
      this.updateImg = false
      this.contentShow = true

    },
    click_update () {
      this.contentShow = false
      this.updateImg = true
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    updateHandler() {
      this.beforeunloadFn()
    },
    beforeunloadFn() {
      console.log('刷新或关闭')
      localStorage.setItem('time', this.player.currentTime())
      console.log(localStorage.getItem('time'))
    },
    getList () {
      var list = []
      this.class_id = this.$route.query.class_id
      var url = 'http://58.119.112.14:11020/cms/course/courseview/' + this.class_id
      this.$axios.get(url).then((res) => {
        this.list = res.data.teachplanNode.children
        this.teachPlanId = res.data.teachplanNode.children[0].children[0].id
        this.getStatue()
        console.log(this.teachPlanId)
        // this.playerOptions.sources[0].src = res.data.teachplanNode.children[0].children[0].mediaUrl
        this.class_header = res.data.courseBase.name
        this.playerOptions.poster = res.data.coursePic.pic
        this.class_title_1 = res.data.teachplanNode.children[0].children[0].pname
        for (var i = 0; i < res.data.teachplanNode.children.length; i++) {
          list.push(i)
        }
        this.open_list = list
        // console.log('sfefef' + this.playerOptions.sources[0].src)
      })
    },
    getStatue () {
      var url = 'http://58.119.112.14:11020/cms/course/findCourseTeachplan?teachPlanId=' + this.teachPlanId + '&username=' + localStorage.getItem('name')
      this.$axios.get(url).then((res) => {
        this.videoState = res.data
        if (res.data === 1) {
          this.playerOptions.notSupportedMessage = '暂未开播'
        } else {
          this.playerOptions.sources[0].src = this.list[0].children[0].mediaUrl
        }
      })
    },
    openVideo (item) {
      this.TimeList = []
      if (item.ptype === '1') {
        var url = 'http://58.119.112.14:11020/cms/course/findCourseTeachplan?teachPlanId=' + item.id+ '&username=' + localStorage.getItem('name')
        this.$axios.get(url).then((res) => {
          this.videoState = res.data
          if (res.data === 1) {
            this.playerOptions.notSupportedMessage = '暂未开播'
            this.playerOptions.sources[0].src = ''
          } else if (res.data === 2) {
            this.oldTime = 0
            this.newTime = 0
            this.maxTimes = 0
            this.isMousedown = false
            this.playerOptions.sources[0].src = item.mediaUrl
            this.playerOptions.playbackRates = []
            this.videoRules()
          } else if (res.data === 3) {
            this.playerOptions.sources[0].src = item.mediaUrl
            this.playerOptions.playbackRates = [0.5, 1, 1.5, 2]
          }
        })
        this.class_title_1 = item.pname
        console.log('vegggr' + this.playerOptions.sources[0].src)
        setTimeout(() => {
          this.onPlay()
        }, 200)

      } else if (item.ptype === '2') {
        window.open(item.mediaUrl )
      }

    },
    videoRulesState () {
      if (this.videoState === 2) {
       this.playerOptions.playbackRates = []
        this.videoRules()
      } else if (this.videoState === 3) {
        this.playerOptions.playbackRates = [0.5, 1, 1.5, 2]
      }
    },
    videoRules () {
      var _this = this
      var diff = 3600000 // 未操作触发间隔
      var firstTime = new Date().getTime()
      var lastTime = new Date().getTime()
      var indulge = false // 阀门
      var viewNub = 1
      // 启动
      var switchTime = setInterval(anm, 5000)
      // 停止
      $(document).on('mousemove', function () {
        indulge = true
        clearInterval(switchTime)
        firstTime = new Date().getTime()
        // console.log('moving')
      })
      // 再启动
      setInterval(function () {
        lastTime = new Date().getTime()
        if (lastTime - firstTime > diff && indulge) {
          indulge = false
          viewNub = $('.mid-top-menu li.active').index() // 如果中途操作鼠标保存选中的下标，下次变化从次开始
          switchTime = setInterval(anm, 5000)
        }
      }, 1000)
      // 自动动作
      function anm () {
        console.log('触发视频暂停')
        _this.onPause()
      }
      console.log('www' + _this.videoState)

    },
    onPlayerPause (player) {
      // player.pause()
      console.log('player play!', player)
    },
    onPlayerPlay (player) {
      console.log('player play!', player)
    },
    onPlayerEnded (player) {
      console.log('视频播放完成')
    },
    onPlayerTimeupdate (player) {
      // console.log('fefefef')
      // localStorage.setItem('time', player.currentTime())

      // console.log(this.TimeList)
      if (this.videoState === 2) {
        this.stopDrag(player)
      } else if (this.videoState === 3) {

      }

    },
    playerReadied (player) {
      // seek to 10s
      console.log('example player 1 readied', player)
      // this.maxTimes = 3600
      // console.log(player.currentTime(10))
      // console.log('example 01: the player is readied', player)
    },
    onPause () {
      this.player.pause()
    },
    onPlay () {
      this.player.play()
    },
    disPlayer () {
      console.log('禁止鼠标右键默认行为')
    },
    stopDrag(videoPlayer) {
      var _this = this
      var isDrag = false
      _this.TimeList.push(videoPlayer.currentTime())
      // console.log(_this.TimeList)
      // console.log(videoPlayer.currentTime())


      // var oldTime=0,newTime=0,maxTime=0;
      if(!isDrag) {
        // var isMousedown = false;
        videoPlayer.on('pause', function() {
          _this.isMousedown = false
          // _this.isMousedown2 = false
          if(_this.isMousedown === false) {
            _this.oldTime = videoPlayer.currentTime()
            console.log('oldTime' + _this.oldTime)
            // console.log(_this.TimeList[_this.TimeList.length-2])
            if (_this.TimeList[_this.TimeList.length-2] < _this.TimeList[_this.TimeList.length-1])  {
              _this.maxTimes = _this.TimeList[_this.TimeList.length-2]
            } else {
              _this.maxTimes = _this.TimeList[_this.TimeList.length-1]
            }

          }
        });
        videoPlayer.on('play', function() {

          _this.isMousedown = true;
          // _this.isMousedown2 = true
          _this.newTime = videoPlayer.currentTime();
          // _this.oldTime = localStorage.getItem('time');
          // _this.maxTimes = localStorage.getItem('time')
          console.log('newTime' + _this.newTime)
          // console.log('oldTime' + _this.oldTime)
          if(_this.newTime < _this.oldTime) {
            videoPlayer.currentTime(_this.newTime);
            // _this.maxTimes = videoPlayer.currentTime()
            console.log('maxTimes1', _this.maxTimes)
          } else if (_this.newTime > _this.oldTime) {
            videoPlayer.currentTime(_this.oldTime);
            // _this.maxTimes = videoPlayer.currentTime()
            console.log('maxTimes2', _this.maxTimes)
          } else {
            // _this.maxTimes = _this.maxTimess
            videoPlayer.currentTime(_this.maxTimes);
            console.log('fffweeee')
            console.log(_this.maxTimes)
            // console.log(_this.TimeList[_this.TimeList.length-4])
            _this.TimeList = []

          }
        });
        // videoPlayer.on('timeupdate', function() {
        //   if(videoPlayer.currentTime() > _this.maxTimes && _this.isMousedown === true) {
        //     _this.maxTimes = videoPlayer.currentTime();
        //     console.log('_this.maxTimes' + _this.maxTimes)
        //   }
        // });
        // $(".vjs-progress-holder").mousedown(function() {
        //   _this.isMousedown = true;
        //   _this.oldTime = videoPlayer.getCache().currentTime;
        //   console.log('fewfgsss')
        // });
        // videoPlayer.on('timeupdate', function() {
        //   if(videoPlayer.currentTime() > _this.maxTimes && !isMousedown) {
        //     _this.maxTimes = videoPlayer.currentTime();
        //   }
        // });

      }

    },
    getContent() {
      this.courseIdFirst = this.$route.query.class_id
      var url = 'http://58.119.112.14:11020/cms/take/findList?courseId=' + this.$route.query.class_id
      this.$axios.get(url).then((res) => {
        this.content_list = res.data.queryResult.list
      })
    },
    submit_content() {
      var url = 'http://58.119.112.14:11030/cms/take/publicTake?courseId=' + this.courseIdFirst + '&username=' + this.username + '&info=' + this.textarea
      this.$axios.get(url).then((res) => {
        if (res.data.success === true) {
          this.$message.success('发表成功！')
          this.textarea = ''
          this.getContent()
        }
      })
    },
    submit_reply(item) {
      var url = 'http://58.119.112.14:11030/cms/take/publicAsk?courseId=' + this.courseIdFirst + '&username=' + this.username + '&ask=' + this.textarea2 + '&askuser=' + item.username + '&takeid=' + item.takeid
      this.$axios.get(url).then((res) => {
        if (res.data.success === true) {
          this.$message.success('发表成功！')
          this.textarea2 = ''
          this.showIndex = -1
          this.showIndex2 = ''
          this.getContent()
        }
      })
    },
    submit_reply2(item, takeid) {
      var url = 'http://58.119.112.14:11030/cms/take/publicAsk?courseId=' + this.courseIdFirst + '&username=' + this.username + '&ask=' + this.textarea2 + '&askuser=' + item.username + '&takeid=' +  takeid
      this.$axios.get(url).then((res) => {
        if (res.data.success === true) {
          this.$message.success('发表成功！')
          this.textarea2 = ''
          this.showIndex = -1
          this.showIndex2 = ''
          this.getContent()
        }
      })
    },
    showText2 (index) {
      // this.showreply = !this.showreply
      // if (this.showIndex === -1) {
      //   this.showIndex = index
      // } else {
      //   this.showIndex = -1
      // }
      if (this.showIndex === index) {
        this.showIndex = -1
        this.showIndex2 = ''
      } else  {
        this.showIndex2 = ''
        this.showIndex = index
      }


    },
    showText3 (item) {
      // this.showreply2 = !this.showreply2
      if (this.showIndex2 === item) {
        this.showIndex2 = ''
        this.showIndex = -1
      } else {
        this.showIndex2 = item
        this.showIndex = -1
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 30px auto;
}
  .main_content {
    padding-left: 30px;
  }
.demo{
  display: inline-block;
  width: 800px;
  /*height: 538px;*/
  text-align: center;
  line-height: 100px;
  border: 1px solid transparent;
  border-radius: 4px;
  overflow: hidden;
  /*background: #fff;*/
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
  margin-right: 4px;
}

.demo:hover{
  display: block;
}
  .logos {
    width: 5px;
    height: 20px;
    background-color: #66b1ff;
    float: left;
  }
  .line_style {
    /*height: 380px;*/
    /*border-bottom: 1px #C1C1C1 solid;*/
    /*border-top: 1px #C1C1C1 solid;*/
    margin-top: 50px;
  }
  .video_text {
    margin-top: 20px;
    background-color: rgba(255, 255, 255, 0.6);
    padding: 10px;
    height: 120px;
  }
  .video_img {
    width: 180px;
    height: 100px;
    border-radius: 5px;
    float: left;
    position: relative;
  }
</style>
