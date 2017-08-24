<template>
  <div id="app">
    <app-header></app-header>
    <app-nav></app-nav>
    <app-main>
      <router-view></router-view>
    </app-main>
    <app-foot></app-foot>
  </div>
</template>

<script>
import appNav from '@/components/appNav'
import appHeader from '@/components/appHead'
import appMain from '@/components/appMain'
import appFoot from '@/components/appFoot'

export default {
  name: 'app',
  data: () => {
    return{
      visible: false
    }
  },
  components:{
    "app-nav": appNav,
    "app-header": appHeader,
    'app-main': appMain,
    'app-foot': appFoot
  }
}
</script>

<style>
*{ box-sizing: border-box; margin: 0; padding: 0}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
</style>
