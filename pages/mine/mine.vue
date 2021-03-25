<!-- 个人中心 -->
<template>
	<view>
		<view class="banner-primary padding-lr-lg padding-tb-xl flex justify-between align-center">
			<view class="flex align-end">
				<view class="cu-avatar xl radius" :style="{'background-image': 'url(' + avaterUrl + ')'}"></view>
				<view class="margin-left-lg">
					<view class="text-lg text-bold text-shadow">哈利波特</view>
					<view class="margin-top-xs" style="color: rgba(255, 255, 255, 0.8)">Harry Potter</view>
				</view>
			</view>
			<view>
				<text class="cuIcon-right" style="font-size: 36upx;"></text>
			</view>
		</view>
		<view class="cu-list grid col-3">
			<view class="cu-item banner-primary">
				<view class="text-white text-xl">80</view>
				<text>魔力值</text>
			</view>
			<view class="cu-item banner-primary">
				<view class="text-white text-xl">500</view>
				<text>麻瓜币($)</text>
			</view>
			<view class="cu-item banner-primary">
				<view class="text-white text-xl">3</view>
				<text>好友</text>
			</view>
		</view>
		<view>
			<view class="cu-list menu card-menu margin-top">
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-settingsfill text-grey"></text>
						<text class="text-grey">设置</text>
					</view>
				</view>
			</view>
			<view class="cu-list menu card-menu margin-top">
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-appreciate text-red"></text>
						<text class="text-red">我的学院</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-form text-olive"></text>
						<text class="text-olive">课程列表</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-footprint text-grey"></text>
						<text class="text-grey">魁地奇指南</text>
					</view>
				</view>
			</view>
			<view class="cu-list menu card-menu margin-top">
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-shop text-grey"></text>
						<text class="text-grey">对角巷</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<text class="cuIcon-explore text-grey"></text>
						<text class="text-grey">麻瓜世界</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avaterUrl: 'https://th.bing.com/th/id/Rcc169565e69d73ee24a4899bf31a62b6?rik=619BSNDiU5AAcw&riu=http%3a%2f%2ffanaru.com%2fharry-potter%2fimage%2f166074-harry-potter-harry-potter.jpg&ehk=pl2nBgqeYGGAW9ZC4Ar2C9dzyABdsMCcKtA8dS6otE4%3d&risl=&pid=ImgRaw'
			};
		}
	}
</script>

<style lang="less">
	@import "@/static/styles/styles.less";

</style>
