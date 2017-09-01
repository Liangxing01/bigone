<template>
  <div>
  		<u-table url="/api.php/admin/index/data/weather" :column="column">
        <template scope="props">
            <tr v-for="item of props.data">
              <td>{{item.index}}</td><td>{{item.temp}} ℃</td><td>{{item.humidity}} %</td><td>{{item.light}} lux</td><td>{{item.rain==1?'降雨':'无雨'}}</td><td>{{item.wind}} m/s</td><td>{{item.windDir}}度</td><td>{{item.pm25}}</td><td>{{time(item.time)}}</td>
            </tr>
        </template>
      </u-table>
  </div>
</template>
<script>
import uTable from '@/components/own/pager/pager.vue';

export default{
  components:{
    uTable
  },
  data:function(){
    return {
      column:['序号','温度','湿度','光照','降雨','风速','风向','PM2.5','上报时间']
    }
  },
  methods:{
    time:function(time){
			return $.small.time2str(time)
    }
  }
}
</script>
<style>
</style>