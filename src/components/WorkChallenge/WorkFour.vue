<template>
  <div>
    <Header></Header>
    <div class="containers-style">
      <div>
        <h1 class="h1-style">猜数字游戏</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先由一个人写下0到100之间的任意一个数字然后藏起来。然后由你开始猜数字。如果猜的数字比写下的数字小，对方会告诉你猜小了。如果猜的数字比写下的数字大，对方会告诉你猜大了。你会根据对方的提示一步一步缩小范围然后猜中。
        </p>
        <div class="one-imgs">
          <img src="../../assets/WorkFour1.png" class="one-img">
        </div>
        <img src="../../assets/WorkFour2.jpg">

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
  .one-imgs {
    margin: 0 auto;
    width: 600px;
  }
  .one-img {
    /*width: 600px;*/

  }
  .h1-style {
    text-align: center;
  }
</style>
