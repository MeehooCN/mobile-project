<template>
	<view class="container" :style="{height: pageHeight + 'px'}">
		<cu-custom :isBack="true" bgColor="none-bg" style="background-color: rgb(86, 79, 94); color: white;"></cu-custom>
		<view class="phone-bind-container">
			<view class="input-title">重置密码</view>
			<view class="input-container">
				<input placeholder="请输入至少6位新密码" id="password" password v-model="password" placeholder-class="input-placeholder" />
			</view>
			<view class="input-container">
				<input placeholder="再次确认" id="confirmPassword" password v-model="confirmPassword" placeholder-class="input-placeholder" />
			</view>
			<view class="button-container" @click="save">
				保存
			</view>
		</view>
	</view>
</template>

<script>
	import { getBrowserInterfaceSize } from '@/utils/CommonFuncs.js';
	export default {
		data() {
			return {
				pageHeight: getBrowserInterfaceSize().pageHeight,
				password: '',
				confirmPassword: ''
			};
		},
		methods: {
			// 确认重置密码
			save: function() {
				const passwordDiv = document.getElementById('password');
				const confirmPasswordDiv = document.getElementById('confirmPassword');
				// 验证密码
				const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
				if (!reg.test(this.password)) {
					uni.showToast({
						title: '密码应为 6-16 位数字，字母组合',
						icon: 'none',
						duration: 1000
					});
					passwordDiv.children[0].children[1].focus();
					return;
				}
				if (this.password !== this.confirmPassword) {
					uni.showToast({
						title: '两次输入密码不一致',
						icon: 'none',
						duration: 1000
					});
					confirmPasswordDiv.children[0].children[1].focus();
					return;
				}
				// 保存
			}
		}
	}
</script>

<style lang="less">
	@placeholder-color: rgba(255, 255, 255, 0.8);

	.input-placeholder {
		color: @placeholder-color;
	}
	
	.container {
		width: 100%;
		box-sizing: border-box;
		background-color: rgb(86, 79, 94);
	}
		
	.link-right {
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		display: flex;
		justify-content: flex-end;
		color: white;
	}

	.phone-bind-container {
		width: 100%;
		padding: 20px 10% 0px 10%;

		.input-title {
			color: #fff;
			font-weight: bold;
			font-size: 28px;
			margin-bottom: 30px;
			margin-top: 30px;
		}
	}

	.input-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		min-height: 50px;
		margin-top: 20px;
		background-color: rgba(255, 255, 255, 0.6);
		border-radius: 50px;
		box-sizing: border-box;
		padding: 10px 20px;
		color: #fff;
		font-size: 20px;

		input {
			background: none;
			border: none;
			color: #fff;
			flex-grow: 1;
			font-weight: bold;
			letter-spacing: 1px;
		}
	}

	.button-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 50px;
		margin-top: 30px;
		background-color: rgb(82, 137, 118);
		border-radius: 50px;
		box-sizing: border-box;
		padding: 10px 20px;
		color: #fff;
		font-size: 20px;
	}
</style>
