<template>
  <div class="app_container">
    <Header></Header>
    <div class="contaier">
      <el-container>
        <el-aside width="25%">
          <div class="left_head">
            <div class="left_head_picture">
              <img src="../../assets/logo-header2.jpg">
            </div>
            <div class="left_head_name">
              <span>{{username}}</span>
            </div>
          </div>
          <div class="left_container">
            <div class="left_nav">
              <el-menu
                router
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="/userSetting/myLesson">
                  <i class="el-icon-menu"></i>
                  <span slot="title">我的课程</span>
                </el-menu-item>
                <el-menu-item index="/userSetting/personalInformation">
                  <i class="el-icon-document"></i>
                  <span slot="title">个人信息</span>
                </el-menu-item>
                <el-menu-item @click="gotoupdate">
                  <i class="el-icon-document"></i>
                  <span slot="title">录播教学</span>
                </el-menu-item>
                <el-menu-item>
                  <i class="el-icon-document"></i>
                  <span slot="title">直播教学</span>
                </el-menu-item>
              </el-menu>
            </div>
          </div>
        </el-aside>
        <el-main>
          <div class="main_content">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </div>
    <Footer class="footer-style"></Footer>
  </div>
</template>

<script>
  import Header from '@/components/common/header3'
  import Footer from '@/components/common/footer'
import userSettingPopover from '@/components/userSetting/userSettingPopover'
export default {
  name: 'index',
  components: { userSettingPopover, Header, Footer },
  data () {
    return {

    }
  },
  computed: {
    username() {
      if (localStorage.getItem('name') === 'admin') {
        return '教师用户'
      } else {
        return localStorage.getItem('name')
      }
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    gotoCompetition: function () {
      console.log('我要跳转界面了')
      this.$router.push('/codingCompetition')
    },
    gotoupdate () {
      var url = 'http://58.119.112.14:11020/cms/#/course/list?username=' + localStorage.getItem('name')
      window.open(url)
    },
    gotoHomePage: function () {
      console.log('我要跳转界面了')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  .contaier {
    width: 1500px;
    margin: 0 auto;
  }
  a {
    color: #050505;
    text-decoration: none;
  }
  header{
    width: 100%;
    height: 100px;
    background-color: white;
    overflow: hidden;
  }
  nav {
    width: 1400px;
    height: 60px;
    background-color: white;
    margin: 0 auto;
    margin-top: 20px;
  }
  .logo {
    float: left;
    margin-left: 5%;
  }
  .navbar {
    float: left;
    height: 60px;
    line-height: 60px;
    margin-left: 100px;
  }
  .navbar li {
    float: left;
    list-style-type: none;
    margin-left: 150px;
    height: 60px;
    cursor: pointer;
  }
  .logo img {
    height: 50px;
    width: 150px;
  }
  .navbar li span {
    padding:0 8px;
    /*border-bottom: 1px solid red ;*/
    height: 60px;
    display: block;
    cursor: pointer;
  }
  .navbar li span:hover {
    border-bottom: 2px solid #a68b56;
    cursor: pointer;
  }
  .personal {
    float: right;
    height: 60px;
    line-height: 60px;
    margin-right: 15px;
  }
  .left_container {
    padding: 30px;
  }
  .left_head {
    height: 200px;
    /*background-color: #ffffff;*/
    border-right-style: solid;
    border-right-color: #e6e6e6;
    border-right-width: 1px;
    margin: 30px 30px -30px 30px;
    text-align: center;
    padding-top: 30px;
    padding-right: 90px;
  }
  .left_head_picture {
    margin-top: 20px;
  }
  .left_head_name {
    margin-top: 20px;
  }
  .left_head_picture img {
    width: 80px;height: 80px;border-radius: 50%
  }
  .left_nav {
  }
  .el-menu-vertical-demo >>> .el-menu-item{
    font-size: 18px;
  }
  .main_content {
    border-radius: 20px;
    /*height: 600px;*/
    /*background-color: white;*/
  }
  .copyrightContainer {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 20px;
  }
  .footer-style {
    margin-top: 200px;
  }
</style>
