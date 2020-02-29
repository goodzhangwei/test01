<template>
  <div>
    <header>
      <nav>
        <div class="logo">
          <img src="../../assets/new.png">
        </div>
        <div class="navbar">
          <ul>
            <li @click="gotoHomepage"><span>首页</span></li>
            <li @click="gotoAllclasses"><span>全部课程</span></li>
            <li @click="gotoCompetition"><span>编程比赛</span></li>
          </ul>
        </div>
        <div class="personal">
          <user-setting-popover v-show="flag_login === '已登录'"></user-setting-popover>
          <Logout v-show="flag_login !== '已登录'"></Logout>
          <!--          <el-button @click="gotonima">点我跳</el-button>-->
          <!--          <a href="#"><img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;margin-right:20px;border-radius: 50%">杨启航</a>-->
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import userSettingPopover from '@/components/userSetting/userSettingPopover'
import Logout from '@/components/userSetting/logout'
export default {
  name: 'header',
  components: { userSettingPopover, Logout },
  data () {
    return {
      flag_login: '未登录'
    }
  },
  props: {
    flags: String
  },
  created () {
    this.flag_login = localStorage.getItem('flag_class')
  },
  mounted () {
  },
  methods: {
    goToCourseIndex: function () {
      console.log('我要跳转界面了')
      this.$router.push('/coursestudy')
    },
    gotoAllclasses: function () {
      console.log('我要跳转界面了')
      this.$router.push('/allclasses')
    },
    gotoHomepage () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
  header{
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
</style>
