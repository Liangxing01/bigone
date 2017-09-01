<template>
  <div>
  		应用id：<input type="text" v-model="req.appId"><br >
  		设备id：<input type="text" v-model="req.devId"><br >
  		端口号：<input type="text" v-model="req.port"><br >
  		数据类型：<select v-model="data.type">
        <option value="0">字符串</option>
        <option value="1">HEX</option>
        </select><br >
  		数据：<input type="text" v-model.lazy="data.data"><br >
  		<button @click="send">发送</button>
  </div>
</template>
<script>
import uTable from '@/components/own/pager/pager.vue';

export default{
  data:function(){
    return {
      req:{
        appId:'',devId:'',data:'',port:0
      },data:{
        type:0,data:'',str:''
      }
    }
  },
  watch:{
    'data.type':function(){
      this.setdata();
    },'data.data':function(){
      this.setdata();
    }
  },
  methods:{
    send(){
      this.req.data=btoa(this.data.str);
      $.web('/api.php/admin/index/send',this.req,function() {
        layer.msg('发送成功！');
      })
    },
    setdata(){
      if (this.data.type==0) this.data.str=this.data.data;
      else{
        var arr=this.data.data.split(' ');
        var res='';
        arr.map((item)=>{
          var num=parseInt(item,16);
          res+=String.fromCharCode(num);
        })
        this.data.str=res;
      }
    }
  }
}
</script>
<style>
</style>