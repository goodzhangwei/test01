<template>
  <div class="app_container">
    <transition name="fade">
      <div  v-if="navBarFixed" class="header-show">
        <HeaderTwo :flags = flag_class class="header "></HeaderTwo>
      </div>
    </transition>

    <Header :flags = flag_class class="header"></Header>

    <div >
      <el-carousel class="carousel-img" height="665px" @change="carouselChange">
        <el-carousel-item  v-for="(item, index) in schna" :key="index">
          <img :src="item" alt="" >
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content-tag">
      <div>
        <span>Python智能编程</span>
      </div>
      <div>
        <span>Python少儿趣味编程</span>
      </div>
      <div>
        <span>StarT项目</span>
      </div>
      <div>
        <span>博弈算法大赛</span>
      </div>
      <div>
        <span>信息奥赛课程</span>
      </div>
      <div>
        <span>在线课堂</span>
      </div>
      <div>
        <span>直播大讲堂</span>
      </div>
    </div>
    <div class="kp-con">
      <div class="content-kp">
        <div class="kp-title">
          <span>科普大讲堂</span>
        </div>
        <div class="kp-tag">
          <div class="kp-tag-card kp-bg1">
            <div class="kp-text-title">
              <span>AI&机器人</span>
            </div>
            <div class="kp-text-con">
              <span>从未接触过编程的爱好者</span>
            </div>

            <img src="../../assets/circle1-icon.png" class="tag-img">
          </div>
          <div class="kp-tag-card kp-bg2">
            <div class="kp-text-title">
              <span>自然语言处理</span>
            </div>
            <div class="kp-text-con">
              <div>
                <span>人工智能和语言学</span>
              </div>
              <div>
                <span>领域的分支学科</span>
              </div>
            </div>

            <img src="../../assets/circle2-icon.png" class="tag-img2">
          </div>
          <div class="kp-tag-card kp-bg3">
            <div class="kp-text-title">
              <span>机器学习</span>
            </div>
            <div class="kp-text-con">
              <span>应用领域最为广泛</span>
            </div>

            <img src="../../assets/circle3-icon.png" class="tag-img">
          </div>
          <div class="kp-tag-card kp-bg4">
            <div class="kp-text-title">
              <span>深度学习</span>
            </div>
            <div class="kp-text-con">
              <span>人工智能新方向</span>
            </div>

            <img src="../../assets/circle4-icon.png" class="tag-img">
          </div>
          <div class="kp-tag-card kp-bg5">
            <div class="kp-text-title">
              <span>前端开发</span>
            </div>
            <div class="kp-text-con">
              <span>Web开发首选</span>
            </div>

            <img src="../../assets/circle5-icon.png" class="tag-img">
          </div>
        </div>
      </div>
    </div>
    <div class="zhichang-con">
      <div class="content-zc">
        <div class="kp-title">
          <span>职场认知体验</span>
        </div>
        <div class="zc-tag">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="zc-card zc-bg1">
                <div class="zc-card-title">
                  <span>从Java后端到全栈</span>
                </div>
                <div class="zc-card-con">
                  <span>浓缩从工程师到CTO的10年成长经验</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="zc-card zc-bg2">
                <div class="zc-card-title">
                  <span>大前端--前端高级进阶</span>
                </div>
                <div class="zc-card-con">
                  <div>
                    <span>覆盖前端全栈+全周期</span>
                  </div>
                  <div>
                    <span>+多端应用的体系大课</span>
                  </div>

                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="zc-card zc-bg3">
                <div class="zc-card-title">
                  <span>Java架构师</span>
                </div>
                <div class="zc-card-con">
                  <span>跟随千万级项目从0-100一起成长</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="xl-course">
      <div class="content-xl">
        <div class="xl-title">
          <span>系列课程</span>
        </div>
        <div class="xl-tag">
         <span class="xl-tags">
              Python
            </span>
          <span class="xl-tags">
             C++
            </span>
          <span class="xl-tags">
             计算机组成原理
            </span>
          <span class="xl-tags">
             React Native
            </span>
          <span class="xl-tags">
             玩转热门框架
            </span>
          <span class="xl-tags">
             机器学习&人工智能
            </span>
          <span class="xl-tags-more">查看更多课程 > ></span>
        </div>
        <div class="xl-course-card">
          <el-row :gutter="30">
            <el-col :span="6">
              <div class="xl-card">
                <div class="xl-card-img xl-card-img1"></div>
                <div class="xl-card-text">
                  <div class="xl-card-title">
                    <span>Python计算思维实践基础课 适合零基础同学</span>
                  </div>
                  <div class="xl-card-footer">
                    <span class="xl-footer-tag">适中</span>
                    <div class="xl-footer-icon">
                      <i class="iconfont ymq-iconuser xl-iconfont"></i>
                      <span class="xl-footer-text1">456&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                      <!--<span> | </span>-->
                      <span class="xl-footer-text2">13人评价</span>
                    </div>

                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="xl-card">
                <div class="xl-card-img xl-card-img2"></div>
                <div class="xl-card-text">
                  <div class="xl-card-title">
                    <span>Python计算思维实践基础课 适合零基础同学</span>
                  </div>
                  <div class="xl-card-footer">
                    <span class="xl-footer-tag">适中</span>
                    <div class="xl-footer-icon">
                      <i class="iconfont ymq-iconuser xl-iconfont"></i>
                      <span class="xl-footer-text1">456&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                      <!--<span> | </span>-->
                      <span class="xl-footer-text2">13人评价</span>
                    </div>

                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="xl-card">
                <div class="xl-card-img xl-card-img3"></div>
                <div class="xl-card-text">
                  <div class="xl-card-title">
                    <span>Python计算思维实践基础课 适合零基础同学</span>
                  </div>
                  <div class="xl-card-footer">
                    <span class="xl-footer-tag">适中</span>
                    <div class="xl-footer-icon">
                      <i class="iconfont ymq-iconuser xl-iconfont"></i>
                      <span class="xl-footer-text1">456&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                      <!--<span> | </span>-->
                      <span class="xl-footer-text2">13人评价</span>
                    </div>

                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="xl-card">
                <div class="xl-card-img xl-card-img4"></div>
                <div class="xl-card-text">
                  <div class="xl-card-title">
                    <span>Python计算思维实践基础课 适合零基础同学</span>
                  </div>
                  <div class="xl-card-footer">
                    <span class="xl-footer-tag">适中</span>
                    <div class="xl-footer-icon">
                      <i class="iconfont ymq-iconuser xl-iconfont"></i>
                      <span class="xl-footer-text1">456&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                      <!--<span> | </span>-->
                      <span class="xl-footer-text2">13人评价</span>
                    </div>

                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="hot-course">
      <div class="content-hot">
        <div class="kp-title">
          <span>热门课程</span>
          <div class="hot-icon-util">
            <span class="hot-icon-util-de"><i class="iconfont ymq-iconhuanyipi"></i> 换一批</span>
            <span class="hot-icon-util-de">更多 > ></span>
          </div>

        </div>
        <div class="hot-content">
          <el-row :gutter="20">
            <el-col :span="4">
              <div class="hot-card hot-card-left">
                <div class="hot-card-left-text1">
                  <span>热门课程</span>
                </div>
                <div class="hot-card-left-text2">
                  <span>共1970节课</span>
                </div>
                <div class="hot-card-left-text3">
                  <a>查看更多教程>></a>
                </div>
              </div>
            </el-col>
            <el-col :span="5" v-for="(item, index) in list" :key="index">
              <div class="hot-card">
                <div class="hot-card-img" @click="gotocontent(item.id)">
                  <img :src="imgList[index]" class="hot-img-style">
                </div>
                <div class="hot-card-right-text">
                  <div class="hot-card-right-title" @click="gotocontent(item.id)">
                    <span>{{item.name.substring(0, 10)}}</span>
                  </div>
                  <div class="hot-card-right-icon">
                    <span class="hot-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                    <span class="hot-icon-right">4步骤·6门课</span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="live-course">
      <div class="live-content">
        <div class="kp-title">
          <span>热门直播</span>
          <div class="hot-icon-util">
            <span class="hot-icon-util-de"><i class="iconfont ymq-iconhuanyipi"></i> 换一批</span>
            <span class="hot-icon-util-de">更多 > ></span>
          </div>

        </div>
        <div class="content-live">
          <el-row :gutter="15">
            <el-col :span="6">
              <div class="live-card">
                <div class="live-card-img">
                  <img src="../../assets/live-card-img-bg1.png" class="live-card-img-bg">
                  <img src="../../assets/live-card-img-bg2.png" class="live-card-img-bg2">
                </div>
                <div class="live-card-text">
                  <div class="live-card-title">
                    <span>自然语言处理</span>
                  </div>
                  <div class="live-card-icon">
                    <span class="live-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                    <span class="live-icon-right">初级练习</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="live-card">
                <div class="live-card-img">
                  <img src="../../assets/live-card-img2.png" class="live-card-img-bg">
                </div>
                <div class="live-card-text">
                  <div class="live-card-title">
                    <span>图像处理</span>
                  </div>
                  <div class="live-card-icon">
                    <span class="live-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                    <span class="live-icon-right2">中级拔高</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="live-card">
                <div class="live-card-img">
                  <img src="../../assets/live-card-img3.png" class="live-card-img-bg">
                </div>
                <div class="live-card-text">
                  <div class="live-card-title">
                    <span>大数据技术</span>
                  </div>
                  <div class="live-card-icon">
                    <span class="live-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                    <span class="live-icon-right3">新手入门</span>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="live-card">
                <div class="live-card-img">
                  <img src="../../assets/live-card-img4.png" class="live-card-img-bg">
                </div>
                <div class="live-card-text">
                  <div class="live-card-title">
                    <span>Python数据分析</span>
                  </div>
                  <div class="live-card-icon">
                    <span class="live-icon-text"><i class="el-icon-star-on"></i>8848人收藏</span>
                    <span class="live-icon-right3">新手入门</span>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="sz-project">
      <div class="sz-top">
        <div class="sz-content">
          <div class="sz-content-title">
            <span>实战项目</span>
          </div>
          <div class="sz-content-card">
            <el-row>
              <el-col :span="6">
                <div class="sz-card sz-card-img1">
                  <img src="../../assets/sz-text-img1.png" class="sz-text-img">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img2">
                  <img src="../../assets/sz-text-img2.png" class="sz-text-img">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img3">
                  <img src="../../assets/sz-text-img3.png" class="sz-text-img3">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img4">
                  <img src="../../assets/sz-text-img4.png" class="sz-text-img3">
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6">
                <div class="sz-card sz-card-img5">
                  <img src="../../assets/sz-text-img5.png" class="sz-text-img">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img6">
                  <img src="../../assets/sz-text-img6.png" class="sz-text-img3">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img7">
                  <img src="../../assets/sz-text-img7.png" class="sz-text-img3">
                </div>
              </el-col>
              <el-col :span="6">
                <div class="sz-card sz-card-img8">
                  <img src="../../assets/sz-text-img8.png" class="sz-text-img8">
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </div>

    <!--<div id="myCarousel" class="carousel slide" data-ride="carousel">-->
     <!---->
      <!--&lt;!&ndash; Indicators &ndash;&gt;-->
      <!--&lt;!&ndash;<ol class="carousel-indicators">&ndash;&gt;-->
        <!--&lt;!&ndash;<li data-target="#myCarousel" data-slide-to="0" class="active"></li>&ndash;&gt;-->
        <!--&lt;!&ndash;<li data-target="#myCarousel" data-slide-to="1"></li>&ndash;&gt;-->
        <!--&lt;!&ndash;<li data-target="#myCarousel" data-slide-to="2"></li>&ndash;&gt;-->
      <!--&lt;!&ndash;</ol>&ndash;&gt;-->
      <!--&lt;!&ndash;<div class="carousel-inner" role="listbox">&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="item active">&ndash;&gt;-->
          <!--&lt;!&ndash;<img class="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="container">&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="carousel-caption">&ndash;&gt;-->
              <!--&lt;!&ndash;<h1>Example headline.</h1>&ndash;&gt;-->
              <!--&lt;!&ndash;<p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>&ndash;&gt;-->
              <!--&lt;!&ndash;<p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="item">&ndash;&gt;-->
          <!--&lt;!&ndash;<img class="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="container">&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="carousel-caption">&ndash;&gt;-->
              <!--&lt;!&ndash;<h1>Another example headline.</h1>&ndash;&gt;-->
              <!--&lt;!&ndash;<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>&ndash;&gt;-->
              <!--&lt;!&ndash;<p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="item">&ndash;&gt;-->
          <!--&lt;!&ndash;<img class="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide">&ndash;&gt;-->
          <!--&lt;!&ndash;<div class="container">&ndash;&gt;-->
            <!--&lt;!&ndash;<div class="carousel-caption">&ndash;&gt;-->
              <!--&lt;!&ndash;<h1>One more for good measure.</h1>&ndash;&gt;-->
              <!--&lt;!&ndash;<p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>&ndash;&gt;-->
              <!--&lt;!&ndash;<p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--&lt;!&ndash;<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">&ndash;&gt;-->
        <!--&lt;!&ndash;<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>&ndash;&gt;-->
        <!--&lt;!&ndash;<span class="sr-only">Previous</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</a>&ndash;&gt;-->
      <!--&lt;!&ndash;<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">&ndash;&gt;-->
        <!--&lt;!&ndash;<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>&ndash;&gt;-->
        <!--&lt;!&ndash;<span class="sr-only">Next</span>&ndash;&gt;-->
      <!--&lt;!&ndash;</a>&ndash;&gt;-->
    <!--</div>-->
    <!--<div :class="bannerStyle" class="background-style">-->
      <!--<el-row style="width: 1150px;margin: 0 auto;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);border-radius: 10px;">-->
        <!--<el-col :span="5">-->
          <!--<div class="nav-back">-->
            <!--<ul>-->
              <!--<li>-->
                <!--<p class="p-word">-->
                  <!--Python智能编程-->
                  <!--<i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>-->
                <!--</p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p class="p-word">-->
                  <!--Python少儿趣味编程-->
                  <!--<i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>-->
                <!--</p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p class="p-word">-->
                  <!--StarT项目-->
                  <!--<i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>-->
                <!--</p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p class="p-word">-->
                  <!--博弈算法大赛-->
                  <!--<i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>-->
                <!--</p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p class="p-word">-->
                  <!--信息奥赛课程-->
                  <!--<i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>-->
                <!--</p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p class="p-word">-->
                  <!--在线课堂-->
                  <!--<i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>-->
                <!--</p>-->
              <!--</li>-->
              <!--<li>-->
                <!--<p class="p-word">-->
                  <!--直播大讲堂-->
                  <!--<i class="iconfont ymq-iconcaret-right" style="font-size: 10px;float: right;margin-top: 3px"></i>-->
                <!--</p>-->
              <!--</li>-->
            <!--</ul>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :span="19">-->
          <!--<div class="banner">-->
            <!--<div class="banner-in">-->
              <!--<el-carousel height="400px" style="border-top-right-radius: 10px;border-bottom-right-radius: 10px;" @change="carouselChange">-->
                <!--<el-carousel-item  v-for="(item, index) in schna" :key="index">-->
                  <!--<img :src="item" alt="" style="width: 100%;height: 100%">-->
                <!--</el-carousel-item>-->
              <!--</el-carousel>-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->

    <!--</div>-->
    <!--<div style="background-color: white;padding-top: 20px;  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1)">-->
      <!--<div class="content_two">-->
        <!--<div>-->
          <!--<span class="word_two">科普大讲堂</span>-->
          <!--&nbsp;&nbsp;-->
          <!--&lt;!&ndash;<span class="word_three">从入门到具备1年开发经验</span>&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="list">-->
          <!--<div class="list-div">-->
            <!--<div class="two-img">-->
              <!--<img src="http://img1.mukewang.com/szimg/5d25400a08fa408c06000338-360-202.jpg" width="100%" height="100%">-->
            <!--</div>-->
            <!--<div style="float: left;width: 120px;margin-left: 10px;margin-top: 15px">-->
              <!--<p style="font-weight: bolder">AI&机器人</p>-->
              <!--<p style="font-size: 12px;margin-top: 5px">从未接触过编程的爱好者</p>-->
            <!--</div>-->

          <!--</div>-->
          <!--<div class="list-div">-->
            <!--<div class="two-img">-->
              <!--<img src="http://img4.mukewang.com/szimg/5b4bfb7000019d2e10800600-360-202.jpg" width="100%" height="100%">-->
            <!--</div>-->
            <!--<div style="float: left;width: 120px;margin-left: 10px;margin-top: 15px">-->
              <!--<p style="font-weight: bolder">自然语言处理</p>-->
              <!--<p style="font-size: 12px;margin-top: 5px">人工智能和语言学领域的分支学科</p>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list-div">-->
            <!--<div class="two-img">-->
              <!--<img src="http://img1.mukewang.com/szimg/5e1d990f0885d97306000338-360-202.jpg" width="100%" height="100%">-->
            <!--</div>-->
            <!--<div style="float: left;width: 120px;margin-left: 10px;margin-top: 15px">-->
              <!--<p style="font-weight: bolder">机器学习</p>-->
              <!--<p style="font-size: 12px;margin-top: 5px">应用领域最为广泛</p>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list-div">-->
            <!--<div class="two-img">-->
              <!--<img src="http://img2.sycdn.imooc.com/szimg/5e4644f609ffdfa312000676-360-202.png" width="100%" height="100%">-->
            <!--</div>-->
            <!--<div style="float: left;width: 120px;margin-left: 10px;margin-top: 15px">-->
              <!--<p style="font-weight: bolder">深度学习</p>-->
              <!--<p style="font-size: 12px;margin-top: 5px">人工智能新方向</p>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list-div">-->
            <!--<div class="two-img">-->
              <!--<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=729506782,1707648579&fm=11&gp=0.jpg" width="100%" height="100%">-->
            <!--</div>-->
            <!--<div style="float: left;width: 120px;margin-left: 10px;margin-top: 15px">-->
              <!--<p style="font-weight: bolder">前端开发</p>-->
              <!--<p style="font-size: 12px;margin-top: 5px">web开发首选</p>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="content_two">-->
        <!--<div>-->
          <!--<span class="word_two">职场认知体验</span>-->
          <!--&nbsp;&nbsp;-->
          <!--&lt;!&ndash;<span class="word_three">一年以上开发经验系统成长</span>&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="list2">-->
          <!--<div class="list2-div list2-img1">-->
            <!--&lt;!&ndash;<div class="list2-word">&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="list2-word-title">&ndash;&gt;-->
                <!--&lt;!&ndash;<span>从Java后端到全栈</span>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
              <!--&lt;!&ndash;<div class="list2-word-content">&ndash;&gt;-->
                <!--&lt;!&ndash;<span>浓缩7月从工程师到CTO的十年成长经历</span>&ndash;&gt;-->
              <!--&lt;!&ndash;</div>&ndash;&gt;-->
            <!--&lt;!&ndash;</div>&ndash;&gt;-->
          <!--</div>-->
          <!--<div class="list2-div list2-img2">-->
          <!--</div>-->
          <!--<div class="list2-div list2-img3">-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="content_tag">-->
      <!--<ul>-->
        <!--<li>-->
          <!--Python智能编程-->
        <!--</li>-->
        <!--<li>Python少儿趣味编程</li>-->
        <!--<li>StarT项目</li>-->
        <!--<li>博弈算法大赛</li>-->
        <!--<li>信息奥赛课程</li>-->
        <!--<li>在线课堂</li>-->
        <!--<li>直播大讲堂</li>-->
      <!--</ul>-->
    <!--</div>-->


    <!--<div class="content_two" style="margin-top: 40px;margin-bottom: 450px">-->
      <!--<div>-->
        <!--<span class="word_two">系列课程</span>-->
      <!--</div>-->
      <!--<div class="list3">-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>推荐</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">python</el-tag>-->
              <!--<el-tag size="mini">算法</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>python计算思维实践基础课 适合零基础的同学</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>推荐</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img2">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">C</el-tag>-->
              <!--<el-tag size="mini">C++</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>2020 重学C++ 重构你的C++知识体系</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>推荐</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img5">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">React.js</el-tag>-->
              <!--<el-tag size="mini">vue.js</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>前端框架及项目面试 聚焦 Vue/React/Webpack</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>推荐</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img3">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">Linux</el-tag>-->
              <!--<el-tag size="mini">计算机网络</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>编程必备基础 计算机组成原理+操作系统+计算机网络</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="list3" style="margin-top: 30px">-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>推荐</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img4">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">Android</el-tag>-->
              <!--<el-tag size="mini">React native</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>新版React Native从入门到实战打造高质量上线App（再升级）</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>推荐</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img6">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">python</el-tag>-->
              <!--<el-tag size="mini">算法</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>剑指Java自研框架，决胜Spring源码</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>推荐</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img7">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">算法</el-tag>-->
              <!--<el-tag size="mini">算法与数据结构</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>Python3入门机器学习 经典算法与应用 轻松入行人工智能</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>推荐</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img8">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">Spark</el-tag>-->
              <!--<el-tag size="mini">Hadoop</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>玩转热门框架 用企业级思维 开发通用够硬的大数据平台</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->




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
    <!--<div  style=" width: 1150px;margin: 0 auto">-->
      <!--<div>-->
        <!--<span class="word_two">热门课程</span>-->
      <!--</div>-->
      <!--<div style="margin: 0 auto;height: 20px;">-->
        <!--<div class="link">-->
          <!--<span @click="gotoContentClass">查看全部</span>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div>-->
        <!--<el-row>-->
          <!--<el-col :span="12" class="col_style" v-for="(item, index) in list" :key="index">-->
            <!--<div class="img_div">-->
              <!--<img v-if="item.pic === null" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3111860246,1925938903&fm=26&gp=0.jpg" class="img_class" @click="gotocontent(item.id)">-->
              <!--<img v-else :src="'http://'+item.pic" class="img_class" @click="gotocontent(item.id)">-->
            <!--</div>-->
            <!--<div class="class_text">-->
              <!--<h3 @click="gotocontent(item.id)">-->
                <!--{{item.name}}-->
              <!--</h3>-->
              <!--<div class="content_class">-->
                <!--<span>{{item.description}}</span>-->
              <!--</div>-->
              <!--<div class="content_class_start">-->
                <!--<span>4步骤 · 6门课</span>-->
                <!--<span style="margin-left: 40px"><i class="iconfont ymq-iconshoucang_shixin star_icon"></i>8848人收藏</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->
    <!--</div>-->
    <!--<div class="content_twos" v-show="LiveList.length !== 0">-->
      <!--<div>-->
        <!--<span class="word_two">热门直播</span>-->
      <!--</div>-->
      <!--<el-row>-->
        <!--<el-col :span="6" class="col_div" v-for="(item, index) in LiveList" :key="index">-->
          <!--<div class="list4-div">-->
            <!--<div class="icon-lists">-->
              <!--<div class="icon-list-content">-->
                <!--<span>直播</span>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="list3-img1 list3-img11" @click="goToLive(item)">-->
              <!--<div class="img1-icon">-->
                <!--<el-tag size="mini">数据分析&挖掘</el-tag>-->
                <!--<el-tag size="mini">算法与数据结构</el-tag>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="list4-word" @click="goToLive(item)">-->
              <!--<span>{{item.schoolname}}</span>-->
            <!--</div>-->
            <!--<div class="list3-icon-word">-->
              <!--<span>中级</span>-->
              <!--&nbsp;&nbsp;-->
              <!--<i class="el-icon-user"></i>-->
              <!--<span>456</span>-->
              <!--<span style="float: right">13人评价</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->
    <!--</div>-->
    <!--<div class="content_two" style="margin-top: 80px;margin-bottom: 450px">-->
      <!--<div>-->
        <!--<span class="word_two">实践项目</span>-->
      <!--</div>-->
      <!--<div class="list3">-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>直播</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img11" @click="goToCourseIndex">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">数据分析&挖掘</el-tag>-->
              <!--<el-tag size="mini">算法与数据结构</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word" @click="goToCourseIndex">-->
            <!--<span>玩转算法系列&#45;&#45;数据结构精讲 更适合0算法基础入门到进阶（java版）</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>直播</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img21" @click="gotoVideoLive">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">JavaScript</el-tag>-->
              <!--&lt;!&ndash;<el-tag size="mini">C++</el-tag>&ndash;&gt;-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>抓紧面试前的宝贵时间 快速搞定前端JavaScript面试</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>直播</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img51">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">SpringBoot</el-tag>-->
              <!--<el-tag size="mini">SSM</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>Java主流技术栈SSM+SpringBoot商铺系统</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>直播</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img31">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">Node.js</el-tag>-->
              <!--<el-tag size="mini">Vue.js</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>Vue Element+Node.js开发企业通用管理后台系统</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="list3" style="margin-top: 30px">-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>直播</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img41">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">Python</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>全面系统Python3.8入门+进阶 (程序员必备第二语言)</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>直播</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img61">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">Node.js</el-tag>-->
              <!--<el-tag size="mini">React.js</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>TypeScript 系统入门到项目实战 趁早学习提高职场竞争力</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>直播</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img71">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">Go</el-tag>-->
              <!--<el-tag size="mini">爬虫</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>Google资深工程师深度讲解Go语言</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="list3-div">-->
          <!--<div class="icon-lists">-->
            <!--<div class="icon-list-content">-->
              <!--<span>直播</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-img1 list3-img81">-->
            <!--<div class="img1-icon">-->
              <!--<el-tag size="mini">JavaScript</el-tag>-->
              <!--<el-tag size="mini">小程序</el-tag>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="list3-word">-->
            <!--<span>纯正商业级应用-微信小程序开发实战</span>-->
          <!--</div>-->
          <!--<div class="list3-icon-word">-->
            <!--<span>中级</span>-->
            <!--&nbsp;&nbsp;-->
            <!--<i class="el-icon-user"></i>-->
            <!--<span>456</span>-->
            <!--<span style="float: right">13人评价</span>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->



    <!--<div class="copyrightContainer">-->
      <!--<span style="font-size: 12px">Copyright&nbsp;&nbsp;&nbsp;中科智禾教育大大数据中心   ©2019</span>-->
    <!--</div>-->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import HeaderTwo from '@/components/common/header2'
