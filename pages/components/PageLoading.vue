<!-- 页面顶部加载条 -->
<template>
	<view class="load-progress" :class="loadProgress !=0 ? 'show' : 'hide'" :style="[{ top: CustomBar + 'px' }]">
		<view class="load-progress-bar bg-green" :style="[{transform: 'translate3d(-' + (100 - loadProgress) + '%, 0px, 0px)'}]"></view>
		<view class="load-progress-spinner text-green"></view>
	</view>
</template>

<script>
	export default {
		props: {
			loadProgress: Number // 当前加载进度
		}
	}
</script>

<style lang="less">

</style>
