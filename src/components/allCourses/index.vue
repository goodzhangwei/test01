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
        <el-input  v-model="interestingCourse" placeholder="请输入感兴趣的课程" suffix-icon="el-icon-search" @keyup.enter.native="searchCourse"></el-input>
      </div>
    </div>
    <div class="courseNav">
      <div class="courseType clearfix">
        <span class="hd l">课程类型:</span>
        <div class="bd">
          <ul>
            <li :class="{navList:itemStyle, on:selectIndex1 === index}" v-for="(item, index) in teachmodeList" @click="selectTypeItem(index, item)">{{item.label}}</li>
          </ul>
        </div>
      </div>
      <div class="courseType clearfix">
        <span class="hd l">学习模式:</span>
        <div class="bd">
          <ul>
            <li :class="{navList:itemStyle, on:selectIndex2 === index}" v-for="(item, index) in studymodelList" @click="selectStudyItem(index, item)">{{item.label}}</li>
          </ul>
        </div>
      </div>
      <div class="courseType clearfix">
        <span class="hd l">方向:</span>
        <div class="bd">
          <ul>
            <li :class="{navList:itemStyle, on:selectIndex5 === index}" v-for="(item, index) in mtList" @click="selectDirectionItem(index, item)">{{item.label}}</li>
          </ul>
        </div>
      </div>
      <div class="courseType maxh courseKind clearfix">
        <span class="hd l">分类:</span>
        <div class="bd">
          <ul>
            <li :class="{navList:itemStyle, on:selectIndex3 === index}" v-for="(item, index) in stList" @click="selectKindItem(index, item)">{{item.label}}</li>
          </ul>
        </div>
      </div>
      <div class="courseType clearfix">
        <span class="hd l">难度:</span>
        <div class="bd">
          <ul>
            <li :class="{navList:itemStyle, on:selectIndex4 === index}" v-for="(item, index) in difficultTypes" @click="selectDifficultItem(index, item)">{{item.label}}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="courseContainer courseNav">
      <div class="coursesList" v-for="(item, index) in courseList">
      <!-- <div class="coursesList"> -->
         <div class="course-card-container">
           <div class="course-card-top">
             <img class="course-banner" :src="getImgUrl(item.pic)"/>
           </div>
           <div class="course-card-content">
             <h3 class="course-card-name">{{item.name}}</h3>
             <div class="course-card-bottom">
               <div class="course-card-info">
                 <span class="courseType">{{getDifficult(item.grade)}}</span>
                 <span>
                   <i class="iconfont ymq-iconuser xl-iconfont"></i>
                   {{item.people}}
                 </span>
                 <span class="coursePrice">¥{{item.price}}</span>
               </div>
               
             </div>
           </div>
        </div>

       
      </div>

      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 50,100]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          background
          :total="totalList"
        ></el-pagination>
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
        currentPage: 1,
        pagesize: 10,
        page: 0,
        size: 10,
        totalList:0,
        navBarFixed: false,
        infoState: false,
        itemStyle: true,
        selectIndex1: 0,
        selectIndex2: 0,
        selectIndex3: 0,
        selectIndex4: 0,
        selectIndex5: 0,
        interestingCourse: '',
        teachmodeList: [
          
          {
            value: "201001",
            label: '免费课程'
          },
          {
            value: "201002",
            label: '付费课程'
          }
        ],
        studymodelList: [
          
          {
            value: "201001",
            label: '自由式学习'
          },
          {
            value: "201002",
            label: '任务式学习'
          }
        ],
        mtList: [], // 方向
        stList: [], // 分类
        difficultTypes: [
          
          {
            value: "200001",
            label: '简单'
          },
          {
            value: "200002",
            label: '中等'
          },
          {
            value: "200003",
            label: '困难'
          }
        ],
        courseList: [],
        
      }
    },
    mounted () {
      window.addEventListener('scroll', this.watchScroll)
      this.setBannerH()
      window.addEventListener('resize', () => {
        this.setBannerH()
      }, false)
      this.getInfo()
      this.getCategory()
      //this.getKinds()
      this.getAllCourses()
    },
    methods: {
      selectTypeItem(index, item) {
        this.selectIndex1 = index
        console.log("IIII", item)
        this.getClassByType("teachmode", item.value)
        
      },
      selectStudyItem(index, item) {
        this.selectIndex2 = index
        this.getClassByType("studymodel", item.value)
      },
      selectDirectionItem(index, item) {
        this.selectIndex5 = index
        this.getClassByType("mt", item.id)
        this.getKindList(item.id)
      },
      selectKindItem(index, item) {
        this.selectIndex3 = index 
        this.getClassByType("st", item.id)
      },
      selectDifficultItem(index, item) {
        this.selectIndex4 = index
        this.getClassByType("grade", item.value) 
      },
      getKindList(id) {
        var url = `http://58.119.112.14:11020/cms/category/listThree?id=${id}`
        this.$axios.get(url).then((res) => {
          this.stList = res.data.data
        })
      },
      getClassByType(type, name) {
        var url = `http://58.119.112.14:11020/cms/course/coursebase/search?page=${this.page}&size=10&${type}=${name}`
        this.$axios.get(url).then((res) => {
          console.log("bbb", res.data)
          this.courseList = res.data.data.list
          this.totalList = res.data.data.total
        })
      },
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
       // console.log(scrollTop)
      },
      getInfo() {
        var url = 'https://zhongkeruitong.top/towerImg/cms/user/getUserInfo?username=' + this.username
        this.$axios.get(url).then((res) => {
          this.infoState = res.data.infoState
        })
      },
      
      getCategory() {
        var url = 'http://58.119.112.14:11020/cms/category/listTwo'
        this.$axios.get(url).then((res) => {
          this.mtList = res.data.data
          console.log("SelectIndex5", this.selectIndex5)
          var item = this.mtList[this.selectIndex5]
          console.log(item.id)
          this.getKindList(item.id)
        })
      },
      getKinds() {
       // console.log("SelectIndex5", this.selectIndex5)
        var url = 'http://58.119.112.14:11020/cms/category/listThree'
        this.$axios.get(url).then((res) => {
          this.stList = res.data.data
        })
      },
      
      getAllCourses() {
        var url = `http://58.119.112.14:11020/cms/course/coursebase/search?page=${this.page}&size=10`
        this.$axios.get(url).then((res) => {
          
          var arr = res.data.data.list
           
          for(var i = 0; i < arr.length; i++) {
            arr[i].people = Math.ceil(Math.random()*10000) + 1000;
          }
          this.courseList = arr
          this.totalList = res.data.data.total
        })
      }, 
      searchCourse(name) {
        console.log("nname", name)
        var url = `http://58.119.112.14:11020/cms/allCourses/allCourses/list?name=${name}`
        this.$axios.get(url).then((res) => {
          this.courseList = res.data.rows
        })
      },

      handleSizeChange(size) {
        this.size = size;
        
      },

      handleCurrentChange(currentPage) {
        this.page = currentPage - 1;
        this.getAllCourses()
      },
      getImgUrl(url) {
        return `http://${url}`
      },
      getPeople() {
        var num = Math.ceil(Math.random()*10000) + 1000; 
        return num;
      },
      getDifficult(code) {
        if(code === '200001') {
          return "简单"
        } else if(code === '200002') {
          return '中等'
        } else {
          return '困难'
        }
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
    font-size: 18px;
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
    font-size: 14px;
  }
  .maxh {
    max-height: 132px;
  }
  .courseKind .bd {
    max-height: 130px;
    overflow: hidden;
  }
  .navList {
    display: inline-block;
    margin: 0.06rem 0.3rem 0.3rem 0rem;
    
    /* padding-bottom: 0.2rem; */
    margin-bottom: 0.15rem;
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
  .clearfix:after {
    content: '\0020';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
  


  
  
  
  
  
  
  
  
  
  
  
</style>

