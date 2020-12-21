<template>
  <div class="contents">
    <div class="move_header" v-if="navBarFixed">
      <HomeHeader2 :flagInfo="infoState"></HomeHeader2>
    </div>
    <div>
      <HomeHeader :flagInfo="infoState"></HomeHeader>
    </div>
    <div class="bg-img"></div>
    <div class="link-content">
      <h1>友情链接</h1>
      <div class="friend-links">
        <el-row>
          <el-col :span="8">
            <a href="http://istpa.cas.cn" target="_blank">中科院智能科学与技术科普联盟</a>
          </el-col>
          <el-col :span="8">
            <a href="http://ailab.sdu.edu.cn" target="_blank">山东大学大数据与认知之智能实验室</a>
          </el-col>
          <el-col :span="8">
            <a href="http://www.iscas.ac.cn" target="_blank">中国科学院软件研究所协同创新中心</a>
          </el-col>
        </el-row>
        <el-row class="rowstyle">
          <el-col :span="8">
            <a href="http://yjs.sict.ac.cn" target="_blank">中国科学院沈阳计算所教育中心</a>
          </el-col>
          <el-col :span="8">
            <a href="http://www.takjg.com" target="_blank">山东省泰安市科技馆</a>
          </el-col>
          <el-col :span="8">
            <a href="http://www.lystm.org.cn" target="_blank">山东省临沂市科技馆</a>
          </el-col>
        </el-row>
      </div>
    </div>
    <Footer/>

  </div>
</template>

<script>
  import HomeHeader from '@/components/common/header'
  import HomeHeader2 from '@/components/common/header2'
  import Footer from '@/components/common/footer'
  export default {
    name: "AboutUs",
    components: {
      Footer,
      HomeHeader,
      HomeHeader2
    },
    data () {
      return {
        navBarFixed: false,
        infoState: false,
        bannerH: ''
      }
    },
    mounted () {
      window.addEventListener('scroll', this.watchScroll)
      this.setBannerH()
      window.addEventListener('resize', () => {
        this.setBannerH()
      }, false)
      this.getInfo()
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
        //console.log(scrollTop)
      },
      getInfo() {
        var url = `http://58.119.112.14:11020/cms/system/user/${localStorage.getItem('userId')}`
        this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
          // this.$store.dispatch('changeMsg', res.data.userInfo.headimg);
          this.infoState = res.data.infoState
        })
      },
    }
  }
</script>

<style scoped>
  .contents {
    /*width: 100%;*/
    /*height: 100%;*/
    background-color: #EDEFF0;
  }
  .move_header {
    background-color: rgba(255, 255, 255, 0.9);position: fixed;width: 100%;z-index: 999
  }
  .bg-img {
    width: 100%;
    height: 64px;
    background-image: url("../../assets/class_bg3.jpg");
    background-size: cover;
    background-position: center;
  }
  .link-content {
    width: 1000px;
    margin: 20px auto;
    height: 900px;
    background-color: white;
    padding: 10px 50px 50px;
  }
  .link-content h1{
    font-size: 22px;
    line-height: 53px;
    color: #363d40;
    border-bottom: 1px solid #eceff0;
    margin-bottom: 30px;
  }
  .friend-links {
    padding: 0 20px;
    line-height: 60px;
  }
  .friend-links a {
    color: #1c1f21;
    font-size: 16px;
  }
  .rowstyle {
    margin-top: 20px;
  }
</style>
