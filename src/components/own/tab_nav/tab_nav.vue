<template>
	<section class="m-tab-box">
		<ul>
			<li v-for="item in items" :class="{active: indexTarg == item.targ}" @click="indexTarg = item.targ">
				{{item.title}}
			</li>
		</ul>
		<transition name="tabTran" mode="out-in">
			<div v-if="indexTarg == item.targ" v-for="item in items" :key="item.targ" class="m-tab-item">
				<slot>
					{{item.title}}
				</slot>
			</div>
		</transition>
	</section>
</template>


<script type="text/javascript">
	export	default{
		data: () =>{
			return {
				items: [
					{ title: 'item1', targ: 'targ1'},
					{ title: 'item2', targ: 'targ2'},
					{ title: 'item3', targ: 'targ3'},
					{ title: 'item4', targ: 'targ4'},
				],
				indexTarg: 'targ1'
			}
		}
	}
</script>

<style type="text/css">
	.m-tab-box{ 
		padding:  20px; 
		margin:10px; 
		border: 1px solid #ddd;
		border-radius: 4px;
	}

	.m-tab-box ul:after{
		content: '';
		display: block;
		clear: both;
	}
	.m-tab-box li{ 
		float: left;
		padding: 5px 15px;
		line-height: 24px;
		border-right: 1px solid #dcdcdc;
	}
	.m-tab-box li.active{ background: red; color: #fff;}

	.tabTran-enter-active, .tabTran-leave-active{
		transition: all .5s ease-in-out;
	}
	.tabTran-enter, .tabTran-leave-to{ opacity: 0 }
</style>