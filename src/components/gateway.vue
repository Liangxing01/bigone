<template>
	<section class="gateway">
		<div class="gateway-head">
			<button class="gateway-head-add" type="text" @click="open4">添加网关+</button>
		</div>
	</section>
</template>

<script>
export default {
    methods: {
      open4() {
		this.$prompt('请输入邮箱', '添加网关', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    }
  }
}
</script>

<style>
	.gateway-head{
		background: #fff;
		height: 50px;
		padding: 10px 20px;
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
</style>