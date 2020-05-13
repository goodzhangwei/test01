<template>
  <div class="login-bg">
    <div class="login-content">
      <el-row>
        <el-col :span="15">
          <div class="col-left">
            <img src="../../assets/bg-login1.jpg">
            <div class="left-icon">
              <i class="iconfont ymq-iconwechat-fill"></i>
              <i class="iconfont ymq-iconQQ"></i>
              <i class="iconfont ymq-iconweibo"></i>
            </div>
          </div>
        </el-col>
        <el-col :span="9">
          <div class="login-form">
            <div  class="iconreturn" v-if="!show1">
              <i class="iconfont ymq-iconarrowleft" @click="returnlogin"></i>
            </div>
            <div class="login-img">
              <img src="../../assets/logo34.png">
            </div>
            <div class="login-form-content">
              <div class="loginform" v-if="show1">
                <el-row>
                  <el-col :span="4">
                    <i class="iconfont ymq-iconuser formicon"></i>
                  </el-col>
                  <el-col :span="20">
                    <el-input  placeholder="用户名" class="forminput" v-model="ruleForm1.username" clearable></el-input>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="4">
                    <i class="iconfont ymq-iconlock formicon"></i>
                  </el-col>
                  <el-col :span="20">
                    <el-input  placeholder="密码" class="forminput" v-model="ruleForm1.password" type="password" :show-password="showpassword" @keyup.enter.native="login" clearable></el-input>
                  </el-col>
                </el-row>
                <div class="spans">
                  <span class="spans1">忘记密码</span>
                  <span class="spans2" @click="applyuser">新用户注册</span>
                </div>
                <el-button type="primary" size="large" @click.native.prevent="login" class="login-button">登录</el-button>
              </div>
              <div v-if="!show1">
                <el-form :model="ruleForm2" status-icon :rules="rules" ref="ruleForm2">
                  <div class="loginform2">
                    <el-form-item prop="username">
                      <el-row>
                        <el-col :span="4">
                          <i class="iconfont ymq-iconuser formicon"></i>
                        </el-col>
                        <el-col :span="20">
                          <el-input  placeholder="用户名" class="forminput" v-model="ruleForm2.username" clearable></el-input>
                        </el-col>
                      </el-row>
                    </el-form-item>
                    <el-form-item prop="password1" class="form-items">
                      <el-row>
                        <el-col :span="4">
                          <i class="iconfont ymq-iconlock formicon"></i>
                        </el-col>
                        <el-col :span="20">
                          <el-input  placeholder="请输入密码" class="forminput" v-model="ruleForm2.password1" type="password" :show-password="showpassword" autocomplete="off" clearable></el-input>
                        </el-col>
                      </el-row>
                    </el-form-item>
                    <el-form-item prop="password2" class="form-items">
                      <el-row>
                        <el-col :span="4">
                          <i class="iconfont ymq-iconlock formicon"></i>
                        </el-col>
                        <el-col :span="20">
                          <el-input  placeholder="确认密码" class="forminput" v-model="ruleForm2.password2" type="password" :show-password="showpassword" autocomplete="off" clearable></el-input>
                        </el-col>
                      </el-row>
                    </el-form-item>
                    <el-form-item prop="class_name" class="form-items">
                      <el-row>
                        <el-col :span="4">
                          <i class="iconfont ymq-iconchengshi formicon"></i>
                        </el-col>
                        <el-col :span="20">
                          <el-input  placeholder="学校" class="forminput" v-model="ruleForm2.class_name" clearable></el-input>
                        </el-col>
                      </el-row>
                    </el-form-item>
                    <!--<el-radio-group v-model="radio">-->
                    <!--<el-radio :label="2">学生</el-radio>-->
                    <!--<el-radio :label="1">老师</el-radio>-->
                    <!--</el-radio-group>-->
                    <el-button type="primary" class="login-button" size="large" @click="userregister('ruleForm2')">注册</el-button>
                  </div>
                </el-form>
              </div>

            </div>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import $ from 'jquery'
