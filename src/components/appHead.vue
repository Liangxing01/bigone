<template>
	<header class="g-head-box white-bg">
		<div class="g-head-logo">
			<img src="../assets/img/logo.png" />
			<a href="">6M物联网应用平台</a>
		</div>
		<div class="g-head-info">
			<img src="../assets/img/bell.png" />
			<ul>
				<li>
					4
					<ul>
						<li><a href="">你有一条消息</a></li>
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
	
	.g-head-info{display: -webkit-inline-box;}	
	.g-head-info img{vertical-align: middle;}
	.g-head-info ul li{list-style: none;}
	.g-head-info ul li ul { position:absolute; display:none; background: #fff;}
	.g-head-info ul li ul li { float:none; line-height: 30px;}
	.g-head-info ul li ul li a { border-right:none; border-top:1px dotted #ccc; background:#f5f5f5;}
	.g-head-info ul li:hover ul{ display:block; }
</style>