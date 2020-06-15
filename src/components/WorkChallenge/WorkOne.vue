<template>
    <div>
      <Header></Header>
      <div class="containers-style">
        <div>
          <h1>初识Python</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，我们普及一下编程语言的基础知识。用任何编程语言来开发程序，都是为了让计算机干活，比如下载一个MP3，编写一个文档等等，而计算机干活的CPU只认识机器指令，所以，尽管不同的编程语言差异极大，最后都得“翻译”成CPU可以执行的机器指令。而不同的编程语言，干同一个活，编写的代码量，差距也很大。比如，完成同一个任务，C语言要写1000行代码，Java只需要写100行，而Python可能只要20行。所以Python是一种相当高级的语言。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你也许会问，代码少还不好？代码少的代价是运行速度慢，C程序运行1秒钟，Java程序可能需要2秒，而Python程序可能就需要10秒。那是不是越低级的程序越难学，越高级的程序越简单？表面上来说，是的，但是，在非常高的抽象计算中，高级的Python程序设计也是非常难学的，所以，高级程序语言不等于简单。但是，对于初学者和完成普通任务，Python语言是非常简单易用的。连Google都在大规模使用Python，你就不用担心学了会没用。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首先，如果你是第一次接触编程语言，在写所有代码之前，请千万不要用“复制”-“粘贴”把代码从页面粘贴到你自己的电脑上。写程序也讲究一个感觉，你需要一个字母一个字母地把代码自己敲进去，在敲代码的过程中，初学者经常会敲错代码：拼写不对，大小写不对，混用中英文标点，混用空格和Tab键，所以，你需要仔细地检查、对照，才能以最快的速度掌握如何写程序。
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来让我们走进python，在交互模式的提示符>>>下，直接输入代码，按回车，就可以立刻得到代码执行结果。现在，试试输入10+20，看看计算结果是不是30：
          </p>
          <img src="../../assets/workone1.png" class="one-img">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;很简单吧，任何有效的数学计算都可以算出来。 如果要让Python打印出指定的文字，可以用print()函数，然后把希望打印的文字用单引号或者双引号括起来，但不能混用单引号和双引号：
          </p>
          <img src="../../assets/workone2.png" class="one-img">
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接下来举一个个简单的小案例：打印输出九九乘法表
          </p>
          <img src="../../assets/workone3.png" class="one-img">
          <img src="../../assets/workone4.png" class="one-img">
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
