<template>
  <div class="contents">
    <div class="move_header" v-if="navBarFixed">
      <HomeHeader2 :flagInfo="infoState"></HomeHeader2>
    </div>
    <div>
      <HomeHeader :flagInfo="infoState"></HomeHeader>
    </div>
    <div class="bg_img">
      <div  class="bg-img-da">
        <h3 >青程在线服务于合作指南</h3 >
        <div class="line"></div>
        <!--<p>-->
        <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;大数据技术与认知智能实验室专注在大数据与人工智能技术的应用研究领域，旨在建设大数据分析技术研发与应用平台，结合人工智能技术形成系列与行业融合的具有实践引领价值的智能化产品与服务。<br/>-->
        <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室通过可持续的产学研协同创新机制，整合中科院信息科技领域科研专家、山东大学专家教授、中科瑞通等产业资深产品与技术专家，通过发挥在大数据与人工智能技术上的优势，在科技咨询、产品研发、技术服务、以及高端教育培训方向，为行业发展提供整合的数据产品与服务方案。<br/>-->
        <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室定位在前沿科技研发与行业及市场需求相结合，形成助推产业发展的科技智库与产学研协同创新技术实践服务与Ai产品研发平台。<br/>-->
        <!--&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;实验室在与政府、园区、产业对接融合过程中，有效汇聚产业资源和创新需求，逐步搭建科研与产业融合及科技转移转化平台，同时推进大数据与人工智能领域高层次实用型人才培养，实现在产学研融合驱动下政府科技战略实施与产业创新落地标杆和示范。-->
        <!--</p>-->
      </div>

    </div>
    <div class="text_shi">
      <div class="word_text">
        <span>平台简介</span>
      </div>
      <div class="line-text"></div>
      <div class="text_ss">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;青程在线为青少年科技编程学习与特长培养，提供了在线学习平台、Python分阶段课程、科技研学、科技创新比赛指导等服务，
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;科技决定国家竞争力，青少年科技素养与能力提升正成为趋势。平台面向学校、机构、师生，提供定制化高质量的科技编程与实践服务。
        </p>
      </div>
    </div>
    <div class="text_shi">
      <div class="word_text">
        <span>支持在线教学</span>
      </div>
      <div class="line-text"></div>
      <div class="text_ss">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平台提供录播、直播、板书式授课这三种全模式在线教学与学习方式。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教师可上传、发布、修改课程，设置上课时间；学生通过平台学习，通过评论区与老师和其他同学进行多方式在线互动。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.高中生考察探究活动：在提升学生编程实践能力同时，助力高中学生为参加大学综合评价形成高质量的研究性学习及研学旅行成果，结合科技前沿实践完成考察探究活动。
        </p>
      </div>
    </div>
    <div class="text_shi">
      <div class="word_text">
        <span>Python系列课与课程服务</span>
      </div>
      <div class="line-text"></div>
      <div class="text_ss">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;瞄准AI方向，以具有人工智能特征的Python编程课，为青少年科技素养提升及科技特长的培养提供系列进阶的学习服务。
        </p>
        <div class="text-img">
          <img src="../../assets/table.png">
        </div>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;针对学校：提供按阶段定制化的分层课程，同时为科技课程老师进行课程设计培训，结合学习平台助力学校科技课程的顺利开展，线上线下科技研学以及大赛等服务。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;针对辅导机构：提供在线学习平台、编程课、师资辅导与辅助等，以及科技研学及大赛对接等服务。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对于老师：提供PBL项目式课程设计、内容安排、课后练习等辅导与辅助，并通过平台提供在线学生学习指导。
        </p>
      </div>
    </div>
    <div class="text_shi">
      <div class="word_text">
        <span>授课模式</span>
      </div>
      <div class="line-text"></div>
      <div class="text_ss">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不同于学科知识学习，青少年编程突出项目实践模式，突破单纯知识点的学习和记忆，以PBL（Problem-Based Learning method基于项目的学习方法）教法，把知识学习与动手实践结合，通过实践提升编程能力、引导思考与逻辑养成，提升学生综合学习效力。
        </p>
      </div>
    </div>
    <div class="text_shi">
      <div class="word_text">
        <span>科技研学与科技大赛</span>
      </div>
      <div class="line-text"></div>
      <div class="text_ss">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.科技研学与科技考察探究：
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过整合中科院相关实验室及重点大学的科技资源， 提供2～4周深度的科技研学、高级科技项目实践、科技考察探究。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;科技研学与考察探究以线下方式为主体，根据情况采取融合线上+线下模式，为事先准备和研学后持续提升提供便利。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.科技大赛平台与赛项服务：
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;引入多种青少年科技创新大赛，同时针对师生提供比赛辅导。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系与合作：
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话：13381173397
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;微信：
        </p>
        <div class="img4">
          <img src="../../assets/code2.jpg">
        </div>
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
    /*background-color: #FCFCFC;*/
  }
  .move_header {
    background-color: rgba(255, 255, 255, 0.9);position: fixed;width: 100%;z-index: 999
  }
  .bg_img {
    width: 100%;
    height: 600px;
    background-image: url("../../assets/hezuo.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
  }
  .bg_img h3{
    display: block;
    padding-top: 200px;
    /*margin-left: 30%;*/
    font-size:46px;
    font-family:MicrosoftYaHei;
    color: #16bcb4;

  }
  .bg_img h4{
    display: block;
    /*margin-left: 30%;*/
    font-size:30px;
    font-family:MicrosoftYaHei;
    color: white;
  }
  .bg_img .line{
    /*margin-left: 35%;*/
    margin: 0 auto;
    margin-top: 39px;
    /*width:6.25%;*/
    width: 30%;
    height:2px;
    /*background:rgba(65,54,242,1);*/
    background-image: linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%);
  }
  /*.bg_img:hover .line {*/
  /*width: 30%;*/
  /*!*background:rgba(255,153,0,1);*!*/
  /*background-image: linear-gradient( 135deg, #C2FFD8 10%, #465EFB 100%);*/
  /*}*/
  .bg_img .line {
    transition: all 0.6s;
  }
  .bg_img p{
    margin-left: 18.75%;
    margin-top: 30px;
    width:39.79%;
    font-size:14px;
    font-family:MicrosoftYaHei;
    color:rgba(255,255,255,1);
    line-height:24px;
  }
  .details {
    /*height: 550px;*/
    margin-top: 70px;
    background-color: #ffffff;
  }
  .details_left {
    /*width: 50%;*/
    height: 100%;
  }
  .details_left img {
    width: 500px;
    height: 450px;
    float: right;
    border-radius: 4px;
    margin-top: 90px;
  }
  .details_right {
    float: right;
    /*width: 50%;*/
    height: 100%;
  }
  .details_right h4 {
    margin-left: 58px;
    margin-top: 50px;
    font-size: 24px;
  }
  .details_right p {
    margin-left: 58px;
    /*margin-top: 50px;*/
    color:rgba(51,51,51,1);
    line-height:28px;
  }
  .direction {
    /*margin-top: 50px;*/
    margin-bottom: 100px;
    margin-top: 70px;
    height: 400px;
    background-color: #ffffff;
    /*background-image: url("../../assets/yanjiufangxiang.jpg");*/
    /*background-size: 100% 100%;*/
    /*padding-top: 10px;*/
    position: relative;
  }
  .word_text {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .direction_left {
    width: 40%;
    height: 100%;
    float: left;
  }
  .direction_word {
    float: right;
    margin-top: 20px;
  }
  .direction_word p {
    /*font-size: 24px;*/
    line-height: 28px;
    font-size: 20px;
  }
  .direction_right {
    width: 60%;
    max-width: 1500px;
    height: 100%;
    float: right;
  }
  .text_shi {
    /*height: 600px;*/
    margin-top: 70px;
    padding-top: 30px;
    /*padding-bottom: 30px;*/
    /*background-color: #FCFCFC;*/
  }
  .text_ss {
    width: 50%;
    max-width: 1500px;
    margin: 25px auto;
  }
  .text_ss p {
    margin-top: 10px;
    font-size: 22px;
    line-height: 28px;
  }
  .bg-img-da {
    height: 600px;background-color: rgba(0, 0, 0, 0.5);position: absolute;width: 100%;text-align: center
  }
  .line-text {
    width:70%;margin: 20px auto;background-color: rgba(0, 0, 0, 0.2);height: 1px;
    max-width: 1500px;
  }

  .details_right_p {
    /*margin-top: 100px;*/
  }
  .details_right_p p {
    font-size: 20px;
  }
  .details_right_p h3 {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  }
  .details-text {
    width: 60%;
    margin: 0 auto;
    max-width: 1500px;
  }
  .direction-img {
    float: left;
    margin-left: 58px;
  }
  .direction-img img {
    width: 500px;
  }
  .studyimg {
    width: 450px;
  }
  .rowstyle {
    margin-top: 20px;
    text-align: center;
  }
  .img1 {
    width: 450px;
  }
  .img2 {
    width: 450px;
    margin-bottom: 20px;
  }
  .img3 {
    width: 450px;
    height: 310px;
  }
  .img4 {
    text-align: center;
  }
  .img4 img {
    width: 450px;
  }
  .text-img {
    text-align: center;
  }
  .text-img img {
    width: 1000px;
  }
</style>

