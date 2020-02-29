<template>
  <div class="logout">
    <span @click="gotoLogin">登录/注册</span>
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
    color: #A5A5A5;
    height: 40px;
    line-height: 40px;
    width: 100px;
    text-align: center;
  }
  .logout:hover {
    color: red;
    cursor: pointer;
  }
</style>
