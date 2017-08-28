<template>
	<section class="g-login-box">
		<h4>vue 后台登陆系统</h4>
		<div class="g-login-content">
			<el-input v-model="username" placeholder="请输入用户名" class="loginItem"></el-input>
			<el-input v-model="password" placeholder="请输入密码" type="password" class="loginItem"></el-input>
			<el-button type="info" @click="login">登陆</el-button>
		</div>
	</section>
</template>

<script type="text/javascript">
import axios from '@/fetch/api';

	export	default{
		data: () => {
			return{
				username: '',
				password: '',
			}
		},
		methods: {
			login: function(){
				debugger;
				var _this = this;
					axios.get('/static/data/user.json').then(function(response){
						
					}).catch(function(err){
						console.log(err);
					})	
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
	.g-login-box{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		margin: 200px auto;
		width: 320px;
	}

	.g-login-box h4{
		margin: 20px 0;
	}
	.g-login-content .loginItem{ margin: 12px 0; }
	.g-login-content button{ padding: 8px 35px }
</style>