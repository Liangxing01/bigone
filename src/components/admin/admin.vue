<template>
	<section>
		<app-header></app-header>
    <app-nav></app-nav>
    <app-main>
    	<router-view></router-view>
    </app-main>
    <!-- <app-foot></app-foot> -->
	</section>
</template>

<script type="text/javascript">
	import adminNav from '@/components/admin/adminNav'
	import appHeader from '@/components/appHead'
	import appMain from '@/components/appMain'
	// import appFoot from '@/components/appFoot'

	export default{
		components: {
			"app-nav": adminNav,
	    "app-header": appHeader,
	    'app-main': appMain,
	    // 'app-foot': appFoot
		}
	}
</script>