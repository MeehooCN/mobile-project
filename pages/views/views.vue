<!-- 页面汇总 -->
<template>
	<view>
		<cu-custom bgColor="banner-primary"><block slot="content">通用页面</block></cu-custom>
		<view class="cu-list menu">
			<view class="cu-item" v-for="(item, index) in viewsList" :class="item.menuArrow ? 'arrow' : ''" :key="index" @click="toOtherPage(item.toUrl)">
				<view class="content">
					<text class="text-grey" :class="item.icon"></text>
					<text class="text-grey">{{ item.name }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				viewsList: [{
					name: '基础列表',
					icon: 'cuIcon-list',
					menuArrow: true,
					toUrl: '/pages/views/baseList'
				}, {
					name: '分页列表',
					icon: 'cuIcon-sort',
					menuArrow: true,
					toUrl: '/pages/views/paginationList'
				}, {
					name: '卡片列表',
					icon: 'cuIcon-square',
					menuArrow: true,
					toUrl: '/pages/views/cardList'
				}]
			};
		},
		methods: {
			toOtherPage: function (toUrl) {
				uni.navigateTo({
					url: toUrl
				});
			}
		}
	}
</script>

<style lang="less">
	@import "@/static/styles/styles.less";

</style>
