<template>
	<div class="personal">
		<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="账号管理" name="first">
		    	<div class="personal-table">
		    		<el-table :data="tableData2"  style="width: 100%"  :row-class-name="tableRowClassName">							    
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
		    <el-tab-pane label="子账号管理" name="second">子账号管理</el-tab-pane>
		    <el-tab-pane label="下载App" name="third">下载App</el-tab-pane>
		</el-tabs>
		<el-button class="personal-add" type="danger" @click="open3">添加网关+</el-button>
	</div>

</template>

<script>
export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    methods: {
      open3() {
        const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
    },
    data() {
	      return {
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
	      };
	  },
	  methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
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
</style>