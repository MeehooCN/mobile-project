// ajax 请求
import { serverPath } from '@/utils/CommonVars.js';

const Ajax = {
	post: function(url, data, options, thenCallBack) {
		if (!options.dataType) {
			options.dataType = 'json';
		}
		if (!options.header) {
			options.header = {
				'content-type': 'application/json'
			};
		}
		if (options.dataType === 'form') {
			options.header = {
				'content-type': 'application/x-www-form-urlencoded'
			};
		}
		uni.request({
			method: 'POST',
		    url: serverPath + url,
		    data,
			...options,
			success: function(responseData) {
				if (responseData.statusCode === 403) {
					// 登录失败
					uni.showToast({
						title: JSON.parse(responseData.data).msg,
						duration: 1000,
						icon: 'none'
					});
				}
				if (responseData.hasOwnProperty('flag')) {
					if (responseData.flag === 1) {
						uni.showToast({
						    title: '操作失败！',
						    duration: 1000,
							icon: 'none'
						});
					} else {
						thenCallBack(responseData.data);
					}
				} else {
				  thenCallBack(responseData.data);
				}
		    },
			fail: function() {
				uni.showToast({
					title: '操作失败！',
					duration: 1000,
					icon: 'none'
				});
			}
		});
	},
	get: function(url, data, options, thenCallBack) {
		if (!options.dataType) {
			options.dataType = 'json';
		}
		uni.request({
			method: 'GET',
		    url: serverPath + url,
		    data,
			...options,
			success: function(responseData) {
				if (responseData.hasOwnProperty('flag')) {
					if (responseData.flag === 1) {
						uni.showToast({
						    title: '操作失败！',
						    duration: 1000,
							icon: 'none'
						});
					} else {
						thenCallBack(responseData.data);
					}
				} else {
				  thenCallBack(responseData.data);
				}
		    },
			fail: function() {
				uni.showToast({
					title: '操作失败！',
					duration: 1000,
					icon: 'none'
				});
			}
		});
	},
}
export default Ajax;