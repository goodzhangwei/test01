<template>
  <div>
    <header>
      <nav>

        <div class="logo">
          <div style="float: left">
            <i class="iconfont ymq-iconQ" style="font-size: 35px;color: #16bcb4;font-weight: bolder;line-height: 40px"></i>
          </div>
          <div style="float: left;width: 150px">
            <img src="../../assets/image1.png">
            <div style="font-size: 10px;color: #16bcb4;font-weight: bolder;letter-spacing: 2px;">智慧编程 · 青程倾心</div>
          </div>

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
      flag_login: '未登录',
      flag_state: true,
    }
  },
  props: {
    flags: String
  },
  created () {
    this.flag_login = localStorage.getItem('flag_class')
    if (localStorage.getItem('flag_class') === null) {
      this.flag_state = true
    } else {
      this.flag_state = false
    }
  },
  mounted () {
  },
  methods: {
    goToCourseIndex: function () {
      console.log('我要跳转界面了')
      this.$router.push('/coursestudy')
    },
    gotoAllclasses: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/allclasses')
      }
      console.log('我要跳转界面了')

    },
    gotoHomepage () {
      this.$router.push('/')
    },
    gotoCompetition: function () {
      console.log('我要跳转界面了')
      this.$router.push('/codingCompetition')
    },
  }
}
</script>

<style scoped>
  header{
    height: 70px;
    background-color: white;
    overflow: hidden;
  }
  nav {
    width: 1400px;
    height: 40px;
    background-color: white;
    margin: 0 auto;
    margin-top: 15px;
  }
  .logo {
    float: left;
    margin-left: 5%;
    width: 200px;
    text-align: center;
  }
  .navbar {
    float: left;
    height: 40px;
    line-height: 40px;
    margin-left: 100px;
  }
  .navbar li {
    float: left;
    list-style-type: none;
    margin-left: 150px;
    height: 40px;
    cursor: pointer;
  }
  .logo img {
    height: 35px;
  }
  .navbar li span {
    padding:0 8px;
    /*border-bottom: 1px solid red ;*/
    height: 40px;
    display: block;
    cursor: pointer;
  }
  .navbar li span:hover {
    border-bottom: 2px solid #a68b56;
    cursor: pointer;
  }
  .personal {
    float: right;
    height: 40px;
    line-height: 40px;
    margin-right: 15px;
  }
</style>
