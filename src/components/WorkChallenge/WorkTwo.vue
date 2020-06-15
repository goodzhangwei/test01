<template>
  <div>
    <Header></Header>
    <div class="containers-style">
      <div>
        <h1>会动的编程----海龟画图</h1>
        <h2>1、初识海龟画图</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;海龟（turtle）是python提供给开发者的一个绘图的标准库，可以利用turtle绘制出各种各样有趣的图形也可以绘制出令人惊奇的图片。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;使用海龟作图，不仅能够只用几行代码就创建出令人印象深刻的视觉效果，而且还可以跟随海龟看看每行代码如何影响到它的移动。这能够帮助我们理解代码的逻辑。
        </p>
        <img src="../../assets/WorkTwo1.png" class="one-img">
        <h2>2、第一个海龟程序</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们使用海龟作图来编写第一个程序。
        </p>
        <img src="../../assets/WorkTwo2.png" class="one-img">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当这段代码运行时，会得到一幅漂亮整齐的图片。
        </p>
        <img src="../../assets/WorkTwo3.png" class="one-img">
        <h2>3、程序是怎样工作的</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过逐行分析这个程序，来了解程序是如何进行工作，电脑是通过哪种顺序来读取程序的。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第1行是注释。正如之前所讲过的那样，注释是以一个井号（#）开头，允许我们在井号候写入一些提示，给自己或者以后阅读该程序的其他人一些提示，计算机不会阅读或者编译井号后的内容。在这个例子中，我们将这个程序是做什么的做一个简单说的说明。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第2行导入（import）了绘制海龟图形的功能，导入已经编写过的模块（也是由代码编写）或者称为库，这是编程工作非常有趣的事情之一。如果我们编写了一些有趣并有用的程序，也可以将其与其他人分享，同时也可以自己重用它。当我们输入import turtle，就表示我们的程序能够使用那些python程序员所编写的代码。图上中的小黑色箭头就表示海龟，它在屏幕上移动的时候会使用海龟绘图。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第3行t = turtle.Pen( )，它是让计算机知道我们将使用字母t表示海龟的画笔。这样的编码使得我们只需要录入t.forward( )，而不是turtle.Pen( ).forward( )，就可以让海龟在屏幕上用海龟画笔进行画图。字母t是告诉海龟怎么做的一种快捷方式。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第4行最为复杂。我们创建了一个循环（loop）精确的说是for循环，它重复一组指令很多次。这个循环设置了一个范围（range），从0~99的100个数字（计算机总是从0开始计数，而不是像我们通常那样从1开始）。在该循环中，字母x遍历了0~99中的每一个数字。因此x从0开始，然后变为1，然后在变为2，依次直到99，一共执行了100次。其中x叫做变量（小读者可能会把x当做未知数，就像当他们求解x + 4 = 6中未知数x一样。年龄大一点的读者可能会通过代数课或者其他的数学课程认识x，早期的程序员正是从代数和数学中借用了变量的概念）变量在程序执行过程中存储了一个可以修改（变化）的值。我们在编程过程，每一个程序都会用到变量。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第5行第6行代码，这两行代码缩进了，或者说，在左边留出了空格。这意味着他们在for循环结构当中（in the loop）并且是和第4行代码是一起的，每次x从0~99的范围中获取一个新数字的时候，这些代码都会执行一次，直到达到100次时，跳出循环。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第5行，命令t.forward( x )（forward是turtle库中画笔的一个属性，其表示向当前画笔方向移动x像素长度）是让海龟的画笔在屏幕上向前移动x个点，因为第一个数字是0，所以画笔根本不会移动。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;第6行，t.left( 90 )是让海龟向左转90°，或者说转四分之一个圈。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面来着重介绍一下for循环。由于for循环的原因，程序持续运行并且回到循环的开始位置。计算机加1后将x移动到范围中的下一个值，因为1依然属于从0~99的范围中，所以循环继续。现在x是1，因此画笔向前移动1个点，然后，画笔向左移动90°，因为代码是t.left( 90 )，这样一次for循环执行完毕，没有超出范围，回到for循环起始位置，执行下一次循环，依次类推，当x到达99是，for循环的最后一次迭代（执行），画笔围绕着正方形螺旋线的外围化了一条长长的线条，for循环结束，正方形螺旋图形就画出来了。
        </p>
        <img src="../../assets/WorkTwo4.png" class="one-img">

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
