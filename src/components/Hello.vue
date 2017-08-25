<template>
  <div class="hello">
    <el-row :gutter="20">
		  <el-col :span="6"><div class="grid-content bg-purple">
		  	<div class="content-type">
						<div class="type-des">
							<div class="type-des-img type-des-img1">
								<img src="../assets/img/type-img1.png"  />
							</div>
							<div class="type-des-num">
								<div class="type-title">在线网关</div>
								<span>12/<strong>50</strong></span>
							</div>
						</div>
					</div>
		  </div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple">
		  	<div class="content-type">						
						<div class="type-des">
							<div class="type-des-img type-des-img2">
								<img src="../assets/img/type-img2.png"  />
							</div>
							<div class="type-des-num">
								<div class="type-title">
									在线应用
								</div>
								<span>12/<strong>50</strong></span>
							</div>
						</div>
					</div>
		  </div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple">
		  	<div class="content-type">
						<div class="type-des">
							<div class="type-des-img type-des-img3">
								<img src="../assets/img/type-img3.png"  />
							</div>
							<div class="type-des-num">						
								<div class="type-title">
									在线设备
								</div>
								<span>24/<strong>50</strong></span>
							</div>
						</div>
					</div>
		  </div></el-col>
		  <el-col :span="6"><div class="grid-content bg-purple">
		  	<div class="content-type">
						<div class="type-des">
							<div class="type-des-img type-des-img4">
								<img src="../assets/img/type-img4.png"  />
							</div>
							<div class="type-des-num">						
								<div class="type-title">
									数据规则
								</div>
								<span>24/<strong>50</strong></span>
							</div>
						</div>
					</div>
		  </div></el-col>
		</el-row>
		
		<el-row :gutter="20">
		  <el-col :span="8"><div class="grid-content bg-purple">
		  	<div class="index-echarts">
    			<h3>应用类型</h3>
    			<div id="alarmCricle" style="width: 100%; height: 400px;"></div>
    		</div>
		  </div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple">
    		<div class="index-echarts">
    			<h3>实时流量</h3>
    			<div id="AlarmLog" class="AlarmLog" style="width: 100%; height: 400px;"></div>
    		</div>		  	
		  </div></el-col>
		  <el-col :span="8"><div class="grid-content bg-purple">
    		<div class="index-echarts">
    			<h3>设备新增趋势图</h3>
    			<div id="alarmType" style="width: 100%; height: 400px;"></div>
    		</div>		  	
		  </div></el-col>
		</el-row>
  </div>
</template>

<script>
import axios from '@/fetch/api.js'
import echarts from 'echarts'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    getJson: function(){
      debugger;
      axios.get('/static/data/user.json').then(function(res){
        console.log(res);
      }).catch(function(err){
        console.log(err);
      })
    }
  },
  
	props: {
    className: {
      type: String,
      default: 'index-echarts'
    },
    id: {
      type: String,
      default: 'AlarmLog'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '500px'
    }
},
data() {
    return {
      chart: null
    }
},
mounted() {
    this.initChart();
},
beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose();
    this.chart = null;
},
methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.myEchart);
      // 把配置和数据放这里
      this.chart.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }]
      })
    }
}
}




