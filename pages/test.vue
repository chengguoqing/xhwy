<template>
    <div>
        <button type="default" @tap="uping">上传图片</button>
		<image :src="imgurl" mode="widthFix" class="w100" v-if="imgurl"></image>
    </div>
</template>
<script>
    export default {
        data() {
            return {
				imgurl:false
			}
        },
        components: {},
        methods: {
			uping(){
				uni.chooseImage({
				    success: async (res) => {
				        const tempFilePaths =res.tempFilePaths;
				        uni.showLoading({
				        	title:'图片上传中'
				        })
						uni.uploadFile({
							url: "http://duxinggj.com/comm/tukuimg", //仅为示例，非真实的接口地址
							filePath: tempFilePaths[0],
							name:'image',
							complete: (res) => {
								uni.hideLoading()
							},
							success: (res) => {
								console.log()
								this.imgurl = JSON.parse(res.data).data.url
							}
						});
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

