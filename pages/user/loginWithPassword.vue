<!-- 密码登录 -->
<template>
	<view class="container" :style="{height: '100vh'}">
		<view class="link-right">
			<view @click="toLogin">免密登录</view>
		</view>
		<view class="phone-bind-container">
			<view class="input-title">密码登录</view>
			<view class="input-container">
				<view style="margin-right: 10px;">+86</view>
				<input
					:focus="focusType === 'phone'"
					type="number"
					id="phoneNumber"
					placeholder="输入手机号码"
					v-model="phoneNumber"
					placeholder-class="input-placeholder"
				/>
			</view>
			<view class="input-container">
				<input
					:focus="focusType === 'password'"
					placeholder="输入密码"
					id="password"
					password
					v-model="password"
					placeholder-class="input-placeholder"
				/>
			</view>
			<view class="button-container" @click="login">
				登录
			</view>
			<view class="forget-password" @click="forgetPassword">忘记密码</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNumber: '',
				password: '',
				focusType: 'phone'
			};
		},
		methods: {
			// 跳转至免密登陆页面
			toLogin: function() {
				uni.navigateTo({
					url: '/pages/user/login'
				});
			},
			// 登录
			login: function() {
				if (this.phoneNumber === '') {
					uni.showToast({
						title: '请输入手机号',
						icon: 'none',
						duration: 1000
					});
					this.focusType = 'phone';
					return;
				}
				if (this.password === '') {
					uni.showToast({
						title: '请输入密码',
						icon: 'none',
						duration: 1000
					});
					this.focusType = 'password';
					return;
				}
				// 验证手机号
				const regTel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
				if (regTel.test(this.phoneNumber)) {
					uni.reLaunch({
						url: '/pages/index/index'
					});
				} else {
					this.focusType = 'phone';
					uni.showToast({
						title: '请输入正确的手机号',
						icon: 'none',
						duration: 1000
					});
				}
			},
			// 忘记密码
			forgetPassword: function() {
				uni.navigateTo({
					url: '/pages/user/forgetPassword'
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
		background-image: url("https://pic-preview.oss-cn-hangzhou.aliyuncs.com/mobile-bg.jpg");
	}
		
	.link-right {
		width: 100%;
		padding: 20px;
		padding-top: 200rpx;
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
		background-color: rgba(98, 183, 144, 0.6);
		border-radius: 50px;
		box-sizing: border-box;
		padding: 10px 20px;
		color: #fff;
		font-size: 20px;
	}
	
	.forget-password {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		margin-top: 20px;
	}
</style>
