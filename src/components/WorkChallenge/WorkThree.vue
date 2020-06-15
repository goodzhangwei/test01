<template>
  <div>
    <Header></Header>
    <div class="containers-style">
      <div>
        <h1>会动的编程----绘制六边六色螺旋图形</h1>
        <h2>1、海龟画圆</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说到几何，海龟作图可以绘制很多有趣的形状，而不只是直线。现在我们先来更多地了解一下python turtle库。turtle库中画笔有好多属性，不光只有画直线的，还有可以画圆的，比如t.circle( )（让程序在当前位置画一个半径为x的圆）就可以画圆，当然还有其他属性这里就不一一列举了。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;circle()语句可以让我们的小海龟画圆，要注意，circie 括号内要填数字的，填的这个数字表示我们要画半径为多少的圆形，圆的圆心在乌龟现在位置往左一个半径的距离处。
        </p>

        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;还记得我们的 turtle 小海龟吗？它不仅是一头可爱的小海龟，它还是一个非常厉害的画家！它能通过移动、转身、调色等一系列动作，在画布上画出各种各样美丽的图案。在上一节课我们已经学习了它的一些基本操作，并用使用它绘制了螺旋的正方形，接下来我们继续学习，使用我们的小海龟来画出更神奇更漂亮的作品！
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;上一节课我们用小乌龟绘制出了正方形，当然了我们的小乌龟不止能画正方形，还能画长方形，三角形，圆以及多边形等等各种形状。
          我相信你能举一反三，毕竟正方形我们都会画了，对吧！那圆应该怎么画呢？就像 forward()语句一样，我们可以用 circle()语句来让我们的小乌龟画圆，是不是很简单呢？要注意，circie 括号内要填数字的，填的这个数字表示我们要画半径为多少的圆形，圆的圆心在乌龟现在位置往左一个半径的距离处。就像这样：
        </p>
        <img src="../../assets/WorkThree1.png" class="one-img">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果我们想画一个更为复杂一点的图形，例如圆螺旋，那应该怎样去画呢？好在，画一个固定大小（或半径）的圆的命令，和画一条直线的命令都比较简单。我们只要将t.forward( x )修改为t.circle( x )就可以了。具体代码如下：
        </p>
        <img src="../../assets/WorkThree2.jpg" class="one-img">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;让我们来思考一下，这个绘制和正方形螺旋有一个相同点：它也有4组圆形的螺旋线，就像正方形的螺旋线有四个边一样。这是因为我们使用的了t.left( 90 )命令，每次都向左旋转都超过90°一点点。如果我们学过几何就知道，围绕一个点旋转一圈是360°，就像正方形有4个90°的角（4×90 = 360）。海龟通过每次围绕图形旋转比90°多一点点，从而画出圆螺旋的图形。
        </p>
        <img src="../../assets/WorkThree2.png" class="one-img">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们将会看到的一点不同是，圆形螺旋要比正方形螺旋要大一些，实际上，大约是前者两倍那么大。这是因为t.circle( x )中使用x作为圆的半径，而这是从圆心到边缘的距离，大概是圆的宽度的一半。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;半径为x意味着，圆的直径，也就是说总的宽度是x的两倍。换句话说t.circle( x )绘制的圆，当x等于1的时候，总宽度为2个像素；当x为2的时候总宽度为4个像素；按照这种推算方式，直到x等于99的时候，其宽度为198个像素。这是正方形最大时候的两倍，因此，圆螺旋看上去是正方形螺旋的两倍大小，当然，也会加倍的酷哦！像是一个旋转的大风车。
        </p>
        <img src="../../assets/WorkThree3.png" class="one-img">
        <h2>2、添加颜色</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些螺旋图的形状不错，但是，颜色太单调了，如果能够让螺旋线变成彩色是不是会更加酷炫呢？回归到正方形螺旋图形上来，怎样给它加上颜色呢？只需要在原来的代码中再加上一行代码，运用turtle库中另外一个属性，t.pencolor(“ color ”)运用这个属性可以改变画笔的颜色，把color改成red那么画笔所花的线就会变成红色，同样的也可以改成blue、green等都是可以的。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;pencolor 可以改变画笔颜色，括号内要填入一个单引号或者双引号，然后再单引号或者双引号中间填入想设置的画笔颜色的英文单词。
        </p>
        <img src="../../assets/WorkThree4.jpg" class="one-img">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运行改程序会出现正方形螺旋的蓝色版本，如下图
        </p>
        <img src="../../assets/WorkThree5.png" class="one-img">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;要注意的是，pencolor 语句一定要放在 circle 语句的前面！也就是说，我们先要设置画笔的颜色，然后再画圆形。如果 pencolor 语句放在 circle 语句的后面， 我们的程序是一条一条顺序执行的，也就是说我们会画出黑色的图形形，然后再调节画笔的颜色，这样是不是就没有意义了？所以说，要先设置画笔颜色然后再画图形。
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;画笔的颜色我们学会修改了，那么画布的颜色是不是也可以修改呢？当然可以！我们用 bgcolor()语句来修改，用法和 pencolor()语句很类似呢！就像这样：
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;from turtle import *
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;bgcolor('black')
        </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运行结果：</p>
        <img src="../../assets/WorkThree6.png" class="one-img">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是不是感觉很棒呢？ </p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;运用运用本节课学习的海龟画图turtle库中学习的pencolor()、bgcolor()函数的相关知识画出下列图形。</p>
        <img src="../../assets/WorkThree7.png" class="one-img">
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
