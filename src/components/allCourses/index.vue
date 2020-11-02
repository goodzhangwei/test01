<template>
  <div class="contents">
    <div class="move_header" v-if="navBarFixed">
      <HomeHeader2 :flagInfo="infoState"></HomeHeader2>
    </div>
    <div>
      <HomeHeader :flagInfo="infoState"></HomeHeader>
    </div>
    <div class="bg_img">
      <div class="searchCourse">  
        <el-input  v-model="interestingCourse" placeholder="请输入感兴趣的课程" suffix-icon="el-icon-search"></el-input>
      </div>
    </div>
    <div class="courseNav">
      <div class="courseType">
        <span class="hd l">课程类型:</span>
        <div class="bd">
          <ul>
            <li :class="{navList:itemStyle, on:selectIndex1 === item.value}" v-for="(item, index) in courseTypes" @click="selectTypeItem(index, item.label)">{{item.label}}</li>
          </ul>
        </div>
      </div>
      <div class="courseType">
        <span class="hd l">学习模式:</span>
        <div class="bd">
          <ul>
            <li :class="{navList:itemStyle, on:selectIndex2 === item.value}" v-for="(item, index) in studyTypes" @click="selectStudyItem(index, item.label)">{{item.label}}</li>
          </ul>
        </div>
      </div>
      <div class="courseType">
        <span class="hd l">分类:</span>
        <div class="bd">
          <ul>
            <li :class="{navList:itemStyle, on:selectIndex3 === item.value}" v-for="(item, index) in kindsTypes" @click="selectKindItem(index, item.label)">{{item.label}}</li>
          </ul>
        </div>
      </div>
      <div class="courseType">
        <span class="hd l">难度:</span>
        <div class="bd">
          <ul>
            <li :class="{navList:itemStyle, on:selectIndex4 === item.value}" v-for="(item, index) in difficultTypes" @click="selectDifficultItem(index, item.label)">{{item.label}}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="courseContainer courseNav">
      <div class="coursesList" v-for="(item, index) in courseList">
      <!-- <div class="coursesList"> -->
         <div class="course-card-container">
           <div class="course-card-top">
             <img class="course-banner" :src="item.src"/>
           </div>
           <div class="course-card-content">
             <h3 class="course-card-name">{{item.name}}</h3>
             <div class="course-card-bottom">
               <div class="course-card-info">
                 <span class="courseType">{{item.courseType}}</span>
                 <span>
                   <i class="iconfont ymq-iconuser xl-iconfont"></i>
                   {{item.coursePerson}}
                 </span>
                 <span class="coursePrice">{{item.coursePrice}}</span>
               </div>
               
             </div>
           </div>
        </div>

       
      </div>

      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>

      
      
     
    </div>
    

    
    
    <!-- <Footer/> -->

  </div>
</template>

