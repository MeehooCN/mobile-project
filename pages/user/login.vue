<template>
	<view class="container" :style="{height: pageHeight + 'px'}">
		<view class="link-right">
			<view @click="toPasswordLogin">密码登录</view>
		</view>
		<view class="phone-bind-container">
			<view class="title">手机号绑定 / 登录</view>
			<view class="sub-title">查看专属于您的修图记录</view>
			<view class="input-container">
				<view style="margin-right: 10px;">+86</view>
				<input type="number" placeholder="输入手机号码" id="phoneNumber" v-model="phoneNumber" placeholder-class="input-placeholder" />
			</view>
			<view class="button-container" @click="getVerifyCode">
				获取验证码
			</view>
		</view>
	</view>
</template>

<script>
	import { getBrowserInterfaceSize } from '@/utils/CommonFuncs.js';
	export default {
		data() {
			return {
				phoneNumber: '',
				pageHeight: getBrowserInterfaceSize().pageHeight
			};
		},
		methods: {
			// 获取验证码
			getVerifyCode: function(e) {
				const phoneDiv = document.getElementById('phoneNumber');
				// 验证手机号
				const regTel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
				if (regTel.test(this.phoneNumber)) {
					uni.setStorageSync('phoneNumber', this.phoneNumber);
					// 跳至验证手机号页面
					uni.navigateTo({
						url: '/pages/user/verifyCode?toUrlType=loginDone',
					});
				} else {
					phoneDiv.children[0].children[1].focus();
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none',
						duration: 1000
					});
				}
			},
			// 密码登录
			toPasswordLogin: function() {
				uni.navigateTo({
					url: '/pages/user/loginWithPassword'
				});
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
		background-repeat: no-repeat;
		background-size: cover;
		box-sizing: border-box;
		background-image: url("./../../static/images/mobile-bg.jpg");
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
		padding: 20px 10%;

		.title {
			color: #fff;
			font-weight: bold;
			font-size: 28px;
			margin-bottom: 10px;
			margin-top: 30px;
		}

		.sub-title {
			font-weight: bold;
			font-size: 16px;
			color: rgba(255, 255, 255, 0.8);
		}
	}

	.input-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		min-height: 50px;
		margin-top: 40px;
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
		background-color: rgba(98, 183, 144, 0.6);
		border-radius: 50px;
		box-sizing: border-box;
		padding: 10px 20px;
		color: #fff;
		font-size: 20px;
	}
</style>
