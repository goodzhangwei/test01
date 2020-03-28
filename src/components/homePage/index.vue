<template>
  <div class="app_container">
    <!--<header>-->
      <!--<nav>-->
        <!--<div class="logo">-->
          <!--<img src="../../assets/new.png">-->
        <!--</div>-->
        <!--<div class="navbar">-->
          <!--<ul>-->
            <!--<li><span>首页</span></li>-->
            <!--<li @click="gotoAllclasses"><span>全部课程</span></li>-->
            <!--<li @click="gotoCompetition"><span>编程比赛</span></li>-->
          <!--</ul>-->
        <!--</div>-->
        <!--<div class="personal">-->
          <!--<user-setting-popover></user-setting-popover>-->
<!--&lt;!&ndash;          <el-button @click="gotonima">点我跳</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;          <a href="#"><img src="../../assets/touxiang.jpg" style="width: 40px;height: 40px;margin-right:20px;border-radius: 50%">杨启航</a>&ndash;&gt;-->
        <!--</div>-->
      <!--</nav>-->
    <!--</header>-->
    <div style="background-color: rgba(255, 255, 255, 0.9);position: fixed;width: 100%;z-index: 999" v-if="navBarFixed">
      <Header :flags = flag_class class="header"></Header>
    </div>

    <Header :flags = flag_class class="header"></Header>
    <div :class="bannerStyle" class="background-style">
      <el-row style="width: 1150px;margin: 0 auto;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);border-radius: 10px;">
        <el-col :span="5">
          <div class="nav-back">
            <ul>
              <li>
                <p class="p-word">
                  Python智能编程
                  <i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>
                </p>
              </li>
              <li>
                <p class="p-word">
                  Python少儿趣味编程
                  <i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>
                </p>
              </li>
              <li>
                <p class="p-word">
                  StarT项目
                  <i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>
                </p>
              </li>
              <li>
                <p class="p-word">
                  博弈算法大赛
                  <i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>
                </p>
              </li>
              <li>
                <p class="p-word">
                  信息奥赛课程
                  <i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>
                </p>
              </li>
              <li>
                <p class="p-word">
                  在线课堂
                  <i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>
                </p>
              </li>
              <li>
                <p class="p-word">
                  直播大讲堂
                  <i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>
                </p>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="19">
          <div class="banner">
            <div class="banner-in">
              <el-carousel height="400px" style="border-top-right-radius: 10px;border-bottom-right-radius: 10px;" @change="carouselChange">
                <el-carousel-item  v-for="(item, index) in schna" :key="index">
                  <img :src="item" alt="" style="width: 100%;height: 100%">
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
        </el-col>
      </el-row>

    </div>
    <div style="background-color: white;padding-top: 20px;  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1)">
      <div class="content_two">
        <div>
          <span class="word_two">科技讲堂</span>
          &nbsp;&nbsp;
          <span class="word_three">从入门到具备1年开发经验</span>
        </div>
        <div class="list">
          <div class="list-div">
            <div class="two-img">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583746754019&di=87a96de6dbb1c15aeb9fb58262c0075b&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F1ddd0ba969765d5ac99eff9724c7edfc3ae9113e.jpg" width="100%" height="100%">
            </div>
            <div style="float: left;width: 120px;margin-left: 10px;margin-top: 15px">
              <p style="font-weight: bolder">Web前端攻城狮</p>
              <p style="font-size: 12px;margin-top: 5px">从未接触过编程也可以学好</p>
            </div>

          </div>
          <div class="list-div">
            <div class="two-img">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583746953606&di=de13f4da64ce993696c9bf69a8872e34&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20130806%2F20130806213317-1513026654.jpg" width="100%" height="100%">
            </div>
            <div style="float: left;width: 120px;margin-left: 10px;margin-top: 15px">
              <p style="font-weight: bolder">Java攻城狮</p>
              <p style="font-size: 12px;margin-top: 5px">综合就业排名第一</p>
            </div>
          </div>
          <div class="list-div">
            <div class="two-img">
              <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583745690435&di=f542eeac313371a27dea2867331da874&imgtype=0&src=http%3A%2F%2Fseo-1255598498.file.myqcloud.com%2Ffull%2F390fb338950d8d12f0b16b960fc61d020b1af3a6.jpg" width="100%" height="100%">
            </div>
            <div style="float: left;width: 120px;margin-left: 10px;margin-top: 15px">
              <p style="font-weight: bolder">Python攻城狮</p>
              <p style="font-size: 12px;margin-top: 5px">应用领域最为广泛</p>
            </div>
          </div>
          <div class="list-div">
            <div class="two-img">
              <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4129739275,1462830792&fm=26&gp=0.jpg" width="100%" height="100%">
            </div>
            <div style="float: left;width: 120px;margin-left: 10px;margin-top: 15px">
              <p style="font-weight: bolder">Android攻城狮</p>
              <p style="font-size: 12px;margin-top: 5px">移动市场份额第一</p>
            </div>
          </div>
          <div class="list-div">
            <div class="two-img">
              <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=729506782,1707648579&fm=11&gp=0.jpg" width="100%" height="100%">
            </div>
            <div style="float: left;width: 120px;margin-left: 10px;margin-top: 15px">
              <p style="font-weight: bolder">PHP工程师</p>
              <p style="font-size: 12px;margin-top: 5px">web开发首选语言</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content_two">
        <div>
          <span class="word_two">职场认知体验</span>
          &nbsp;&nbsp;
          <span class="word_three">一年以上开发经验系统成长</span>
        </div>
        <div class="list2">
          <div class="list2-div list2-img1">
            <!--<div class="list2-word">-->
              <!--<div class="list2-word-title">-->
                <!--<span>从Java后端到全栈</span>-->
              <!--</div>-->
              <!--<div class="list2-word-content">-->
                <!--<span>浓缩7月从工程师到CTO的十年成长经历</span>-->
              <!--</div>-->
            <!--</div>-->
          </div>
          <div class="list2-div list2-img2">
          </div>
          <div class="list2-div list2-img3">
          </div>
        </div>
      </div>
    </div>

    <div class="content_two" style="margin-top: 40px;margin-bottom: 450px">
      <div>
        <span class="word_two">推荐课程</span>
      </div>
      <div class="list3">
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>推荐</span>
            </div>
          </div>
          <div class="list3-img1 list3-img">
            <div class="img1-icon">
              <el-tag size="mini">python</el-tag>
              <el-tag size="mini">算法</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>python计算思维实践基础课 适合零基础的同学</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>推荐</span>
            </div>
          </div>
          <div class="list3-img1 list3-img2">
            <div class="img1-icon">
              <el-tag size="mini">C</el-tag>
              <el-tag size="mini">C++</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>2020 重学C++ 重构你的C++知识体系</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>推荐</span>
            </div>
          </div>
          <div class="list3-img1 list3-img5">
            <div class="img1-icon">
              <el-tag size="mini">React.js</el-tag>
              <el-tag size="mini">vue.js</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>前端框架及项目面试 聚焦 Vue/React/Webpack</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>推荐</span>
            </div>
          </div>
          <div class="list3-img1 list3-img3">
            <div class="img1-icon">
              <el-tag size="mini">Linux</el-tag>
              <el-tag size="mini">计算机网络</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>编程必备基础 计算机组成原理+操作系统+计算机网络</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
      </div>
      <div class="list3" style="margin-top: 30px">
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>推荐</span>
            </div>
          </div>
          <div class="list3-img1 list3-img4">
            <div class="img1-icon">
              <el-tag size="mini">Android</el-tag>
              <el-tag size="mini">React native</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>新版React Native从入门到实战打造高质量上线App（再升级）</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>推荐</span>
            </div>
          </div>
          <div class="list3-img1 list3-img6">
            <div class="img1-icon">
              <el-tag size="mini">python</el-tag>
              <el-tag size="mini">算法</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>剑指Java自研框架，决胜Spring源码</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>推荐</span>
            </div>
          </div>
          <div class="list3-img1 list3-img7">
            <div class="img1-icon">
              <el-tag size="mini">算法</el-tag>
              <el-tag size="mini">算法与数据结构</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>Python3入门机器学习 经典算法与应用 轻松入行人工智能</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>推荐</span>
            </div>
          </div>
          <div class="list3-img1 list3-img8">
            <div class="img1-icon">
              <el-tag size="mini">Spark</el-tag>
              <el-tag size="mini">Hadoop</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>玩转热门框架 用企业级思维 开发通用够硬的大数据平台</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
      </div>
    </div>




    <!--<div class="recom-products contaier" style="margin-top: 400px">-->
      <!--<div class="recom-hd">-->
        <!--<h4>推荐课程</h4>-->
        <!--<a>查看全部</a>-->
      <!--</div>-->
      <!--<div class="recom-bd contaier" style=" display: table;content: none;">-->
        <!--<ul>-->
          <!--<li>-->
            <!--<img style="background-color: #a68b56;height: 150px;width: 400px;border-radius: 20px 20px 0 0" src="../../assets/picturetwo.jpg">-->
            <!--<h5 @click="goToCourseIndex">python计算思维实践基础课</h5>-->
            <!--<p>适合零基础的同学，学会简单语法和简单编程逻辑思维，掌握调用模块的能力，然后独立完成小型项目。</p>-->
            <!--<div style="margin-top: 12px;"></div>-->
            <!--<h5>推荐指数:</h5>-->
            <!--<span class="star"><el-rate v-model="value1" disabled></el-rate></span>-->
          <!--</li>-->
          <!--<li>-->
            <!--<img style="background-color: #a68b56;height: 150px;width: 400px;border-radius: 20px 20px 0 0" src="../../assets/classpicture.jpg">-->
            <!--<h5>python机器人实践课</h5>-->
            <!--<p>适合python零基础的同学，学习使用python编程语言控制智能机器人，锻炼动手能力，掌握python编程语言，最后完成智能机器人相关项目。</p>-->
            <!--<h5>推荐指数:</h5>-->
            <!--<span class="star"><el-rate v-model="value1" disabled></el-rate></span>-->
          <!--</li>-->
          <!--<li>-->
            <!--<img style="background-color: #a68b56;height: 150px;width: 400px;border-radius: 20px 20px 0 0" src="../../assets/classpicture3.jpg">-->
            <!--<h5>python算法实践高阶课程</h5>-->
            <!--<p>适合python算法零基础的同学，使用python编程语言完成算法实验，学习递归、贪心、排序等主流算法与python编程语言基础，最后完成python算法实践相关项目。</p>-->
            <!--<h5>推荐指数:</h5>-->
            <!--<span class="star"><el-rate v-model="value1" disabled></el-rate></span>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="fea-class contaier">-->
      <!--<div class="fea-head">-->
        <!--<h4>精选直播课程</h4>-->
      <!--</div>-->
      <!--<div class="fea-body">-->
        <!--<el-row>-->
          <!--<el-col :span="12">-->
            <!--<div class="fea-img">-->
              <!--<img style="width: 600px;height: 250px;background-color: #a68b56" src="../../assets/pictureone.jpg">-->
            <!--</div>-->
          <!--</el-col>-->
          <!--<el-col :span="12">-->
            <!--<div class="fea-content">-->
              <!--<ul>-->
                <!--<li>-->
                  <!--<div>-->
                    <!--<el-row>-->
                      <!--<el-col :span="8">-->
                        <!--<h4>Python人工智能大讲堂系列五</h4>-->
                        <!--<p>2019-06-01  16:00</p>-->
                      <!--</el-col>-->
                      <!--<el-col :span="8">-->
                        <!--<span style="font-size: 16px;color: skyblue">直播中</span>-->
                        <!--<img src="../../assets/zhibo.png">-->
                      <!--</el-col>-->
                      <!--<el-col :span="8">-->
                        <!--<el-button type="primary">观看直播</el-button>-->
                      <!--</el-col>-->
                    <!--</el-row>-->
                  <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<div>-->
                    <!--<el-row>-->
                      <!--<el-col :span="8">-->
                        <!--<h4>Python人工智能大讲堂系列四</h4>-->
                        <!--<p>2019-05-01  14:00</p>-->
                      <!--</el-col>-->
                      <!--<el-col :span="8">-->
                        <!--<span style="font-size: 16px;color: skyblue">直播中</span>-->
                        <!--<img src="../../assets/zhibo.png">-->
                      <!--</el-col>-->
                      <!--<el-col :span="8">-->
                        <!--<el-button type="primary">观看直播</el-button>-->
                      <!--</el-col>-->
                    <!--</el-row>-->
                  <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<div>-->
                    <!--<el-row>-->
                      <!--<el-col :span="8">-->
                        <!--<h4>Python人工智能大讲堂系列三</h4>-->
                        <!--<p>2019-04-01  16:00</p>-->
                      <!--</el-col>-->
                      <!--<el-col :span="8">-->
                        <!--<span style="font-size: 16px;color: skyblue">直播中</span>-->
                        <!--<img src="../../assets/zhibo.png">-->
                      <!--</el-col>-->
                      <!--<el-col :span="8">-->
                        <!--<el-button type="primary">观看直播</el-button>-->
                      <!--</el-col>-->
                    <!--</el-row>-->
                  <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<div>-->
                    <!--<el-row>-->
                      <!--<el-col :span="8">-->
                        <!--<h4>Python人工智能大讲堂系列二</h4>-->
                        <!--<p>2019-03-01  14:00</p>-->
                      <!--</el-col>-->
                      <!--<el-col :span="8">-->
                        <!--<span style="font-size: 16px;color: skyblue">直播中</span>-->
                        <!--<img src="../../assets/zhibo.png">-->
                      <!--</el-col>-->
                      <!--<el-col :span="8">-->
                        <!--<el-button type="primary">观看直播</el-button>-->
                      <!--</el-col>-->
                    <!--</el-row>-->
                  <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<div>-->
                    <!--<el-row>-->
                      <!--<el-col :span="8">-->
                        <!--<h4>Python人工智能大讲堂系列一</h4>-->
                        <!--<p>2019-02-01  14:00</p>-->
                      <!--</el-col>-->
                      <!--<el-col :span="8">-->
                        <!--<span style="font-size: 16px;color: skyblue">直播中</span>-->
                        <!--<img src="../../assets/zhibo.png">-->
                      <!--</el-col>-->
                      <!--<el-col :span="8">-->
                        <!--<el-button type="primary">观看直播</el-button>-->
                      <!--</el-col>-->
                    <!--</el-row>-->
                  <!--</div>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->
    <!--</div>-->
    <div  style=" width: 1150px;margin: 0 auto">
      <div>
        <span class="word_two">热门课程</span>
      </div>
      <div style="margin: 0 auto;height: 20px;">
        <div class="link">
          <span @click="gotoContentClass">查看全部</span>
        </div>
      </div>
      <div>
        <el-row>
          <el-col :span="12" class="col_style" v-for="(item, index) in list" :key="index">
            <div class="img_div">
              <img v-if="item.pic === null" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3111860246,1925938903&fm=26&gp=0.jpg" class="img_class" @click="gotocontent(item.id)">
              <img v-else :src="'http://'+item.pic" class="img_class" @click="gotocontent(item.id)">
            </div>
            <div class="class_text">
              <h3 @click="gotocontent(item.id)">
                {{item.name}}
              </h3>
              <div class="content_class">
                <span>{{item.description}}</span>
              </div>
              <div class="content_class_start">
                <span>4步骤 · 6门课</span>
                <span style="margin-left: 40px"><i class="iconfont ymq-iconshoucang_shixin star_icon"></i>8848人收藏</span>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="content_two" style="margin-top: 80px;margin-bottom: 450px">
      <div>
        <span class="word_two">热门直播</span>
      </div>
      <div class="list3">
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>直播</span>
            </div>
          </div>
          <div class="list3-img1 list3-img11" @click="goToCourseIndex">
            <div class="img1-icon">
              <el-tag size="mini">数据分析&挖掘</el-tag>
              <el-tag size="mini">算法与数据结构</el-tag>
            </div>
          </div>
          <div class="list3-word" @click="goToCourseIndex">
            <span>玩转算法系列--数据结构精讲 更适合0算法基础入门到进阶（java版）</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>直播</span>
            </div>
          </div>
          <div class="list3-img1 list3-img21">
            <div class="img1-icon">
              <el-tag size="mini">JavaScript</el-tag>
              <!--<el-tag size="mini">C++</el-tag>-->
            </div>
          </div>
          <div class="list3-word">
            <span>抓紧面试前的宝贵时间 快速搞定前端JavaScript面试</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>直播</span>
            </div>
          </div>
          <div class="list3-img1 list3-img51">
            <div class="img1-icon">
              <el-tag size="mini">SpringBoot</el-tag>
              <el-tag size="mini">SSM</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>Java主流技术栈SSM+SpringBoot商铺系统</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>直播</span>
            </div>
          </div>
          <div class="list3-img1 list3-img31">
            <div class="img1-icon">
              <el-tag size="mini">Node.js</el-tag>
              <el-tag size="mini">Vue.js</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>Vue Element+Node.js开发企业通用管理后台系统</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
      </div>
      <div class="list3" style="margin-top: 30px">
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>直播</span>
            </div>
          </div>
          <div class="list3-img1 list3-img41">
            <div class="img1-icon">
              <el-tag size="mini">Python</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>全面系统Python3.8入门+进阶 (程序员必备第二语言)</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>直播</span>
            </div>
          </div>
          <div class="list3-img1 list3-img61">
            <div class="img1-icon">
              <el-tag size="mini">Node.js</el-tag>
              <el-tag size="mini">React.js</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>TypeScript 系统入门到项目实战 趁早学习提高职场竞争力</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>直播</span>
            </div>
          </div>
          <div class="list3-img1 list3-img71">
            <div class="img1-icon">
              <el-tag size="mini">Go</el-tag>
              <el-tag size="mini">爬虫</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>Google资深工程师深度讲解Go语言</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
        <div class="list3-div">
          <div class="icon-list">
            <div class="icon-list-content">
              <span>直播</span>
            </div>
          </div>
          <div class="list3-img1 list3-img81">
            <div class="img1-icon">
              <el-tag size="mini">JavaScript</el-tag>
              <el-tag size="mini">小程序</el-tag>
            </div>
          </div>
          <div class="list3-word">
            <span>纯正商业级应用-微信小程序开发实战</span>
          </div>
          <div class="list3-icon-word">
            <span>中级</span>
            &nbsp;&nbsp;
            <i class="el-icon-user"></i>
            <span>456</span>
            <span style="float: right">13人评价</span>
          </div>
        </div>
      </div>
    </div>


    <div class="copyrightContainer">
      <span style="font-size: 12px">Copyright&nbsp;&nbsp;&nbsp;中科智禾教育大大数据中心   ©2019</span>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/header'
