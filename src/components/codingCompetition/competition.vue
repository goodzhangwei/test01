<template>
    <div>
      <Header></Header>
      <div class="header-bg"></div>
      <div class="comp-content">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="left-col">
              <div class="left-card">
                <div class="left-card1">
                  <span>比赛信息</span>
                </div>
                <div class="left-card2" @click="gotoZX">
                  <span>最新通知</span>
                  <i class="el-icon-arrow-right card-icon"></i>
                </div>
                <div class="left-card2" @click="gotoSH">
                  <span>赛程回顾</span>
                  <i class="el-icon-arrow-right card-icon"></i>
                </div>
                <div class="left-card2" @click="gotoTest">
                  <span>在线编程</span>
                  <i class="el-icon-arrow-right card-icon"></i>
                </div>
                <div class="left-card2" @click="gotocomOne">
                  <span>博弈算法大赛</span>
                  <i class="el-icon-arrow-right card-icon"></i>
                </div>
                <div class="left-card2" @click="gotocomTwo">
                  <span>青少年创意编程大赛</span>
                  <i class="el-icon-arrow-right card-icon"></i>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="18">
            <div>
              <div class="left-header-icon"></div>
              <span class="text-title">{{titleCard}}</span>
              <div class="line-style"></div>
              <div class="right-icon-header">
                <span>{{titleCard}}</span>
              </div>
              <div class="card-lists">
                <div v-show="cardList === '最新通知'">
                  <div class="card-list">
                    <div class="point"></div>
                    <a @click="showA_1">关于举办首届泰安市青少年创意编程与智能设计大赛通知</a>
                    <span class="date-style">2020-05-10</span>
                  </div>
                  <div class="card-list">
                    <div class="point"></div>
                    <a @click="showA_2">2019中科院ACME博弈算法挑战赛通知</a>
                    <span class="date-style">2019-09-10</span>
                  </div>
                </div>
                <div v-show="cardList === '赛程回顾'">
                  <div class="card-list">
                    <div class="point"></div>
                    <a @click="showB_1">中科院ACME博弈算法挑战赛赛程回顾</a>
                    <span class="date-style">2019-09-10</span>
                  </div>
                </div>

                <div v-show="cardList === '博弈算法大赛'">
                  <div class="card-list">
                    <div class="point"></div>
                    <a @click="showC_1">2019中科院ACME博弈算法挑战赛通知</a>
                    <span class="date-style">2019-09-10</span>
                  </div>
                </div>

                <div v-show="cardList === '青少年创意编程大赛'">
                  <div class="card-list">
                    <div class="point"></div>
                    <a @click="showD_1">关于举办首届泰安市青少年创意编程与智能设计大赛通知</a>
                    <span class="date-style">2019-05-10</span>
                  </div>
                </div>

                

              </div>
              <div class="word-contents" v-show="cardList === 'a1'">
                <h1>关于举办首届泰安市青少年创意编程与智能设计大赛的补充通知</h1>
                <div class="word-div1">
                  <span>来源：</span>
                  <span>责任编辑：</span>
                  <span>日期：2020-05-10</span>
                </div>
                <div class="word-line"></div>
                <div class="word-content">
                  <p>
                    各县市区科协、教育局，市直各学校，各相关单位：
                  </p>
                  <p>
                    为深入贯彻落实国务院《新一代人工智能发展规划》的任务 要求，向广大青少年普及推广编程与智能设计相关科普知识和技 能，提高青少年对人工智能的认知和初步应用能力，定于5-7月份举办首届泰安市青少年创意编程与智能设计大赛。现将有关 事项通知如下：
                  </p>
                  <h2>
                    一、竞赛主题
                  </h2>
                  <p>
                    创意时代智能未来
                  </p>
                  <h2>
                    二、参赛对象
                  </h2>
                  <p>
                    全市小学、初中、高中（含中等职业学校）在校学生。
                  </p>
                  <div class="content2">
                    <h3>
                      组别划分：
                    </h3>
                    <h4>
                      （一）创意编程大赛
                    </h4>
                    <p>
                      Scratch比赛：分为小学I组（1-3年级）、小学II组（4-6 年级）、初中组；
                    </p>
                    <p>
                      Python比赛：分为初中组、高中组；
                    </p>
                    <h4>
                      （二）智能设计大赛
                    </h4>
                    <p>
                      Arduino比赛：分为小学组（4-6年级）、初中组、高中组；
                    </p>
                    <p>
                      Micro: bit比赛：分为小学组（4-6年级）、中学组（含中 等职业学校）；
                    </p>
                    <h4>
                      （三）ACME未来科技挑战赛
                    </h4>
                    <p>博弈算法挑战赛：分为小学组（4-6年级）、中学组（含中等职业学校）</p>
                    <p>
                      人脸识别挑战赛： 中学组（含中等职业学校）
                    </p>
                  </div>
                  <h2>
                    三、竞赛内容及形式
                  </h2>
                  <p>
                    大赛设创意编程、智能设计、ACME未来科技挑战赛三项比赛，每项比赛设两项内容 （详见附件1 ）。比赛形式分初评和终评两个阶段。初评为线上提交作品。终评将于6月底举办，因疫情特殊性，终评时间与形式届时将根据情况另行通知。
                  </p>
                  <h2>
                    四、竞赛作品报送方式及时间安排
                  </h2>
                  <p>
                    本次比赛报名方式分为两种:一是各县市区组织单位进行第一轮选拔，将晋级选手的个人信息和作品信息按照报送要求统一汇总，发送到指定邮箱参加市级大赛；二是相关学会、专业教育机构组织选手个人直接到全国青少年创意编程与智能设计大赛指定网站报名，参加全国海选 （报名网站将于5月下旬另行通知）。
                  </p>
                  <p>
                    2020年5月：各县市区组织单位发动本地中小学生积极参与大赛，创作、推选出晋级作品，名额不限；
                  </p>
                  <p>
                    2020年6月8 日-6月12日：请各组织单位将晋级作品信息及汇总表（见附件2）按报送要求在本网站“作品提交”模块进行提交；<span class="tijiao-icon" @click="gotoUpdate">提交入口 <i class="iconfont ymq-iconrukou"></i> </span>
                  </p>
                  <p>
                    2020年6月16日-6月22日：专家对作品进行评审，确定入围终评选手名单；
                  </p>
                  <p>
                    2020年6月底：终评（具体时间及终评方式另行通知）。
                  </p>
                  <p>
                    2020年7月：公布获奖名单并推选优秀作品参加“第六届山东省青少年创意编程与智能设计大赛”和“第X届中科院ACME科技挑战赛”。
                  </p>
                  <h2>
                    五、奖项设置
                  </h2>
                  <p>
                    大赛设等次奖、优秀指导教师奖、优秀组织单位奖、突出贡献奖，颁发荣誉证书。
                  </p>
                  <h2>
                    六、注意事项
                  </h2>
                  <p>
                    请各组织单位根据大赛时间安排和参赛办法（详见附件1）,积极组织发动本地学生参赛。要加强组织领导、宣传发动、赛事监督等工作，确保竞赛的公平、公正、公开。
                  </p>
                  <p>
                    赛事举办单位将根据竞赛成绩，选拔优秀选手参加“第六届山东省青少年创意编程与智能设计大赛”决赛和中科院ACME未来科技挑战赛。
                  </p>
                  <p>
                    本次大赛活动不收取任何费用。任何组织单位、学校不得 以任何名义收取学生参赛费用。
                  </p>
                 <h2>
                   七、联系人
                 </h2>
                  <p>
                    泰安市科技馆
                  </p>
                  <p>
                    张锐、韩珂
                  </p>
                  <p>
                    联系电话：0538-8413780
                  </p>
                  <p>
                    邮箱：tasqfx@163.com
                  </p>
                  <p>
                    泰安市教研室
                  </p>
                  <p>
                    鲁克营
                  </p>
                  <p>
                    联系电话：
                  </p>
                  <div>
                    <p>附件：<a @click="downTaian">1.泰安市“创意编程与智能设计大赛”参赛办法</a></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a @click="downTaian">2.泰安市“首届创意编程与智能设计大赛“参赛汇总</a></p>
                  </div>
                </div>
              </div>
              <div class="word-contents" v-show="cardList === 'a2'">
                <h1>2019中科院ACME博弈算法挑战赛通知</h1>
                <div class="word-div1">
                  <span>来源：</span>
                  <span>责任编辑：</span>
                  <span>日期：2019-09-10</span>
                </div>
                <div class="word-line"></div>
                <div class="word-content" >
                  <h2>
                    赛事简介
                  </h2>
                  <p>
                    AlphaGo机器人战胜了人类顶尖围棋选手，擅长聊天的机器人可以成为你的朋友，人工智能离我们越来越近，强大的人工智能算法在进行着认知、学习和预测，为我们提供医疗、法律、金融等方面的建议和决策。青少年编程博弈算法挑战赛正是利用python编程语言来实现博弈算法，作为博弈者可以最大程度利用游戏的规则开发出最佳的算法策略；通过比赛，参赛者用python语言编程来解决人工智能问题，提升自己，训练逻辑思维能力。
                  </p>
                  <p>在人工智能的时代，Python语言变得日益流行。对于Python数据科学，顾名思义，就是通过Python进行数据的处理与分析。Python数据科学是从事AI所必须的技能，因此学习Python数据科学是非常有必要的。人工智能在过去几年发展迅速。面向人工智能的开发一方面是使用Python与人工智能开源框架进行快速开发，另一方面是利用各个主要云计算提供商发布的人工智能服务，通过面向开发者人工智能API快速搭建实用的人工智能应用。</p>
                  <p>博弈算法编程挑战赛，以Python语言为基础，对涉及到的机器学习中的分类、回归和聚类等的相关算法与实例用到的机器学习库在开源数据上进行算法测试和调节相关参数，以有趣的效果体会人工智能的魅力。</p>
                  <h2>赛项介绍</h2>
                  <h3>小学组——贪吃蛇游戏</h3>
                  <p>赛项说明：“贪吃蛇游戏”比赛为贪吃蛇吃果子，每回合都将调用玩家上传的编程代码，做出决策控制贪吃蛇进行运动，寻找出现的果子，贪吃蛇移动方向由编程代码控制。
                    此赛项游戏主界面为30*30的网格，贪吃蛇从网格的左上角出发，寻找随机出现的果子。当贪吃蛇吃掉一个果子后，网格中会接着再出现一个果子，贪吃蛇身体长度随之加2，依次循环。
                    蛇头与果子位置重合则判定为吃掉果子，果子不会出现在蛇身体上，贪吃蛇可以穿墙，蛇头碰撞自己蛇的身体(即序列重复)判定为死亡。
                    果子随机出现是有规则的，每次果子距离蛇头的位置都是定长的，即从蛇头到每个果子的曼哈顿距离（不穿越边界条件下）的总和相同。
                  </p>
                  <p>
                    评分标准:每次比赛会出现规定个数的果子，吃完所有果子或蛇死亡，则比赛停止，全部任务完成的参赛选手以贪吃蛇所走步长进行排名，步长最短者获胜。
                    注意：当贪吃蛇未完成吃果子任务就死亡时，则按照吃果子由多到少进行排名，吃果子多的排名靠前；相同果子数，所用步数越少，得分越高。
                  </p>
                  <h3>
                    初高中组——贪吃蛇博弈算法对抗
                  </h3>
                  <p>
                    赛项说明:贪吃蛇博弈算法对抗为双人（或两组）对战，每回合都将调用玩家上传的博弈编程代码，做出决策控制贪吃蛇进行运动。此赛项将python人工智能中的算法思想与传统的贪吃蛇游戏相结合，在提高学生兴趣的情况下完成对当下最流行的人工智能的基本思想的初步认知。
                    参赛者在30*30的网格中通过事先编写好的程序操纵各自的贪吃蛇，参赛者只能控制蛇头的朝向(上、下、左、右)来控制蛇的下一步移动的方向。蛇的初始位置固定，并以恒定速度前进；蛇会自动长大，前10回合每回合长度增加1，从第11回合开始，每2回合长度增加1。
                    可以参考阿尔法狗的思想，通过python人工智能的思想尽可能去从总体上去考虑，不仅仅需要进行前向预测来寻找空间最大的可能走法。还要尽可能去预测比赛对象的可能前进路径去做出相应的堵截。
                    比赛中不仅可以直接去考虑到战胜对方，也可以去考虑怎么让自己尽可能的存活更长的时间，从侧面取得胜利。
                  </p>
                  <p>
                    胜负评价:蛇头在网格外、障碍物、自己蛇的身体(即序列重复)、对方蛇的身体(即与对方序列有相同坐标)，或非法操作均判定为死亡。任何一条蛇死亡时，游戏结束。若蛇同时死亡，判定为平局，否则先死的一方输，另一方赢。
                  </p>
                  <p>核心算法答辩评分标准（共计40分）</p>
                  <p>1.算法创新性      分数：16分
                    创新性算法>对经典算法进行改进>编码实现经典算法>直接调用</p>
                  <p>2.答辩表现        分数：12分
                    评委根据竞赛队伍现场答辩的表现给出综合评分；
                  </p>
                  <p>3.代码能力        分数：12分
                    评委从编码规范、代码结构、代码注释、代码复用、封装、抽象等方面进行评价。
                  </p>
                  <p>
                    总得分为：循环赛得分与答辩评分两部分之和。积分相同者再加赛一次。
                  </p>
                  <h2>竞赛规则</h2>
                  <h3>小学组---贪吃蛇游戏</h3>
                  <p>小学组正式比赛为每小组（或个人）完成赛项设置的任务。</p>
                  <p>小学组正式比赛评分标准：</p>
                  <p>评分指标有吃到果子数量与行进步数，优先比较吃到果子数量，数量相同时比较行进步数</p>
                  <p>①首先按照吃到的果子数量排名，吃到的果子越多，排名越高；</p>
                  <p>②吃到相同果子数量的选手按照行进步数排名，行进步数越少，排名越高</p>
                  <p>③最终成绩为：每个小组比6轮，去掉一个最高分、一个最低分，剩下4轮取平均值为最终成绩。</p>
                  <p>禁止事项：禁止带入与比赛相关的资料</p>
                  <h3>中学组---贪吃蛇博弈算法对抗</h3>
                  <p>初高中组比赛分为正式比赛、答辩。</p>
                  <p>正式比赛：采用循环赛制，积分制；</p>
                  <p>答辩：核心代码现场答辩评分（可以ppt展示，也可以直接展示代码）</p>
                  <p>核心代码答辩:总时间10分钟，汇报5分钟+专家提问5分钟</p>
                  <p>循环赛采用5局3胜制，每胜一局积10分；</p>
                  <p>禁止事项：禁止带入与比赛相关的资料</p>
                  <h2>竞赛纪律</h2>
                  <h3>小学组---贪吃蛇游戏</h3>
                  <p>①每组选手提交自己的程序编程代码；</p>
                  <p>②参加比赛的每组选手在相同标准下进行比赛，并完成赛项规定任务；</p>
                  <p>③按照小学组赛项评价标准，进行排名。</p>
                  <p>禁止事项：禁止带入与比赛相关的资料</p>
                  <p>比赛检录时间：2019/11/03  8:00-9:00</p>
                  <p>竞赛时间：2019/11/03   9:00-12:00</p>
                  <h3>中学组---贪吃蛇博弈算法对抗</h3>
                  <p>比赛总流程：正式比赛循环赛 > 答辩</p>
                  <p>①每组选手提交自己的算法博弈代码；</p>
                  <p>②进行比赛的两组选手的代码在屏幕上对抗演示，采取5局3胜制确定胜利方，胜利方获得10分；</p>
                  <p>③决赛小组选手进行答辩评分。</p>
                  <p>禁止事项：禁止带入与比赛相关的资料</p>
                  <p>比赛检录时间：2019/11/03  8:00-9:00</p>
                  <p>竞赛时间：2019/11/03   9:00-12:00</p>
                  <h2>比赛准备及流程</h2>
                  <h3>参赛选手准备</h3>
                  <p>①笔记本电脑一台：
                    操作系统：windows7，8或10
                    i5以上配置、安装python3.5.1、pycharm编译器
                  </p>
                  <p>②U盘：2GB以上</p>
                  <p>③纸+笔</p>
                  <h4>小学组---贪吃蛇游戏比赛流程</h4>
                  <p>①裁判宣读比赛要求</p>
                  <p>②各小组向裁判领取比赛代码</p>
                  <p>③比赛时间：90分钟</p>
                  <p>④各小组向裁判提交比赛代码</p>
                  <p>⑤进行正式比赛</p>
                  <p>⑥公布正式比赛积分结果</p>
                  <h4>中学组---贪吃蛇博弈算法对抗比赛流程</h4>
                  <p>①裁判宣读比赛规则</p>
                  <p>②各小组向裁判领取比赛代码</p>
                  <p>③比赛时间：90分钟</p>
                  <p>④各小组向裁判提交比赛代码</p>
                  <p>⑤进行循环赛，并公布循环赛积分结果</p>
                  <p>⑥代码展示答辩，评委打分</p>
                  <div>
                    <p>
                      附件：<a @click="downShouCe">2019博弈算法挑战赛程序手册</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="word-contents" v-show="cardList === 'b1'">
                <h1>2019中科院ACME博弈算法挑战赛赛程回顾</h1>
                <div class="word-div1">
                  <span>来源：</span>
                  <span>责任编辑：</span>
                  <span>日期：2019-09-10</span>
                </div>
                <div class="word-line"></div>
                <div class="word-content">
                  <div class="photo-container">
                    <img src="../../assets/photo/photofive.jpg">
                  </div>
                  <div class="photo-container">
                    <img src="../../assets/photo/photonine.jpg">
                  </div>
                  <div class="photo-container">
                    <img src="../../assets/photo/photoone.jpg">
                  </div>
                  <div class="photo-container">
                    <img src="../../assets/photo/photoseven.jpg">
                  </div>
                  <div class="photo-container">
                    <img src="../../assets/photo/photosix.jpg">
                  </div>
                  <!--<div class="photo-container">-->
                    <!--<img src="../../assets/photo/phototwo.jpg">-->
                  <!--</div>-->
                  <!--<div class="photo-container">-->
                    <!--<img src="../../assets/photo/photothree.jpg">-->
                  <!--</div>-->
                  <!--<div class="photo-container">-->
                    <!--<img src="../../assets/photo/photofour.jpg">-->
                  <!--</div>-->
                </div>
              </div>
              <div class="word-contents" v-show="cardList === 'c1'">
                <h1>2019中科院ACME博弈算法挑战赛通知</h1>
                <div class="word-div1">
                  <span>来源：</span>
                  <span>责任编辑：</span>
                  <span>日期：2019-09-10</span>
                </div>
                <div class="word-line"></div>
                <div class="word-content" >
                  <h2>
                    赛事简介
                  </h2>
                  <p>
                    AlphaGo机器人战胜了人类顶尖围棋选手，擅长聊天的机器人可以成为你的朋友，人工智能离我们越来越近，强大的人工智能算法在进行着认知、学习和预测，为我们提供医疗、法律、金融等方面的建议和决策。青少年编程博弈算法挑战赛正是利用python编程语言来实现博弈算法，作为博弈者可以最大程度利用游戏的规则开发出最佳的算法策略；通过比赛，参赛者用python语言编程来解决人工智能问题，提升自己，训练逻辑思维能力。
                  </p>
                  <p>在人工智能的时代，Python语言变得日益流行。对于Python数据科学，顾名思义，就是通过Python进行数据的处理与分析。Python数据科学是从事AI所必须的技能，因此学习Python数据科学是非常有必要的。人工智能在过去几年发展迅速。面向人工智能的开发一方面是使用Python与人工智能开源框架进行快速开发，另一方面是利用各个主要云计算提供商发布的人工智能服务，通过面向开发者人工智能API快速搭建实用的人工智能应用。</p>
                  <p>博弈算法编程挑战赛，以Python语言为基础，对涉及到的机器学习中的分类、回归和聚类等的相关算法与实例用到的机器学习库在开源数据上进行算法测试和调节相关参数，以有趣的效果体会人工智能的魅力。</p>
                  <h2>赛项介绍</h2>
                  <h3>小学组——贪吃蛇游戏</h3>
                  <p>赛项说明：“贪吃蛇游戏”比赛为贪吃蛇吃果子，每回合都将调用玩家上传的编程代码，做出决策控制贪吃蛇进行运动，寻找出现的果子，贪吃蛇移动方向由编程代码控制。
                    此赛项游戏主界面为30*30的网格，贪吃蛇从网格的左上角出发，寻找随机出现的果子。当贪吃蛇吃掉一个果子后，网格中会接着再出现一个果子，贪吃蛇身体长度随之加2，依次循环。
                    蛇头与果子位置重合则判定为吃掉果子，果子不会出现在蛇身体上，贪吃蛇可以穿墙，蛇头碰撞自己蛇的身体(即序列重复)判定为死亡。
                    果子随机出现是有规则的，每次果子距离蛇头的位置都是定长的，即从蛇头到每个果子的曼哈顿距离（不穿越边界条件下）的总和相同。
                  </p>
                  <p>
                    评分标准:每次比赛会出现规定个数的果子，吃完所有果子或蛇死亡，则比赛停止，全部任务完成的参赛选手以贪吃蛇所走步长进行排名，步长最短者获胜。
                    注意：当贪吃蛇未完成吃果子任务就死亡时，则按照吃果子由多到少进行排名，吃果子多的排名靠前；相同果子数，所用步数越少，得分越高。
                  </p>
                  <h3>
                    初高中组——贪吃蛇博弈算法对抗
                  </h3>
                  <p>
                    赛项说明:贪吃蛇博弈算法对抗为双人（或两组）对战，每回合都将调用玩家上传的博弈编程代码，做出决策控制贪吃蛇进行运动。此赛项将python人工智能中的算法思想与传统的贪吃蛇游戏相结合，在提高学生兴趣的情况下完成对当下最流行的人工智能的基本思想的初步认知。
                    参赛者在30*30的网格中通过事先编写好的程序操纵各自的贪吃蛇，参赛者只能控制蛇头的朝向(上、下、左、右)来控制蛇的下一步移动的方向。蛇的初始位置固定，并以恒定速度前进；蛇会自动长大，前10回合每回合长度增加1，从第11回合开始，每2回合长度增加1。
                    可以参考阿尔法狗的思想，通过python人工智能的思想尽可能去从总体上去考虑，不仅仅需要进行前向预测来寻找空间最大的可能走法。还要尽可能去预测比赛对象的可能前进路径去做出相应的堵截。
                    比赛中不仅可以直接去考虑到战胜对方，也可以去考虑怎么让自己尽可能的存活更长的时间，从侧面取得胜利。
                  </p>
                  <p>
                    胜负评价:蛇头在网格外、障碍物、自己蛇的身体(即序列重复)、对方蛇的身体(即与对方序列有相同坐标)，或非法操作均判定为死亡。任何一条蛇死亡时，游戏结束。若蛇同时死亡，判定为平局，否则先死的一方输，另一方赢。
                  </p>
                  <p>核心算法答辩评分标准（共计40分）</p>
                  <p>1.算法创新性      分数：16分
                    创新性算法>对经典算法进行改进>编码实现经典算法>直接调用</p>
                  <p>2.答辩表现        分数：12分
                    评委根据竞赛队伍现场答辩的表现给出综合评分；
                  </p>
                  <p>3.代码能力        分数：12分
                    评委从编码规范、代码结构、代码注释、代码复用、封装、抽象等方面进行评价。
                  </p>
                  <p>
                    总得分为：循环赛得分与答辩评分两部分之和。积分相同者再加赛一次。
                  </p>
                  <h2>竞赛规则</h2>
                  <h3>小学组---贪吃蛇游戏</h3>
                  <p>小学组正式比赛为每小组（或个人）完成赛项设置的任务。</p>
                  <p>小学组正式比赛评分标准：</p>
                  <p>评分指标有吃到果子数量与行进步数，优先比较吃到果子数量，数量相同时比较行进步数</p>
                  <p>①首先按照吃到的果子数量排名，吃到的果子越多，排名越高；</p>
                  <p>②吃到相同果子数量的选手按照行进步数排名，行进步数越少，排名越高</p>
                  <p>③最终成绩为：每个小组比6轮，去掉一个最高分、一个最低分，剩下4轮取平均值为最终成绩。</p>
                  <p>禁止事项：禁止带入与比赛相关的资料</p>
                  <h3>中学组---贪吃蛇博弈算法对抗</h3>
                  <p>初高中组比赛分为正式比赛、答辩。</p>
                  <p>正式比赛：采用循环赛制，积分制；</p>
                  <p>答辩：核心代码现场答辩评分（可以ppt展示，也可以直接展示代码）</p>
                  <p>核心代码答辩:总时间10分钟，汇报5分钟+专家提问5分钟</p>
                  <p>循环赛采用5局3胜制，每胜一局积10分；</p>
                  <p>禁止事项：禁止带入与比赛相关的资料</p>
                  <h2>竞赛纪律</h2>
                  <h3>小学组---贪吃蛇游戏</h3>
                  <p>①每组选手提交自己的程序编程代码；</p>
                  <p>②参加比赛的每组选手在相同标准下进行比赛，并完成赛项规定任务；</p>
                  <p>③按照小学组赛项评价标准，进行排名。</p>
                  <p>禁止事项：禁止带入与比赛相关的资料</p>
                  <p>比赛检录时间：2019/11/03  8:00-9:00</p>
                  <p>竞赛时间：2019/11/03   9:00-12:00</p>
                  <h3>中学组---贪吃蛇博弈算法对抗</h3>
                  <p>比赛总流程：正式比赛循环赛 > 答辩</p>
                  <p>①每组选手提交自己的算法博弈代码；</p>
                  <p>②进行比赛的两组选手的代码在屏幕上对抗演示，采取5局3胜制确定胜利方，胜利方获得10分；</p>
                  <p>③决赛小组选手进行答辩评分。</p>
                  <p>禁止事项：禁止带入与比赛相关的资料</p>
                  <p>比赛检录时间：2019/11/03  8:00-9:00</p>
                  <p>竞赛时间：2019/11/03   9:00-12:00</p>
                  <h2>比赛准备及流程</h2>
                  <h3>参赛选手准备</h3>
                  <p>①笔记本电脑一台：
                    操作系统：windows7，8或10
                    i5以上配置、安装python3.5.1、pycharm编译器
                  </p>
                  <p>②U盘：2GB以上</p>
                  <p>③纸+笔</p>
                  <h4>小学组---贪吃蛇游戏比赛流程</h4>
                  <p>①裁判宣读比赛要求</p>
                  <p>②各小组向裁判领取比赛代码</p>
                  <p>③比赛时间：90分钟</p>
                  <p>④各小组向裁判提交比赛代码</p>
                  <p>⑤进行正式比赛</p>
                  <p>⑥公布正式比赛积分结果</p>
                  <h4>中学组---贪吃蛇博弈算法对抗比赛流程</h4>
                  <p>①裁判宣读比赛规则</p>
                  <p>②各小组向裁判领取比赛代码</p>
                  <p>③比赛时间：90分钟</p>
                  <p>④各小组向裁判提交比赛代码</p>
                  <p>⑤进行循环赛，并公布循环赛积分结果</p>
                  <p>⑥代码展示答辩，评委打分</p>
                  <div>
                    <p>
                      附件：<a @click="downShouCe">2019博弈算法挑战赛程序手册</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="word-contents" v-show="cardList === 'd1'">
                <h1>关于举办首届泰安市青少年创意编程与智能设计大赛的补充通知</h1>
                <div class="word-div1">
                  <span>来源：</span>
                  <span>责任编辑：</span>
                  <span>日期：2020-05-10</span>
                </div>
                <div class="word-line"></div>
                <div class="word-content">
                  <p>
                    各县市区科协、教育局，市直各学校，各相关单位：
                  </p>
                  <p>
                    为深入贯彻落实国务院《新一代人工智能发展规划》的任务 要求，向广大青少年普及推广编程与智能设计相关科普知识和技 能，提高青少年对人工智能的认知和初步应用能力，定于5-7月份举办首届泰安市青少年创意编程与智能设计大赛。现将有关 事项通知如下：
                  </p>
                  <h2>
                    一、竞赛主题
                  </h2>
                  <p>
                    创意时代智能未来
                  </p>
                  <h2>
                    二、参赛对象
                  </h2>
                  <p>
                    全市小学、初中、高中（含中等职业学校）在校学生。
                  </p>
                  <div class="content2">
                    <h3>
                      组别划分：
                    </h3>
                    <h4>
                      （一）创意编程大赛
                    </h4>
                    <p>
                      Scratch比赛：分为小学I组（1-3年级）、小学II组（4-6 年级）、初中组；
                    </p>
                    <p>
                      Python比赛：分为初中组、高中组；
                    </p>
                    <h4>
                      （二）智能设计大赛
                    </h4>
                    <p>
                      Arduino比赛：分为小学组（4-6年级）、初中组、高中组；
                    </p>
                    <p>
                      Micro: bit比赛：分为小学组（4-6年级）、中学组（含中 等职业学校）；
                    </p>
                    <h4>
                      （三）ACME未来科技挑战赛
                    </h4>
                    <p>博弈算法挑战赛：分为小学组（4-6年级）、中学组（含中等职业学校）</p>
                    <p>
                      人脸识别挑战赛： 中学组（含中等职业学校）
                    </p>
                  </div>
                  <h2>
                    三、竞赛内容及形式
                  </h2>
                  <p>
                    大赛设创意编程、智能设计、ACME未来科技挑战赛三项比赛，每项比赛设两项内容 （详见附件1 ）。比赛形式分初评和终评两个阶段。初评为线上提交作品。终评将于6月底举办，因疫情特殊性，终评时间与形式届时将根据情况另行通知。
                  </p>
                  <h2>
                    四、竞赛作品报送方式及时间安排
                  </h2>
                  <p>
                    本次比赛报名方式分为两种:一是各县市区组织单位进行第一轮选拔，将晋级选手的个人信息和作品信息按照报送要求统一汇总，发送到指定邮箱参加市级大赛；二是相关学会、专业教育机构组织选手个人直接到全国青少年创意编程与智能设计大赛指定网站报名，参加全国海选 （报名网站将于5月下旬另行通知）。
                  </p>
                  <p>
                    2020年5月：各县市区组织单位发动本地中小学生积极参与大赛，创作、推选出晋级作品，名额不限；
                  </p>
                  <p>
                    2020年6月8 日-6月12日：请各组织单位将晋级作品信息及汇总表（见附件2）按报送要求在本网站“作品提交”模块进行提交；<span class="tijiao-icon" @click="gotoUpdate">提交入口 <i class="iconfont ymq-iconrukou"></i> </span>
                  </p>
                  <p>
                    2020年6月16日-6月22日：专家对作品进行评审，确定入围终评选手名单；
                  </p>
                  <p>
                    2020年6月底：终评（具体时间及终评方式另行通知）。
                  </p>
                  <p>
                    2020年7月：公布获奖名单并推选优秀作品参加“第六届山东省青少年创意编程与智能设计大赛”和“第X届中科院ACME科技挑战赛”。
                  </p>
                  <h2>
                    五、奖项设置
                  </h2>
                  <p>
                    大赛设等次奖、优秀指导教师奖、优秀组织单位奖、突出贡献奖，颁发荣誉证书。
                  </p>
                  <h2>
                    六、注意事项
                  </h2>
                  <p>
                    请各组织单位根据大赛时间安排和参赛办法（详见附件1）,积极组织发动本地学生参赛。要加强组织领导、宣传发动、赛事监督等工作，确保竞赛的公平、公正、公开。
                  </p>
                  <p>
                    赛事举办单位将根据竞赛成绩，选拔优秀选手参加“第六届山东省青少年创意编程与智能设计大赛”决赛和中科院ACME未来科技挑战赛。
                  </p>
                  <p>
                    本次大赛活动不收取任何费用。任何组织单位、学校不得 以任何名义收取学生参赛费用。
                  </p>
                 <h2>
                   七、联系人
                 </h2>
                  <p>
                    泰安市科技馆
                  </p>
                  <p>
                    张锐、韩珂
                  </p>
                  <p>
                    联系电话：0538-8413780
                  </p>
                  <p>
                    邮箱：tasqfx@163.com
                  </p>
                  <p>
                    泰安市教研室
                  </p>
                  <p>
                    鲁克营
                  </p>
                  <p>
                    联系电话：
                  </p>
                  <div>
                    <p>附件：<a @click="downTaian">1.泰安市“创意编程与智能设计大赛”参赛办法</a></p>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a @click="downTaian">2.泰安市“首届创意编程与智能设计大赛“参赛汇总</a></p>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header5'
    export default {
        name: "competition",
      components: {
        Header,
        Footer
      },
      data() {
          return {
            contentShow: '',
            cardList: '最新通知',
            titleCard: '最新通知'
          }
      },
      methods: {
        showA_1() {
          this.cardList = 'a1'
        },
        showA_2() {
          this.cardList = 'a2'
        },
        showB_1 () {
          this.cardList = 'b1'
        },
        showC_1() {
          this.cardList = 'c1'
        },
        showD_1() {
          this.cardList = 'd1'
        },
        gotoZX() {
          this.cardList = '最新通知'
          this.titleCard = '最新通知'
        },
        gotoSH () {
          this.cardList = '赛程回顾'
          this.titleCard = '赛程回顾'
        },
        gotoTest () {
          this.$router.push('/testone')
        },
        gotocomOne() {
          this.cardList = '博弈算法大赛'
          this.titleCard = '博弈算法大赛'
        },
        gotocomTwo () {
          this.cardList = '青少年创意编程大赛'
          this.titleCard = '创意编程大赛'
        },
        downShouCe() {
          window.open('http://58.119.112.12/CCZX_image/shouce.doc')
        },
        downTaian() {
          window.open('http://58.119.112.12/CCZX_image/taian.docx')
        },
        gotoUpdate () {
          this.$router.push('/WorkUpdate')
        }
      }
    }
