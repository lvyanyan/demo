<template>
  <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h2 class="title" style="padding-left:22px;" >系统登录</h2>
    <el-form-item prop="username">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <div class="error-wrap">
      <span class="error error-show" v-show="errorTip" style="float: left;color: red">用户名或者密码错误</span>
    </div>
    <el-form-item >
      <el-col class="line" :span="1">&nbsp;</el-col>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:48%;" @click.native.prevent="regist">重 置</el-button>
      <el-button type="primary" style="width:48%;" @click.native.prevent="login" :loading="loading">登 录</el-button>
    </el-form-item>
  </el-form>
</template>
<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      themeColor: '#14889A',
      loading: false,
      errorTip: false,
      loginForm: {
        username: '',
        password: ''
      },
      fieldRules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    login () {
      axios.post('/users/login', {loginForm: this.loginForm}).then((response) => {
        let res = response.data
        // console.log('res' + res.result.name)
        if (res.code === '200') {
          this.errorTip = false
          alert('"登录成功"' + res.result.name)
          this.$router.push('/home')
        } else {
          this.errorTip = true
          this.loading = false
        }
      })
    },
    regist () {
      axios.post('/users/regist', {loginForm: this.loginForm}).then((response) => {
        let res = response.data
        // console.log('res' + res.result.name)
        if (res.status === '0') {
          this.errorTip = false
          alert('"注册成功"' + res.result.name)
          this.login()
          this.$router.push('/home')
        } else {
          this.errorTip = true
          this.loading = false
        }
      })
    },
    reset () {
      this.loginForm.username = ''
      this.loginForm.password = ''
    }
  }

}
</script>
<style  scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 100px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 30px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
