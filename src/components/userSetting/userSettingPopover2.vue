<template>
  <div class="appContainer">
    <el-popover
      placement="bottom"
      width="200"
      trigger="hover">
      <div class="content">
        <!--        <span style="font-weight: bolder">当前用户：</span>-->
        <!--        <span>{{this.toPopoverData}}</span>-->
        <span @click="gotoMyclass">我的课程</span>
        <!--<span @click="gotoLiveclass">我的直播</span>-->
        <span @click="gotoInformation">个人信息</span>
        <span @click="gotoupdate" v-show="role === '1'">直播教学</span>
        <span @click="gotolive" v-show="role === '1'">录播教学</span>
        <el-divider></el-divider>
        <div class="function_item">
          <div class="functionLogo">
            <i class="el-icon-unlock"></i>
          </div>
          <div class="functionTitle">
            <el-button type="text" @click="gotoupdatePass">修改密码</el-button>
          </div>
        </div>
        <div class="function_item">
          <div class="functionLogo">
            <i class="el-icon-open"></i>
          </div>
          <div class="functionTitle">
            <el-button type="text" @click="logout">退出登录</el-button>
          </div>
        </div>
      </div>
      <div class="personal" slot="reference" >
        <img :src="headerImg" class="img-header">
        <span class="name-text">
            {{name}}
            </span>

      </div>
      <!--      <i class="el-icon-s-custom" slot="reference"></i>-->
      <!--      <span slot="reference">杨启航</span>-->
    </el-popover>
    <el-dialog
      title="直播推流地址"
      :visible.sync="dialogVisible"
      :modal="false"
      width="30%">
      <span>{{LiveUrl}}</span>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" data-clipboard-action="copy" class="cobyOrderSn" :data-clipboard-text='LiveUrl' @click="copyUrl" >复制URL</el-button>
          </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    inject:['reload'],
    name: 'userSettingPopover',
    data () {
      return {
        role: '',
        name: '',
        LiveUrl: '',
        dialogVisible: false,
        username: '',
        headerImg: '',
        infoState: false
      }
    },
    created () {
      this.role = localStorage.getItem('role')
      this.username = localStorage.getItem('name')
      if (localStorage.getItem('name') === 'admin') {
        this.name = '管理员'
      } else {
        this.name = localStorage.getItem('name')
      }
      // this.name = localStorage.getItem('name')
    },
    // computed: {
    //   name() {
    //     if (localStorage.getItem('name') === 'admin') {
    //       return '教师用户'
    //     } else {
    //       return localStorage.getItem('name')
    //     }
    //   }
    // },
    mounted() {
      this.getInfo()
    },
    methods: {
      gotoUserSetting: function () {
        console.log('我要跳转界面了')
        this.$router.push('/userSetting')
      },
      gotoMyclass: function () {
        if(this.infoState === false) {
          this.openInfo()
        } else {
          this.$router.push('/userSetting/myLesson')
        }
      },
      gotoLiveclass: function () {
        if(this.infoState === false) {
          this.openInfo()
        } else {
          this.$router.push('/userSetting/liveLesson')
        }

      },
      gotoInformation: function () {
        this.$router.push('/userSetting/personalInformation')
      },
      gotoupdate () {
        if(this.infoState === false) {
          this.openInfo()
        } else {
          var url = 'http://58.119.112.14:11020/cms/#/course/list?username=' + this.username
          window.open(url)
        }

      },
      gotolive () {
        var url = 'https://www.zhongkeruitong.top/towerImg/cms/video/pushVideo?username=' + this.username
        this.$axios.get(url).then((res) => {
          this.LiveUrl = res.data
          this.dialogVisible = true
        })
      },
      copyUrl () {
        let _this = this;
        let clipboard = new this.clipboard(".cobyOrderSn");
        clipboard.on('success', function () {
          _this.dialogVisible = false
          _this.$message.success('复制成功')
          clipboard.destroyed()
        })
        clipboard.on('error', function () {
          _this.$message.error('复制失败')
        })
        clipboard.destroyed()
      },
      logout () {
        localStorage.clear()
        this.$router.push('/')
        this.reload()
        this.$message.info('已退出')
      },
      getInfo() {
        var url = 'https://zhongkeruitong.top/towerImg/cms/user/getUserInfo?username=' + this.username
        this.$axios.get(url).then((res) => {
          // this.$store.dispatch('changeMsg', res.data.userInfo.headimg);
          localStorage.setItem('headimg', res.data.userInfo.headimg)
          this.headerImg = res.data.userInfo.headimg
          this.infoState = res.data.infoState
        })
      },
      openInfo() {
        this.$confirm('请尽快完善个人资料', '提示信息', {
          confirmButtonText: '立即前往',
          type: 'warning',
          center: true,
        }).then(() => {
          this.$router.push('/userSetting/personalInformation')
        }).catch(() => {
        })
      },
      gotoupdatePass() {
        this.$router.push('/userSetting/UpdatePassword')
        console.log('修改密码')
      }
    }
  }
</script>

<style scoped>
  a {
    color: white;
    text-decoration: none;
  }
  .content{
    text-align: center;
    font-size: 16px;
  }
  .function_item{
    float: left;
    display: inline-block;
    font-size: 16px;
  }
  .functionLogo{
    float: left;
    margin-left: 30px;
  }
  .functionTitle{
    float: left;
    margin-left: 60px;
    margin-top: -10px;
  }
  .content span {
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .img-header {
    width: 50px;height: 50px;margin-right:20px;border-radius: 50%;
  }
  .name-text {
    float: right;color: white;
    font-size: 20px;
    margin-top: 5px;
  }
</style>
