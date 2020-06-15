<template>
  <div>
    <Header></Header>
    <div class="containers-style">
      <div>
        <h1>Python编程的十字路口-----控制语句</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;控制语句主要是提高用户的逻辑判断能力，现实生活中经常会遇到，比如十字路口的交通信号灯、猜拳游戏等。‘红灯停，绿灯行，黄灯请你等一等！’这是针对路口红绿灯简单的操作，相信大家都很熟悉，这个在Python的领域里就用到了简单的控制语句。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;针对某一个操作，如果正确执行一件事，反之执行另一件事。正是有了判断，才使得程序世界丰富多彩，充满变化。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;判断以及操作在Python领域使用的便是if…else语句，以及之间的嵌套。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if 分支使用布尔表达式或布尔值作为分支条件来进行分支控制。Python 的 if 分支既可作为语句使用，也可作为表达式使用。下面先介绍 if 分支作为语句使用的情形。
        </p>
        <h2>
         （1）if语句
        </h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if 语句的基本用法如下：
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if 表达式:
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行的语句块
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其中，表达式可以是正确或者错误（单纯的布尔值或变量），也可以是数学表达式（比较表达式或逻辑表达式（例 如：a > b and a != c）），如果表达式为真，则执行“执行的语句块”；如果表达式的值为假，就不执行此处的操作。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;示例代码：
        </p>
        <img src="../../assets/WorkFive1.jpg" class="one-img2">
        <h2>
         （2）if…else语句
        </h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if…else 语句的基本用法如下：
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if 表达式:
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行的语句块 1
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;执行的语句块 2
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 if…else 语句时，与if语句的区别就是，如果错误了就执行另一个操作，而不是什么都不做。另外，在使用else 语句时，else 一定不可以单独使用，它必须和保留字 if 一起使用。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;示例代码：
        </p>
        <img src="../../assets/WorkFive2.jpg" class="one-img2">
        <h2>
          （3）if…elif…else语句
        </h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if…elif…else 语句的基本用法如下：
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if 表达式 1:
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;语句块 1
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elif表达式 2:
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;语句块 2
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elif表达式 3:
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;语句块 3
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elif表达式 n
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;语句块 n
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用 if…elif…else 语句时，表达式可以是一个单纯的布尔值或变量，也可以是比较表达 式或逻辑表达式，如果表达式为真，执行语句；而如果表达式为假，则跳过该语句，进行下 一个 elif 的判断，只有在所有表达式都为假的情况下，才会执行 else 中的语句。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;示例代码：
        </p>
        <img src="../../assets/WorkFive3.jpg" class="one-img2">
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
  .one-img2 {
    width: 800px;
    margin: 0 auto;
  }
  .h1-style {
    text-align: center;
  }
</style>
