<template>
	<view>
		<views v-if="PageCur=='views'"></views>
		<components v-if="PageCur=='components'"></components>
		<mine v-if="PageCur=='mine'"></mine>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="views">
				<view class='cuIcon-cu-image'>
					<text class="cuIcon-sort" :style="{ color: PageCur === 'views' ? colors.primaryColor : colors.defaultColor }"></text>
				</view>
				<view :style="{ color: PageCur === 'views' ? colors.primaryColor : colors.defaultColor }">页面</view>
			</view>
			<view class="action" @click="NavChange" data-cur="components">
				<view class='cuIcon-cu-image'>
					<text class="cuIcon-apps" :style="{ color: PageCur === 'components' ? colors.primaryColor : colors.defaultColor }"></text>
				</view>
				<view :style="{ color: PageCur === 'components' ? colors.primaryColor : colors.defaultColor }">组件</view>
			</view>
			<view class="action" @click="NavChange" data-cur="mine">
				<view class='cuIcon-cu-image'>
					<text class="cuIcon-people" :style="{ color: PageCur === 'mine' ? colors.primaryColor : colors.defaultColor }"></text>
				</view>
				<view :style="{ color: PageCur === 'mine' ? colors.primaryColor : colors.defaultColor }">我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { colors } from '@/utils/CommonVars.js';
	export default {
		data() {
			return {
				PageCur: 'views',
				colors: colors
			}
		},
		methods: {
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>

</style>
