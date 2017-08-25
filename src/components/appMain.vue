<template>
	<main class="g-main-box">
		<section class="g-main-content">
			<slot></slot>
		</section>
	</main>
</template>

<script type="text/javascript">
	export default{

	}
</script>

<style type="text/css" scoped>
	.g-main-box{
		margin-left: 240px;
		margin-bottom: 40px;
		height: 100%;
		padding: 20px;
		background: #ecefef;
		overflow-y: auto;
	}
	.g-main-content{
		width: 100%;
		min-height: 900px;
	}
</style>
