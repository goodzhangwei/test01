<template>
  <div>
    <Header></Header>
    <div class="containers-style">
      <div>
        <h1>谁是卧底</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、游戏规则：谁是卧底也是深受很多人喜欢的游戏，起码要三人以上才能玩，大致分为几个阶段：
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（1）分配平民词语和卧底词语—>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（2）玩家依次发言—>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（3）根据发言投票认为谁是卧底—>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（4）得到票数最多的玩家出局—>
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（5）出局玩家刚好是卧底则平民胜利，如果出局玩家是平民则被冤死并继续第2步，当剩下的平民只有1个时卧底胜利。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;特殊情况是，出现两名或以上的玩家票数相同，则相同票数的玩家重新发言，然后全体针对这几个玩家投票。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、编程思想：输入玩家数num，玩家编号为0～num-1，然后定义三个含有num个元素的列表：词语列表，计算玩家票数的列表，死亡玩家的列表。列表下标从0～num-1，随机产生该区间的数x，代表x号玩家是卧底，然后分配卧底词和平民词。注意，提示几号玩家是卧底或冤死的时候，要将打印信息时候的下标加1，比如下标数0代表的其实是1号玩家。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在每轮游戏中，依次进行发言，投票，票数最多的玩家出局（出现相同票数则重新发言），出局玩家归入死亡玩家列表。然后开始下一轮。
          那么，如果有num位玩家，则最多有多少轮游戏结束？因为进行到只有2位玩家游戏就结束了，所以答案是num-2轮！也就是说上述流程要循环num-2次。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、代码整体演示
        </p>
        <img src="../../assets/WorkSeven1.jpg" class="one-img">
        <img src="../../assets/WorkSeven2.jpg" class="one-img">
        <img src="../../assets/WorkSeven3.jpg" class="one-img">
        <img src="../../assets/WorkSeven4.jpg" class="one-img">
        <img src="../../assets/WorkSeven5.jpg" class="one-img">
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
