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
		width: 100%;
		height: 100%;
		padding: 10px 20px;
		background: red;
		overflow-y: auto;
	}
	.g-main-content{
		width: 100%;
		min-height: 900px;
	}
</style>
