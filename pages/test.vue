<template>
    <div>
        <button type="default" @tap="uping">上传图片</button>
		 <button type="default" @tap="upvideo">上传视频</button>
		<image :src="imgurl" mode="widthFix" class="w100" v-if="imgurl"></image>
    </div>
</template>
<script>
	import OSSUtil from "@/static/Upload_2_OSS/ossUtil.js";
    export default {
        data() {
            return {
				imgurl:false,
				progress:''
			}
        },
        components: {},
        methods: {
			uping(){
				uni.chooseImage({
				    success: async (res) => {
				        const tempFilePaths =res.tempFilePaths[0];
				        uni.showLoading({
				        	title:'图片上传中'
				        })
						let urlse = await this.upfile.upload2oss(tempFilePaths)
						console.log(urlse)
					}
				})
			},
			upvideo(){
				uni.chooseVideo({
					success: async (res) => {
						console.log(res)
						const tempFilePaths =res.tempFilePath;
						uni.showLoading({
							title:'图片上传中'
						})
						let urlse = await this.upfile.upload2oss(tempFilePaths,'.mp4')
						console.log(urlse)
					}
				})
			}
		},
        mounted() {
		}
    }

</script>
<style  scoped>

</style>

