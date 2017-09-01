<template>
  <div>
  		<u-table url="/api.php/admin/index/data/jingai" :column="column">
        <template scope="props">
            <tr v-for="item of props.data">
              <td>{{item.index}}</td><td>{{item.safe?'安全':'不安全'}}</td><td>{{item.power/10}} V</td><td>{{time(item.time)}}</td>
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
      column:['序号','是否安全','电压','上报时间']
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