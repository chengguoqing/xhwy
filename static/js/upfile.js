// 上传文件
import OSSUtil from "@/static/Upload_2_OSS/ossUtil.js";
var upfile = {
	async upload2oss(file,hz) {
		// #ifdef H5 
		// H5上传
		return await this.h5OssUpload(file)
		// #endif

		// #ifdef MP-WEIXIN
		// 微信小程序上传
		return await this.mpUpload2oss(file,hz)
		// #endif
	},
	// 小程序 上传到OSS 前端签名
	async mpUpload2oss(imageSrc,hz) {
		return new Promise(async (resolve, reject) => {
			let sign = await OSSUtil.get_STS()
			let fileName = new Date().getTime() + this.randomString(10) + hz||'.jpg'
			console.log(fileName)
			let uploadTask = uni.uploadFile({
				url: sign.host,
				filePath: imageSrc,
				fileType: 'image',
				name: 'file',
				formData: {
					name: imageSrc,
					'key': fileName,
					'policy': sign.policy,
					'OSSAccessKeyId': sign.accessId,
					'success_action_status': '200',
					//让服务端返回200,不然，默认会返回204
					'signature': sign.signature,
				},
				success: (res) => {
					// console.log('uploadImage success, res is:', res)
					uni.showToast({
						title: '上传成功',
						icon: 'none',
					});
					let ret = {
						data: sign.host + fileName
					}
					resolve(ret.data)

				},
				fail: (err) => {
					// console.log('uploadImage fail', err);
					uni.showModal({
						content: err.errMsg,
						showCancel: false
					});
					reject();
				}
			});
		})
	},
	randomString(len) {
		len = len || 32;
		var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
		var maxPos = $chars.length;
		var pwd = '';
		for (var i = 0; i < len; i++) {
			pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
		}
		return pwd;
	}
}

export {
	upfile
}
