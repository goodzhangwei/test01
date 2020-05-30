<template>
  <div class="app-container">
    <div class="information_container">
      <div class="information_item">
        <div class="information_title">
          <div class="information_one">
            <span class="information_one_span">个人信息</span>
            <div class="icon-edit" @click="edit_info">
              <i class="iconfont ymq-iconbianjisekuai icon-i"></i>
              <span class="style_edit">编辑</span>
            </div>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="information_content">
          <div class="information_content_div">
            <div class="title-text">
              昵称
            </div>
            <div class="title-text2">
             {{gettext(form.nickname)}}
            </div>
          </div>
          <div class="information_content_div">
            <div class="title-text">
              职位
            </div>
            <div class="title-text2">
              {{gettext(form.profession)}}
            </div>
          </div>
          <div class="information_content_div">
            <div class="title-text">
              学历
            </div>
            <div class="title-text2">
              {{gettext(form.education)}}
            </div>
          </div>
          <div class="information_content_div">
            <div class="title-text">
              城市
            </div>
            <div class="title-text2">
              {{gettext(form.province) + ' '+ gettext(form.city) + ' '+ gettext(form.district)}}
            </div>
          </div>
          <div class="information_content_div">
            <div class="title-text">
              学校
            </div>
            <div class="title-text2">
              {{schoolname}}
            </div>
          </div>
          <div class="information_content_div">
            <div class="title-text">
              性别
            </div>
            <div class="title-text2">
              {{gettext(form.sex)}}
            </div>
          </div>
          <div class="information_content_div">
            <div class="title-text">
              邮箱
            </div>
            <div class="title-text2">
              {{gettext(form.mail)}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="编辑个人信息"
      :visible.sync="dialogVisible"
      width="35%">
      <div>
        <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="form-style-info">
          <el-form-item label="昵称：" prop="nickname" class="form-item-style">
            <el-input v-model="form.nickname" class="input-style" placeholder="请填写昵称"></el-input>
          </el-form-item>
          <el-form-item label="职位：" prop="profession" class="form-item-style">
            <el-select placeholder="请选择职位" class="select-style input-style" v-model="form.profession">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="学历：" prop="education" class="form-item-style">
            <el-select placeholder="请选择学历" class="select-style input-style" v-model="form.education">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在地区：" prop="area" class="form-item-style">
            <v-distpicker :province="form.province" :city="form.city" :area="form.district" @selected="onSelected"></v-distpicker>
          </el-form-item>
          <el-form-item label="性别：" prop="sex" class="form-item-style">
            <el-radio v-model="form.sex" label="男" class="radio-style">男</el-radio>
            <el-radio v-model="form.sex" label="女" class="radio-style">女</el-radio>
          </el-form-item>
          <el-form-item label="邮箱：" prop="mail" class="form-item-style">
            <el-input v-model="form.mail" class="input-style" placeholder="请填写邮箱"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="resetForm('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="onSubmit_info('ruleForm')">保 存</el-button>
      </span>
    </el-dialog>
    <!--<div class="distpickerss">-->
     <!---->
    <!--</div>-->

  </div>
</template>

<script>
  import VDistpicker from 'v-distpicker'
export default {
  inject:['reload'],
  name: 'personalInformation',
  components: { VDistpicker },
  data () {
    var validatePass = (rule, value, callback) => {
      if (this.form.province === null || this.form.city === null || this.form.district === null) {
        callback(new Error('请选择所在地区'));
      } else {
        callback();
      }
    };
    return {
      username: localStorage.getItem('name'),
      schoolname: localStorage.getItem('schoolname'),
      form: {
        username: '',
        nickname: '',
        sex: '',
        education: '',
        profession: '',
        province: '',
        city: '',
        district: '',
        mail: ''
      },
      rules: {
        nickname: [{required: true, message: '请输入昵称', trigger: 'blur' }],
        profession: [{
          required: true, message: '请选择职位', trigger: 'change'
        }],
        education: [
          {
            required: true, message: '请选择学历', trigger: 'change'
          }
        ],
        area: [
          {
            validator: validatePass,  trigger: 'change'
          }
        ],
        sex: [
          {
            required: true, message: '请选择性别', trigger: 'change'
          }
        ],
        mail: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      },
      options1: [{
        value: '教师',
        label: '教师'
      }, {
        value: '学生',
        label: '学生'
      }, {
          value: '其他',
        label: '其他'
      }],
      options2: [{
        value: '小学',
        label: '小学'
      }, {
        value: '初中',
        label: '初中'
      }, {
        value: '高中',
        label: '高中'
      }, {
        value: '本科',
        label: '本科'
      }, {
        value: '硕士',
        label: '硕士'
      }, {
        value: '博士',
        label: '博士'
      }],
      dialogVisible: false
    }
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo() {
      var url = 'https://zhongkeruitong.top/towerImg/cms/user/getUserInfo?username=' + this.username
      this.$axios.get(url).then((res) => {
        this.form.username = res.data.userInfo.username
        this.form.nickname = res.data.userInfo.nickname
        this.form.sex = res.data.userInfo.sex
        this.form.education = res.data.userInfo.education
        this.form.profession = res.data.userInfo.profession
        this.form.province = res.data.userInfo.province
        this.form.city = res.data.userInfo.city
        this.form.district = res.data.userInfo.district
        this.form.mail = res.data.userInfo.mail
      })
    },
    gettext(item) {
      if (item === null) {
        return '未设置'
      } else {
        return item
      }
    },
    edit_info() {
      this.dialogVisible = true
    },
    onSelected(data) {
      console.log(data)
      this.form.province = data.province.value
      this.form.city = data.city.value
      this.form.district = data.area.value
    },
    onSubmit_info(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var url = 'https://zhongkeruitong.top/towerImg/cms/user/updateUserInfo?username=' + this.username + '&nickname=' + this.form.nickname + '&sex=' + this.form.sex + '&education=' + this.form.education + '&profession=' + this.form.profession + '&province='+ this.form.province + '&city=' + this.form.city + '&district=' + this.form.district + '&mail=' + this.form.mail
          this.$axios.post(url).then((res) => {
            if (res.data.code === 10000) {
              this.$message.success('修改成功！')
              this.dialogVisible = false
              this.getInfo()
              this.reload()
            }
          })
        } else {
          // console.log('error submit!!')
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>
  .app-container {
    padding:30px;
  }
  .information_title {
    /*height: 50px;*/
  }
  .information_one .information_one_span {
    /*display: block;*/
    /*height: 50px;*/
    /*width: 200px;*/
    /*line-height: 50px;*/
    padding-left: 50px;
    border-left-style: solid;
    border-left-width: 4px;
    border-left-color: #a0b9ec;
    font-size: 20px;
  }
  .style_edit {
    color: #9397a2;
  }
  .icon-edit {
    float: right;
    font-size: 20px;
    cursor: pointer;
  }
  .icon-i {
    color: #008CC8;
  }
  .icon-edit:hover .style_edit {
    color: #008CC8;
  }
  .information_content {
    padding: 20px 0 20px 50px;
  }
  .title-text {
    height: 80px;
    width: 150px;
    background-color: #F3F5F7;
    text-align: center;
    line-height: 80px;
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
    display: inline-block;
  }
  .title-text2 {
    height: 80px;
    width: 650px;
    border-bottom: #D9DDE1 solid 1px;
    display: inline-block;
    line-height: 80px;
    font-size: 20px;
    padding-left: 30px;
    color: black;
  }
  .information_content_div {
    margin-bottom: 20px;
  }
  .form-style-info {
    width: 500px;
    margin: 0 auto;
  }
  .form-item-style >>> .el-form-item__label {
    font-size: 20px;
  }
  .input-style >>> .el-input__inner {
    height: 50px;
    font-size: 16px;
  }
  .select-style {
    width: 100%;
  }
  .el-select-dropdown__item {
    font-size: 18px;
  }
  .radio-style >>> .el-radio__label {
    font-size: 18px;
  }
  .radio-style {
    margin-right: 30px;
  }
  .radio-style >>> .el-radio__inner {
    width: 20px;
    height: 20px;
  }
  .form-item-style >>> .distpicker-address-wrapper select {
    font-size: 18px;
    height: 40px;
    padding: 5px;
    border-radius: 5px;
    line-height: 40px;
  }
</style>
