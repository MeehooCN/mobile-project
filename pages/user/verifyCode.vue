<template>
	<view :style="{height: pageHeight + 'px'}" class="container">
		<cu-custom :isBack="true" bgColor="none-bg" style="background-color: rgb(86, 79, 94); color: white;"></cu-custom>
		<view class="verify-code-container">
			<view class="title">输入验证码</view>
			<view class="sub-title-container">
				<view style="margin-right: 10px;">已发送 4 位验证码至</view>
				<view style="color: rgba(255, 255, 255, 0.5)">+86 {{phoneNumber}}</view>
			</view>
			<view style="margin-top: 30px; display: flex; justify-content: space-between;">
				<view v-for="(item, index) in verifyCodeList">
					<input :id="'code-' + index" class="verify-code-input" :key="index" type="number" maxLength="1" v-model="verifyCodeList[index]"
					 @input="onKeyUp" placeholder-class="input-placeholder" />
				</view>
			</view>
			<view class="button-container" @click="sure">
				确定
			</view>
			<view v-if="seconds === 0 && canGetVerifyCode" class="get-again" @click="getAgain">重新获取</view>
			<view v-else class="get-again get-again-disabled">重新获取（{{ seconds }}）</view>
		</view>
	</view>
</template>

<script>
	import { getBrowserInterfaceSize } from '@/utils/CommonFuncs.js';
	export default {
		data() {
			return {
				verifyCodeList: ['', '', '', ''],
				phoneNumber: uni.getStorageSync('phoneNumber'),
				pageHeight: getBrowserInterfaceSize().pageHeight,
				seconds: Number(uni.getStorageSync('seconds')),
				intervalId: '',
				canGetVerifyCode: false,
				toUrlType: ''
			};
		},
		onLoad: function(option) {
			this.toUrlType = option.toUrlType;
		},
		mounted() {
			// 重置倒计时
			this.getAgain();
		},
		methods: {
			// 自动跳到下一个输入框
			onKeyUp: function(e) {
				const index = parseInt(e.currentTarget.id.split('-')[1]);
				const value = e.detail.value.slice(-1);
				// 迷惑，当输入相同数字时不生效
				this.verifyCodeList[index] = value;
				if (index < (this.verifyCodeList.length - 1)) {
					const inputDiv = document.getElementById('code-' + (index + 1));
					if (inputDiv.children[0].children[1]) {
						inputDiv.children[0].children[1].focus();
					}
				}
			},
			// 确认验证码
			sure: function() {
				const reg = /^\d{1,}$/;
				// 验证验证码填入
				for (let i = 0; i < this.verifyCodeList.length; i++) {
					if (!reg.test(this.verifyCodeList[i])) {
						uni.showToast({
							title: '验证码应为纯数字，且长度为4',
							icon: 'none',
							duration: 1000
						});
						return;
					}
				}
				const verifyCode = this.verifyCodeList.join('');
				const params = {
					phoneNumber: this.phoneNumber,
					verifyCode: verifyCode
				};
				// 跳至重置密码页面
				if (this.toUrlType === 'reset') {
					uni.navigateTo({
						url: '/pages/user/resetPassword'
					});
				}
				// 跳至登陆成功页面
				else if (this.toUrlType === 'loginDone') {
					uni.navigateTo({
						url: '/pages/index/index'
					});
				}
			},
			// 获取验证码
			getAgain: function() {
				this.seconds = Number(uni.getStorageSync('seconds') || 0);
				// 如果可以获取验证码
				if (this.seconds === 0) {
					this.seconds = 60;
					// 调接口
					// 成功则开始倒计时
					this.intervalSeconds();
				} else {
					this.intervalSeconds();
				}
			},
			// 倒计时
			intervalSeconds: function() {
				this.intervalId = setInterval(() => {
					if (this.seconds > 0) {
						this.seconds--;
						uni.setStorageSync('seconds', this.seconds.toString());
					} else {
						this.canGetVerifyCode = true;
						clearInterval(this.intervalId);
					}
				}, 1000);
			}
		}
	}
</script>

<style lang="less">
	@placeholder-color: rgba(255, 255, 255, 0.8);

	.input-placeholder {
		color: @placeholder-color;
	}

	.header-background {
		background-color: rgb(86, 79, 94);
	}

	.container {
		width: 100%;
		box-sizing: border-box;
		background-color: rgb(86, 79, 94);
	}

	.verify-code-container {
		margin: 50px 10%;
	}

	.sub-title-container {
		display: flex;
		align-items: center;
		font-size: 16px;
		color: rgba(255, 255, 255, 1);
	}

	.title {
		color: #fff;
		font-weight: bold;
		font-size: 28px;
		margin-bottom: 30px;
	}

	.verify-code-input {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(255, 255, 255, 0.4);
		border-radius: 5px;
		border: none;
		font-size: 28px;
		color: white;
		width: 50px;
		height: 50px;
		padding: 5px;
		text-align: center;
		box-sizing: border-box;
	}

	.button-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		min-height: 50px;
		margin-top: 2em;
		background-color: rgb(82, 137, 118);
		border-radius: 50px;
		box-sizing: border-box;
		padding: 10px 20px;
		color: #fff;
		font-size: 20px;
	}
	
	.get-again {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		margin-top: 20px;
	}
	.get-again-disabled {
		color: rgba(255, 255, 255, 0.5);
	}
</style>
