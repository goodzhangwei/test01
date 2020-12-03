<template>
  <div class="contents">
    <div class="move_header" v-if="navBarFixed">
      <HomeHeader2 :flagInfo="infoState"></HomeHeader2>
    </div>
    <div>
      <HomeHeader :flagInfo="infoState"></HomeHeader>
    </div>
    <div class="bg-img"></div>
    <div class="gongao">
      <img src="../../assets/gongao.png">
    </div>
    <div class="texts">
      <span>如有疑问请致电泰安市科技馆：0538-8413780</span>
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
        var url = 'https://zhongkeruitong.top/towerImg/cms/user/getUserInfo?username=' + this.username
        this.$axios.get(url).then((res) => {
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
    /*background-color: #EDEFF0;*/
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
  .gongao {
    text-align: center;
    margin: 40px;
  }
  .texts {
    margin-left: 300px;
    margin-bottom: 20px;
  }
</style>
