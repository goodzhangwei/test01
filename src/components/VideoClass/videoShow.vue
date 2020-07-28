<template>
    <div>
      <Header></Header>
      <div class="content-data">
        <h1>培训视频观看人次统计</h1>
        <div class="text-data">
          <span>Scratch创意编程</span>
          <span class="text-color">{{a1}}</span>
          <span>人次</span>
        </div>
        <div class="text-data">
          <span>Python创意编程</span>
          <span class="text-color">{{a6+a9}}</span>
          <span>人次</span>
        </div>
        <div class="text-data">
          <span>Microbit比赛</span>
          <span class="text-color">{{a4}}</span>
          <span>人次</span>
        </div>
        <div class="text-data">
          <span>Arduino比赛</span>
          <span class="text-color">{{a3}}</span>
          <span>人次</span>
        </div>
        <div class="text-data">
          <span>EPS32智能物联项目</span>
          <span class="text-color">{{a5}}</span>
          <span>人次</span>
        </div>
        <div class="text-data">
          <span>贪吃蛇博弈算法赛小学组</span>
          <span class="text-color">{{a7}}</span>
          <span>人次</span>
        </div>
        <div class="text-data">
          <span>贪吃蛇博弈算法赛中学组</span>
          <span class="text-color">{{a8}}</span>
          <span>人次</span>
        </div>
        <div class="text-data">
          <span>人脸识别</span>
          <span class="text-color">{{a9}}</span>
          <span>人次</span>
        </div>
        <div class="line"></div>
        <div class="charts-style">
          <div id="mychart1" class="mychart1-style"></div>
          <!--<el-row>-->
            <!--<el-col :span="12">-->
             <!---->
            <!--</el-col>-->
            <!--<el-col :span="12">-->
              <!--<div id="mychart2" class="mychart1-style"></div>-->
            <!--</el-col>-->
          <!--</el-row>-->
          <div id="mychart2" class="mychart2-style"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
  import Footer from '@/components/common/footer'
  import Header from '@/components/common/header3'
  import echarts from 'echarts'
  require('echarts/theme/macarons') // echarts theme
    export default {
        name: "videoShow",
      components: {
        Header,
        Footer,
      },
      data() {
        return {
          a1: 0, // scratch创意编程
          a2: 0, // 人脸识别
          a3: 0, // Arduino比赛
          a4: 0, // Microbit比赛
          a5: 0, // EPS32智能物联项目
          a6: 0, // python创意编程1
          a7: 0, // 贪吃蛇博弈算法赛小学组
          a8: 0, // 贪吃蛇博弈算法赛中学组
          a9: 0, // python创意编程2
        }
      },
      mounted() {
          this.getList()

      },
      methods: {
          getList() {
            var url = 'https://zhongkeruitong.top/towerImg/cms/competition/countVideoPeople'
            this.$axios.get(url).then((res) => {
             this.a1 = res.data[0]
              this.a2 = res.data[1]
              this.a3 = res.data[2]
              this.a4 = res.data[3]
              this.a5 = res.data[4]
              this.a6 = res.data[5]
              this.a7 = res.data[6]
              this.a8 = res.data[7]
              this.a9 = res.data[8]
              this.initChartsOne()
              this.initChartsTwo()
            })
          },
        initChartsOne() {
          var _this = this
          let myChart = echarts.init(document.getElementById('mychart1'),'macarons')
          var option = {
            title: {
              text: '教师观看培训视频统计图',
              // subtext: '纯属虚构',
              left: 'center'
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a}<br/>{b} : {c}人次 ({d}%)'
            },
            legend: {
              orient: 'vertical',
              left: 'left',
              data: ['scratch创意编程', '人脸识别', 'Arduino比赛', 'Microbit比赛', 'EPS32智能物联项目', 'python创意编程', '贪吃蛇博弈算法赛小学组', '贪吃蛇博弈算法赛中学组']
            },
            series: [
              {
                name: '观看培训视频人次',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                  {value: _this.a2, name: 'scratch创意编程'},
                  {value: _this.a1, name: '人脸识别'},
                  {value: _this.a3, name: 'Arduino比赛'},
                  {value: _this.a4, name: 'Microbit比赛'},
                  {value: _this.a5, name: 'EPS32智能物联项目'},
                  {value: _this.a6+_this.a9, name: 'python创意编程'},
                  {value: _this.a7, name: '贪吃蛇博弈算法赛小学组'},
                  {value: _this.a8, name: '贪吃蛇博弈算法赛中学组'}
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
              text: '教师观看培训视频柱状图',
              // subtext: '纯属虚构'
              left: 'center'
            },
            tooltip: {
              trigger: 'axis',
              formatter: '{a} <br/>{b} : {c} 人次'
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
                type: 'value',

                // axisLabel:{//把文字竖着放
                //   formatter:function(value){
                //     return value.split("").join("\n")
                //   }
                // }
              }
            ],
            yAxis: [
              {
                type: 'category',
                data: ['scratch创意编程', '人脸识别', 'Arduino比赛', 'Microbit比赛', 'EPS32智能物联项目', 'python创意编程', '贪吃蛇博弈算法赛小学组', '贪吃蛇博弈算法赛中学组'],
              }
            ],
            series: [
              {
                name: '参数人数',
                type: 'bar',
                data: [_this.a1, _this.a2, _this.a3, _this.a4, _this.a5, _this.a6+_this.a9, _this.a7, _this.a8],
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
      }
    }
</script>

<style scoped>
  .content-data {
    width: 1500px;
    margin: 0 auto;
  }
  .content-data h1{
    text-align: center;
    font-size: 20px;
    color: #07111b;
    font-weight: 700;
  }
  .text-data {
    text-align: center;
    margin-top: 10px;
    color: #07111b;
    font-size: 20px;
    /*width: 300px;*/
    /*margin: 0 auto;*/
  }
  .text-color {
    color: red;
  }
  .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(28,31,33,.1);
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .charts-style {
    width: 1500px;
    margin: 40px auto;
    /*height: 20px;*/
    /*background-color: black;*/
  }
  .mychart1-style {
    height: 500px;
    width: 1500px;
  }
  .mychart2-style {
    height: 600px;
    width: 1500px;
    margin-top: 40px;
  }
</style>
