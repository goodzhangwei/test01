<template>
  <div>
    <Header></Header>
    <div class="containers-style">
      <div>
        <h1>汉诺塔</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;法国数学家爱德华·卢卡斯曾编写过一个印度的古老传说：在世界中心贝拿勒斯（在印度北部）的圣庙里，一块黄铜板上插着三根宝石针。印度教的主神梵天在创造世界的时候，在其中一根针上从下到上地穿好了由大到小的64片金片，这就是所谓的汉诺塔。不论白天黑夜，总有一个僧侣在按照下面的法则移动这些金片：一次只移动一片，不管在哪根针上，小片必须在大片上面。僧侣们预言，当所有的金片都从梵天穿好的那根针上移到另外一根针上时，世界就将在一声霹雳中消灭，而梵塔、庙宇和众生也都将同归于尽。
        </p>
        <img src="../../assets/WorkEight1.png" class="one-img">
        <img src="../../assets/WorkEight2.jpg" class="one-img">
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