export default {
  name: 'index',
  components: { Header },
  data () {
    return {
      value1: '5',
      navBarFixed: false,
      schna: [ 'http://58.119.112.12/CCZX_image/photoseven.jpg','http://58.119.112.12/CCZX_image/photofive.jpg','http://58.119.112.12/CCZX_image/photonine.jpg','http://58.119.112.12/CCZX_image/photosix.jpg', 'http://58.119.112.12/CCZX_image/photoone.jpg','http://58.119.112.12/CCZX_image/phototwo.jpg','http://img.mukewang.com/5e6842050001ea7d16000652.jpg'],
      bannerthree: require('../../assets/bannerthree.jpg'),
      page: 1,
      size: 100,
      list: [],
      flag_class: '未登录',
      flag_state: true,
      bannerStyle: 'background-banner'

    }
  },
  created () {
    if (localStorage.getItem('flag_class') === null) {
      this.flag_state = true
    } else {
      this.flag_state = false
    }
  },
  computed: {
    username (){
      if (localStorage.getItem('name') === null) {
        return 'ceshi'
      } else {
        return localStorage.getItem('name')
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.watchScroll)
    this.setBannerH()
    window.addEventListener('resize', () => {
      this.setBannerH()
    }, false)
    this.getList()
    // console.log(this.$route.query.flag_class)
    // if (this.$route.query.flag_class === undefined) {
    //
    // } else {
    //     // localStorage.setItem('ff', '已登录')
    //     this.flag_class = '已登录'
    // }
    // if (this.$route.query.flag_class === 'yidenglu') {
    //   // localStorage.setItem('ff', '已登录')
    //   this.flag_class = '已登录'
    // }
    // if (localStorage.getItem('flag_class') === null) {
    //   console.log('ewff' + localStorage.getItem('flag_class'))
    // } else {
    //   console.log('ewff' + localStorage.getItem('flag_class'))
    //   this.flag_class = localStorage.getItem('flag_class')
    // }
  },
  methods: {
    setBannerH(){
      this.bannerH = document.body.clientWidth / 4
    },
    watchScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 49) {
        this.navBarFixed = true
      } else {
        this.navBarFixed = false
      }
      console.log(scrollTop)
    },
    gotoCompetition: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        console.log('我要跳转界面了')
        this.$router.push('/codingCompetition')
      }
    },
    goToCourseIndex: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        console.log('我要跳转界面了')
        this.$router.push('/coursestudy')
      }
    },
    gotoAllclasses: function () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        console.log('我要跳转界面了')
        this.$router.push('/allclasses')
      }
    },
    gotoVideoClass () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/videoclass')
      }
    },
    getList () {
      // var url = 'http://58.119.112.14:11030/cms/user/coursePub/list/1/8'
      var url = 'http://58.119.112.14:11030/cms/user/coursePub/mylist/1/10?username=' + this.username
      this.$axios.get(url).then((res) => {
        this.list = res.data.queryResult.list
      })
    },
    gotocontent (id) {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push({
          path: '/videoclass',
          query: {
            class_id: id
          }
        })
      }
    },
    gotoContentClass () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        console.log('efwfewf')
        this.$router.push('/ContentClass')
      }
    },
    carouselChange(data) {
      if (data === 0) {
        this.bannerStyle = 'background-banner'
      } else if (data === 1) {
        this.bannerStyle = 'background-banner1'
      } else if (data === 2) {
        this.bannerStyle = 'background-banner2'
      }
    }
  }
}
</script>

