<!-- 基础列表 -->
<template>
	<view>
		<cu-custom bgColor="banner-primary" :isBack="true">
			<block slot="content">基础列表</block>
		</cu-custom>
		<!-- 顶部进度条 -->
		<page-loading :loadProgress="loadProgress" />
		<view class="cu-list menu">
			<view class="cu-item" v-for="(item, index) in baseList" :key="index" @click="toDetail()">
				<view class="content">
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
				baseList: [],
				loadProgress: 0
			};
		},
		mounted() {
			this.LoadProgress();
		},
		methods: {
			// 获取列表数据
			getBaseList: function() {
				this.loadProgress = 0;
				const baseList = [];
				for(let i = 0; i < 30; i++) {
					baseList.push({
						name: '我想要学习黑魔法 ' + (i + 1).toString()
					})
				}
				this.baseList = baseList;
			},
			// 跳至详情
			toDetail: function() {
				
			},
			// 进度条加载
			LoadProgress: function(e) {
				this.loadProgress = this.loadProgress + 5;
				if (this.loadProgress < 100) {
					setTimeout(() => {
						this.LoadProgress();
					}, 100)
				} else {
					this.getBaseList();
				}
			}
		}
	}
</script>

<style lang="less">
	@import "@/static/styles/styles.less";
</style>
