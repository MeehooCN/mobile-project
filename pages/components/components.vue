<!-- 组件汇总 -->
<template>
	<view>
		<cu-custom class="banner-primary"><block slot="content">组件列表</block></cu-custom>
		<view class="cu-list grid col-3">
			<view class="cu-item" v-for="(item, index) in componentList" :key="index">
				<text :class="item.icon" style="font-size: 40upx;"></text>
				<text>{{ item.name }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				componentList: [{
					name: '顶部加载',
					icon: 'cuIcon-loading',
					toUrl: 'components/PageLoading'
				}]
			};
		}
	}
</script>

<style lang="less">
	@import "@/static/styles/styles.less";

</style>
