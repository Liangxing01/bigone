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
		position: absolute;
		top: 66px;
		left: 240px;
		right: 0;
		bottom: 0;
		padding: 20px;
		background: #f1f1f1;
		overflow-y: auto;
	}
	.g-main-content{ width: 100%;}
</style>
