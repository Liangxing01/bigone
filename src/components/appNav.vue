<template>
  <nav class="g-nav-box">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-menu-item index="1"><i><img src="../assets/img/nav-img1.png"/></i>概览</el-menu-item>
      <el-menu-item index="2"><i><img src="../assets/img/nav-img2.png"/></i>我的网关</el-menu-item>
      <el-menu-item index="3"><i><img src="../assets/img/nav-img3.png"/></i>我的应用</el-menu-item>
      <el-menu-item index="4"><i><img src="../assets/img/nav-img4.png"/></i>地图展示</el-menu-item>
      <el-menu-item index="5"><i><img src="../assets/img/nav-img5.png"/></i>数据画像</el-menu-item>
      <el-menu-item index="6"><i><img src="../assets/img/nav-img6.png"/></i>个人中心</el-menu-item>
    </el-menu>
  </nav>
</template>

<script type="text/javascript">
  export default{
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style type="text/css" scoped="scoped">
	  .g-nav-box{
	    	width: 240px;
	    	height: 100%;
	    	position: fixed;
	    	left: 0;
	    	top: 0;
	    	overflow-y: auto;
	    	background: #2c3749;
	    	z-index: 10;
	  }
	  .g-nav-box>ul{
	    	margin-top: 66px;
	    	margin-bottom: 40px;
	  }
	  .el-menu{background: #2c3749;}
	  .el-menu-item:hover{background: #4db5ee;}
	  .el-menu-item, .el-submenu__title{color: #fff;}
  	.g-nav-box i img{vertical-align: middle; margin-left: 10px; float: left; margin-top: 15px;}
</style>