import Footer from '@/components/common/footer'
export default {
  name: 'index',
  components: { Header, HeaderTwo, Footer },
  data () {
    return {
      value1: '5',
      navBarFixed: false,
      schna: [ 'http://58.119.112.12/CCZX_image/banner5.png','http://58.119.112.12/CCZX_image/photo2.jpg','http://58.119.112.12/CCZX_image/photo4.jpg'],
      bannerthree: require('../../assets/bannerthree.jpg'),
      page: 1,
      size: 100,
      list: [],
      flag_class: '未登录',
      flag_state: true,
      bannerStyle: 'background-banner',
      LiveList: [],
      imgList: ['http://58.119.112.12/CCZX_image/hot-card-img1.png','http://58.119.112.12/CCZX_image/hot-card-img2.png','http://58.119.112.12/CCZX_image/hot-card-img3.png', 'http://58.119.112.12/CCZX_image/hot-card-img4.png']

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
    this.getLive()
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
    gotoVideoLive () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/VideoLive')
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
      // var url = 'http://58.119.112.14:11020/cms/user/coursePub/list/1/8'
      var url = 'http://58.119.112.14:11020/cms/user/coursePub/mylist/1/4?username=' + this.username
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
    },
    getLive() {
      var url = 'http://58.119.112.14:11030/cms/video/getVideos?username=' + this.username
      this.$axios.get(url).then((res) => {
        if (res.data.queryResult.total === 0) {
          this.LiveList = []
        } else {
          this.LiveList = res.data.queryResult.list
        }
      })
    },
    goToLive(item) {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        var url = 'http://58.119.112.14:11030/cms/video/pullVideo?username=' + item.username
        this.$axios.get(url).then((res) => {
          if (res.data.code === undefined) {
            this.$router.push({
              query: { username: item.username},
              path: '/VideoLive'
            })
          } else  {
            alert('暂未开播')
          }
        })

      }
    }
  }
}
</script>

