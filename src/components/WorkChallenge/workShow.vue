<template>
    <div>
      <Header></Header>
      <div class="alerts">
        <el-alert
          title="您提交的作品信息"
          type="success"
          center
          show-icon>
        </el-alert>
      </div>
      <div class="info-card">
        <div class="info-div">
          <span class="info-text">作品名称：</span>
          <span class="info-text">{{projectname}}</span>
        </div>
        <div class="info-div">
          <span class="info-text">小组名称：</span>
          <span class="info-text">{{groupname}}</span>
        </div>
        <div class="info-div">
          <span class="info-text">参赛类别：</span>
          <span class="info-text">{{majorname}}</span>
        </div>
        <div class="info-div">
          <span class="info-text">参赛项目：</span>
          <span class="info-text">{{secproject}}</span>
        </div>
        <div class="info-div">
          <span class="info-text">年级组别：</span>
          <span class="info-text">{{group}}</span>
        </div>
        <div class="info-div">
          <span class="info-text">作品文件：</span>
          <el-tooltip class="item" effect="dark" content="点击下载" placement="right">
            <i class="el-icon-document-copy info-text icon-info" @click="downloadFile"></i>
          </el-tooltip>

        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header3'
    export default {
        name: "workShow",
      components: {
        Header,
        Footer
      },
      data() {
        return {
          projectname: '',
          groupname: '',
          majorname: '',
          secproject: '',
          group: '',
          projectlink: '',
        }
      },
      mounted() {
        this.getInfo()
      },
      methods: {
        getInfo() {
          var url = 'https://www.zhongkeruitong.top/towerImg/cms/competition/findbyusername?username=' + localStorage.getItem('name')
          this.$axios.get(url, {headers:{Authorization:'Bearer ' + localStorage.getItem('token')}}).then((res) => {
            this.projectname = res.data.projectname
            this.groupname = res.data.groupname
            this.majorname =res.data.majorproject
            this.secproject = res.data.secproject
            this.group = res.data.maingroup
            this.projectlink = res.data.projectlink
          })
        },
        downloadFile () {
          var url = this.projectlink
          window.open(url)
        },
      }
    }
</script>

<style scoped>
  .info-card {
    width: 330px;
    margin: 40px auto;
    margin-bottom: 80px;
  }
  .info-div {
    margin-top: 20px;
  }
  .info-text {
    font-size: 24px;
    color: #777777;
  }
  .icon-info {
    cursor: pointer;
  }
  .icon-info:hover {
    color: red;
  }
  .alerts {
    width: 500px;
    margin: 20px auto;
  }
</style>