//$(function() {
//	var myChart = echarts.init(document.getElementById('alarmType'));
//	option = {
//	    color: ['#3398DB'],
//	    tooltip : {
//	        trigger: 'axis',
//	
//	    },
//	    calculable : true,
//	    xAxis : [
//	        {
//	            type : 'category',
//	            data : ['周一','周二','周三','周四','周五','周六','周日']
//	        }
//	    ],
//	    yAxis : [
//	        {
//	            type : 'value'
//	        }
//	    ],
//	    series : [
//	        {
//	            name:'直接访问',
//	            type:'bar',
//	            data:[320, 332, 301, 334, 390, 330, 320]
//	        }
//	    ]
//	};
//	myChart.setOption(option);
//	
//	var myChart2 = echarts.init(document.getElementById('AlarmLog'));
//	option = {
//	    tooltip : {
//	        trigger: 'axis'
//	    },
//	    legend: {
//	        data:['上行速率','下行速率']
//	    },
//	
//	    calculable : true,
//	    xAxis : [
//	        {
//	            type : 'category',
//	            boundaryGap : false,
//	            data : ['周一','周二','周三','周四','周五','周六','周日']
//	        }
//	    ],
//	    yAxis : [
//	        {
//	            type : 'value',
//	            axisLabel : {
//	                formatter: '{value} °C'
//	            }
//	        }
//	    ],
//	    series : [
//	        {
//	            name:'上行速率',
//	            type:'line',
//	            data:[11, 11, 15, 13, 12, 13, 10],
//	            markPoint : {
//	                data : [
//	                    {type : 'max', name: '最大值'},
//	                    {type : 'min', name: '最小值'}
//	                ]
//	            },
//	            markLine : {
//	                data : [
//	                    {type : 'average', name: '平均值'}
//	                ]
//	            }
//	        },
//	        {
//	            name:'下行速率',
//	            type:'line',
//	            data:[1, -2, 2, 5, 3, 2, 0],
//	            markPoint : {
//	                data : [
//	                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
//	                ]
//	            },
//	            markLine : {
//	                data : [
//	                    {type : 'average', name : '平均值'}
//	                ]
//	            }
//	        }
//	    ]
//	};
//	myChart2.setOption(option);
//	
//	var myChart3 = echarts.init(document.getElementById('alarmCricle'));
//	option = {
//	    tooltip : {
//	        trigger: 'item',
//	        formatter: "{a} <br/>{b} : {c} ({d}%)"
//	    },
//	    legend: {
//	        orient : 'vertical',
//	        x : 'left',
//	        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
//	    },
//	    series : [
//	        {
//	            name:'访问来源',
//	            type:'pie',
//	            radius : ['50%', '70%'],
//	            itemStyle : {
//	                normal : {
//	                    label : {
//	                        show : false
//	                    },
//	                    labelLine : {
//	                        show : false
//	                    }
//	                },
//	                emphasis : {
//	                    label : {
//	                        show : true,
//	                        position : 'center',
//	                        textStyle : {
//	                            fontSize : '30',
//	                            fontWeight : 'bold'
//	                        }
//	                    }
//	                }
//	            },
//	            data:[
//	                {value:335, name:'直接访问'},
//	                {value:310, name:'邮件营销'},
//	                {value:234, name:'联盟广告'},
//	                {value:135, name:'视频广告'},
//	                {value:1548, name:'搜索引擎'}
//	            ]
//	        }
//	    ]
//	};
//	myChart3.setOption(option);
//})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .content-type{
	margin-bottom: 20px;
	background: #fff;
	display: block;
	-moz-box-shadow: 0px 2px 2px #ccc;
	-webkit-box-shadow: 0px 1px 2px #ccc;
	box-shadow: 0px 1px 2px #ccc;
}
.type-title{
	color: #adadad;
	text-align: center;
	font-size: 24px;
	line-height: 54px;
	white-space: nowrap;
}
.type-des{
	position: relative; 
	overflow: hidden;	
	height: 195px;
}
.type-des-img{
	position: absolute;
	top:0; 
	left:0; 
	width:116px; 
	text-align: center;
	height: 195px;
}
.type-des-img1{
	background: #6dcac9;
}
.type-des-img2{
	background: #ff6d61;
}
.type-des-img3{
	background: #58c8f2;
}
.type-des-img4{
	background: #f8d348;
}
.type-des-img img{
	margin-top: 65px;
}
.type-des-num{
	margin-left: 116px;
	background: #fff;
	font-size: 50px;
	color: #adadad;
	margin-top: 42px;
	text-align: center;
}
.type-des-num strong{
	font-size: 35px;
	font-weight: normal;
}
.index-echarts{
	background: #fff;
	-moz-box-shadow: 0px 2px 2px #ccc;
	-webkit-box-shadow: 0px 1px 2px #ccc;
	box-shadow: 0px 1px 2px #ccc;	
	overflow: hidden;
}
.index-echarts h3{
	line-height: 40px;
	height: 40px;
	margin-bottom: 20px;
	margin-left: 20px;
	color: #575757;
}
</style>
