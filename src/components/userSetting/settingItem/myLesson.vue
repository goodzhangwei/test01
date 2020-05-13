<template>
  <div class="app-container">
    <div class="app-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="正在学习" name="first" class="tabPane">
          <div class="studying">
            <el-row :gutter="10">
              <el-col :span="6" v-for="(item, index) in list" :key="index">
                <div class="hot-card">
                  <div class="hot-card-img" @click="gotocontent(item.id)">
                    <img :src="imgList[index]" class="hot-img-style">
                  </div>
                  <div class="hot-card-right-text">
                    <div class="hot-card-right-title" @click="gotocontent(item.id)">
                      <span>{{item.name.substring(0, 10)}}</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="学习完成" name="second">
          <div class="second-container">
            <div class="picture">
              <img :src="nocontent">
            </div>
            <div style="text-align: center;margin-top: 20px">
              <span style="color: #636363">暂无内容</span>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="课程收藏" name="third">
          <div class="second-container">
            <div class="picture">
              <img :src="nocontent">
            </div>
            <div style="text-align: center;margin-top: 20px">
              <span style="color: #636363">暂无内容</span>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myLesson',
  data () {
    return {
      activeName: 'first',
      pictwo: require('@/assets/picturetwo.jpg'),
      nocontent: require('@/assets/nocontent.png'),
      list: [],
      imgList: ['http://58.119.112.12/CCZX_image/hot-card-img1.png','http://58.119.112.12/CCZX_image/hot-card-img2.png','http://58.119.112.12/CCZX_image/hot-card-img3.png', 'http://58.119.112.12/CCZX_image/hot-card-img4.png']
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    getList () {
      // var url = 'http://58.119.112.14:11020/cms/user/coursePub/list/1/8'
      var url = 'http://58.119.112.14:11020/cms/user/coursePub/mylist/1/4?username=' + localStorage.getItem('name')
      this.$axios.get(url).then((res) => {
        this.list = res.data.queryResult.list
      })
    },
  }
}
</script>

<style scoped>
  .app-content {
    padding: 30px;
  }
  .tabPane >>> .el-tabs__item {
    font-size: 18px;
  }
  .studying {
    margin-top: 30px;
  }
  .class-item {
    width: 400px;
    height: 300px;
    background-color: #f4f4f4;
    border-radius: 20px;
  }
  .text-container {
    padding: 20px;
  }
  .picture {
    text-align: center;
    margin-top: 40px;
  }
  .hot-card {
    height: 250px;
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
    height: 70px;
    padding-right: 20px;
    padding-left: 20px;
    padding-top: 20px;
    background-color: #f7f8fa;
  }
  .hot-card-right-title {
    font-size: 18px;
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
</style>
