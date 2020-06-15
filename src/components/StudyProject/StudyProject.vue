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
        <h3 >科技研学系列</h3 >
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
        <span>研学简介</span>
      </div>
      <div class="line-text"></div>
      <div class="text_ss">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过整合中科院相关实验室及重点大学的科技资源，为学生提供深度的科技研学、高级科技项目实践、学术论文的科技研究探索机会。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;结合学生的科技实践方向，推荐到中科院或大学相关合作实验室，开展为期2-4周的科技前沿实践研学活动。线下研学后，还将通过平台定期对学生进行指导，促进其形成科技特长成果。
        </p>
      </div>
    </div>
    <div class="text_shi">
      <div class="word_text">
        <span>一、研学内容与成果</span>
      </div>
      <div class="line-text"></div>
      <div class="text_ss">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.进阶的实践项目：按照学生科技兴趣方向与基础，设定好高阶的实践项目，在实验室的导师指导下，完成既定的任务，形成对项目的整体实践与掌握。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.科技写作与解决问题能力培养：针对有写作兴趣与能力的同学，在导师指导下，完成对某一实践课题的调研、分析、验证等环节，抓住主题基础上开展科技论文写作，形成在相应期刊的发表。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.高中生考察探究活动：在提升学生编程实践能力同时，助力高中学生为参加大学综合评价形成高质量的研究性学习及研学旅行成果，结合科技前沿实践完成考察探究活动。
        </p>
      </div>
    </div>
    <div class="text_shi">
      <div class="word_text">
        <span>二、时间安排与成果</span>
      </div>
      <div class="line-text"></div>
      <div class="text_ss">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;线下活动根据情况安排在暑假、寒假或周末时间，后续线上提供持续指导学习。学习成果将以专家项目鉴定、专家评价意见、专家推荐项目、学术论文等呈现。
        </p>
        <el-row :gutter="20" class="rowstyle">
          <el-col :span="12">
            <img src="../../assets/studyimg1.png" class="studyimg">
          </el-col>
          <el-col :span="12">
            <img src="../../assets/studyimg2.png" class="studyimg">
          </el-col>
        </el-row>
        <el-row :gutter="20" class="rowstyle">
          <el-col :span="12">
            <img src="../../assets/studyimg3.png" class="studyimg">
          </el-col>
          <el-col :span="12">
            <img src="../../assets/studyimg4.png" class="studyimg">
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="text_shi">
      <div class="word_text">
        <span>三、编程大赛</span>
      </div>
      <div class="line-text"></div>
      <div class="text_ss">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据情况组织参加如中科院ACME大赛、信息奥赛等活动，检验学生科技实践成果与收获。
        </p>
        <el-row :gutter="20" class="rowstyle">
          <el-col :span="12">
            <img src="../../assets/studyimg5.png" class="img1">
          </el-col>
          <el-col :span="12">
            <img src="../../assets/studyimg6.png" class="img2">
            <img src="../../assets/studyimg7.png" class="img3">
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="text_shi">
      <div class="word_text">
        <span>合作模式</span>
      </div>
      <div class="line-text"></div>
      <div class="text_ss">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为学生提供针对性和定制化的Python课程系列、研学服务、科技大赛辅导等，致力于为学校和老师提供高质量的科技资源。欢迎与相关方开展多层次合作。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;联系方式：
        </p>
        <div class="img4">
          <img src="../../assets/studyimg8.png">
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
        console.log(scrollTop)
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
    /*background-color: #FCFCFC;*/
  }
  .move_header {
    background-color: rgba(255, 255, 255, 0.9);position: fixed;width: 100%;z-index: 999
  }
  .bg_img {
    width: 100%;
    height: 600px;
    background-image: url("../../assets/bg_23.jpg");
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
</style>

