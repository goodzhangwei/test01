<template>
    <div>
      <div class="bgstyle" v-show="citys === '临沂市'">
        <div class="cards">
          <div class="title-cards">
            <span>提示</span>
          </div>
          <div class="content-cards">
            <i class="iconfont ymq-icontixingshixin iconstyle"></i>
            <span>首届临沂市青少年编程大赛作品提交已经截止，若有其他问题请致电临沂市科技馆</span>
          </div>
          <div class="content-cards">
            <span>联系方式：0539-8605602</span>
          </div>
          <el-button type="primary" class="button-re" @click="gotohome">返回主页</el-button>
        </div>
      </div>
      <Header></Header>
      <div class="content-words">
        <div class="content-work">
          <el-steps :active="active" finish-status="success" class="steps" align-center>
            <el-step :title="title1" description="填写基础信息" class="description" icon="el-icon-edit">
            </el-step>
            <el-step :title="title2" description="上传作品" class="description" icon="el-icon-upload">
            </el-step>
            <el-step :title="title3" description="查看作品信息" class="description" :status="status3" icon="el-icon-data-analysis"></el-step>
          </el-steps>
        </div>
        <div>
          <el-alert
            title="请认真填写下列基本信息，在截止日期之前参赛选手可以重复提交"
            type="warning"
            class="alert-style"
            v-show="active === 0"
            center
            show-icon>
          </el-alert>
          <el-form ref="form" :model="form" class="form-style" label-width="100px" :rules="rules" v-show="active===0">
            <el-form-item class="form-item-style" label="作品名称：" prop="projectname">
              <el-input placeholder="请填写作品名称" class="input-style" v-model="form.projectname"></el-input>
            </el-form-item>
            <el-form-item class="form-item-style" label="小组名称：" prop="groupname">
              <el-input placeholder="请填写小组名称或者作品上传者姓名" class="input-style" v-model="form.groupname"></el-input>
            </el-form-item>
            <el-form-item class="form-item-style" label="参赛类别：" prop="majorname">
              <el-select placeholder="请选择参赛类别" class="select-style input-style" v-model="form.majorname"  @change="changeOne">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="form-item-style" label="参赛项目：" prop="secproject">
              <el-select placeholder="请选择参赛项目" class="select-style input-style" v-model="form.secproject">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="form-item-style" label="年级组别：" prop="group">
              <el-select placeholder="请选择年级组别" class="select-style input-style" v-model="form.group">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </div>
        <div v-show="active === 1" class="update-content">
          <el-alert
            title="在截止日期之前参赛选手可以重复提交"
            type="warning"
            class="alert-style2"
            v-show="active === 1"
            center
            show-icon>
          </el-alert>
          <div class="update-work">
            <div class="update-work-header">
              <span>上传作品</span>
            </div>
            <div class="update-work-text">
              <p>
                {{'首届'+citys+'青少年创意编程与智能设计大赛'}}
              </p>
            </div>
            <div class="update-button">
              <el-button class="update-button-style" id='pickfiles'>上传作品</el-button>
              <el-progress :percentage="progress" class="progress-style" :text-inside="true" :stroke-width="10" :color="customColorMethod" v-show="progressShow"></el-progress>
            </div>
          </div>


          <!--<div class="progress">{{progress}}</div>-->
        </div>
        <div v-show="active === 2" class="info-card">
          <div class="info-div">
            <span class="info-text">作品名称：</span>
            <span class="info-text">{{projectname}}</span>
          </div>
          <div class="info-div">
            <span class="info-text">小组名称：</span>
            <span class="info-text">{{groupname}}</span>
          </div>
          <div class="info-div">
            <span class="info-text">参赛类别：</span>
            <span class="info-text">{{majorname}}</span>
          </div>
          <div class="info-div">
            <span class="info-text">参赛项目：</span>
            <span class="info-text">{{secproject}}</span>
          </div>
          <div class="info-div">
            <span class="info-text">年级组别：</span>
            <span class="info-text">{{group}}</span>
          </div>
          <div class="info-div">
            <span class="info-text">作品文件：</span>
            <el-tooltip class="item" effect="dark" content="点击下载" placement="right">
              <i class="el-icon-document-copy info-text icon-info" @click="downloadFile"></i>
            </el-tooltip>

          </div>
        </div>
        <div class="submit-info">
          <el-button @click="submitInfo('form')" type="success" class="button-info" v-if="active === 0">下一步</el-button>
          <el-button @click="getInfo" type="success" class="button-info" v-if="active === 1">下一步</el-button>
        </div>

      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header3'
    export default {
        name: "WorkUpdate",
      components: {
          Header,
        Footer
      },
      data() {
          return {
            active: 0,
            progressShow: false,
            progress: 0,
            citys: localStorage.getItem('city'),
            qiniuToken: '',
            projectname: '',
            groupname: '',
            majorname: '',
            secproject: '',
            group: '',
            projectlink: '',
            form: {
              projectname: '',
              groupname: '',
              majorname: '',
              secproject: '',
              group: ''
            },
            title1: '进行中',
            title2: '未完成',
            title3: '未完成',
            status3: 'wait  ',
            rules: {
              projectname: [
                { required: true, message: '请输入作品名称', trigger: 'blur' },
              ],
              groupname: [
                {
                  required: true, message: '请输入小组名称或上传者姓名', trigger: 'blur'
                }
              ],
              majorname: [
                {
                  required: true, message: '请选择参赛类别', trigger: 'change'
                }
              ],
              secproject: [
                {
                  required: true, message: '请选择参赛项目', trigger: 'change'
                }
              ],
              group: [
                {
                  required: true, message: '请选择年级组别', trigger: 'change'
                }
              ]
            },
            options: [{
              value: '创意编程大赛',
              label: '创意编程大赛'
            }, {
              value: '智能设计大赛',
              label: '智能设计大赛'
            }, {
              value: '人工智能挑战赛',
              label: '人工智能挑战赛'
            }],
            options2: [],
            options3: [{
              value: '小学组（1-3年级）',
              label: '小学组（1-3年级）'
            }, {
              value: '小学组（4-6年级）',
              label: '小学组（4-6年级）'
            }, {
              value: '初中组',
              label: '初中组'
            }, {
              value: '高中组',
              label: '高中组'
            }],
          }
      },
      mounted () {
        this.initQiniu()
        this.getInfoTwo()
      },
      methods: {
        next() {
          if (this.active++ > 2) this.active = 0;
        },
        submitInfo (formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
             var url = 'https://www.zhongkeruitong.top/towerImg/cms/competition/create?username=' + localStorage.getItem('name') + '&groupname=' + this.form.groupname + '&majorname=' + this.form.majorname + '&secproject=' + this.form.secproject + '&group=' + this.form.group + '&projectname=' + this.form.projectname
              this.$axios.get(url).then((res) => {
                // if (res.data.code === 10004) {
                //   this.$message.warning('你已经提交过了，不能重复提交')
                // } else {
                //   this.$message.success('提交成功！')
                //   this.next()
                //   this.title1 = '已完成'
                //   this.title2 = '进行中'
                // }
                this.$message.success('提交成功！')
                  this.next()
                  this.title1 = '已完成'
                  this.title2 = '进行中'

              })
            } else {
              // console.log('error submit!!');
              return false;
            }
          });
        },
        initQiniu () {
          /* eslint-disable */
          Qiniu.uploader({
            runtimes: 'html5,flash,html4',
            browse_button: 'pickfiles',
            flash_swf_url: 'https://cdn.bootcss.com/plupload/2.1.1/Moxie.swf',
            chunk_size: '4mb',
            uptoken: '',
            get_new_uptoken: false, // 设置上传文件的时候是否每次都重新获取新的uptoken
            uptoken_url: 'https://www.zhongkeruitong.top/towerImg/cms/filesystem/getToken',
            uptoken_func: function(){        // 在需要获取uptoken时，该方法会被调用
              // do something(一般是发送手动发送ajax获取到token，如果后端返回格式不跟官方一致又不想该懂源代码可以通过这个方式调整)
              return uptoken;
            },
            domain: 'http://qiniu.zhongkeruitong.top/',
            // get_new_uptoken: false,
            auto_start: true,
            max_retries: 3,
            filters: {
              max_file_size: '10000mb',
              prevent_duplicates: false
              // Specify what files to browse for
              // mime_types: [
              //     {title : 'apk files', extensions : 'apk'} // 限定apk后缀上传格式上传
              // ]
            },
            init: {
              'FilesAdded': (up, files) => {
                console.log('文件就绪', files);
              },
              'BeforeUpload': (up, file) => {
                console.log('上传之前', file);
                this.progressShow = true
              },
              'UploadProgress': (up, file) => {
                console.log('上传中 file',file);
                this.progress = file.percent;
              },
              'FileUploaded': (up, file, info) => {
                // console.log(up)
                // console.log(file)
                var str = JSON.parse(info.response)
                // console.log(JSON.parse(info.response).key)
                var str_url = 'http://qiniu.zhongkeruitong.top/' + str.key
                var url = 'https://www.zhongkeruitong.top/towerImg/cms/competition/savelink?username=' + localStorage.getItem('name') + '&projectlink=' + str_url
                this.$axios.get(url).then((res) => {
                  console.log('文件上传完毕')
                  this.$message.success('作品上传成功！')
                  // this.next()
                })


                // console.log(sourceLink)
              },
              Error: (up, err, errTip) => {
                console.log('上传失败', err);
                this.$message.error('作品上传失败！')
              },
              Key: (up, file) => {}
            }
          });
        },
        getInfo() {
          var url = 'https://www.zhongkeruitong.top/towerImg/cms/competition/findbyusername?username=' + localStorage.getItem('name')
          this.$axios.get(url).then((res) => {
            this.projectname = res.data.projectname
            this.groupname = res.data.groupname
            this.majorname =res.data.majorproject
            this.secproject = res.data.secproject
            this.group = res.data.maingroup
            this.projectlink = res.data.projectlink
            this.next()
            this.status3 = 'success'
            this.title2 = '已完成'
            this.title3 = '已完成'
          })
        },
        getInfoTwo() {
          var url = 'https://www.zhongkeruitong.top/towerImg/cms/competition/findbyusername?username=' + localStorage.getItem('name')
          this.$axios.get(url).then((res) => {
            this.form.projectname = res.data.projectname
            this.form.groupname = res.data.groupname
            this.form.majorname =res.data.majorproject
            this.form.secproject = res.data.secproject
            this.form.group = res.data.maingroup
            // this.projectlink = res.data.projectlink
          })
        },
        downloadFile () {
          var url = this.projectlink
          window.open(url)
        },
        customColorMethod(percentage) {
          if (percentage < 30) {
            return '#909399';
          } else if (percentage < 70) {
            return '#e6a23c';
          } else {
            return '#67c23a';
          }
        },
        changeOne(val) {
          console.log(val)

          var option1 = [
            {
              value: 'Scratch比赛',
              label: 'Scratch比赛'
            }, {
              value: 'Python比赛',
              label: 'Python比赛'
            }
          ]
          var option2 = [
            {
              value: 'Arduino比赛',
              label: 'Arduino比赛'
            },{
              value: 'Micro: bit比赛',
              label: 'Micro: bit比赛'
            },{
              value: 'ESP32 智慧物联项目',
              label: 'ESP32 智慧物联项目'
            }
          ]
          var option3 = [
            {
              value: '贪吃蛇博弈算法挑战赛',
              label: '贪吃蛇博弈算法挑战赛'
            }, {
              value: '智能人脸识别挑战赛',
              label: '智能人脸识别挑战赛'
            }
          ]

          if (val === '创意编程大赛') {
            this.options2 = option1
          } else if (val === '智能设计大赛') {
            this.options2 = option2
          } else if (val === '人工智能挑战赛') {
            this.options2 = option3
          }
        },
        changeTwo(val) {
          if (this.form.secproject === '') {
            this.$notify({
              title: '警告',
              message: '请先选择参赛类别',
              type: 'warning'
            });
          }
        },
        gotohome() {
          this.$router.push('/')
        }
      }
    }
