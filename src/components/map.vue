<template>
	<div class="map">
		<el-row :gutter="20">
		  	<el-col :span="4"><div class="grid-content bg-purple">
		  		<el-select v-model="value" placeholder="请选择">
				    <el-option  v-for="item in options"  :key="item.value"  :label="item.label"  :value="item.value">
				    	<span class="el-icon-edit">{{ item.label }}</span>
      					<span>{{ item.value }}</span>
				    </el-option>
			  	</el-select>
		  	</div></el-col>
		  	<el-col :span="6" :offset="14"><div class="grid-content border-radius">
		  		<el-input  placeholder="搜索网关"  icon="search"></el-input>
		  	</div></el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: 'gateway'
        }, {
          value: '选项2',
          label: 'node'
        }, {
          value: '选项3',
          label: '手持仪'
        }, {
          value: '选项4',
          label: '地磁'
        }, {
          value: '选项5',
          label: '温湿度节点'
        }, {
          value: '选项6',
          label: '井盖'
        }, {
          value: '选项7',
          label: 'pm2.5'
        }, {
          value: '选项8',
          label: 'smoke'
        }],
        value: '全部'
      }
    }
  }
</script>

<style>
	.map{
		background: #fff;
		height: 55px;
		padding: 10px 20px;
		-webkit-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
  		-moz-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
  		box-shadow:0 1px 1px rgba(0, 0, 0, .3);
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
	.border-radius .el-input__inner{border-radius: 20px; }
</style>