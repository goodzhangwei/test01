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
        <span @click="gotoupdate" v-show="role === '1'">录播教学</span>
        <span @click="gotolive" v-show="role === '1'">直播教学</span>
        <el-divider class="divider-style"></el-divider>
        <div class="function_item">
          <div class="functionLogo">
            <i class="el-icon-unlock"></i>
          </div>
          <div class="functionTitle">
            <el-button type="text">修改密码</el-button>
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
        <img src="../../assets/logo-header2.jpg" class="img-header">
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
  name: 'userSettingPopover',
  data () {
    return {
      role: '',
      name: '',
      LiveUrl: '',
      dialogVisible: false
    }
  },
  created () {
    this.role = localStorage.getItem('role')
    if (localStorage.getItem('name') === 'admin') {
      this.name = '教师用户'
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
  methods: {
    gotoUserSetting: function () {
      console.log('我要跳转界面了')
      this.$router.push('/userSetting')
    },
    gotoMyclass: function () {
      console.log('我要跳转界面了')
      this.$router.push('/userSetting/myLesson')
    },
    gotoLiveclass: function () {
      console.log('我要跳转界面了')
      this.$router.push('/userSetting/liveLesson')
    },
    gotoInformation: function () {
      console.log('我要跳转界面了')
      this.$router.push('/userSetting/personalInformation')
    },
    gotoupdate () {
      var url = 'http://58.119.112.14:11020/cms/#/course/list?username=' + this.name
      window.open(url)
    },
    gotolive () {
      var url = 'http://58.119.112.14:11020/cms/video/pushVideo?username=' + this.name
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
      this.$router.go(0)
      this.$message.info('已退出')
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
    width: 40px;height: 40px;margin-right:20px;border-radius: 50%;
  }
  .name-text {
    float: right;color: white;
    font-size: 20px;
    margin-top: 10px;
  }
  .divider-style {
    /*padding-top: 10px;*/
  }
</style>
