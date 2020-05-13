<template>
  <div>
    <Header></Header>
    <div class="video-content">
      <div class="video-container">
        <div class="video-header">
          <span>{{class_title_1}}</span>
        </div>
        <el-container class="video-container-content">
          <el-main class="video-main">
            <div @contextmenu.prevent="disPlayer" class="video-bg">
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
            <div class="video-footer">
              <span class="video-span span-icon1">
                <i class="iconfont ymq-iconxiaoxi"></i> 1900
              </span>
              <span class="video-span">
                <i class="iconfont ymq-iconaixin"></i> 12万
              </span>
              <span class="video-span ">
                <i class="iconfont ymq-iconshoucang1"></i> 收藏
              </span>
              <span class="span-icon3">
                &nbsp;
              </span>
              <span class="class-text">
                {{class_header}}
              </span>
              <span class="footer-right">
                  <el-tooltip class="item" effect="dark" content="分享" placement="bottom">
                   <i class="iconfont ymq-iconfenxiangfangshi"></i>
                 </el-tooltip>
                 <el-tooltip class="item" effect="dark" content="帮助" placement="bottom">
                   <i class="iconfont ymq-iconicon_yiwenkongxin"></i>
                 </el-tooltip>
                <el-tooltip class="item" effect="dark" content="举报" placement="bottom">
                   <i class="iconfont ymq-iconjubao"></i>
                 </el-tooltip>

              </span>
            </div>
          </el-main>
          <el-aside class="video-aside">
            <div class="aside-header">
              <div class="aside-header-content">
                <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=594235885,3965721747&fm=11&gp=0.jpg" class="aside-img">
                <div class="aside-header-text">
                  <div class="aside-header-text1">
                    <span>课程讲师</span>
                  </div>
                  <div class="aside-header-text2">
                    <span>{{teacher_name}}</span>
                  </div>
                </div>
              </div>

            </div>
            <div class="aside-content">
              <div class="content-tag">
                <el-row>
                  <el-col :span="12" class="tag-col">
                    <div class="tags mulu-tag">
                      目录
                    </div>
                  </el-col>
                  <el-col :span="12" class="tag-col">
                    <div class="tags biji-tag">
                      笔记
                    </div>
                  </el-col>
                </el-row>
              </div>
              <div class="aside-contents">
                <div v-for="(item, index) in list" :key="index" :index="index" class="content-text">
                  <span>{{item.pname}}</span>
                  <div v-for="(item2, index2) in item.children" :key="index2" :index="index+ '-' + index2" @click="openVideo(item2, index2)" class="content-class-text" :class="isactive === item2.id && item2.ptype === '1'? 'addclass' : ''">
                    <i class=" iconfont ymq-iconyunhang" v-show="item2.ptype === '1'"></i>
                    <i class=" iconfont ymq-iconDOC" v-show="item2.ptype !== '1'"></i>
                    <span slot="title">{{item2.pname}}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="aside-footer">
              <el-button class="button-style" type="primary"> <i class="iconfont ymq-iconshoucang1"></i>收藏</el-button>
            </div>
          </el-aside>
        </el-container>
      </div>

    </div>
    <div class="content-container">
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="content-card">
            <div class="content-card-header">
              <div class="content-card-header-text">
                学员评论<span>{{'(' + content_list.length + '条评论)'}}</span>
              </div>

            </div>
            <div class="content-input">
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
                  :autosize="{ minRows: 7, maxRows: 7}"
                  show-word-limit
                >
                </el-input>
                <div class="class-button">
                  <el-button type="success"  :disabled="textarea===''" @click="submit_content" class="button-input">发表评论</el-button>
                </div>
              </div>

            </div>
            <div class="line_style">
              <div class="content-text-peop" v-for="(item, index) in content_list.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="index">
                <div>
                  <img src="http://img.qqzhi.com/uploads/2018-12-10/132631700.jpg"  class="content-img">
                  <div class="content-name">
                    <span>{{item.username}}</span>
                    <!--<span style="margin-left: 20px;font-size: 12px;color: grey">2020-02-11/11:30</span>-->
                  </div>
                  <div class="content-info">
                    <span>{{item.info}}</span>
                  </div>
                  <div  class="content-reply">
                    <span>{{item.createtime | timestampToTime}}</span>
                    <i class="iconfont ymq-iconlike" ></i>10
                    <i class="iconfont ymq-iconunlike"></i>3
                    <span  @click="showText2(index)" class="content-span">回复</span>
                    <div v-show="showIndex === index" class="content-reply-input">
                      <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="textarea2"
                        :autosize="{ minRows: 6, maxRows: 6}"
                      >
                      </el-input>
                      <div class="input2-style">
                        <!--<el-button type="primary" plain>图片</el-button>-->
                        <el-button type="success" :disabled="textarea2===''"  @click="submit_reply(item)" class="button-input2">发表评论</el-button>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-for="(item2, index2) in item.takeInfos" :key="index2" class="content-input3">
                  <img src="http://img.qqzhi.com/uploads/2018-12-10/132631700.jpg" class="img_class3">
                  <div  class="reply_info">
                    <span>{{item2.username}}</span>
                    <span>回复</span>
                    <span class="askuser">{{'@' + item2.askuser}}</span>
                    <span class="ask">
                    {{item2.ask}}
                  </span>
                  </div>
                  <div class="reply_info2">
                    <span>{{item2.createtime | timestampToTime}}</span>
                    <i class="iconfont ymq-iconlike"></i>23
                    <i class="iconfont ymq-iconunlike"></i>5
                    <span  @click="showText3(item2)" class="reply_button">回复</span>
                    <div  v-show="showIndex2 === item2" class="reply_input2">
                      <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="textarea2"
                        :autosize="{ minRows: 6, maxRows: 6}"
                      >
                      </el-input>
                      <div class="input3-style">
                        <!--<el-button type="primary" plain>图片</el-button>-->
                        <el-button type="success" :disabled="textarea2===''" @click="submit_reply2(item2, item.takeid)" class="button-input3">发表评论</el-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="paginations">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[5, 10, 20, 50, 100]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                background
                :total="content_list.length">
              </el-pagination>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <div class="video-right-content">
              <img src="../../assets/video-img4.png">
              <div class="video-img-text">
                <span>全部帖子</span>
              </div>
            </div>
            <div class="video-right-content">
              <img src="../../assets/video-img3.png">
              <div class="video-img-text">
                <span>上传作业</span>
              </div>
            </div>
            <div class="video-right-content">
              <img src="../../assets/video-img2.png">
              <div class="video-img-text">
                <span>老师参与</span>
              </div>
            </div>
            <div class="video-right-content">
              <img src="../../assets/video-img1.png">
              <div class="video-img-text">
                <span>我的发布</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/header3'
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
      currentPage:1,
      isactive: '',
      pagesize:5,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
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
      teacher_name: '',
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
    handleSizeChange: function (size) {
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage){
      this.currentPage = currentPage;
    },
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
        this.teacher_name = res.data.teacher.teachername
        this.playerOptions.poster = res.data.coursePic.pic
        this.class_title_1 = res.data.teachplanNode.children[0].children[0].pname
        this.isactive = res.data.teachplanNode.children[0].children[0].id
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
    openVideo (item, index) {
      if (item.ptype === '1') {
        this.isactive = item.id
      }
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
  width: 1500px;
  margin: 80px auto;
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
    padding: 50px;
    /*height: 380px;*/
    /*border-bottom: 1px #C1C1C1 solid;*/
    /*border-top: 1px #C1C1C1 solid;*/
    /*margin-top: 50px;*/
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
  .video-content {
    height: 910px;
    background-color: #191919;
  }
  .video-container {
    width: 1500px;
    margin: 0 auto;
    padding-top: 60px;
  }
  .video-header {
    color: white;
    font-size: 36px;
    letter-spacing: 3px;
  }
  .video-container-content {
    /*height: 690px;*/
    /*background-color: white;*/
    margin-top: 60px;
  }
  .video-main {
    width: 1090px;
    background-color: #2d2d2d;
    padding: 0;
    border-right: #2d2d2d solid 1px;
  }
  /*.video-player {*/
    /*height: 100%;*/
    /*width: 100%;*/
  /*}*/
  /*.video-bg {*/
    /*background-color: #333333;*/
  /*}*/
  .video-aside {
    /*width: 410px;*/
    background-color: #333333;
  }
  .aside-header {
    height: 139px;
    padding-left: 10px;
    padding-right: 10px;
    position: relative;
    /*background-color: #333333;*/
  }
  .aside-header-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .aside-content {
    /*height: 458px;*/
    background-color: #2d2d2d;

  }
  .video-footer {
    padding: 20px;
    font-size: 20px;
  }
  .video-span {
    color: #999999;
    margin-right: 30px;
    cursor: pointer;
  }
  .span-icon1 {
    color: rgb(17,204,54);
  }
  .video-span:hover {
    color: rgb(17,204,54);
  }
  .span-icon3 {
    border-right: #999999 solid 1px;
  }
  .class-text {
    color: #999999;
    margin-left: 60px;
    letter-spacing: 3px;
  }
  .footer-right {
    float: right;
    color: #999999;
    border-left: #999999 solid 1px;
  }
  .footer-right i {
    margin-left: 30px;
    cursor: pointer;
  }
  .footer-right i:hover {
    color: rgb(17,204,54);
  }
  .aside-img {
    border-radius: 50%;
    width: 87px;
    float: left;
    margin-left: 20px;
  }
  .aside-header-text {
    float: left;
    margin-left: 30px;
    margin-top: 10px;
  }
  .aside-header-text .aside-header-text1{
    color: white;
    font-size: 22px;
  }
  .aside-header-text .aside-header-text2 {
    margin-top: 10px;
    color: #a1a2a3;
    font-size: 22px;
  }
  .content-tag {
    text-align: center;
    color: #9c9c9c;
    font-size: 22px;
    border-bottom: #27272b solid 1px;
  }
  .tag-col {
    padding-left: 30px;
    padding-right: 30px;
  }
  .mulu-tag {
    padding-top: 15px;
    padding-bottom: 15px;
    color: white;
    border-bottom: #66d5cd solid 1px;
  }
  .biji-tag {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .aside-contents {
    overflow: hidden;
    height: 400px;
    overflow-y: scroll;
    padding-bottom: 10px;
  }
  .aside-contents::-webkit-scrollbar {
    width: 5px;
    /*height: 5px;*/
  }
  .aside-contents::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: #999999;
  }
  .aside-contents::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }
  .content-text {
    color: #9c9c9c;
    padding-top: 20px;
    padding-left: 30px;
    padding-right: 10px;
  }
  .content-class-text {
   padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
  }
  .content-class-text:hover {
    background-color: #333333;
  }
  .addclass {
    color: #66d5cd;
  }
  .aside-footer {
    text-align: center;
  }
  .button-style {
    margin-top: 25px;
    width: 300px;
    background-color: #66d5cd;
    /*color: white;*/
  }
  .button-style {
    border: 0px;
    color: white;
    letter-spacing: 10px;
    font-size: 16px;
  }
  .button-style:hover {
    color: black;
  }
  .content-container {
    width: 1500px;
    margin: 89px auto;
  }
  .content-card {
    border-radius: 5px;
    border: #e8e8e8 solid 2px;
  }
  .content-card-header {

    font-size: 24px;
    border-bottom:  #e8e8e8 solid 2px;
  }
  .content-card-header-text {
    padding: 20px 0 20px 0;
    margin-left: 30px;
  }
  .content-card-header-text {
    color: #919293;
  }
  .content-input {
    height: 483px;
    background-color: #fafafa;
    padding-top: 43px;
    padding-left: 50px;
    padding-right: 50px;
    border-bottom: #e8e8e8 solid 2px;
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
    float: right
  }
  .content-text-peop {
    border-bottom: 1px solid #C1C1C1;padding-top: 30px;padding-bottom: 30px
  }
  .content-img {
    width: 50px;height: 50px;border-radius: 50%;float: left;margin-right: 20px;
  }
  .content-name {
    font-size: 20px;line-height: 50px;
  }
  .content-info {
    margin-top: 10px;margin-left: 70px
  }
  .content-reply {
    margin-top: 10px;margin-left: 70px;font-size: 16px;color: grey
  }
  .content-reply i {
    margin-left: 20px
  }
  .content-span {
    margin-left: 20px;cursor: pointer
  }
  .content-reply-input {
    margin-top: 10px
  }
  .input2-style {
    width: 100%;margin-top: 20px
  }
  .button-input2 {
    float: right
  }
  .content-input3 {
    margin-left: 70px;margin-top: 10px
  }
  .img_class3 {
    width: 50px;height: 50px;border-radius: 50%;float: left;margin-right: 20px;
  }
  .reply_info {
    margin-left: 30px;font-size: 20px;line-height: 50px
  }
  .askuser {
    color: #3a8ee6
  }
  .ask {
    margin-left: 40px
  }
  .reply_info2 {
    margin-top: 10px;margin-left: 70px;font-size: 16px;color: grey
  }
  .reply_info2 i {
    margin-left: 20px;
  }
  .reply_button {
    margin-left: 20px;cursor: pointer
  }
  .reply_input2 {
    margin-top: 10px
  }
  .input3-style {
    width: 100%;margin-top: 20px
  }
  .button-input3 {
    float: right
  }
  .paginations {
    margin-top: 50px;
    text-align: center;
    margin-bottom: 100px;
  }
  .video-right-content {
    height: 173px;
    margin-bottom: 15px;
    position: relative;
    cursor: pointer;
    overflow: hidden;

  }

  .video-right-content img {
    width: 100%;
    height: 100%;
    transition: all 0.6s;
  }
  .video-right-content:hover img {
    transform: scale(1.2);
  }

  .video-img-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 30px;
    transition: all 0.6s;
  }
  .video-right-content:hover .video-img-text {
    color: #66d5cd;
  }
</style>
