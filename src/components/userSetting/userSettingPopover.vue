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
        <span @click="gotoupdate" v-show="role === '1'">上传课程</span>
        <el-divider style="padding-top: 10px"></el-divider>
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
        <a href="#">
          <img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;margin-right:20px;border-radius: 50%">
          <span style="display: block;float: right;">
            {{name}}
          </span>

        </a>
      </div>
<!--      <i class="el-icon-s-custom" slot="reference"></i>-->
<!--      <span slot="reference">杨启航</span>-->
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'userSettingPopover',
  data () {
    return {
      role: '',
      name: ''
    }
  },
  created () {
    this.role = localStorage.getItem('role')
    this.name = localStorage.getItem('name')
  },
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
      var url = 'http://58.119.112.14:11030/cms/#/course/list?username=' + this.name
      window.open(url)
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
    color: #050505;
    text-decoration: none;
  }
  .content{
    text-align: center;
  }
  .function_item{
    float: left;
    display: inline-block;
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

</style>
