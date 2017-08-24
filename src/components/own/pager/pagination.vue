<template>
	<ul class="pagination" style="float: right;">
		<template v-if="total<=5">
			<item v-for="index in total" @jump="jump" :key="index" :page="index" :now="now"></item>
		</template>
		<template v-else-if="now>3">
			<item @jump="jump" page=1></item>
			<omi></omi>
			<item @jump="jump" :page="now-1"></item>
			<item :page="now" :now="now"></item>
			<item @jump="jump" :page="1+now" v-if="total-now>1"></item>
			<omi v-if="total-now>2"></omi>
			<item @jump="jump" :page="total"></item>
		</template>
		<template v-else>
			<item v-for="index in now+1" @jump="jump" :key="index" :page="index" :now="now"></item>
			<omi></omi>
			<item @jump="jump" :page="total"></item>
		</template>
	</ul>
</template>

<script>
export default{
	props:{
		total:Number,
		now:Number
	},
	methods:{
		jump:function(page){
			this.$emit('jump',page);
		}
	},
	components:{
		item:{
			template: '<li class="paginate_button" :class="now==page?\'active\':\'\'" @click="jump"><a href="javascript:;">{{ page }}</a></li>',
			props:{
				page:{required:true},
				now:{
					type:Number,
					default:0
				}
			},
			methods: {
				jump: function () {
					this.$emit('jump',this.page);
				}
			}
		},
		omi:{
			template: '<li class="paginate_button"><a>……</a></li>'
		}
	}
}
</script>

<style>
</style>
