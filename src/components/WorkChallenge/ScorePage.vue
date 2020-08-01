<template>
  <div>
    <Header></Header>
    <div class="containers">
      <div class="header-content">
        <div class="header-content-left"></div>
        <div class="header-content-right">
          作品信息
        </div>
      </div>
      <div>
        <table border="1" class="table-style">
          <tr>
            <td align="center" class="td-style">用户名</td>
            <td align="center" class="td-style">{{infoObj.username}}</td>
          </tr>
          <tr>
            <td align="center" class="td-style">上传者/小组名</td>
            <td align="center" class="td-style">{{infoObj.groupname}}</td>
          </tr>
          <tr>
            <td align="center" class="td-style">
              参赛作品

            </td>
            <td align="center" class="td-style">
              {{infoObj.projectname}}
            </td>
          </tr>
          <tr>
            <td align="center" class="td-style">参赛类别</td>
            <td align="center" class="td-style">{{infoObj.majorproject}}</td>
          </tr>
          <tr>
            <td align="center" class="td-style">参赛项目</td>
            <td align="center" class="td-style">{{infoObj.secproject}}</td>
          </tr>
          <tr>
            <td align="center" class="td-style">参赛组别</td>
            <td align="center" class="td-style">{{infoObj.maingroup}}</td>
          </tr>
          <tr>
            <td align="center" class="td-style" colspan="2">
              <el-button type="warning" @click="down_file">点击下载作品</el-button>
            </td>
          </tr>
        </table>
      </div>
      <div class="header-content">
        <div class="header-content-left"></div>
        <div class="header-content-right">
          作品评分
        </div>
      </div>
      <div v-if="infoObj.secproject === '贪吃蛇博弈算法挑战赛'" class="table-detail">
        <table border="1" class="table-style">
          <tr>
            <td align="center" class="td-style td-style2">评分项</td>
            <td align="center" class="td-style td-style2">评分说明</td>
            <td align="center" class="td-style td-style2">得分</td>
          </tr>
          <tr>
            <td align="center" class="td-style">基本任务</td>
            <td align="center" class="td-style">能够成功运行，出现游戏界面，有贪吃蛇在界面运动。（满分50分）</td>
            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form.basic" @input="getNum" v-if="codeEve !== 0"></el-input>
              <span v-else>{{form.basic}}分</span>
            </td>
          </tr>
          <tr>
            <td align="center" class="td-style">界面丰富度</td>
            <td align="center" class="td-style">界面的美观程度、配乐、色彩搭配等进行酌情打分（满分10分）</td>
            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form.richness" @input="getNum" v-if="codeEve !== 0"></el-input>
              <span v-else>{{form.richness}}分</span>
            </td>
          </tr>
          <tr>
            <td align="center" class="td-style">功能完成度</td>
            <td align="center" class="td-style">
              <span v-if="infoObj.maingroup === '初中组'|| infoObj.maingroup === '高中组'">每增设一个障碍物得3分，贪吃蛇每吃到一个果实得1分；</span>
              <span v-if="infoObj.maingroup !== '初中组' && infoObj.maingroup !== '高中组'">贪吃蛇每吃到一个果实得3分</span>
              代码整洁度完整度（满分40分）</td>
            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form.completion" @input="getNum" v-if="codeEve !== 0"></el-input>
              <span v-else>{{form.completion}}分</span>
            </td>
          </tr>
          <tr>
            <td align="center" class="td-style">总分</td>
            <td align="center" class="td-style" colspan="2" >{{totalScores}}分</td>
          </tr>
        </table>
      </div>
      <div v-if="infoObj.secproject === '智能人脸识别挑战赛'" class="table-detail">
        <table border="1" class="table-style">
          <tr>
            <td align="center" class="td-style td-style2">评分项</td>
            <td align="center" class="td-style td-style2">评分说明</td>
            <td align="center" class="td-style td-style2">得分</td>
          </tr>
          <tr>
            <td align="center" class="td-style" rowspan="3">功能性</td>
            <td align="center" class="td-style">自动识别画面中所有的人脸并能显示出来；（满分40分）</td>

            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form2.face1" @input="getNum" v-if="codeEve !==0"></el-input>
              <span>{{form2.face1}}分</span>
            </td>
          </tr>
          <tr>
            <td align="center" class="td-style">预输入一个人脸库，自动识别到的人脸与人脸库作比对， 鉴定是哪个人，并给出相似度值；（满分20分）</td>
            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form2.face2" @input="getNum" v-if="codeEve !==0"></el-input>
              <span>{{form2.face2}}分</span>
            </td>
          </tr>
          <tr>
            <td align="center" class="td-style">自动识别人脸特征，比如眼睛、鼻子、嘴巴的位置、脸部 轮廓等；（满分10分）</td>
            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form2.face3" @input="getNum" v-if="codeEve !==0"></el-input>
              <span>{{form2.face3}}分</span>
            </td>
          </tr>
          <tr>
            <td align="center" class="td-style">创新性</td>
            <td align="center" class="td-style">算法创新度、界面丰富度；（满分20分）</td>
            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form2.face4" @input="getNum" v-if="codeEve !==0"></el-input>
              <span>{{form2.face4}}分</span>
            </td>
          </tr>
          <tr>
            <td align="center" class="td-style">规范性</td>
            <td align="center" class="td-style">代码整洁度与完整度，是否有代码注释。（满分10分）</td>
            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form2.face5" @input="getNum" v-if="codeEve !==0"></el-input>
              <span>{{form2.face5}}分</span>
            </td>
          </tr>
          <tr>
            <td align="center" class="td-style">总分</td>
            <td align="center" class="td-style" colspan="2">{{totalScores2}}分</td>
          </tr>
        </table>
      </div>
      <div v-if="infoObj.majorproject !== '人工智能挑战赛'" class="table-detail">
        <table border="1" class="table-style">
          <tr>
            <td align="center" class="td-style td-style2">指标</td>
            <td align="center" class="td-style td-style2">指标说明</td>
            <td align="center" class="td-style td-style2">优</td>
            <td align="center" class="td-style td-style2">良</td>
            <td align="center" class="td-style td-style2">差</td>
            <td align="center" class="td-style td-style2">得分</td>
          </tr>
          <tr>
            <td align="center" class="td-style">设计创意30分</td>
            <td align="center" class="td-style">主题明确，内容健康向上。想象力和创造力的深度结合。作品结构完整，构思新颖别致。</td>
            <td align="center" class="td-style">21-30</td>
            <td align="center" class="td-style">11-20</td>
            <td align="center" class="td-style">0-10</td>
            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form3.tong1" @input="getNum" v-if="codeEve !==0"></el-input>
              <span v-else>{{form3.tong1}}分</span>
            </td>
          </tr>
          <tr>
            <td align="center" class="td-style">程序设计 40分</td>
            <td align="center" class="td-style">程序流畅运行，概念理解准确，指令使用熟练，程序运行流畅高效无Bug</td>
            <td align="center" class="td-style">26-40</td>
            <td align="center" class="td-style">16-25</td>
            <td align="center" class="td-style">0-15</td>
            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form3.tong2" @input="getNum" v-if="codeEve !==0"></el-input>
              <span v-else>{{form3.tong2}}分</span>
            </td>
          </tr>
          <tr>
            <td align="center" class="td-style">艺术设计 10分</td>
            <td align="center" class="td-style">角色造型、动画、音乐及音效优美协调，程序排列整齐美观无垃圾指令。</td>
            <td align="center" class="td-style">7-10</td>
            <td align="center" class="td-style">4-6</td>
            <td align="center" class="td-style">0-3</td>
            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form3.tong3" @input="getNum" v-if="codeEve !==0"></el-input>
              <span v-else>{{form3.tong3}}分</span>
            </td>
          <tr>
          <tr>
            <td align="center" class="td-style">逻辑思维 5分</td>
            <td align="center" class="td-style">逻辑思维清晰，程序内语言表达顺畅，编程术语使用准确。</td>
            <td align="center" class="td-style">4-5</td>
            <td align="center" class="td-style">2-3</td>
            <td align="center" class="td-style">0-1</td>
            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form3.tong4" @input="getNum" v-if="codeEve !==0"></el-input>
              <span v-else>{{form3.tong4}}分</span>
            </td>
          <tr>
          <tr>
            <td align="center" class="td-style">趣味设计 15分</td>
            <td align="center" class="td-style">幽默有趣、惊险刺激，强调创意的原创和独创性。</td>
            <td align="center" class="td-style">11-15</td>
            <td align="center" class="td-style">6-10</td>
            <td align="center" class="td-style">0-5</td>
            <td align="center" class="td-style">
              <el-input class="input-style"  placeholder="请输入分数" v-model="form3.tong5" @input="getNum" v-if="codeEve !==0"></el-input>
              <span v-else>{{form3.tong5}}分</span>
            </td>
          <tr>
            <td align="center" class="td-style">总分</td>
            <td align="center" class="td-style" colspan="5">{{totalScores3}}分</td>
          </tr>
        </table>
      </div>
      <div>
        评分人：<el-input class="input-style2" v-model="form.peopleScore" v-if="codeEve !== 0"></el-input>
        <span v-else class="people_name">{{form.peopleScore}}</span>
        <el-button type="primary" class="button-style" @click="form_submit" v-if="infoObj.evaluate === 0 && infoObj.secproject === '贪吃蛇博弈算法挑战赛' && codeEve !==0">保存并提交</el-button>
        <el-button type="primary" class="button-style" @click="form_submit3" v-if="infoObj.evaluate === 0 && infoObj.secproject === '智能人脸识别挑战赛' && codeEve !==0">保存并提交</el-button>
        <el-button type="primary" class="button-style" @click="form_submit4" v-if="infoObj.evaluate === 0 && infoObj.majorproject !== '人工智能挑战赛' && codeEve !==0">保存并提交</el-button>
        <el-button type="success" class="button-style" @click="form_submit2" v-if="infoObj.evaluate === 1 || codeEve === 0">已评</el-button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header3'
    export default {
      inject:['reload'],
        name: "ScorePage",
      components: {
        Header,
        Footer
      },
      data() {
        return {
          infoObj: {},
          codeEve: 0,
          form: {
            compititionId: '',
            basic: '',
            richness: '',
            completion: '',
            totalScore: '',
            peopleScore: ''
          },
          form2: {
            compititionId: '',
            face1: '',
            face2: '',
            face3: '',
            face4: '',
            face5: '',
            totalScore: '',
            peopleScore: ''
          },
          form3: {
            compititionId: '',
            tong1: '',
            tong2: '',
            tong3: '',
            tong4: '',
            tong5: '',
            totalScore: '',
            peopleScore: ''
          }
        }
      },
      computed: {
        totalScores: function () {
          var num = Number(this.form.basic)+Number(this.form.richness)+Number(this.form.completion)
          return num
        },
        totalScores2: function () {
          var num = Number(this.form2.face1)+Number(this.form2.face2)+Number(this.form2.face3) + Number(this.form2.face4) + Number(this.form2.face5)
          return num
        },
        totalScores3: function () {
          var num = Number(this.form3.tong1)+Number(this.form3.tong2)+Number(this.form3.tong3) + Number(this.form3.tong4) + Number(this.form3.tong5)
          return num
        }
      },
      mounted() {
        this.infoObj = JSON.parse(this.$route.query.row)
        this.getInfo()
        console.log(this.$route.query.row)
      },
      methods: {
        down_file() {
          window.open(this.infoObj.projectlink)
        },
        form_submit() {
          if (this.form.basic===''||this.form.richness===''|| this.form.completion === '') {
            this.$notify({
              title: '警告',
              message: '请仔细检查您还没有全部评完',
              type: 'warning'
            });
          } else {
            this.form.totalScore = this.totalScores.toString()
            if (this.form.peopleScore === '') {
              this.$notify({
                title: '警告',
                message: '评分人栏目没有填写，请填写真实姓名',
                type: 'warning'
              });
            } else {
              this.form.compititionId = this.infoObj.id
              var url = 'https://www.zhongkeruitong.top/towerImg/cms/competition/evaluateCompetition'
              this.$axios.post(url, this.form).then((res) => {
                if (res.data.code === 0) {
                  this.$confirm('提交成功', '提示信息', {
                    confirmButtonText: '继续评分',
                    type: 'warning',
                    center: true,
                  }).then(() => {
                    this.$router.push('/WorkInfo')
                  }).catch(() => {
                    console.log('取消')
                    this.reload()
                  })
                } else {
                  this.$message.warning('系统繁忙，请稍后再试')
                }
              })
            }
          }
        },
        form_submit3() {
          if (this.form2.face1===''||this.form2.face2===''|| this.form2.face3 === '' || this.form2.face4 === '' || this.form2.face5 === '') {
            this.$notify({
              title: '警告',
              message: '请仔细检查您还没有全部评完',
              type: 'warning'
            });
          } else {
            this.form2.totalScore = this.totalScores2.toString()
            if (this.form.peopleScore === '') {
              this.$notify({
                title: '警告',
                message: '评分人栏目没有填写，请填写真实姓名',
                type: 'warning'
              });
            } else {
              this.form2.compititionId = this.infoObj.id
              this.form2.peopleScore = this.form.peopleScore
              var url = 'https://www.zhongkeruitong.top/towerImg/cms/competition/evaluateCompetition'
              this.$axios.post(url, this.form2).then((res) => {
                if (res.data.code === 0) {
                  this.$confirm('提交成功', '提示信息', {
                    confirmButtonText: '继续评分',
                    type: 'warning',
                    center: true,
                  }).then(() => {
                    this.$router.push('/WorkInfo')
                  }).catch(() => {
                    console.log('取消')
                    this.reload()
                  })
                } else {
                  this.$message.warning('系统繁忙，请稍后再试')
                }
              })
            }
          }
        },
        form_submit4() {
          if (this.form3.tong1===''||this.form3.tong2===''|| this.form3.tong3 === '' || this.form3.tong4 === '' || this.form3.tong5 === '') {
            this.$notify({
              title: '警告',
              message: '请仔细检查您还没有全部评完',
              type: 'warning'
            });
          } else {
            this.form3.totalScore = this.totalScores3.toString()
            if (this.form.peopleScore === '') {
              this.$notify({
                title: '警告',
                message: '评分人栏目没有填写，请填写真实姓名',
                type: 'warning'
              });
            } else {
              this.form3.compititionId = this.infoObj.id
              this.form3.peopleScore = this.form.peopleScore
              var url = 'https://www.zhongkeruitong.top/towerImg/cms/competition/evaluateCompetition'
              this.$axios.post(url, this.form3).then((res) => {
                if (res.data.code === 0) {
                  this.$confirm('提交成功', '提示信息', {
                    confirmButtonText: '继续评分',
                    type: 'warning',
                    center: true,
                  }).then(() => {
                    this.$router.push('/WorkInfo')
                  }).catch(() => {
                    console.log('取消')
                    this.reload()
                  })
                } else {
                  this.$message.warning('系统繁忙，请稍后再试')
                }
              })
            }
          }
        },
        form_submit2() {
          this.$message.warning('该同学，已经评价过了')
        },
        getInfo() {
          var url = 'https://www.zhongkeruitong.top/towerImg/cms/competition/getEvaluate?compitition_id=' + this.infoObj.id
          this.$axios.get(url).then((res) => {
            this.codeEve = res.data.code
            if (res.data.code === 0) {
              this.form.basic = res.data.data.basic
              this.form.richness = res.data.data.richness
              this.form.completion = res.data.data.completion
              this.form.totalScore = res.data.data.totalScore
              this.form.peopleScore = res.data.data.peopleScore
              this.form2.face1 = res.data.data.face1
              this.form2.face2 = res.data.data.face2
              this.form2.face3 = res.data.data.face3
              this.form2.face4 = res.data.data.face4
              this.form2.face5 = res.data.data.face5
              this.form3.tong1 = res.data.data.tong1
              this.form3.tong2 = res.data.data.tong2
              this.form3.tong3 = res.data.data.tong3
              this.form3.tong4 = res.data.data.tong4
              this.form3.tong5 = res.data.data.tong5
            }
          })
        },
        getNum(val) {
          if(!this.checkNumber(val)) {
            this.$notify({
              title: '警告',
              message: '请输入数字',
              type: 'warning'
            });
          }
        },
        checkNumber(theObj) {
          var reg = /^[0-9]+.?[0-9]*$/
          if(reg.test(theObj)) {
            return true;
          }
          return false;
        }
      }
    }
</script>

<style scoped>
  .containers {
    width: 1000px;
    margin: 60px auto;
  }
  .header-content-left {
    height: 30px;
    width: 5px;
    background-color: #1c1f21;
    float: left;
  }
  .header-content-right {
    line-height: 30px;
    font-size: 30px;
    margin-left: 30px;
    font-weight: 700;
  }
  .header-content {
    border-bottom: 1px solid #d9dde1;
    padding: 20px 0 20px 0;
  }
  .table-style {
    width: 100%;
    margin-top: 20px;
  }
  .table-detail {
    margin-bottom: 50px;
  }
  .td-style {
    padding: 10px;
    font-size: 20px;
  }
  .td-style2 {
    font-weight: 700;
    font-size: 22px;
  }
  .input-style {
    width: 120px;
  }
  .input-style2 {
    width: 200px;

    border-bottom: 1px solid black;
  }
  .input-style2 >>> .el-input__inner {
    border: 0;
    font-size: 20px;
  }
  .button-style {
    margin-left: 150px;
  }
  .people_name {
    /*margin-left: 10px;*/
    font-size: 20px;
    margin-right: 80px;
  }
</style>
