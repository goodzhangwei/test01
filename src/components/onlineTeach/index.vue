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
        <h3>在线教学系列</h3 >
        <div class="line"></div>
       
      </div>

    </div>
    <div class="text_shi">
      <div class="word_text">
        <span>录播教学简介</span>
      </div>
      <div class="line-text"></div>
      <div class="text_ss">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教师可以上传已经录制好的课程，也可以长传课件、修改课程基本信息、设置课程课时、设置课程开播时间、发布课程，删除课程等功能。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教师可以上传课程，同时对已经上传的课程进行管理和预览。针对课程管理，可以修改课程基本信息（如：课程名称、适用范围、课程等级、学习模式等）、可以设置课程封面、可以设置课程是否是收费、课程计划（对课程按课时进行划分管理）、
可以设置教师基本信息、可以发布课程、预览发布之后的课程等。
        </p>
        <el-row :gutter="20" class="rowstyle">
          <el-col :span="12">
            <img src="../../assets/lubo1.jpg" class="studyimg1">
            
          </el-col>
          <el-col :span="12">
            <img src="../../assets/lubo2.jpg" class="studyimg1">
          </el-col>
        </el-row>
        <el-row :gutter="20" class="rowstyle">
          <el-col :span="12">
            <img src="../../assets/lubo3.jpg" class="studyimg1">
          </el-col>
          <el-col :span="12">
            <img src="../../assets/lubo4.jpg" class="studyimg1">
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="text_shi">
      <div class="word_text">
        <span>直播教学简介</span>
      </div>
      <div class="line-text"></div>
      <div class="text_ss">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.点击直播教学，获取专属的直播推流地址。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.打开OBS Studio 直播软件进行直播配置。点击右下角“设置”，在‘输出’界面中将比特率设置为2500，将编码器设置为“软件×264”。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.在视频界面将分辨率设置为“1280×720”，将缩放过滤器设置为“两次立方”，fps值设置为30；在监视器界面点击右键“添加”窗口捕获；在“推流”设置里输入url和推流码，点击“开始推流”，开始直播。
        </p>
        <el-row :gutter="20" class="rowstyle">
          <el-col :span="12">
            <img src="../../assets/zhibo1.jpg" class="studyimg1">
            
          </el-col>
          <el-col :span="12">
            <img src="../../assets/zhibo2.jpg" class="studyimg1">
          </el-col>
        </el-row>
        <el-row :gutter="20" class="rowstyle">
          <el-col :span="12">
            <img src="../../assets/zhibo3.jpg" class="studyimg1">
          </el-col>
          <el-col :span="12">
            <img src="../../assets/zhibo4.jpg" class="studyimg1">
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="buttons">
         <el-button type="success" @click="gotoTiyan">立即体验</el-button>
          <el-button type="danger" @click="applyShengji">申请升级权限</el-button>
    </div>
   

    <!-- <div class="text_shi">
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
    </div> -->
    <Footer/>

  

    <el-dialog :visible.sync="showModel" title="提交资料" width="600px" >
      <div>
        <el-form :model="submitStudyInfo" :rules="rules" ref="submitStudyInfo" label-width="100px">
          <el-form-item label="真实姓名" prop="name">
            <el-input v-model="submitStudyInfo.name" placeholder="请输入您的姓名"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="submitStudyInfo.phone" placeholder="请输入您的手机号"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="submitStudyInfo.email" placeholder="请输入您的邮箱"></el-input>
          </el-form-item>
          <el-form-item label="联系地址" prop="address">
            <el-input v-model="submitStudyInfo.address" placeholder="请输入您的地址"></el-input>
          </el-form-item>
          
          <el-form-item>
            <el-button size="mini" @click="backTable">返回</el-button>
            <el-button size="mini" type="primary" @click="submitForm('submitStudyInfo')">提交</el-button>
            
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>


  </div>
</template>