<style scoped>
  .content-tag {
    display: flex;
    width: 100%;
    height: 100px;
  }
  .content-tag div {
    flex: 1;
    text-align: center;
    font-size: 20px;
    line-height: 100px;
    font-weight: bold;
    letter-spacing: 3px;
  }
  .content-tag div:hover {
    color: #16bcb4;
    cursor: pointer;
    font-weight: bold;
  }
  .carousel-img {
    width: 100%;
    /*height: 665px;*/
  }
  .carousel-img img {
    width: 100%;
    height: 100%;
  }
  .header-show {
    position: fixed;width: 100%;z-index: 999;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .kp-con {
    background-color: #f7f8fa;
    padding-top: 70px;
    height: 665px;
  }
  .content-kp {
    width: 1500px;
    /*height: 100px;*/
    margin: 0 auto;
  }
  .kp-title {
    font-weight: bold;
    font-size: 36px;
    letter-spacing: 3px;
  }
  .kp-tag {
    margin-top: 70px;
    height: 406px;
    width: 100%;
    display: flex;
  }
  .kp-tag-card {
    flex: 1;
    margin-right: 10px;
    border-radius: 10px;
    background-size: 100% 100%;
    text-align: center;
    transition: all 0.5s;
    cursor: pointer;
  }
  .kp-tag-card:hover {
    transform: scale(1.2);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5)
  }
  .kp-text-title {
    color: white;
    font-weight: bold;
    font-size: 30px;
    margin-top: 44px;
    letter-spacing: 4px;
  }
  .kp-text-con {
    color: white;
    /*font-weight: bold;*/
    margin-top: 22px;
    font-size: 18px;
    letter-spacing: 4px;
  }
  .tag-img2 {
    height: 205px;
    margin-top: 16px;
  }
  .tag-img {
    /*width: 215px;*/
    height: 205px;
    margin-top: 34px;
  }

  .kp-bg1 {
    background-image: url("../../assets/circle1.png");
  }
  .kp-bg2 {
    background-image: url("../../assets/circle2.png");
  }
  .kp-bg3 {
    background-image: url("../../assets/circle3.png");
  }
  .kp-bg4 {
    background-image: url("../../assets/circle4.png");
  }
  .kp-bg5 {
    background-image: url("../../assets/circle5.png");
  }
  .zhichang-con {
    height: 458px;
    width: 100%;
    padding-top: 70px;
  }
  .content-zc {
    width: 1500px;
    margin: 0 auto;
  }
  .zc-tag {
    margin-top: 70px;
    width: 100%;
    /*height: 214px;*/
  }
  .zc-card {
    height: 214px;
    background-size: 100% 100%;
    text-align: center;
    padding-top: 40px;
    cursor: pointer;
    transition: all 0.6s;
  }
  .zc-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 5px;

  }
  .zc-card-title {
    color: white;
    font-weight: bold;
    font-size: 36px;
  }
  .zc-card-con {
    color: white;
    font-size: 24px;
    margin-top: 20px;
  }
  .zc-bg1 {
    background-image: url("../../assets/zc-bg1.png");
  }
  .zc-bg2 {
    background-image: url("../../assets/zc-bg2.png");
  }
  .zc-bg3 {
    background-image: url("../../assets/zc-bg3.png");
  }
  .xl-course {
    height: 805px;
    width: 100%;
    background-color: #3dc5a4;
    margin-top: 23px;
    padding-top: 70px;
  }
  .content-xl {
    width: 1500px;
    margin: 0 auto;
  }
  .xl-title {
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 3px;
    color: white;
  }
  .xl-tag {
    margin-top: 70px;
    /*height: 86px;*/
    background-color: #d2fff4;
    padding: 30px 18px 30px 18px;
  }
  .xl-tags {
    padding: 10px 20px 10px 20px;
    background-color: #77c5c2;
    color: white;
    text-align: center;
    border-radius: 5px;
    border: #249094 solid 1px;
    margin-left: 20px;
    letter-spacing: 3px;
    font-size: 18px;
  }
  .xl-tags-more {
    font-size: 24px;
    float: right;
    margin-right: 50px;
    letter-spacing: 3px;
    color: #636363;
  }
  .xl-course-card {
    margin-top: 55px;

  }
  .xl-card {
    height: 411px;
    transition: all 0.6s;
    cursor: pointer;
  }
  .xl-card:hover {
    transform: scale(1.2);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5)

  }
  .xl-card-img {
    height: 270px;
    background-size: 100% 100%;
  }
  .xl-card-text {
    padding: 20px;
    background-color: white;
    height: 141px;
  }
  .xl-card-img1 {
    background-image: url("../../assets/xl-card-img4.png");
  }
  .xl-card-img2 {
    background-image: url("../../assets/xl-card-img3.png");
  }
  .xl-card-img3 {
    background-image: url("../../assets/xl-card-img2.png");
  }
  .xl-card-img4 {
    background-image: url("../../assets/xl-card-img1.png");
  }
  .xl-card-title {
    font-size: 20px;
    font-weight: bold;
    color: #333333;
    letter-spacing: 3px;
  }
  .xl-card-footer {
    margin-top: 20px;
  }
  .xl-footer-tag {
    padding: 5px 10px 5px 10px;
    color: white;
    background-color: #f4ab00;
    font-size: 16px;
    letter-spacing: 3px;
    border-radius: 5px;
  }
  .xl-footer-icon {
    float: right;
  }
  .xl-iconfont {
    font-size: 20px;
    color: #bababa;
  }
  .xl-footer-text1 {
    font-size: 16px;
    color: #bababa;
  }
  .xl-footer-text2 {
    font-size: 16px;
    color: #3dc5a4;
    letter-spacing: 2px;
  }
  .hot-course {
    width: 100%;
    height: 434px;
  }
  .content-hot {
    width: 1500px;
    margin: 0 auto;
    padding-top: 70px;
  }
  .hot-icon-util {
    float: right;
  }
  .hot-icon-util-de {
    padding: 5px 10px 5px 10px;
    border: #dfdfdf solid 1px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: normal;
    cursor: pointer;
  }
  .hot-icon-util-de i {
    font-size: 14px;
  }
  .hot-icon-util-de:hover {
    background-color: #16bcb4;
    color: white;
  }
  .hot-content {
    margin-top: 36px;
  }
  .hot-card {
    height: 290px;
  }
  .hot-card-left {
    background-image: url("../../assets/hot-card-left.png");
    background-size: 100% 100%;
    text-align: center;
    padding: 10px 30px 10px 30px;
  }
  .hot-card-left-text1 {
    color: white;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 3px;
    margin-top: 30px;
  }
  .hot-card-left-text2 {
    color: white;
    /*font-weight: bold;*/
    font-size: 26px;
    letter-spacing: 3px;
    margin-top: 35px;
  }
  .hot-card-left-text3 {
    /*font-weight: bold;*/
    font-size: 22px;
    letter-spacing: 3px;
    margin-top: 35px;
  }
  .hot-card-left-text3 a {
    color: white;
    cursor: pointer;
  }
  .hot-card-img {
    height: 179px;
    overflow: hidden;

  }
  .hot-img-style {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.6s;
  }
  .hot-card:hover .hot-img-style {
    transform: scale(1.2);
  }
  .hot-card-right-text {
    height: 111px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    background-color: #f7f8fa;
  }
  .hot-card-right-title {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 3px;
    cursor: pointer;

  }
  .hot-card-right-icon {
    font-size: 18px;
    margin-top: 20px;
  }
  .hot-icon-text {
    color: #959493;
    font-weight: bold;
  }
  .hot-icon-text i {
    color: #d81e06;
    margin-right: 10px;
  }
  .hot-icon-right {
    float: right;
    color: #fe6549;
    font-weight: bold;
  }
  .live-course {
    height: 575px;
  }
  .live-content {
    width: 1500px;
    margin: 0 auto;
    padding-top: 64px;
  }
  .content-live {
    margin-top: 36px;
  }
  .live-card {
    height: 372px;
  }
  .live-card-img {
    height: 240px;
    overflow: hidden;
    position: relative;
  }
  .live-card-img-bg {
    width: 100%;
    height: 100%;
    transition: all 0.6s;
    cursor: pointer;
  }
  .live-card:hover .live-card-img-bg{
    transform: scale(1.2);
  }
  .live-card-img-bg2 {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .live-card-text {
    height: 132px;
    background-color: #f7f8fa;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 25px;
  }
  .live-card-title {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 3px;
  }
  .live-card-icon {
    margin-top: 20px;
    font-size: 18px;
  }
  .live-icon-text {
    color: #959493;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .live-card-text i {
    color: #d81e06;
    margin-right: 10px;
  }
  .live-icon-right {
    float: right;
    color: #fe6549;
    font-weight: bold;
  }
  .live-icon-right2 {
    float: right;
    color: #f9ad3c;
    font-weight: bold;
  }
  .live-icon-right3 {
    float: right;
    color: #3dc5a4;
    font-weight: bold;
  }
  .sz-project {
    width: 100%;
    height: 983px;
    margin-top: 10px;

  }
  .sz-top {
    height: 502px;
    width: 100%;
    background-image: url("../../assets/sz-bg.png");
    background-size: 100% 100%;
    /*position: relative;*/

  }
  .sz-content {
    width: 1500px;
    padding-top: 40px;
    /*height: 983px;*/
    /*position: absolute;*/
    /*left: 50%;*/
    /*transform: translateX(-50%);*/
    margin: 0 auto;
  }
  .sz-content-title {
    color: white;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 3px;
  }
  .sz-content-card {
    margin-top: 39px;
  }
  .sz-card {
    height: 373px;
    background-size: 100% 100%;
    text-align: center;
    cursor: pointer;
    transition: all 0.6s;
  }
  .sz-card:hover {
    transform: scale(1.2);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5)
  }
  .sz-card-img1 {
    background-image: url("../../assets/sz-img1.png");
  }
  .sz-card-img2 {
    background-image: url("../../assets/sz-img2.png");
  }
  .sz-card-img3 {
    background-image: url("../../assets/sz-img3.png");
  }
  .sz-card-img4 {
    background-image: url("../../assets/sz-img4.png");
  }
  .sz-card-img5 {
    background-image: url("../../assets/sz-img5.png");
  }
  .sz-card-img1 {
    background-image: url("../../assets/sz-img1.png");
  }
  .sz-card-img6 {
    background-image: url("../../assets/sz-img6.png");
  }
  .sz-card-img7 {
    background-image: url("../../assets/sz-img7.png");
  }
  .sz-card-img8 {
    background-image: url("../../assets/sz-img8.png");
  }
  .sz-text-img {
    width: 240px;
    margin-top: 40px;
  }
  .sz-text-img3 {
    margin-top: 40px;
    width: 260px;
  }
  .sz-text-img8 {
    margin-top: 40px;
    width: 280px;
  }

</style>
