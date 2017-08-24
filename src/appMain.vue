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
		background: red;
	}
	.g-main-content{
		width: 100%;
		height: 100%;
	}
</style>
