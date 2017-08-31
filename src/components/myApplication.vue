<template>
	<section>
		<div class="m-application-title">
			<el-breadcrumb>
			  <el-breadcrumb-item :to="{ path: '/user/myApplication' }">我的应用</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="m-application-content">
			<el-row :gutter="20">
			  <el-col :span="6">
			  	<div class="item">
			  		<router-link :to="{path: '/user/temperature'}">
			  			<img src="../assets/img/application_b.png">
			  			<p>温湿度</p>

			  		</router-link>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div class="item">
			  		<router-link :to="{path: '/user/smoke'}">
			  			<img src="../assets/img/application_a.png">
			  			<p>烟雾报警</p>
			  		</router-link>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div class="item">
			  		<router-link :to="{path: '/user/parking'}">
			  			<img src="../assets/img/application_s.png">
			  			<p>停车管理</p>
			  		</router-link>
			  	</div>
			  </el-col>
			  <el-col :span="6">
			  	<div class="item">
			  		<router-link :to="{path: '/user/cover'}">
			  			<img src="../assets/img/application_c.png">
			  			<p>智能井盖</p>
			  		</router-link>
			  	</div>
			  </el-col>
			</el-row>
		</div>
	</section>
</template>

<script type="text/javascript"></script>

<style type="text/css" scoped>
	.el-breadcrumb{ font-size: 15px; cursor: pointer; }
	.m-application-title{ 
		background: #fff; 
		padding: 15px; 
		font-size: 24px;
		text-align: left;
		line-height: 24px;
	}

	.m-application-content{ 
		margin-top: 20px;
	}
	.m-application-content .item{
		width: 100%;
		background: #fff;
		padding-top: 10px;
		text-align: center;
		padding-bottom: 20px;
	}
	.m-application-content .item a{
		text-decoration: none;
		color: #00A0DF;
		font-size: 24px;
		line-height: 46px;
	}
	.m-application-content .item img{
		width: 80%;
	}
</style>