<template>
    <div>
      <Header></Header>
      <div class="containers">
        <div class="title-header">{{'首届' + cityName + '青少年创意编程大赛作品提交情况'}}</div>
        <el-select placeholder="请选择参赛类别" class="select-style input-style" v-model="majorproject"  @change="changeOne">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select placeholder="请选择参赛项目" class="select-style input-style" v-model="secproject" @change="getInfo">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-select placeholder="请选择年级组别" class="select-style input-style" v-model="maingroup" @change="getInfo">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-button type="success" @click="showALL">查看全部</el-button>
        <el-button type="primary" @click="gotocontent">查看分析图表</el-button>
        <span v-show="majorproject!== ''" class="major-style">{{majorproject}}</span>
        <span v-show="secproject!==''" class="secproject">{{secproject}}</span>
        <span v-show="maingroup!== ''" class="maingroup">{{maingroup}}</span><span>{{'共计'}}</span>
        <span class="num-text">{{InfoList.length}}</span><span>{{'人次提交作品'}}</span>
        <el-table :data="InfoList === 0 ? InfoList : InfoList.slice((currentPage-1)*pagesize,currentPage*pagesize)" class="table-style" :header-cell-style="HeaderStyle"
                  stripe
                  :row-class-name="tableRowClassName">
          <el-table-column label="用户名"  align="center">
            <template slot-scope="scope">
              <div class="table-text">
                <span>{{scope.row.username}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="上传者/小组名称"  align="center">
            <template slot-scope="scope">
              <div class="table-text">
                <span>{{scope.row.groupname}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="参赛类别"  align="center">
            <template slot-scope="scope">
              <div class="table-text">
                <span>{{scope.row.majorproject}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="参赛项目"  align="center">
            <template slot-scope="scope">
              <div class="table-text">
                <span>{{scope.row.secproject}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="年级组别"  align="center">
            <template slot-scope="scope">
              <div class="table-text">
                <span>{{scope.row.maingroup}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="作品名称"  align="center">
            <template slot-scope="scope">
              <div class="table-text">
                <span>{{scope.row.projectname}}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button type="success" @click="download_file">下载</el-button>
              <el-button type="warning" @click="download_file">评分</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="paginations">
          <el-pagination
            class="pagination-style"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[5, 10, 20, 50, 100]"
            :page-size="pagesize"
            layout="total, sizes, prev, pager, next, jumper"
            background
            :total="InfoList.length">
          </el-pagination>
        </div>

      </div>
      <div class="charts-style" id="here" v-show="showcharts">
        <el-row>
          <el-col :span="12">
            <div id="mychart1" class="mychart1-style"></div>
          </el-col>
          <el-col :span="12">
            <div id="mychart2" class="mychart1-style"></div>
          </el-col>
        </el-row>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header3'
  import $ from 'jquery'
  import echarts from 'echarts'
  require('echarts/theme/macarons') // echarts theme
    export default {
        name: "WorkInfo",
      components: {
        Header,
        Footer
      },
      data() {
        return {
          username: localStorage.getItem('name'),
          currentPage:1,
          pagesize:10,
          showcharts: false,
          majorproject: '',
          HeaderStyle: {
            'background-color': '#F2F2F2',
            'font-size': '16px',
            'text-align': 'center'
          },
          secproject: '',
          maingroup: '',
          a1: '', // 智能设计大赛
          a2: '', // 创意编程大赛
          a3: '', // 人工智能挑战赛
          a4: '', // Micro:bit比赛
          a5: '', //Python比赛
          a6: '', // Scratch比赛
          a7: '', //智能人脸识别挑战赛
          a8: '', // 贪吃蛇博弈算法挑战赛
          a9: '', //初中组
          a10: '', //小学组（1-3年级）
          a11: '', // 小学组（4-6年级）
          InfoList: [],
          options2: [],
          options: [{
            value: '创意编程大赛',
            label: '创意编程大赛'
          }, {
            value: '智能设计大赛',
            label: '智能设计大赛'
          }, {
            value: '人工智能挑战赛',
            label: '人工智能挑战赛'
          }],
          options3: [{
            value: '小学组（1-3年级）',
            label: '小学组（1-3年级）'
          }, {
            value: '小学组（4-6年级）',
            label: '小学组（4-6年级）'
          }, {
            value: '初中组',
            label: '初中组'
          }, {
            value: '高中组',
            label: '高中组'
          }],
        }
      },
      computed: {
        cityName() {
          if (localStorage.getItem('name') === 'taian') {
            return '泰安市'
          } else {
            return '临沂市'
          }
        },
      },
      mounted() {
        this.getInfo()
        this.getInfoList()
        this.getChartsList()
      },
      methods: {
          getInfo() {
            var url = 'https://www.zhongkeruitong.top/towerImg/cms/competition/findAllProject?username=' + this.username + '&secproject=' + this.secproject + '&majorproject=' + this.majorproject + '&maingroup=' + this.maingroup
            this.$axios.get(url).then((res) => {
              this.InfoList = res.data.competitionList
            })
          },
        gotocontent () {
          // document.getElementById('here').scrollIntoView()
          this.showcharts = true
          setTimeout(() => {
            var hshight = $($('#here')).offset().top
            $('html,body').animate({
              scrollTop: hshight
            }, 700)
          })
          this.initChartsOne()
          this.initChartsTwo()
        },
        getInfoList() {
          var url = 'https://www.zhongkeruitong.top/towerImg/cms/competition/findAllProject?username=' + this.username + '&secproject=python比赛'
          this.$axios.get(url).then((res) => {
            // this.InfoList = res.data.competitionList
          })
        },
        changeOne(val) {
          console.log(val)

          var option1 = [
            {
              value: 'Scratch比赛',
              label: 'Scratch比赛'
            }, {
              value: 'Python比赛',
              label: 'Python比赛'
            }
          ]
          var option2 = [
            {
              value: 'Arduino比赛',
              label: 'Arduino比赛'
            },{
              value: 'Micro: bit比赛',
              label: 'Micro: bit比赛'
            },{
              value: 'ESP32 智慧物联项目',
              label: 'ESP32 智慧物联项目'
            }
          ]
          var option3 = [
            {
              value: '贪吃蛇博弈算法挑战赛',
              label: '贪吃蛇博弈算法挑战赛'
            }, {
              value: '智能人脸识别挑战赛',
              label: '智能人脸识别挑战赛'
            }
          ]

          if (val === '创意编程大赛') {
            this.options2 = option1
          } else if (val === '智能设计大赛') {
            this.options2 = option2
          } else if (val === '人工智能挑战赛') {
            this.options2 = option3
          }
          this.getInfo()
        },
        showALL() {
          this.majorproject = ''
          this.secproject = ''
          this.maingroup = ''
          this.getInfo()
        },
        handleSizeChange: function (size) {
          this.pagesize = size
        },
        handleCurrentChange: function(currentPage){
          this.currentPage = currentPage
        },
        tableRowClassName({row, rowIndex}) {
          if (rowIndex === 1) {
            return 'warning-row';
          } else if (rowIndex === 3) {
            return 'success-row';
          }
          return '';
        },
        download_file() {
          this.$notify({
            title: '警告',
            message: '对不起！暂未对您开放此功能',
            type: 'warning'
          });
        },
        initChartsOne() {
            var _this = this
          let myChart = echarts.init(document.getElementById('mychart1'),'macarons')
          var option = {
            title: {
              text: '三大赛项类别统计图',
              // subtext: '纯属虚构',
              left: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: ['创意编程大赛', '智能设计大赛', '人工智能挑战赛']
            },
            series: [
              {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                  {value: _this.a2, name: '创意编程大赛'},
                  {value: _this.a1, name: '智能设计大赛'},
                  {value: _this.a3, name: '人工智能挑战赛'},
                  // {value: 135, name: '视频广告'},
                  // {value: 1548, name: '搜索引擎'}
                ],
                emphasis: {
                  itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                  }
                }
              }
            ]
          }
          myChart.setOption(option)
        },
        initChartsTwo() {
          var _this = this
          let myChart = echarts.init(document.getElementById('mychart2'),'macarons')
          var option = {
            title: {
              text: '各赛项参赛人数统计',
              // subtext: '纯属虚构'
            },
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              left: '5%',//左边距
              right: '5%',//走边距
              top: 10,//上边距
              bottom: 50,//下边距
              containLabel: true
            },
            // legend: {
            //   data: ['蒸发量', '降水量']
            // },
            toolbox: {
              show: true,
              feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
              }
            },
            calculable: true,
            xAxis: [
              {
                type: 'category',
                data: ['Micro:bit比赛', 'Python比赛', 'Scratch比赛', '智能人脸识别挑战赛', '贪吃蛇博弈算法挑战赛'],
                axisLabel:{//把文字竖着放
                  formatter:function(value){
                    return value.split("").join("\n")
                  }
                }
              }
            ],
            yAxis: [
              {
                type: 'value'
              }
            ],
            series: [
              {
                name: '参数人数',
                type: 'bar',
                data: [_this.a4, _this.a5, _this.a6, _this.a7, _this.a8],
                label: {
                  show: true
                },
                itemStyle: {
                  color: function(params) {//柱状体颜色
                    // build a color map as your need.
                    var colorList = [
                      '#158EFE','#68B671','#FEDB65','#2CD1C0','#AE54B5',
                      '#FF80AA','#F8568C','#C71848','#F61B63','#7ED321',
                      '#00C47B','#FF894A','#8782F7','#24A8BF','#1CCCB5',


                    ];
                    return colorList[params.dataIndex]
                  },
                }
                // markPoint: {
                //   data: [
                //     {type: 'max', name: '最大值'},
                //     {type: 'min', name: '最小值'}
                //   ]
                // },
                // markLine: {
                //   data: [
                //     {type: 'average', name: '平均值'}
                //   ]
                // }
              }

            ]
          }
          myChart.setOption(option)
        },
        getChartsList() {
            var url = 'https://www.zhongkeruitong.top/towerImg/cms/competition/countProjectGroupBy?username=' + localStorage.getItem('name')
          this.$axios.get(url).then((res) => {
            var str = []
            str = res.data.split(',')
            console.log(str)
            this.a1 = str[0]
            this.a2 = str[1]
            this.a3 = str[2]
            this.a4 = str[3]
            this.a5 = str[4]
            this.a6 = str[5]
            this.a7 = str[6]
            this.a8 = str[7]
            this.a9 = str[8]
            this.a10 = str[9]
            this.a11 =str[10]
          })
        }
      }
    }
</script>

<style scoped>
  .select-style {
    width: 220px;
  }
  .input-style >>> .el-input__inner {
    height: 50px;
    font-size: 16px;
  }
  .containers {
    width: 1500px;
    margin: 40px auto;
    margin-bottom: 100px;
  }
  .paginations {
    margin-top: 40px;

  }
  .pagination-style {
    float: right;
  }
  .table-text {
    font-size: 18px;
  }
  .table-style {
    margin-top: 40px;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
  .num-text {
    font-size: 22px;
    color:  #f4433c;
  }
  .major-style {
    color: #2d85f0;
  }
  .secproject {
    color: #ffbc32;
  }
  .maingroup {
    color: #0aa858;
  }
  .title-header {
    margin-bottom: 20px;
    font-size: 24px;
  }
  .charts-style {
    width: 1500px;
    margin: 40px auto;
    /*height: 20px;*/
    /*background-color: black;*/
  }
  .mychart1-style {
    height: 500px;
    width: 600px;
  }
</style>