<style scoped>
  .contaier {
    width: 1150px;
    margin: 0 auto;
  }
  a {
    color: #050505;
    text-decoration: none;
  }
  header{
    height: 100px;
    background-color: white;
    overflow: hidden;
  }
  nav {
    width: 1400px;
    height: 60px;
    background-color: white;
    margin: 0 auto;
    margin-top: 20px;
  }
  .logo {
    float: left;
    margin-left: 5%;
  }
  .navbar {
    float: left;
    height: 60px;
    line-height: 60px;
    margin-left: 100px;
  }
  .navbar li {
    float: left;
    list-style-type: none;
    margin-left: 150px;
    height: 60px;
    cursor: pointer;
  }
  .logo img {
    height: 50px;
    width: 150px;
  }
  .navbar li span {
    padding:0 8px;
    /*border-bottom: 1px solid red ;*/
    height: 60px;
    display: block;
    cursor: pointer;
  }
  .navbar li span:hover {
    border-bottom: 2px solid #a68b56;
    cursor: pointer;
  }
  .personal {
    float: right;
    height: 60px;
    line-height: 60px;
    margin-right: 15px;
  }
  .banner {
    /*height:420px;*/
    /*background-color: hotpink;*/
  }
  .banner-in{
    /*background-color: #42b983;*/
    /*border-radius: 20px;*/

  }
  /*.el-carousel__item:nth-child(1) {*/
  /*  background-image: url("../../assets/lunboone.jpg");*/
  /*}*/
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .recom-products {
    margin-top: 35px;
  }
  .recom-hd {
    height: 40px;
  }
  .recom-hd h4 {
    float: left;
    color: #494949;
  }
  .recom-hd a {
    float: right;
    margin-top: 10px;
    margin-right: 30px;
    font-size: 14px;
    color: #a5a5a5;
  }
  .recom-bd {
    position: relative;
  }
  .star {
    position: absolute;
    margin-top: -23px;
    margin-left: 100px;
  }
  .recom-bd ul li {
    width:400px;
    height: 300px;
    border-radius: 20px;
    background-color: #f4f4f4;
    list-style-type: none;
    box-shadow: 0 3px 2px rgba(0,0,0,0.4) ;
    float: left;
    margin-right: 65px;
  }
  .recom-bd li h5,
  .recom-bd li p {
    padding: 0 20px 0 24px;
    font-size: 14px;
  }
  .recom-bd li h5 {
    margin-top: 12px;
    line-height: 22px;
    cursor:pointer
  }
  .recom-bd li p {
    color:#999;
  }
  .fea-class {
    margin-top: 30px;
    /*height: 300px;*/
    margin-bottom: 30px;
  }
   .fea-head h4 {
    color: #494949;
  }
   .fea-body {
     width: 1400px;
     background-color: white;
     box-shadow: 0 3px 2px rgba(0,0,0,0.4) ;;
     border-radius: 20px;
     margin-top: 15px;
     padding-bottom: 20px;
   }
   .fea-img{
     padding: 20px;
   }
   .fea-content ul li {
     list-style-type: circle;
     list-style-type: none;
     margin-top: 20px;
   }
   .fea-content p{
     font-size: 14px;
     color: #999;
   }
   .fea-content img {
     width: 30px;
     height: 30px;
     display: block;
     margin-top: -7px;
     float: left;
     margin-right: 30px
   }
   /*.fea-pic-con{*/
   /*  padding: 20px;*/
   /*  float: left;*/
   /*}*/
   /*.fea-content-con {*/
   /*  padding: 20px;*/
   /*  display: block;*/
   /*}*/

  /*// 清除浮动*/
  .clearfix:before, .clearfix:after {
    display: table;
    content: none;
  }
  .clearfix:after {
    clear: both;
  }
  .clearfix {
    *zoom: 1;
  }
  .copyrightContainer {
    text-align: center;
    margin-bottom: 20px;
    margin-top: 100px;

  }
  .class_header {
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
    font-size: 28px;
    font-weight: bold;
  }
  .img_class {
    width: 100%;
    height: 100%;
  }
  .img_class {
    transition: all 0.6s;
  }
  .img_div:hover .img_class{
    transform: scale(1.2);
    cursor: pointer;
  }
  .img_div {
    width: 140px;
    height: 140px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    float: left;
  }
  .class_text {
    float: left;
    padding-left: 30px;
    width: 400px;
    height: 150px;
  }
  .class_text h3 {
    margin-top: 10px;
  }
  .class_text h3:hover {
    cursor: pointer;
  }
  .content_class {
    margin-top: 10px;
    font-size: 14px;
    color: #666666;
    letter-spacing: 1px;
  }
  .content_class_start {
    margin-top: 20px;
    font-size: 13px;
    color: #999999;
    font-weight: bolder;
  }
  .star_icon {
    font-size: 13px;margin-right: 2px;
  }
  .col_style {
    margin-top: 20px;
  }
  .link {
    float: right;
    font-size: 14px;
    color: #A5A5A5;
  }
  .link:hover {
    cursor: pointer;
  }
  .header {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
  .background-banner {
    /*background: #C9D6FF;  !* fallback for old browsers *!*/
    /*background: -webkit-linear-gradient(to top, #E2E2E2, #C9D6FF);  !* Chrome 10-25, Safari 5.1-6 *!*/
    /*background: linear-gradient(to top, #E2E2E2, #C9D6FF); !* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ *!*/
    background: #D8E7F8;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #FFFFFF, #D8E7F8);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #FFFFFF, #D8E7F8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .background-banner1 {
    background: #EFEDFA;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #FFFFFF, #EFEDFA);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #FFFFFF, #EFEDFA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  .background-banner2 {
    background: #F8E1DA;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #FFFFFF, #F8E1DA);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #FFFFFF, #F8E1DA); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  }
  .background-style {
    height: 450px;padding-top: 40px;
  }
  .content_two {
    width: 1150px;
    height: 200px;
    margin: 0 auto;
  }
  .word_two {
    color: black;font-size: 24px;font-weight: bolder
  }
  .word_three {
    color: grey;
    font-size: 14px;
  }
  .list {
    height: 80px;
    margin-top: 20px;
    display: flex;
  }
  .list .list-div {
    flex: 1;
    background-color: #F3F5F6;
    margin-left: 20px;
    border-radius: 10px;
    transition: all 0.4s;
  }
  .list-div:hover {
    cursor: pointer;
    box-shadow: 0 2px 12px rgba(0, 0, 0, .12), 0 0 12px rgba(0, 0, 0, .04)
  }
  .two-img {
    width: 50px;height: 50px;float: left;margin-top: 15px;margin-left: 10px;border-radius: 5px
  }
  .two-img img {
    border-radius: 5px
  }
  .list2 {
    height: 100px;
    margin-top: 20px;
    display: flex;
  }
  .list2 .list2-div {
    flex: 1;
    margin-left: 20px;
    border-radius: 10px;
    margin-right: 10px;
    position: relative;
    cursor: pointer;
  }
  .list2-word {
    text-align: center;position: absolute;top:50%;left: 50%;transform: translate(-50%, -50%);width: 100%
  }
  .list2-word-title {
    font-weight: bolder;
    font-size: 18px;
    color: white;
  }
  .list2-word-content {
    color: white;
    font-size: 12px;
    margin-top: 10px;
  }
  .list2-img1 {
    background-image: url("../../assets/box-java1.png");
    background-size: 100% 100%;
  }
  .list2-img2 {
    background-image: url("../../assets/1234.png");
    background-size: 100% 100%;
  }
  .list2-img3 {
    background-image: url("../../assets/box-java2.png");
    background-size: 100% 100%;
  }
  .list3 {
    height: 240px;
    margin-top: 20px;
    display: flex;
  }
  .list3 .list3-div {
    flex: 1;
    margin-left: 20px;
    cursor: pointer;
    position: relative;
  }
  .list3-div:hover .list3-word {
    color: red;
  }
  .list3-img {
    background-image: url("http://img3.sycdn.imooc.com/szimg/5e3cfea008e9a61b06000338-360-202.jpg");
  }
  .list3-img11 {
    background-image: url("http://img3.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg");
  }
  .list3-img21 {
    background-image: url("http://img3.mukewang.com/szimg/5dbffa9109ef425a12000676-360-202.png");
  }
  .list3-img51 {
    background-image: url("http://img1.mukewang.com/szimg/5d25400a08fa408c06000338-360-202.jpg");
  }
  .list3-img31 {
    background-image: url("http://img3.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png");
  }
  .list3-img41 {
    background-image: url("http://img1.mukewang.com/szimg/59b8a486000107fb05400300-360-202.jpg");
  }
  .list3-img61 {
    background-image: url("http://img1.mukewang.com/szimg/5e1d990f0885d97306000338-360-202.jpg");
  }
  .list3-img71 {
    background-image: url("http://img2.mukewang.com/szimg/5a7127370001a8fa05400300-360-202.jpg");
  }
  .list3-img81 {
    background-image: url("http://img4.mukewang.com/szimg/5b4bfb7000019d2e10800600-360-202.jpg");
  }
  .list3-img1 {
    height: 150px;
    width: 100%;
    background-size: 100% 100%;
    border-radius: 10px;
    position: relative;
  }
  .list3-img2 {
    background-image: url("http://img2.sycdn.imooc.com/szimg/5e26a9f909ef95b512000676-360-202.png");
  }
  .list3-img3 {
    background-image: url("http://img4.sycdn.imooc.com/szimg/5d1032ab08719e0906000338-360-202.jpg");
  }
  .list3-img4 {
    background-image: url("http://img2.sycdn.imooc.com/szimg/5db6916d08d81b8b12000676-360-202.jpg");
  }
  .list3-img5 {
    background-image: url("http://img2.sycdn.imooc.com/szimg/5e4644f609ffdfa312000676-360-202.png");
  }
  .list3-img6 {
    background-image: url("http://img1.sycdn.imooc.com/szimg/5a39cd3f0001c09805400300-360-202.jpg");
  }
  .list3-img7 {
    background-image: url("http://img3.sycdn.imooc.com/szimg/5e40f9d408e7c86b06000338-360-202.jpg");
  }
  .list3-img8 {
    background-image: url("http://img2.sycdn.imooc.com/szimg/5e5621d0092c054612000676-360-202.png");
  }
  .list3-word {
    margin-top: 10px;
    font-weight: bolder;
    margin-left: 10px;
    transition: all 0.4s;
  }
  .list3-icon-word {
    margin-left: 10px;
    font-size: 12px;
    margin-top: 10px;
    padding-right: 15px;
    color: grey;
  }
  .img1-icon {
    top: 80%;
    position: absolute;
    left: 5%;
  }
  .icon-list {
    width: 40px;
    height: 20px;
    background-color: white;
    border-radius: 10px;
    position: absolute;
    top: 10px;
    left: -10px;
    z-index: 2;
    padding: 2px;
  }
  .icon-list-content {
    border-radius: 10px;
    background-color: red;
    z-index: 3;
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
  }
  .el-tag {
    background-color: rgba(0,0,0,0.5);
    border-color: rgba(0,0,0,0.5);
    color: white;
  }
  .nav-back {
    height: 400px;background-color: #2B333B;border-top-left-radius: 10px;border-bottom-left-radius: 10px;
  }
  .nav-back ul li {
    list-style-type: circle;
    list-style-type: none;
    padding: 15px;
    transition: all 0.1s;
  }
  .nav-back ul li:hover {
    background-color: rgba(255, 255, 255, 0.3);
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    cursor: pointer;
  }
  .nav-back ul li:hover p {
    color: white;
  }
  .nav-back ul {
    padding-top: 30px;
    padding-left: 10px;
  }
  .p-word {
    color: #AAADB1;
    text-align: left;
    font-size: 14px;
  }
</style>
