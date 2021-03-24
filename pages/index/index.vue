<template>
	<view>
		<views v-if="PageCur=='views'"></views>
		<components v-if="PageCur=='components'"></components>
		<mine v-if="PageCur=='mine'"></mine>
		<view class="cu-bar tabbar bg-white shadow foot">
			<view class="action" @click="NavChange" data-cur="views">
				<view class='cuIcon-cu-image'>
					<text v-if="PageCur === 'views'" class="cuIcon-paintfill" :style="{ color: colors.primaryColor }"></text>
					<text v-else class="cuIcon-paint" :style="{ color: colors.defaultColor }"></text>
				</view>
				<view :style="{ color: PageCur === 'views' ? colors.primaryColor : colors.defaultColor }">页面</view>
			</view>
			<view class="action" @click="NavChange" data-cur="components">
				<view class='cuIcon-cu-image'>
					<text v-if="PageCur === 'components'" class="cuIcon-newshotfill" :style="{ color: colors.primaryColor }"></text>
					<text v-else class="cuIcon-newshot" :style="{ color: colors.defaultColor }"></text>
				</view>
				<view :style="{ color: PageCur === 'components' ? colors.primaryColor : colors.defaultColor }">组件</view>
			</view>
			<view class="action" @click="NavChange" data-cur="mine">
				<view class='cuIcon-cu-image'>
					<text v-if="PageCur === 'mine'" class="cuIcon-myfill" :style="{ color: colors.primaryColor }"></text>
					<text v-else class="cuIcon-my" :style="{ color: colors.defaultColor }"></text>
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
				PageCur: 'mine',
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
