<template>
	<header class="g-head-box white-bg">
		<div class="g-head-logo">
			<img src="../assets/img/logo.png" />
			<a href="">6M物联网应用平台</a>
		</div>
		<div class="g-head-admin">
			<ul>
				<li>
					<span>某某某</span>
					<img src="../assets/img/arrow.png" />
					<ul>
						<li><a href="">个人中心</a></li>
						<li><a href="">注销</a></li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="g-head-info">
			<ul>
				<li>
					<img src="../assets/img/bell.png" />4
					<ul>
						<li><a href="">你有一条消息你有一条消息</a></li>
						<li><a href="">你有一条消息</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</header>
</template>

<script type="text/javascript">
	export default {
	    data: () => ({
	      show3: true
	    })
	}
</script>

<style type="text/css" scoped="scoped">
	.g-head-box{ 
		position: fixed;
		left: 0;
    	right: 0;
    	top: 0;
		width: 100%;
		height: 66px;
		z-index: 100;
	}
	.white-bg{
		background:url(../assets/img/header-bg.png) no-repeat;
	    height: 66px;
	    line-height: 66px;
	    vertical-align: middle;
	    background-size: 100% 100%;
	}
	.g-head-logo{
		display: inline-block;
		padding-left: 20px;
		float: left;
	}
	.g-head-logo img{ vertical-align: middle;}
	.g-head-logo a{
		color: #fff;
		font-size: 20px;
		text-decoration: none;
	}
	.g-head-logo a:hover{color: #fff; text-decoration: none;}
	
	.g-head-info{display: block; float: right; width: 120px; text-align: center;}	
	.g-head-info ul li img{vertical-align: middle;}
	.g-head-info ul li{list-style: none; color: #fff;}
	.g-head-info ul li ul {  display:none; background: #fff;}
	.g-head-info ul li ul li { 
		float:none; 
		line-height: 24px;
		border-bottom:1px solid #ccc; 
		white-space: nowrap; 
		margin: 0 10px;
		box-sizing: border-box;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.g-head-info ul li ul li a { 
		border-right:none; 
		background:#f5f5f5; 
		display: block;
		text-decoration: none;
		color: #212121;
	}
	.g-head-info ul li ul li a:hover{background: #4db5ee; color: #fff;}
	.g-head-info ul li:hover ul{ display:block; }
	
	.g-head-admin{display: block; float: right; width: 120px; text-align: center;}	
	.g-head-admin ul li img{vertical-align: middle; float: right; margin-right: 10px; margin-top: 30px;}
	.g-head-admin ul li{list-style: none; color: #fff;}
	.g-head-admin ul li ul {  display:none; background: #fff;}
	.g-head-admin ul li ul li { 
		float:none; 
		line-height: 30px;
		border-bottom:1px solid #ccc; 
		white-space: nowrap; 
		margin: 0 10px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.g-head-admin ul li ul li a { 
		border-right:none; 
		background:#f5f5f5; 
		display: block;
		text-decoration: none;
		color: #212121;
	}
	.g-head-admin ul li ul li a:hover{background: #4db5ee; color: #fff;}
	.g-head-admin ul li:hover ul{ display:block; }
</style>