<template>
  <div>
  		<u-table url="/api.php/admin/index/data/wenshidu" :column="column">
        <template scope="props">
            <tr v-for="item of props.data">
              <td>{{item.index}}</td><td>{{item.temp/100}} ℃</td><td>{{item.humidity/100}} %</td><td>{{time(item.time)}}</td>
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
      column:['序号','温度','湿度','上报时间']
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