<template>
  <div>
    <Header></Header>
    <div class="containers-style">
      <div>
        <h1>猜拳游戏</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.添加一个可选角色的功能，每个角色拥有一项独特的能力，如角色A胜一次可以记两分等
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.将添加的角色用数组和列表存储
        </p>
        <img src="../../assets/WorkSix1.jpg" class="one-img">
        <img src="../../assets/WorkSix2.jpg" class="one-img">
        <img src="../../assets/WorkSix3.jpg" class="one-img">
        <img src="../../assets/WorkSix4.jpg" class="one-img">
        <img src="../../assets/WorkSix5.jpg" class="one-img">
        <img src="../../assets/WorkSix6.jpg" class="one-img">
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header3'
  export default {
    name: "WorkOne",
    components: {
      Header,
      Footer
    },
  }
</script>

<style scoped>
  .containers-style {
    width: 1200px;
    margin: 40px auto;

  }
  .one-img {
    width: 1000px;
    margin: 0 auto;
  }
</style>