export default {
  name: 'index',
  components: { Footer },
  data () {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      setTimeout(() => {
        callback()
      }, 1000)
    }
    var checkClass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请填写学校名称'))
      }
      setTimeout(() => {
        callback()
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.password2 !== '') {
          this.$refs.ruleForm2.validateField('password2')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.password1) {
        callback(new Error('两次输入密码不一致！'))
      } else {
        callback()
      }
    }
    return {
      ruleForm1: {
        username: '',
        password: ''
      },
      radio: '2',
      showpassword: true,
      ruleForm2: {
        username: '',
        password1: '',
        password2: '',
        class_name: ''
      },
      show1: true,
      rules: {
        password1: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password2: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        username: [
          { validator: checkName, trigger: 'blur' }
        ],
        class_name: [
          {
            validator: checkClass, trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted() {
  },
  methods: {
    applyuser () {
      this.show1 = false
    },
    returnlogin () {
      this.show1 = true
    },
    userregister (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.radio === '') {
            this.$message.warning('请选择需要注册的角色')
          } else {
            var url = 'http://58.119.112.14:11020/cms/user/register?username=' + this.ruleForm2.username + '&password=' + this.ruleForm2.password1 + '&schoolname=' + this.ruleForm2.class_name + '&role=' + this.radio
            this.$axios.post(url).then((res) => {
              if (res.data.code === 10000) {
                this.$message.success('注册成功！')
                this.show1 = true
              } else {
                this.$message.error(res.data.message)
              }
            })
          }
        }
      })
    },
    login () {
      if (this.ruleForm1.username === '' || this.ruleForm1.password === '') {
        this.$message.warning('请输入用户名或密码！')
      } else {
        var url = 'http://58.119.112.14:11020/cms/user/login?username=' + this.ruleForm1.username + '&password=' + this.ruleForm1.password
        this.$axios.post(url).then((res) => {
          if (res.data.code === 10000) {
            this.$message.success('登录成功！')
            localStorage.setItem('flag_class', '已登录')
            localStorage.setItem('role', res.data.user.role)
            localStorage.setItem('name', res.data.user.username)
            this.$router.push('/')
            // this.$router.push({
            //   path: '/',
            //   query: {
            //     flag_class: 'yidenglu'
            //   }
            // })
          } else {
            this.$message.error(res.data.message)
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  .login-bg {
    height: 100%;
    width: 100%;
    background-image: url("../../assets/hot-work-img.png");
    background-size: 100% 100%;
    /*background-color: #33BA9A;*/
    position: relative;
  }
  .login-bg img {
    width: 100%;
    height: 100%;
  }
  .header-title {
    font-size: 50px;
    text-align: center;
    color: #16bcb4;
    letter-spacing: 3px;
    font-family: 'STKaiti';
  }
  .header-title-mini {
    text-align: center;
    font-size: 18px;
    letter-spacing: 3px;
    font-family: 'STKaiti';
    margin-top: 10px;
    color: black;
  }
  .login-content {
    width: 1100px;
    height: 600px;
    background-color: white;
    /*border-radius: 20px;*/
    box-shadow: -10px 10px 12px 0 rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .col-left {
    height: 600px;
    overflow: hidden;
    position: relative;
  }
  .left-icon {
    position: absolute;
    top: 90%;
    left: 5%;
  }
  .col-left:hover img {
    transform: scale(1.2);
  }
  .left-icon i {
    color: white;
    font-size: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
  .left-icon i:hover {
    color: #16bcb4;
  }
  .col-left img{
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.6s;
  }
  .login-form {
    padding: 20px;
  }
  .login-img {
    height: 95px;
    margin-top: 30px;
  }
  .login-img img {
    width: 100%;
    height: 100%;
  }
  .head_title {
    text-align: center;
    font-size: 40px;
    color: #3a8ee6;
    font-weight: bolder;
  }
  .login {
    width: 380px;
    background-color: white;
    height: 500px;
    /*margin: 0 auto;*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
    text-align: center;
    transition: all 0.5s;
  }
  .wordlogin {
    margin-top: 80px;
    font-size: 30px;
    font-weight: bold;
    /*color: black;*/
  }
  .forminput >>> .el-input__inner {
    border: 0;
    border-bottom: 1px solid #DCDFE6;
    border-radius: 0;
  }
  .loginform {
    width: 250px; margin: 40px auto;
    line-height: 70px;
  }
  .loginform2 {
    width: 250px; margin: 20px auto;
    line-height: 40px;
  }
  .formicon {
    /*float: left;*/
    font-size: 28px;
    margin-right: 20px
  }
  .forminput {
    /*float: left;*/
    width: 100%;
    font-size: 16px;
  }
  .form-items {
    margin-top: 30px
  }
  /*.spans2 {*/
  /*margin-right: 20px*/
  /*}*/
  .spans {
    text-align: center;
  }
  .spans1 {
    margin-right: 20px;
    font-size: 18px;
    cursor: pointer;
    color: black;
  }
  .spans1:hover {

    color: red;
  }
  .spans2 {
    font-size: 18px;
    cursor: pointer;
    color: black;
  }
  .spans2:hover {

    color: red;
  }
  .formlogins-enter-active, .formlogins-leave-active {
    transition: all 1.5s;
  }
  .formlogins-enter, .formlogins-leave-to {
    /*transform: translateX(-10px) translateY(-10px);*/
    opacity: 0;
  }
  .iconreturn {
    line-height: 0;float: left;
    transition: all 0.6s;
  }
  .iconreturn i {
    font-size: 32px;
  }
  .iconreturn:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
  .hover_a:hover {
    cursor: pointer;
  }
  .login-button {
    width: 100%;
  }
</style>
