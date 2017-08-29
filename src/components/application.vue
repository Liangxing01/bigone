<template>
	<section>
		<div class="apps">
			<el-breadcrumb separator="/">
			    <el-breadcrumb-item :to="{ path: '/' }">我的应用</el-breadcrumb-item>
			    <el-breadcrumb-item>停车管理</el-breadcrumb-item>
			</el-breadcrumb>
			
			<el-tabs v-model="activeName" @tab-click="handleClick">
			    <el-tab-pane label="应用概览" name="first">
			    	<el-row :gutter="20">
					  	<el-col :span="12"><div class="grid-content bg-purple apps-parking">
					  		<h3>应用概览</h3>
				  			<p class="parking-manage">停车管理<i class="el-icon-edit"></i></p>
					  		<p>
					  			<span>应用ID</span>
					  			<span>22232342455555</span>
					  			<span><i><img src="../assets/img/timg-7.png"/></i></span>
					  		</p>
					  		<p>
					  			<span>创建时间</span>
					  			<span>2017年08月29日</span>
					  		</p>
					  	</div></el-col>
					  	<el-col :span="4"><div class="grid-content bg-purple apps-num">
					  		<span class="apps-num-des1">在线设备</span>
					  		<span class="apps-num-res">10</span>
					  	</div></el-col>
					  	<el-col :span="4"><div class="grid-content bg-purple apps-num">
					  		<span class="apps-num-des2">设备总数</span>
					  		<span class="apps-num-res">10</span>
					  	</div></el-col>
					  	<el-col :span="4"><div class="grid-content bg-purple apps-num">
					  		<span class="apps-num-des3">数据总数</span>
					  		<span class="apps-num-res">10</span>
					  	</div></el-col>
					</el-row>
					
					<el-row :gutter="20">
					  	<el-col :span="16"><div class="grid-content bg-purple apps-data">
					  		<h3>实时数据</h3>
					  		<el-table :data="tableData2"  style="width: 100%"  :row-class-name="tableRowClassName">							    
							    <el-table-column  prop="name"  label="设备名称" ></el-table-column>
							    <el-table-column  prop="MACaddress"  label="MAC地址"></el-table-column>
							    <el-table-column  prop="temperature"  label="温度" ></el-table-column>
							    <el-table-column  prop="electricity"  label="电量" ></el-table-column>
							    <el-table-column  prop="car"  label="有车停驻"></el-table-column>
							    <el-table-column  prop="address"  label="地址" ></el-table-column>
							    <el-table-column  prop="date"  label="上报时间" ></el-table-column>
							</el-table>
					  	</div></el-col>
					  	<el-col :span="8"><div class="grid-content bg-purple apps-data">
					  		<h3>数据流量</h3>
					  		<div id="flow" style="width: 100%; height: 430px;"></div>
					  	</div></el-col>
					</el-row>
			    </el-tab-pane>
			    <el-tab-pane label="设备列表" name="second">
			    	<div class="apps-apps">
			    		<el-row :gutter="20">
						  <el-col :span="6"><div class="grid-content apps-list">设备列表</div></el-col>
						  <el-col :span="6" :offset="12"><div class="grid-content">
						  	<el-input  placeholder="搜索网关"  icon="search"  v-model="input2"  :on-icon-click="handleIconClick"></el-input>
						  </div></el-col>
						</el-row>
						<el-table :data="tableData2"  style="width: 100%"  :row-class-name="tableRowClassName">							    
						    <el-table-column  prop="name"  label="设备名称" ></el-table-column>
						    <el-table-column  prop="MACaddress"  label="MAC地址"></el-table-column>
						    <el-table-column  prop="temperature"  label="温度" ></el-table-column>
						    <el-table-column  prop="electricity"  label="电量" ></el-table-column>
						    <el-table-column  prop="car"  label="有车停驻"></el-table-column>
						    <el-table-column  prop="address"  label="地址" ></el-table-column>
						    <el-table-column  prop="date"  label="上报时间" ></el-table-column>
						    <el-table-column label="">
							    <template scope="scope">
							        <el-button type="primary" size="small"  @click="open" >查看详情</el-button>
							    </template>
						    </el-table-column>
						</el-table>
			    	</div>
			    </el-tab-pane>
			</el-tabs>
		</div>
	</section>
</template>