</script>

<style scoped>
  .header-bg {
    width: 100%;
    height: 450px;
    background-image: url("../../assets/bg-login1.jpg");
    background-size: 100%;
  }
  .comp-content {
    max-width: 1500px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .left-col {
    height: 500px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .left-card {

  }
  .left-card1 {
    background-color: #66d5cd;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 30px;
    color: white;
    font-size: 30px;
    font-weight: bold;
    border-top-right-radius: 20px;

  }
  .left-card2 {
    margin-top: 5px;
    background-color: #ECECEC;
    /*border: 1px dashed #666666;*/
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    /*padding-right: 30px;*/
    color: #666666;
    font-size: 18px;
    position: relative;
  }
  .card-icon {
    position: absolute;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    font-size: 22px;
  }
  .left-card2:hover {
    color: #014099;
    cursor: pointer;
    background-color: #CCCCCC;
  }
  .left-header-icon {
    float: left;
    height: 25px;
    width: 8px;
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  }
  .text-title {
    margin-left: 20px;
    font-size: 20px;
  }
  .line-style {
    width: 100%;
    border-bottom: 1px solid #66d5cd;
    margin-top: 20px;
  }
  .right-icon-header {
    width: 150px;
    height: 50px;
    background-color: #66d5cd;
    border-top-right-radius: 100px;
    margin-top: 20px;
    border-bottom-right-radius: 100px;
    box-shadow: 2px 2px 2px grey;
    color: white;
    font-size: 18px;
    padding-left: 20px;
    padding-top: 15px;
  }
  .card-lists {
    margin-top: 30px;
    border-top: 1px dashed #CCCCCC;
  }
  .card-list {
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #CCCCCC;
    position: relative;
  }
  .point {
    width: 5px;
    height: 5px;
    background-color: black;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .card-list a {
    color: #666666;
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
  }
  .card-list a:hover {
    color: #66d5cd;
  }
  .date-style {
    font-size: 18px;
    float: right;
  }
  .word-contents {
    margin-top: 30px;
    text-align: center;
  }
  /*.word-contents p {*/
    /*line-height: 30px;*/
  /*}*/
  .word-contents h1{
    font-size: 30px;
  }
  .word-div1 {
    font-size: 18px;
    margin-top: 15px;
  }
  .word-div1 span {
    margin-left: 20px;
  }
  .word-line {
    border-bottom: 1px dashed #666666;
    margin-top: 20px;
  }
  .word-content {
    margin-top: 20px;
    text-align: left;
  }
  .word-content a {
    cursor: pointer;
  }
  .word-content p {
    text-indent: 0.5rem;
  }
  .word-content h2{
    font-size: 28px;
  }
  .word-content h3 {
    font-size: 26px;
  }
  .content2 {
    margin-left: 40px;
  }
  .word-content h4 {
    font-size: 24px;
  }
  .photo-container {
    text-align: center;
    padding: 30px;
    margin-bottom: 30px;
  }
  .photo-container img {
    width: 600px;
  }
  .tijiao-icon {
    font-size: 20px;
    margin-left: 20px;
  }
  .tijiao-icon:hover {
    color: red;
    cursor: pointer;
  }
</style>
