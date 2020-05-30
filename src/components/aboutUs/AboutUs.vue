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
                <h3 >中科智禾.青程在线</h3 >
              <h4>—青少年科技编程学习及实践平台</h4>
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;青程在线定位于服务青少年科技编程实践的学习与交互平台，提供在线教与学、在线编程实现、作品擂台分享交流、学习分析与无感评价等多种智能化功能。
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;青程在线为开放式平台，为课程合作伙伴提供课程教学辅助、学生课下实践指导、师生教学与学习分析库。另一方面，为其他类别课程提供使用平台，为科技编程的兴趣学生提供更多的选择和服务。
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平台包括直播、录播、板书式图文教学等方式，可实现在线的编程学习与比赛、具有互动的作品擂台展示交流，涵盖了以 Python 人工智能等科技类实践课程的前沿科技实践内容。
                </p>
            </div>
        </div>
        <!--研究团队-->
        <div class="details">
            <div class="word_text">
                <span>平台定位</span>
            </div>
            <div class="line-text"></div>
          <div class="details-text">
            <el-row>
              <el-col :span="12">
                <div class="details_left">
                  <img src="../../assets/dingwei.jpg">
                </div>
              </el-col>
              <el-col :span="12">
                <div class="details_right">
                  <!--<div style="width:70%;margin-left: 58px;background-color: rgba(0, 0, 0, 0.2);height: 1px;margin-top: 30px"></div>-->
                  <div class="details_right_p">
                    <h3>平台定位于 AI 科技前沿内容</h3>
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;瞄准启动智能社会的AI技术方向，选择人工智能Python为编程语言，以不断进阶的科技实践课程，为青少年科技专长的学习和人工智能的启迪提供教育模式和方案。<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作为人工智能语言，python入门友好且与数学逻辑为基础，在培养科技编程特长时亦可训练解决问题的学习思维，提升综合的学习能力，服务于学生科技能力与科技特长的培养。<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;课程包括：Python编程与计算思维、智能驾驶车、智能机器人、脑控与注意力训练等。<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以Python课程为例，课程分为初级入门、进阶实践、高级项目等不同阶段，针对不同阶段和层次水平的学生。在不同层次的课程中，涉及计算机认知、编程实践、面向问题解决的数学算法分析、计算思维培养等不同阶段的不同方面。在课程项目设计时，与实践问题结合、与芯片或智能硬件结合、与游戏方式的交互对抗程序结合，有益、有趣、能动手、引导方法训练和思考，提升学习能力。如贪吃蛇博弈、智能家居、智能人脸识别、乐高python系列等。
                    </p>
                  </div>

                </div>
              </el-col>
            </el-row>

            <!--<img src="../../assets/tuandui_2.jpg">-->

          </div>

        </div>
        <div class="direction">
            <div class="word_text">
                <span>项目式学习</span>
            </div>
            <div class="line-text"></div>
            <div class="details-text">
              <el-row>
                <el-col :span="12">
                  <div class="direction_word">
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以PBL（Problem-Based Learning method基于项目的学习方法）的项目实践式学习模式，突破单纯知识点的学习和记忆，重点通过围绕解决项目问题的实践方式，引导学生以问题为导向进行科技实践训练，形成在科技编程实践过程中对所学知识的掌握与问题的解决能力。<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;计算机编程的魅力所在是通过不断解决实践问题而进阶的成就感。同时，与书本知识不同，在计算机编程实践中，针对实现同一个功能进行编码设计时，每个人的代码可能都有所不同，这既是编程的魅力所在，也是能启迪思考能力的根本。如果把编写代码的过程比作绘画，那么每个人都是艺术家。<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这也正是国家教育部推动STEAM教育所追求的目标，实现其有效落地。
                    </p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="direction-img">
                    <img src="../../assets/xuexi.jpg">
                  </div>
                </el-col>
              </el-row>

            </div>

            <!--<div style="position: absolute;height: 600px;width: 100%;background-color: rgba(0, 0, 0, 0.3);">-->
                <!---->
            <!--</div>-->


            <!--<div>-->
                <!--<img src="../../assets/table.png">-->
            <!--</div>-->
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
              infoState: false
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
      padding-bottom: 30px;
      background-color: #FCFCFC;
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
</style>

