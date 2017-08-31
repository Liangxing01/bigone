<template>
	<section class="gateway">
		<div class="gateway-head">
			<button class="gateway-head-add" type="text" @click="showModal">添加网关+</button>
			<div class="m-gateway-choose">
				<img src="../assets/gateList.png" title="网关列表" @click="showGateList">
				<img src="../assets/gateMap.png" title="网关地图" @click="showGateMap">
			</div>
			<el-input placeholder="请输入网关地址" icon="search" v-model="gateSearch" :on-icon-click="searchGate" class="gateSearch"></el-input>
		</div>
		<transition-group name="gateChoose">
			<div class="m-gateway-list" v-if="gateList" key="item1">
				<el-row>
					<el-col :span="24">
						<el-table :data="tableData" style="width: 100%; margin-top: 20px" border>
				      <el-table-column prop="date" label="日期"></el-table-column>
				      <el-table-column prop="name" label="姓名"></el-table-column>
				      <el-table-column prop="address" label="地址"></el-table-column>
				    </el-table>
					</el-col>
				</el-row>
			</div>
			<div class="m-gateway-map" v-if="gateMap" key="item2"></div>
		</transition-group>
		<modal @close="closeModal" :modalShow="modal" :modalTitle="addGate">
			<div class="m-gateway-item">
				<label>网关型号*</label>
				<el-input></el-input>
				<p><span class="el-icon-warning"></span>网关型号决定服务器接口</p>	
			</div>
			<div class="m-gateway-item">
				<label>网关名称*</label>
				<el-input></el-input>
				<p><span class="el-icon-warning"></span>网关名称用于设备及快速管理</p>	
			</div>
			<div class="m-gateway-item">
				<label>MAC地址*</label>
				<el-input></el-input>
				<p><span class="el-icon-warning"></span>网关的MAC地址在网关链接传输需要使用</p>	
			</div>
			<div class="m-gateway-item">
				<label>地址*</label>
				<el-input></el-input>
				<p><span class="el-icon-warning"></span>补充网关地址信息</p>	
			</div>
			<div class="m-gateway-footer">
				<el-button type="primary">确定</el-button>
				<el-button type="danger" @click="closeModal">取消</el-button>
			</div>
		</modal>
	</section>
</template>

<script>
import modal from '@/components/own/modal/modal';

export default {
    data: () =>{
    	return{
    		addGate: '添加网关',
    		modal: false,
    		gateList: false,
    		gateMap: true,
    		gateSearch: '',
	    	tableData: [{
	        date: '2016-05-02',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1518 弄'
	      }, {
	        date: '2016-05-04',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1517 弄'
	      }, {
	        date: '2016-05-01',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1519 弄'
	      }, {
	        date: '2016-05-03',
	        name: '王小虎',
	        address: '上海市普陀区金沙江路 1516 弄'
	      }]
    	}
		},
		methods:{
			showModal: function(){
				this.modal = true;
			},
			closeModal: function(){
				this.modal = false;
			},
			showGateMap: function(){
				this.gateMap = true;
				this.gateList = false;
			},
			showGateList: function(){
				this.gateMap = false;
				this.gateList = true;
			},
			searchGate: function(){

			}
		},
		components:{
			modal,
		}
}
</script>

<style>
	.gateway-head{
		background: #fff;
		height: 50px;
		padding: 10px 20px;
		position: absolute;
		z-index: 1;
		width: 90%;
	}
	.gateway-head img{ 
		display: inline-block; 
		width: 25px; 
		margin-left: 8px;
		cursor: pointer;
	}
	.m-gateway-choose{ 
		display: inline-block;
		border-left: 1px solid #dcdcdc; 
		border-right: 1px solid #dcdcdc;
		padding: 0 15px 0 10px;
		margin-left: 15px;
	}
	.gateway-head-add{
		background: #2dc0d3;
	    display: inline-block;
	    height: 30px;
	    padding: 0 10px;
	    line-height: 30px;
	    color: #fff;
	    border: none;
	    float: left;
	}
	.m-gateway-list{ 
		padding: 10px 20px; 
		background: #fff;
		margin-top: 80px;
		position: absolute;
		width: 90%;
		z-index: 2;
	}
	.gateSearch{ 
		float: right; 
		width: 180px;
		position: relative;
		top: -2px;
	}
	.m-gateway-item{ padding-left: 40px; margin-bottom: 5 }
	.m-gateway-item label{ font-weight: normal; line-height: 34px; }
	.m-gateway-item input{ width: 320px; }
	.m-gateway-item span{
		padding: 2px;
		border: 1px solid #aaa; 
		border-radius: 50%; 
		font-size: 12px;
		margin-right: 5px;
	}
	.m-gateway-item p{ line-height: 34px; color: #aaa; font-size: 14px;}
	.m-gateway-footer{text-align: center;}
	.m-gateway-footer button{ width: 120px; }
	.m-gateway-map{ 
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;

		background: url(../assets/map.png) no-repeat;
		background-size: 100% 100%;
	}
	.gateChoose-enter-active, .gateChoose-leave-active {
	  transition: opacity .5s ease-in-out;
	}
	.gateChoose-enter, .gateChoose-leave-to { opacity: 0;}

</style>