</script>

<style scoped>
  .content-words {
    margin-bottom: 80px;
  }
  .content-work {
    width: 1500px;
    margin: 0 auto;
  }
  .steps {
    margin-top: 20px;
    width: 100%;
  }
  .form-style {
    width: 500px;
    margin: 30px auto;
  }
  .label-form {
    font-size: 24px;
  }
  .form-item-style {
    margin-top: 30px;
  }
  .select-style {
    width: 100%;
  }
  .input-style >>> .el-input__inner {
    height: 50px;
    font-size: 16px;
  }
  .form-item-style >>> .el-form-item__label {
    font-size: 20px;
  }
  .el-select-dropdown__item {
    font-size: 18px;
  }
  .submit-info {
    text-align: center;
  }
  .button-info {
    width: 150px;
  }
  .description >>> .el-step__description {
    font-size: 16px;
  }
  .update-content {
    margin-top: 50px;
    margin-bottom: 100px;
    /*width: 600px;*/
    /*margin: 100px auto;*/
    /*text-align: center;*/
  }
  .progress-style {
    /*float: right;*/
    /*width: 400px;*/
    /*margin: 0 auto;*/
    /*margin-top: 10px;*/
    /*width: 300px;*/

  }
  .update-work {
    /*float: left;*/
    width: 385px;
    height: 280px;
    border-radius: 10px;
    border: #DCDFE6 solid 1px;
    padding: 10px;
    margin: 0 auto;
  }
  .update-work-header {
    padding: 10px;
    border-bottom: #DCDFE6 solid 1px;
    font-size: 22px;
  }
  .update-work-text {
    padding: 10px;
    margin-top: 20px;
    font-size: 20px;
    color: #949494;
  }
  .update-button {
    padding: 10px;
  }
  .update-button-style {
    width: 100%;
    background-color: #f3b143;
    height: 50px;
    font-size: 18px;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-top: 10px;
  }
  .progress-style >>> .el-progress-bar__inner {
    line-height: 0;
  }
  .info-card {
    width: 330px;
    margin: 80px auto;
  }
  .info-div {
    margin-top: 20px;
  }
  .info-text {
    font-size: 24px;
   color: #777777;
  }
  .icon-info {
    cursor: pointer;
  }
  .icon-info:hover {
    color: red;
  }
  .alert-style {
    width: 500px;
    margin: 20px auto;
  }
  .alert-style2 {
    width: 385px;
    margin: 20px auto;
  }
  .bgstyle {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    position: fixed;

  }
  .cards {
    width: 450px;
    /*height: 150px;*/
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 10px 30px 10px 30px;
  }
  .iconstyle {
    color: #e6a23c;
    font-size: 20px;
  }
  .title-cards {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
  .content-cards {
    font-size: 20px;
  }
  .button-re {
    float: right;
  }
</style>
