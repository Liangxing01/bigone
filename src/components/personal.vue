<template>
	<div class="personal">
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="账号管理" name="first">
          <div class="countManage">
            <el-input v-model="username" placeholder="请输入用户名" disabled></el-input>
            <el-input v-model="input" placeholder="新密码"></el-input>
            <el-input v-model="input" placeholder="新密码"></el-input>
            <el-button type="primary">确认提交</el-button>
          </div>
		    	
		    </el-tab-pane>
		    <el-tab-pane label="子账号管理" name="second">
          <div class="personal-table">
            <el-table :data="tableData2"  style="width: 100%">                 
              <el-table-column  prop="name"  label="用户名" ></el-table-column>
              <el-table-column  prop="company"  label="企业名称"></el-table-column>
              <el-table-column  prop="fristtime"  label="创建时间" ></el-table-column>
              <el-table-column  prop="date"  label="上报时间" ></el-table-column>
              <el-table-column label="管理">
                <template scope="scope">
                    <el-button type="primary" size="small"  @click="handleEdit(scope.$index, scope.row)" >修改</el-button>
                    <el-button  size="small"  type="danger"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
		    <el-tab-pane label="下载App" name="third">下载App</el-tab-pane>
		</el-tabs>
	</div>

</template>

<script>
export default {
    data() {
      return {
        activeName: 'first',
        username: '某某某',
        input: '',
        activeName: 'first',
        input2: '',
        tableData2: [{
          date: '2017-08-29',
          name: '哈哈哈哈哈',
          fristtime:'2017-08-29',
          company:'哈哈哈哈哈或或或或公司',
        },{
          date: '2017-08-29',
          name: '哈哈哈哈哈',
          fristtime:'2017-08-29',
          company:'哈哈哈哈哈或或或或公司',
        }]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
};
</script>

<style>
	.personal{
		background: #fff;
		height: 50px;
		padding: 10px 20px;
		-webkit-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
  		-moz-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
  		box-shadow:0 1px 1px rgba(0, 0, 0, .3);
  		position: relative
	}	
	.personal-add{
		float: right;
		position: absolute;
		top: 8px;
		right: 10px;
	}
	.personal-table{
		padding: 10px 20px;
		background: #FFF;
		-webkit-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
		-moz-box-shadow:0 1px 1px rgba(0, 0, 0, .3);  
		box-shadow:0 1px 1px rgba(0, 0, 0, .3);
	}
  .countManage{ background: #fff; padding: 20px; text-align: center;}
  .countManage input{ width: 360px; margin: 10px;}
  .countManage button{ margin-top: 20px; }
</style>