<template>
  <div>
    <Header></Header>
    <div class="contaier" style="margin-bottom: 40px">
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
    <div class="copyrightContainer">
      <span style="font-size: 12px">Copyright&nbsp;&nbsp;&nbsp;中科智禾教育大大数据中心   ©2019</span>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import Footer from '@/components/common/footer'
export default {
  name: 'ContentClass',
  components: { Header, Footer },
  data () {
    return {
      page: 1,
      size: 100,
      list: [],
      flag_state: true
    }
  },
  created () {
    if (localStorage.getItem('flag_class') === null) {
      this.flag_state = true
    } else {
      this.flag_state = false
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    gotoVideoClass () {
      if (this.flag_state === true) {
        alert('请先登录！')
        this.$router.push('/login')
      } else {
        this.$router.push('/videoclass')
      }
    },
    getList () {
      var url = 'https://www.zhongkeruitong.top/towerImg/cms/user/coursePub/list/1/100'
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
    }
  }
}
</script>

<style scoped>
  .contaier {
    width: 1400px;
    margin: 0 auto;
  }
  .copyrightContainer {
    text-align: center;
    margin-bottom: 20px;
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
    width: 150px;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    float: left;
  }
  .class_text {
    float: left;
    padding-left: 30px;
    width: 500px;
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
</style>
