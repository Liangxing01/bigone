<template>
<div>
	<table class="pager-table table">
		<thead>
			<tr>
				<th v-for="(item, index) in m_column" :key="index" :class="{'pager-sort':item.sortable,'pager-sort-asc':item.sort==1,'pager-sort-desc':item.sort==0}" @click="changeSort(index)">{{item.title}}</th>
			</tr>
		</thead>
		<tbody>
			<slot :data="data"></slot>
		</tbody>
	</table>
	<div class="pagerFoot">
		<div class="pager-count">
			每页显示<select class="select-num" v-model.number="m_count">
				<option value="10">10</option>
				<option value="15">15</option>
				<option value="20">20</option>
				<option value="25">25</option>
				<option value="30">30</option>
				<option value="40">40</option>
				<option value="50">50</option>
			</select>
			条
		</div>
		<div class="pager-jump">
			<div style="float: right; margin:20px 0">
				到
				<input class="select-jump" type="number" v-model.number.lazy="jumpTo" />
				<button type="button" class="btn btn-primary" @click="jump(jumpTo)">确定</button>
			</div>			
			<pagination :total="totalPage" :now="page+1" @jump="jump"></pagination>
			<span class="dataTables_info">共{{total}}条数据</span>
		</div>
	</div>
</div>
</template>

<script>
import pagination from './pagination.vue'
import axios from '@/fetch/api.js'

export default{
	props:{
		column:Array,
		url:{
			type: String,
			required:true
		},
		count:{
			type: Number,
			default:15
		},
		fun:{
			type:Function,
			default:null
		}
	},
	data:function(){
		var m_column=this.column.map((x)=>{
			var obj={
				name:'',
				sortable:false,
				sort:-1
			}
			if (typeof x =='string'){
				obj.title=x;
			}else{
				for (var key in x){
					obj[key]=x[key];
				}
			}
			return obj;
		})
		return{
			data:[],total:0,page:0,m_column,sortName:'',sortType:0,param:{},jumpTo:0,m_count:this.count
		}
	},
	computed:{
		totalPage:function(){
			return Math.ceil(this.total/this.count);
		}
	},
	watch:{
		page:function(){
			this.loadPage();
		},
		m_count:function(){
			this.loadPage();
		}
	},
	methods:{
		loadPage:function(){
			var _this = this;
			var _param={page:this.page,count:this.m_count};
			if (this.sortName!=''){
				_param['sortName']=this.sortName;
				_param['sortType']=this.sortType;
			}
			axios({
				methods: 'get',
				url: _this.url,
				params: Object.assign(_param, this.param)
			}).then(function(res){
				var obj = res.data;
				if(_this.fun != null){
					obj.data = obj.data.map(_this.fun);
					_this.data.splice(0);
					for (var x of obj.data){
						_this.data.push(x);
					}
				}
			})
			/*$.web(this.url,$.extend(_param,this.param),function(d){
				this.total=d.total;
				if (this.fun!=null)
					d.data=d.data.map(this.fun);
				this.data.splice(0);
				for (var x of d.data){
					this.data.push(x);
				}
			}.bind(this),'get');*/
		},
		jump:function(page){
			if (page<=0||page>this.totalPage){
				layer.msg('页码超出范围！');
				return;
			}
			this.page=page-1;
		},
		changeSort:function(index){
			if (!this.m_column[index].sortable) return;
			if (this.m_column[index].sort!=-1){
				this.m_column[index].sort=1-this.m_column[index].sort;
				this.sortType=this.m_column[index].sort;
			}else{
				for (var i in this.m_column)
					this.m_column[i].sort=-1;
				this.m_column[index].sort=0;
				this.sortName=this.m_column[index].name;
				this.sortType=0;
			}
			this.reload();
		},
		reload:function(force=false){
			if (force){
				if (this.page==0) this.loadPage();
				else this.page=0;
			}else this.loadPage();
		},
		getRow:function(key,value){
			for (var v of this.data){
				if (v[key]==value) return v;
			}
			return null;
		},
		addParam:function(key,value){
			this.param[key]=value;
		},
		delParam:function(key){
			delete this.param[key];
		}
	},
	components:{
		pagination
	},
	created:function(){
		this.loadPage();
	}
}
</script>

<style scoped>
.table{
	width: 100%;
	font-size: 14px;
	line-height: 36px;
	background: #fff;
	border-collapse:collapse;
}
table, th, td{ border: 1px solid #ccc; }
.pagerFoot{ line-height: 36px;font-size: 14px; }
.pagerFoot:after{ display: table; content: '';clear: both; }
.pager-count{ float: left; }
.pager-jump{ float: right; }
.select-num{
	margin: 20px 0;
    padding: 6px 12px;
    line-height: 35px;
    border-radius: 4px;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    outline: none;
}
.dataTables_info{
	display: inline-block;
    line-height: 34px;
    margin: 20px;
    float: right;
}
.select-jump{
	width: 60px;
	padding: 6px 12px;
    line-height: 20px;
    border-radius: 4px;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd;
    outline: none;
}
.pager-table thead th{ text-align: center; cursor: pointer;}
.pager-table td{text-align: center;}
.pager-sort{background: url(sort_both.png) no-repeat center right;}
.pager-sort-asc{background: url(sort_asc.png) no-repeat center right;}
.pager-sort-desc{background: url(sort_desc.png) no-repeat center right;}
</style>
