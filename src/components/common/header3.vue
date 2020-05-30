<template>
  <div>
    <div class="header-video">
      <div class="header-text">
        <img src="../../assets/header-logo.png" class="header-img" @click="gotoHomepage">
        <div class="header-text-center">
          <span @click="gotoHomepage">首页</span>
          <span @click="gotoAllclasses">全部课程</span>
          <span @click="gotoCompetition">编程比赛</span>
          <span @click="gotoWork">作品擂台</span>
          <span @click="gotoWorkUpdate">作品提交</span>
        </div>
        <el-input
          placeholder="请搜索课程或关键字"
          v-model="input1" class="header-input">
          <i slot="suffix" class="el-input__icon el-icon-search input-icon"></i>
        </el-input>
        <div class="header-name">
          <user-setting-popover v-if="flag_login === '已登录'"></user-setting-popover>
          <Logout v-if="flag_login !== '已登录'"></Logout>
        </div>
      </div>
    </div>
    <!--<div class="navbar-wrapper">-->
      <!--<div class="container">-->

        <!--<nav class="navbar navbar-inverse navbar-static-top nav_border">-->
          <!--<div class="container">-->
            <!--<div class="navbar-header">-->
              <!--<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">-->
                <!--<span class="sr-only">Toggle navigation</span>-->
                <!--<span class="icon-bar"></span>-->
                <!--<span class="icon-bar"></span>-->
                <!--<span class="icon-bar"></span>-->
              <!--</button>-->
              <!--<a class="navbar-brand" href="#">LOGO</a>-->
            <!--</div>-->
            <!--<div id="navbar" class="navbar-collapse collapse nav_ul">-->
              <!--<ul class="nav navbar-nav ">-->
                <!--<li  @click="gotoHomepage"><a>首页</a></li>-->
                <!--<li @click="gotoAllclasses"><a>全部课程</a></li>-->
                <!--<li @click="gotoCompetition"><a>编程比赛</a></li>-->
                <!--<li><a>作品擂台</a></li>-->
                <!--&lt;!&ndash;<li><a>关于我们</a></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="dropdown">&ndash;&gt;-->
                <!--&lt;!&ndash;<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">作品擂台 <span class="caret"></span></a>&ndash;&gt;-->
                <!--&lt;!&ndash;<ul class="dropdown-menu">&ndash;&gt;-->
                <!--&lt;!&ndash;<li><a href="#">Action</a></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><a href="#">Another action</a></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><a href="#">Something else here</a></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li role="separator" class="divider"></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li class="dropdown-header">Nav header</li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><a href="#">Separated link</a></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><a href="#">One more separated link</a></li>&ndash;&gt;-->
                <!--&lt;!&ndash;</ul>&ndash;&gt;-->
                <!--&lt;!&ndash;</li>&ndash;&gt;-->
              <!--</ul>-->
              <!--<ul class="nav navbar-nav ul2_nav">-->
                <!--<li>-->
                  <!--<user-setting-popover v-if="flag_login === '已登录'"></user-setting-popover>-->

                  <!--<a v-if="flag_login !== '已登录'">-->
                    <!--<Logout ></Logout>-->
                  <!--</a>-->
                <!--</li>-->

              <!--</ul>-->
            <!--</div>-->
          <!--</div>-->
        <!--</nav>-->

      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import userSettingPopover from '@/components/userSetting/userSettingPopover2'
  import Logout from '@/components/userSetting/logout'
  export default {
    name: 'header3',
    components: { userSettingPopover, Logout },
    data () {
      return {
        flag_login: '未登录',
        flag_state: true,
        input1: '',
        infoState: false
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
      this.getInfo()
    },
    methods: {
      getInfo() {
        if (this.flag_state === false) {
          var url = 'https://zhongkeruitong.top/towerImg/cms/user/getUserInfo?username=' + localStorage.getItem('name')
          this.$axios.get(url).then((res) => {
            // this.$store.dispatch('changeMsg', res.data.userInfo.headimg);
            this.infoState = res.data.infoState
          })
        }
      },
      openInfo() {
        this.$confirm('请尽快完善个人资料,完善个人资料后开放此模块', '提示信息', {
          confirmButtonText: '立即前往',
          type: 'warning',
          center: true,
        }).then(() => {
          this.$router.push('/userSetting/personalInformation')
        }).catch(() => {
        })
      },
      goToCourseIndex: function () {
        console.log('我要跳转界面了')
        this.$router.push('/coursestudy')
      },
      gotoAllclasses: function () {
        if (this.flag_state === true) {
          alert('请先登录！')
          this.$router.push('/login')
        } else {
          this.$router.push('/userSetting/myLesson')
        }
        console.log('我要跳转界面了')

      },
      gotoWork () {
        if (this.flag_state === true) {
          alert('请先登录！')
          this.$router.push('/login')
        } else {
          this.$router.push('/WorkIndex')
        }
        console.log('我要跳转界面了')
      },
      gotoWorkUpdate () {
        if (this.flag_state === true) {
          alert('请先登录！')
          this.$router.push('/login')
        } else {
          if (this.infoState === false) {
            this.openInfo()
          } else {
            this.$router.push('/WorkUpdate')
          }

        }
        console.log('我要跳转界面了')
      },
      gotoHomepage () {
        this.$router.push('/')
      },
      gotoCompetition: function () {
        if (this.flag_state === true) {
          alert('请先登录！')
          this.$router.push('/login')
        } else {
          this.$router.push('/competition')
        }
        console.log('我要跳转界面了')
      },
      gotoAboutUs() {
        this.$router.push('/AboutUs')
      }

    }
  }
</script>

<style scoped>
  .header-video {
    width: 100%;
    height: 80px;
    background-color: #66d5cd;
  }
  .header-text {
    width: 1500px;
    margin: 0 auto;
  }
  .header-img {
    width: 200px;
    float: left;
    margin-top: 10px;
    cursor: pointer;
  }
  .header-text-center {
    color: white;
    line-height: 80px;
    font-size: 24px;
    float: left;

  }
  .header-text-center span {
    margin-left: 70px;
    cursor: pointer;
  }
  .header-input {
    width: 200px;
    line-height: 80px;
    margin-left: 70px;
  }
  .input-icon {
    color: black;
  }
  .header-name {
    float: right;
    line-height: 80px;
  }
  /*@import "carousel.css";*/
  /*.nav li {*/
    /*margin-right: 80px;*/
  /*}*/
  /*.nav li a {*/
    /*color: white;*/
    /*cursor: pointer;*/
    /*font-size: 20px;*/
  /*}*/
  /*.nav li a:hover {*/
    /*color: #16bcb4;*/
    /*font-weight: bolder;*/
  /*}*/
  /*.container {*/
    /*width: 100%;*/

  /*}*/
  /*.navbar {*/
    /*background-color: rgba(43,51,59, 1);*/
    /*!*padding: 5px;*!*/
  /*}*/
  /*.nav_ul {*/
    /*!*margin-left: 10%;*!*/
    /*margin-left: 600px;*/
  /*}*/
  /*.ul2_nav {*/
    /*margin-right: 20px;*/
    /*float: right;*/
  /*}*/
  /*.nav_border {*/
    /*border-bottom: rgba(0, 0, 0, 0);*/
  /*}*/
  /*!*.nav>li>a {*!*/
  /*!*padding: 17px 0;*!*/
  /*!*}*!*/
</style>