<script>
  import HomeHeader from '@/components/common/header'
  import HomeHeader2 from '@/components/common/header2'
  import Footer from '@/components/common/footer'
  export default {
    name: "AllCourses",
    components: {
      Footer,
      HomeHeader,
      HomeHeader2
    },
    data () {
      return {
        itemStyle: true,
        selectIndex1: 100,
        selectIndex2: 100,
        selectIndex3: 100,
        selectIndex4: 100,
        interestingCourse: '',
        courseTypes: [
          {
            value: 100,
            label: "全部"
          },
          {
            value: 0,
            label: "免费课程"
          },
          {
            value: 1,
            label: "付费课程"
          }
        ],
        studyTypes: [
          {
            value: 100,
            label: "全部"
          },
          {
            value: 0,
            label: "自由式学习"
          },
          {
            value: 1,
            label: "任务式学习"
          }
        ],
        kindsTypes: [
          {
            value: 100,
            label: "全部"
          },
          {
            value: 0,
            label: "TypeScript"
          },
          {
            value: 1,
            label: "计算机网络"
          },
          {
            value: 2,
            label: "Java"
          },
          {
            value: 3,
            label: "Python"
          },
          {
            value: 4,
            label: "Vue"
          },
          {
            value: 5,
            label: "SpringBoot"
          },
          {
            value: 6,
            label: "Spark"
          },
          {
            value: 7,
            label: "Spring Cloud"
          },
          {
            value: 8,
            label: "React"
          }
        ],
        difficultTypes: [
          {
            value: 100,
            label: "全部"
          },
          {
            value: 0,
            label: "入门"
          },
          {
            value: 1,
            label: "初级"
          }, 
          {
            value: 2,
            label: "进阶"
          },
          {
            value: 3,
            label: "专题"
          }, 
        ],
        courseList: [
          {
            src: require("../../assets/course_1.png"),
            name: '六个案例学会响应式布局',
            courseType: '入门',
            coursePrice: '免费',
            coursePerson: "2222"
          },
          {
            src: require("../../assets/course_2.png"),
            name: 'Tensorflow.js 实现垃圾分类',
            courseType: '初级',
            coursePrice: '¥999',
            coursePerson: "2345"
          },
          {
            src: require("../../assets/course_3.png"),
            name: '基于WebAR实现3D任务书桌上跳舞',
            courseType: '进阶',
            coursePrice: '¥999',
            coursePerson: "6438"
          },
          {
            src: require("../../assets/course_4.png"),
            name: '带你快速入坑ES6',
            courseType: '入门',
            coursePrice: '免费',
            coursePerson: "32412"
          },
          {
            src: require("../../assets/course_5.png"),
            name: '切图基础教程-前端工程师版',
            courseType: '入门',
            coursePrice: '免费',
            coursePerson: "4322"
          },
          {
            src: require("../../assets/course_5.png"),
            name: '切图基础教程-前端工程师版',
            courseType: '入门',
            coursePrice: '免费',
            coursePerson: "4322"
          },
          {
            src: require("../../assets/course_5.png"),
            name: '切图基础教程-前端工程师版',
            courseType: '入门',
            coursePrice: '免费',
            coursePerson: "4322"
          },
          {
            src: require("../../assets/course_5.png"),
            name: '切图基础教程-前端工程师版',
            courseType: '入门',
            coursePrice: '免费',
            coursePerson: "4322"
          },
          {
            src: require("../../assets/course_5.png"),
            name: '切图基础教程-前端工程师版',
            courseType: '入门',
            coursePrice: '免费',
            coursePerson: "4322"
          },

        ]
      }
    },
    mounted () {
     
    },
    methods: {
      selectTypeItem(index, name) {
        console.log(index)
        this.selectIndex1 = index - 1
      },
      selectStudyItem(index, name) {
        console.log(index)
        this.selectIndex2 = index - 1
      },
      selectKindItem(index, name) {
        console.log(index)
        this.selectIndex3 = index - 1
      },
      selectDifficultItem(index, name) {
        console.log(index)
        this.selectIndex4 = index - 1
      }
    }
  }
</script>

<style scoped>
  .move_header {
    background-color: rgba(255, 255, 255, 0.9);position: fixed;width: 100%;z-index: 999
  }
  .bg_img {
    width: 100%;
    height: 160px;
    background-image: url("../../assets/allCourse.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center center;
  }
  .bg_img .searchCourse {
    float: right; 
    width: 400px;
    margin-right: 60px;
    margin-top: 1.1rem;
    transform: translateY(-50%);
  }
  .courseNav {
    width: 85%;
    margin: 0 auto;
    /* background: #b0c6db; */
  }
  .courseType {
    position: relative;
    padding: 16px 0 5px;
    border-bottom: 1px solid #edf1f2;
  }
  .courseType .hd {
    
    height: 20px;
    line-height: 30px;
    font-weight: 700;
    font-size: 20px;
    color: #07111b;
    text-align: left;
  }
  .l {
    float: left;
  }
  .bd {
    margin-left:120px;
  }
  .bd ul {
    list-style: none;
  }
  .navList {
    display: inline-block;
    margin: 0 30px;
  }
  .on {
    background: rgba(242,13,13,.06);
    border-radius: 6px;
    font-weight: 700;
    color: #f20d0d;
  }
  .courseContainer {
    margin-top:20px;
  }
  .course-card-container {
    float: left;
    margin: 0 60px 10px 20px;
    height: 250px;
    z-index: 0;
    font-size: 0;
  }
  .course-card-container .course-card-top {
    width: 216px;
    height: 120px;
    position: relative;
    border-radius: 8px;
    transition: all .3s;
  }
  .course-card-container .course-card-top .course-banner {
    width: 100%;
    height: 100%;
    background-color: #f3f5f7;
    border-radius: 8px;
  }
  .course-card-content {
    margin-top:-20px;
    padding: 8px;
  }
  .course-card-name {
    width: 200px;
    font-size: 16px;
    color: #07111b;
    line-height: 24px;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    transition: all .3s;
    font-weight: 700;
    height: 46px;
  }
  .course-card-bottom {

  }
  .course-card-info {
    
    font-size: 12px;
    color: #93999f;
    line-height: 24px;
    
    font-weight: 400;
  }
  .course-card-info span {
    margin-right: 25px;
    
  }
  .course-card-info .courseType {
    color:rgba(48, 197, 122, 0.9);
  }
  .course-card-info .coursePrice {
    color:rgba(240, 37, 71, 0.9);
  }
  .pagination {
    clear: both;
    display: block;
    /* margin: 0 auto; */
    text-align: center;
  }
  


  
  
  
  
  
  
  
  
  
  
  
</style>

