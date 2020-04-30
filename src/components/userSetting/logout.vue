<template>
  <div class="logout">
    <span @click="gotoLogin">登录 &nbsp;&nbsp;| &nbsp;&nbsp;注册</span>
  </div>
</template>

<script>
export default {
  name: 'logout',
  methods: {
    gotoLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .logout {
    color: #16bcb4;
    font-size: 20px;
    /*height: 40px;*/
    /*line-height: 40px;*/
    /*width: 150px;*/
    text-align: center;
  }
  /*.logout:hover {*/
    /*color: white;*/
    /*cursor: pointer;*/
  /*}*/
</style>
