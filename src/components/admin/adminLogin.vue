<template>
	<section class="g-login-bg">
		<div class="g-login-box">
			<h4><img  src="../../assets/img/login-logo.png"></img>6M物联网后台管理平台</h4>
			<div class="g-login-content">
				<div>
					<i>U</i>
					<input v-model="username" placeholder="用户名 Username" class="loginItem"></input>
				</div>
				<div>
					<i>P</i>
					<input v-model="password" placeholder="密码 Password" type="password" class="loginItem"></input>
				</div>
				<button type="info" @click="login">登陆Login</button>
			</div>
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
				radio: '1'
			}
		},
		methods: {
			login: function(){
				window.localStorage.setItem('username', '123');
				window.location.href="#/admin/tem";
			}
		}
	}
</script>

<style type="text/css" scoped="scoped">
	.g-login-bg{
		background: url(../../assets/img/login-bg.png) no-repeat;
		background-size: 100% 100%;
	    width: 100%;
	    height: 100%;
	    position: fixed;
	    top: 0;
	    left: 0;
	}
	.g-login-box{
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 50%;
		transform: translateY(-50%);
		padding: 20px;
		margin:  auto;
		width: 420px;
		border: 1px solid transparent;
		background: transparent;
		-webkit-box-shadow:0 0 20px rgba(0, 0, 0, .3);  
		-moz-box-shadow:0 0 20px rgba(0, 0, 0, .3);  
		box-shadow:0 0 20px rgba(0, 0, 0, .3); 
	}

	.g-login-box h4{
		margin: 10px 0;
		color: #fff;
		font-size: 24px;
		text-align: center;
	}
	.g-login-box h4 img{ vertical-align: middle; margin-right: 10px;}
	.g-login-content .loginItem{ margin: 15px 0; }
	.g-login-content input{
		display: inline-block;
		width: 100%;
		height: auto;
		color: #fff;
		margin-bottom: 20px;
		color: #fff;
		border: none;
		background: #8fb9e3;
		padding: 12px;
		font-size: 16px;
		line-height: 20px;
		text-indent: 30px;
		transition: border-color 0.8s ease-in-out;
		-webkit-appearance: none;
	}
	.g-login-content div{position: relative;}
	.g-login-content i{
		position: absolute;
	    top: 26px;
	    left: 10px;
	    font-style: normal;
	    font-size: 20px;
	    color: #2884e0;
	    transition: all 0.5s ease 0s;
	}
	.g-login-content input:focus{ 
		outline: none;	
		border-color: #3DA8F5; 
		border-radius: 3px;
	}
	.g-login-content button{ 
		margin-top: 20px;
		padding: 8px 35px; 
		background: #1b69b6 ;
		color: #fff;
		text-align: center;
		width:100%;
		margin-bottom: 25px;
		font-size: 16px;
		padding: 12px;
		line-height: 20px;
		border:none;
		border-radius: 3px;
	}
	.chooseType{ text-align: center; color: #fff;}
	.chooseType .el-radio__input.is-checked .el-radio__inner{ background: #fff; }
	.chooseType .el-radio__inner::after{ background: #20a0ff}
</style>