<template>
  <div>
  		<u-table url="/api.php/admin/index/data/lorascan" :column="column">
        <template scope="props">
            <tr v-for="item of props.data">
              <td>{{item.node}}</td><td>{{item.index}}</td><td>{{item.data}}</td><td>{{time(item.time)}}</td>
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
      column:['节点序号','序号','数据','上报时间']
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