<script>
import { regionData, CodeToText, TextToCode } from 'element-china-area-data'

  import HomeHeader from '@/components/common/header'
  import HomeHeader2 from '@/components/common/header2'
  import Footer from '@/components/common/footer'
  export default {
    name: "OnlineTeach",
    components: {
      Footer,
      HomeHeader,
      HomeHeader2
    },
    data () {
      return {
        options: regionData,
        selectedOptions: [],
        navBarFixed: false,
        infoState: false,
        bannerH: '',
        showModel: false,
        gradeList: ["五年级", "六年级", "初一", "初二", "初三", "高一", "高二", "高三"],
        submitStudyInfo: {
          name: '',   // 姓名
          phone: '',    // 手机号
          school: '', // 学校名称
          grade: '',   // 年级
          addr: '',
          username: ''
        },
        rules: {
          name:[
            { required: true, message: "姓名不能为空", trigger: "blur" },
          ],
          phone:[
            { required: true, message: "手机号不能为空", trigger: "blur" },
            {
                pattern: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
                message: '请输入正确的手机号码或者座机号',
            },
          ],
          email:[
            { required: true, message: "邮箱不能为空", trigger: "blur" },
            {
                type: 'email',
                message: '请输入正确的邮箱地址',
                trigger: ['blur', 'change'],
            },
          ],
          address: [
            { required: true, message: "地址不能为空", trigger: "blur" },
          ]
          
        }
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
      handleChange (arr) {
        console.log(arr)
        console.log(CodeToText[arr[0]], CodeToText[arr[1]], CodeToText[arr[2]])
        this.submitStudyInfo.addr = `${CodeToText[arr[0]]}-${CodeToText[arr[1]]}-${CodeToText[arr[2]]}`
      },
      getChange(e) {
        console.log(e)
        this.submitStudyInfo.grade = e
      },
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
      
      resetForm() {
        this.submitStudyInfo.name = ''
        this.submitStudyInfo.address = ''
        this.submitStudyInfo.phone = ''
        this.submitStudyInfo.username = ''
        this.submitStudyInfo.email = ''
      },
      submitForm() {
        // var params = {
        //   grade: 
        // }
        //console.log(this.submitStudyInfo)
        this.submitStudyInfo.username = localStorage.getItem('name')
        console.log(this.submitStudyInfo)
        //var url = `http://58.119.112.14:11020/cms/ScienceStudy/ScienceStudy/add?addr=${this.submitStudyInfo.addr}&grade=${this.submitStudyInfo.grade}&name=${this.submitStudyInfo.name}&school=${this.submitStudyInfo.school}&tel=${this.submitStudyInfo.tel}`
        //var url = "http://58.119.112.14:11020/cms/ScienceStudy/ScienceStudy/add"
        var url = "http://58.119.112.14:11020/cms/chen/auditing/add"
        var params = JSON.stringify(this.submitStudyInfo)
        this.$axios.post(url, params, {headers: {'Content-Type': 'application/json'}}).then((res) => {
          console.log("QQQ", res.data)
          if(res.data.code === 10000) {
            this.showModel = false
            this.resetForm()
            this.$message({
              message: res.data.message,
              type: 'success'
            });
          } else {
             this.$message({
              message: res.data.message,
              type: 'warning'
            });
          }
        })
        

      },
      backTable() {
        this.showModel = !this.showModel
        this.resetForm()
      },
      gotoTiyan() {
           var url = 'http://58.119.112.14:11020/cms/#/course/list?username=test-account'
            window.open(url)
      },
      applyShengji() {
        this.showModel = true
        
      }
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
    background-image: url("../../assets/onlineTeach.png");
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
  .studyimg1 {
      width: 450px;
      height:337px;
      
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
  .zixunBtn {
    display: block; 
    position: fixed;
    box-sizing: border-box;
    font-size: 13px;
    color: rgb(255, 255, 255);
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    z-index: 1000000000;
    border-width: 1px 1px 0px;
    border-top-style: solid;
    border-right-style: solid;
    border-left-style: solid;
    border-top-color: rgba(0, 0, 0, 0.1); 
    border-right-color: rgba(0, 0, 0, 0.1);
    border-left-color: rgba(0, 0, 0, 0.1);
    border-image: initial; 
    border-bottom-style: initial; 
    border-bottom-color: initial; 
    background-color: rgb(48, 122, 232);
    width: 40px; 
    height: auto; 
    padding: 10px 0px; 
    right: 0px; 
    top: 398px;
  }
  .zixunnSpan {
    display:block;
    float:left;
    width:24px;
    height:24px;
    margin:0 7px 10px;
  }
  .zixunImg {
   width:80%;
   height:80%;
  }
  .zixunSpan2 {
    display:block;
    float:left;
    background-color:rgba(0, 0, 0, 0.08);
    width:100%;
    height:1px;
    vertical-align:middle;
    width:1px;
    height:100%;
    
    
  }
  .zixunSpan3 {
    display: block;
    float: left;
    margin: 0 10px;
    font-size: 13px;
    color: #fff;
    width: 40px;
    height: auto;
    word-break: break-all;
    line-height: 20px;
    letter-spacing: 24px;
    overflow-y: auto;
    overflow-x: hidden;
    margin-top: 10px;
    padding-left: 2px;
  }
  .zixunSpan4 {
    display: none;
    position: absolute;
    top: -13px;
    right: -13px;
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    color: #fff;
    border-radius: 15px;
    background-color: #ff3b30;
    left: -13px;
  }
  .area >>> .el-cascader {
    width:390px;
  }
  .area >>> .el-select {
     width:390px;
  }
  .buttons {
     text-align: center;
     margin-top: 80px; 
     margin-bottom: 100px;
  }
  
  
                
</style>

