<template>
  <nav class="g-nav-box">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">二级导航</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
          <el-menu-item index="1-4-2">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">二级导航</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
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
    background: #20A0FF;
    z-index: 10;
  }
  .g-nav-box>ul{
    margin-top: 60px;
    margin-bottom: 40px;
  }
</style>