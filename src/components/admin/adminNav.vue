<template>
  <nav class="g-nav-box">
    <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-menu-item index="1">
        <router-link to="/admin/tem"><i><img src="../../assets/img/nav-img1.png"/></i>温湿度</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/admin/jingai"><i><img src="../../assets/img/nav-img2.png"/></i>井盖</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/admin/smoke"><i><img src="../../assets/img/nav-img3.png"/></i>烟雾报警</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/admin/dici"><i><img src="../../assets/img/nav-img4.png"/></i>地磁</router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link to="/admin/send"><i><img src="../../assets/img/nav-img6.png"/></i>下发指令</router-link>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script type="text/javascript">
  export default{
  	 data() {
      return {
        isCollapse: true
      };
     },
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
    .g-nav-box .el-menu-item{
      line-height: 56px;
      height: 56px;
    }
	  .g-nav-box>ul{
	    	margin-top: 76px;
	    	margin-bottom: 40px;
	  }
	  .el-menu{background: #2c3749;}
	  .el-menu-item a{
      display: inline-block; 
      color: #fff; 
      text-decoration: none;
      font-size: 16px;
    }
	  .el-menu-item:hover{background: #4db5ee;}
	  .el-menu-item, .el-submenu__title{color: #fff;}
	  .is-active{background: #4db5ee;}
  	.g-nav-box i img{
      vertical-align: middle; 
      margin-left: 10px; 
      float: left; 
      margin-top: 15px;
      margin-right: 15px;
      width: 20px;
      position: relative;
      top: 2px;
    }
</style>