<script>
	import axios from '@/fetch/api.js'
	
	export default {
	  data() {
	      return {
	        activeName: 'first',
	        input2: '',
	        tableData2: [{
	          date: '2017-08-29',
	          name: '哈哈哈哈哈',
	          MACaddress:'D1-19-5F-11-08-3F-6B-13',
	          temperature:'34',
	          electricity:'34',
	          car:'无车',
	          address: '上海市普陀区金沙江路 1518 弄',
	        },{
	          date: '2017-08-29',
	          name: '哈哈哈哈哈',
	          MACaddress:'D1-19-5F-11-08-3F-6B-13',
	          temperature:'34',
	          electricity:'34',
	          car:'无车',
	          address: '上海市普陀区金沙江路 1518 弄',
	        },{
	          date: '2017-08-29',
	          name: '哈哈哈哈哈',
	          MACaddress:'D1-19-5F-11-08-3F-6B-13',
	          temperature:'34',
	          electricity:'34',
	          car:'无车',
	          address: '上海市普陀区金沙江路 1518 弄',
	        }, {
	          date: '2017-08-29',
	          name: '哈哈哈哈哈',
	          MACaddress:'D1-19-5F-11-08-3F-6B-13',
	          temperature:'34',
	          electricity:'34',
	          car:'无车',
	          address: '上海市普陀区金沙江路 1518 弄',
	        }]
	      };
	  },
		methods: {
			handleIconClick: function(){},
      handleClick(tab, event) {
        console.log(tab, event);
      },
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
      initChart: function() {
	       let echart1 = this.$echarts.init(document.getElementById('flow'));
	       // 把配置和数据放这里
	       echart1.setOption({ 
				    xAxis : [
				        {
				            type : 'time',
				            splitNumber:10
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value'
				        }
				    ],
				    series : [
				        {
				            name: '流量',
				            type: 'line',
				            showAllSymbol: true,
				
				            data: (function () {
				                var d = [];
				                var len = 0;
				                var now = new Date();
				                var value;
				                while (len++ < 200) {
				                    d.push([
				                        new Date(2016, 9, 1, 0, len * 10000),
				                        (Math.random()*30).toFixed(2) - 0,
				                        (Math.random()*100).toFixed(2) - 0
				                    ]);
				                }
				                return d;
				            })()
				        }
				    ]
					})
			},
			open: function() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
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
		}
}
</script>

<style>
	.apps{
		background: #fff;
		height: 50px;
		padding: 10px 20px;
		-webkit-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
  		-moz-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
  		box-shadow:0 1px 1px rgba(0, 0, 0, .3);
	}
	.el-breadcrumb{
		font-size: 18px; 
		line-height: 30px; 
		display: inline-block; 
		float: left; 
		margin-right: 20px;
	}
	.el-tabs__header{border-bottom: none; margin-top: -6px;}
	.el-tabs__item{font-size: 18px; color: #000; height: 46px;}
	
	.el-tabs__content{padding: 10px; margin: 0 -20px; background: none;}
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
	    background: #fff;
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
	.apps-parking{ 
		padding: 20px; 
		text-align: left; 
		-webkit-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
  		-moz-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
  		box-shadow:0 1px 1px rgba(0, 0, 0, .3);
  	}
	.apps-parking h3{
		font-weight: normal;
		font-size: 20px;
		font-family: "微软雅黑";
		margin-bottom: 20px;
	}
	.apps-parking p{margin: 10px 0;}
	.parking-manage{font-size: 30px;}
	.parking-manage i{color: #48a6c9; margin: 0 10px;}
	.apps-parking p span{padding-right: 20px; color: #b5b5b5; font-size: 20px;}
	.apps-num{		
		-webkit-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
  		-moz-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
  		box-shadow:0 1px 1px rgba(0, 0, 0, .3);
	}
	.apps-num span{
		display: block; 
		text-align: center;
		font-family: "宋体";
	}
	.apps-num .apps-num-des1{
		background: #20b6cf;
		line-height: 70px; 
		color: #fff; 
		font-size: 24px; 
	}
	.apps-num .apps-num-des2{
		background: #ff6d61;
		line-height: 70px; 
		color: #fff; 
		font-size: 24px; 
	}
	.apps-num .apps-num-des3{
		background: #f8d348;
		line-height: 70px; 
		color: #fff; 
		font-size: 24px; 
	}
	.apps-num-res{color: #48a6c9;font-size: 85px; padding: 20px 0;}
	.el-table .info-row {
	    background: #c9e5f5;
	}
	
	.el-table .positive-row {
	    background: #e2f0e4;
	}
	.apps-data{
		padding: 10px;
		height: 500px;
		-webkit-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
  		-moz-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
  		box-shadow:0 1px 1px rgba(0, 0, 0, .3);
  		
	}
	.apps-data h3{text-align: left; line-height: 55px; font-size: 20px; font-family: "微软雅黑";}
	.apps-list{font-size: 18px; text-align: left; color: #747474;}
	.el-input__inner{border-radius: 20px;}
	.apps-apps{ background: #fff; padding: 10px 20px;margin: 0 -20px;}
</style>