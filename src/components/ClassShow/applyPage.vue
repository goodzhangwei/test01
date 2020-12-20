<template>
    <div class="containers-style">
      <Header></Header>
      <div  class="div-form">
        <el-form ref="form" :model="form" class="form-style" label-width="300px" :rules="rules">
          <el-form-item class="form-item-style" label="姓名：" prop="name">
            <el-input placeholder="请填写本人姓名" class="input-style" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item class="form-item-style" label="性别：" prop="sex">
            <el-radio-group v-model="form.sex">
              <el-radio label="男" class="radio">
                <span>男</span>
              </el-radio>
              <el-radio label="女" class="radio">
                <span>女</span>
              </el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item class="form-item-style" label="学校/机构：" prop="school">
            <v-distpicker :province="form.province" :city="form.city" @selected="onSelected" hide-area></v-distpicker>
            <el-input placeholder="请填写所任职学校或机构" class="input-style" v-model="form.school"></el-input>
          </el-form-item>
          <el-form-item class="form-item-style" label="教职：" prop="profession">
            <el-input placeholder="请填写您所教的科目" class="input-style" v-model="form.profession"></el-input>
          </el-form-item>
          <el-form-item class="form-item-style" label="教龄：" prop="stuAge">
            <el-input placeholder="请填写您的教龄" class="input-style" v-model="form.stuAge"></el-input>
          </el-form-item>
          <el-form-item class="form-item-style" label="您的编程基础：" prop="program">
            <el-select placeholder="请选择" class="select-style input-style" v-model="form.program" >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item class="form-item-style" label="学校/机构里是否已开设过类似科技课程：" prop="course">
            <el-radio-group v-model="form.course">
              <el-radio label="是" class="radio">
                <span>是</span>
              </el-radio>
              <el-radio label="否" class="radio">
                <span>否</span>
              </el-radio>
            </el-radio-group>
            <div v-if="form.course === '是'">
              <div class="course-text">
                <span>课程名称：</span>
              </div>
              <el-input class="input-style" v-model="form.courseName" placeholder="请填写课程名称"></el-input>
              <div  class="input-course-text">
                <span>若有多门课程请以空格进行分割</span>
              </div>
              <div class="course-text">
                <span>课程方式：</span>
              </div>
              <el-select placeholder="请选择课程方式" class="select-style input-style" v-model="form.courseType">
                <el-option
                  v-for="item in options2"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input class="input-style input-style1" v-model="form.courseTypeName" placeholder="请填写其他方式" v-if="form.course_type === '其他'"></el-input>
            </div>
          </el-form-item>
          <el-form-item class="form-item-style" label="是否组织学生参加过科技大赛：" prop="megagame">
            <el-radio-group v-model="form.megagame ">
              <el-radio label="是" class="radio">
                <span>是</span>
              </el-radio>
              <el-radio label="否" class="radio">
                <span>否</span>
              </el-radio>
            </el-radio-group>
            <div v-if="form.megagame === '是'">
              <div class="course-text">
                <span>参赛类型：</span>
              </div>
              <el-select placeholder="请选择参赛类型" multiple class="select-style input-style" v-model="megagameType" @change="selecteds">
                <el-option
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <el-input class="input-style input-style1" v-model="form.megagameTypeName" placeholder="请填写其他大赛名称" v-if="form.megagameType.includes('其他')"></el-input>
            </div>

          </el-form-item>
          <el-form-item class="form-item-style" label="若有机会参加相关大赛是否愿意参赛：" prop="megagameAspiration">
            <el-radio-group v-model="form.megagameAspiration">
              <el-radio label="是" class="radio">
                <span>是</span>
              </el-radio>
              <el-radio label="否" class="radio">
                <span>否</span>
              </el-radio>
            </el-radio-group>
            <div v-if="form.megagameAspiration === '是'">
              <div class="course-text">
                <span>预计参赛人数：</span>
              </div>
              <el-input class="input-style input-style1" v-model="form.megagameNum" placeholder="请填写预计参赛人数" ></el-input>
            </div>
          </el-form-item>
        </el-form>
        <div class="button-style">
          <el-button type="success" class="button-success" @click="submit_apply('form')">确认报名</el-button>
        </div>

      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header2'
  import VDistpicker from 'v-distpicker'
    export default {
        name: "applyPage",
      components: {
        Header,
        Footer,
        VDistpicker
      },
      data() {
          return {
            form: {
              phone: '18813031213',
              name: '',
              sex: '',
              school: '',
              province: '',
              city: '',
              stuAge: '',
              course: '',
              courseName: '',
              courseType: '',
              courseTypeName: '',
              profession: '',
              program: '',
              megagame: '',
              megagameType: '',
              megagameTypeName: '',
              megagameAspiration: '',
              megagameNum: ''
            },
            megagameType: [],
            rules: {
              name: [
                { required: true, message: '请输入本人姓名', trigger: 'blur' },
              ],
              profession: [
                {
                  required: true, message: '请输入您所教的科目', trigger: 'blur'
                }
              ],
              megagame: [
                {
                  required: true, message: '请至少选择一项', trigger: 'change'
                }
              ],
              program: [
                {
                  required: true, message: '请选择编程基础', trigger: 'change'
                }
              ],
              group: [
                {
                  required: true, message: '请选择年级组别', trigger: 'change'
                }
              ],
              sex: [
                {
                  required: true, message: '请选择性别', trigger: 'change'
                }
              ],
              course: [
                {
                  required: true, message: '请至少选择一项', trigger: 'change'
                }
              ],
              megagameAspiration: [
                {
                  required: true, message: '请至少选择一项', trigger: 'change'
                }
              ],
              school: [
                { required: true, message: '请输入所任职学校或机构名称', trigger: 'blur' },
              ],
              stuAge: [
                {
                  required: true, message: '请输入您的教龄', trigger: 'blur'
                }
              ]
            },
            options: [
              {
                value: '没接触过编程',
                label: '没接触过编程'
              },
              {
                value: '有一点编程基础',
                label: '有一点编程基础'
              },
              {
                value: '熟练掌握一种编程语言如Python',
                label: '熟练掌握一种编程语言如Python'
              },
              {
                value: '精通一种编程语言并做过实际项目',
                label: '精通一种编程语言并做过实际项目'
              },
            ],
            options2: [
              {
                value: '课后一小时',
                label: '课后一小时'
              },
              {
                value: '兴趣班',
                label: '兴趣班'
              },
              {
                value: '社团',
                label: '社团'
              },
              {
                value: '其他',
                label: '其他'
              },
            ],
            options3: [
              {
                value: '中科院ACME未来科技挑战赛',
                label: '中科院ACME未来科技挑战赛'
              },
              {
                value: '全国青少年创意编程与智能设计大赛',
                label: '全国青少年创意编程与智能设计大赛'
              },
              {
                value: '全国青少年科技创新大赛（CASTIC）',
                label: '全国青少年科技创新大赛（CASTIC）'
              },
              {
                value: '全国中小学电脑制作活动（SICTIC）',
                label: '全国中小学电脑制作活动（SICTIC）'
              },
              {
                value: '中国青少年机器人竞赛（CARC）',
                label: '中国青少年机器人竞赛（CARC）'
              },
              {
                value: '全国青少年信息学奥林匹克竞赛（NOI）',
                label: '全国青少年信息学奥林匹克竞赛（NOI）'
              },
              {
                value: '“童创未来”全国青少年人工智能创新挑战赛',
                label: '“童创未来”全国青少年人工智能创新挑战赛'
              },
              {
                value: '全国青少年电子信息智能创新大赛',
                label: '全国青少年电子信息智能创新大赛'
              },
              {
                value: '全国中小学信息技术创新与实践活动(NOC)',
                label: '全国中小学信息技术创新与实践活动(NOC)'
              },
              {
                value: '全国中小学生创·造大赛',
                label: '全国中小学生创·造大赛'
              },
              {
                value: '青少年科学调查体验竞赛',
                label: '青少年科学调查体验竞赛'
              },
              {
                value: '全国青年科普创新实验暨作品大赛',
                label: '全国青年科普创新实验暨作品大赛'
              },
              {
                value: '世界机器人大赛（WRC）',
                label: '世界机器人大赛（WRC）'
              },
              {
                value: '中国教育机器人大赛（ERCC）',
                label: '中国教育机器人大赛（ERCC）'
              },
              {
                value: '“少年科学家”青少年机器人创新体验活动（CYS）',
                label: '“少年科学家”青少年机器人创新体验活动（CYS）'
              },
              {
                value: 'MakeX机器人挑战赛',
                label: 'MakeX机器人挑战赛'
              },
              {
                value: '蓝桥杯',
                label: '蓝桥杯'
              },
              {
                value: 'Robocom（睿抗）青少年挑战赛',
                label: 'Robocom（睿抗）青少年挑战赛'
              },
              {
                value: '其他',
                label: '其他'
              },
            ]
          }
      },
      methods: {
        onSelected(data) {
          this.form.province = data.province.value
          this.form.city = data.city.value
        },
        selecteds(val) {
          var str = ''
          for (var i = 0; i<this.megagameType.length;i++) {
            str = str + this.megagameType[i] + ','
          }
          this.form.megagameType = str
          console.log(this.form.megagameType)
        },
        submit_apply(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.form.phone = this.$route.query.phoneNum
              var url = 'https://www.zhongkeruitong.top/towerImg/cms/sign/addSignUp'
              this.$axios.post(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}, this.form).then((res) => {
                if (res.data.code === 0) {
                  this.$router.push('/applySuccess')
                } else {
                  this.$message.warning('系统繁忙请稍后再试！')
                }
              })
              // console.log(this.form)
            }
          })
        }
      }
    }
</script>

<style scoped>
  .div-form {
    margin-top: 150px;
    margin-bottom: 200px;
  }
  .form-style {
    width: 900px;
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
  .radio >>> .el-radio__inner {
    width: 20px;
    height: 20px;
  }
  .radio span {
    font-size: 20px;
  }
  .form-item-style >>> .distpicker-address-wrapper select {
    font-size: 18px;
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    line-height: 40px;
  }
  .input-course-text {
    color: red;
    font-size: 14px;
  }
  .course-text {
    font-size: 16px;
  }

  .input-style1 {
    margin-top: 10px;
  }

  .button-style {
    text-align: center;
  }
  .button-success {
    width: 200px;
    font-size: 20px;
  }
</style>
