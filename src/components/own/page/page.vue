<template>
	<div class="m-page-box">
		<span v-if="index" @click="jumpTo(1)">首页</span>
		<button v-if="prev" @click="prevPage" :disabled="curr == 1">上一页</button>
		<span v-for="page in pageList" v-if="page" :class="{active: page == curr}" @click="jumpTo(page)">{{page}}</span>
		<button v-if="next" @click="nextPage" :disabled="curr == total">下一页</button>
		<span v-if="last" @click="jumpTo(total)">尾页</span>
		<div v-if="jumpToBox" class="m-pageJump-box">
			<input type="text" name="" v-model.number="jumpNum">/{{total}}
			<button :disabled="jumpNum > total" :class="{unJump: jumpNum> total}" @click="jumpTo(jumpNum)">跳转至</button>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			index: {	//是否启用首页功能
				type: Boolean,
				default: true
			},
			prev: {	//是否启用上一页
				type: Boolean,
				default: true,
			},
			next: {	//是否启用下一页
				type: Boolean,
				default: true,
			},
			last:{	//是否启用尾页
				type: Boolean,
				default: true
			},
			total:{	//页码总页数
				type: Number,
				required: true
			},
			jumpToBox:{	//默认关闭跳转功能
				type: Boolean,
				default: false	
			}
		},
		data: () => {
			return {
				pageList: [],
				curr: 1,
				jumpNum: 1,
				
			}
		},
		methods:{
			nextPage: function(){
				this.curr += 1;
			},
			prevPage: function(){
				this.curr -= 1;
			},
			jumpTo: function(page){
				if( typeof page !== 'number' || page <= 0){
					alert("请输入合法的页码！");
					return;
				}
				this.curr = page;
			},
			loadPage: function(currPage, totalPage){
				var arr = [];
				if( currPage + 4 <= totalPage){
					for (var i = 0; i < 5; i ++){
						arr.push(currPage + i);
					}
				}else{
					if( totalPage - 4 > 0){
						for (var j = 4; j>=0; j--){
							arr.push(totalPage-j);
						}
					}else{
						for (var k = 1; k <= totalPage; k++){
							arr.push(k);
						}
					}
				}
				this.pageList = arr;
			},
		},
		watch:{
			curr: function(){
				this.loadPage(this.curr, this.total);
				this.$emit('sendHttp', this.curr)	//跳转页码触发的函数
			}
		},
		created:function(){
			this.loadPage(1, this.total);
		}
	}
</script>

<style type="text/css">
	.m-page-box{ margin-top: 15px; }
	.m-page-box span, .m-page-box button{ 
		display: inline-block;
		padding: 5px 12px;
		line-height: 24px;
		border: 1px solid #dcdcdc;
		border-radius: 2px;
		margin-right: 5px;
		cursor: pointer;
		background: #FFF;
 	}

 	.m-page-box .active{
 		background: #72d0eb;
 		color: #fff;
 		border-color: #72d0eb;
 	}
 	.m-pageJump-box{ display: inline-block; }
 	.m-pageJump-box input{ 
 		display: inline-block;
 		line-height: 24px;
 		padding: 2px 5px;
 		border: 1px solid #dcdcdc;
 		width: 40px;
 		 }
 	.m-pageJump-box input:focus{ border-color: #72d0eb; }

 	.unJump{ background: #dcdcdc; cursor: not-allowed !important; }
</style>