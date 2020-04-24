<script>
	export default {
		methods: {
			async getdatas(){
				let hhgghse = await this.get('https://oybab.net/wechat/GM')
				uni.setStorage({
					key: 'gcook',
					data: hhgghse,
					success: () => {
						
					}
				})
			}
		},
		onLaunch() {
			uni.getStorage({
				key:'lanindex',
				success: (a) => {
					this.$store.commit('setlanser',a.data)
				}
			})
			var ddfer =uni.getStorageSync('gcook')
			if (!ddfer) {
				this.getdatas()
			}
		}
	}
</script>

<style>
	@import"static/css/base.css";
	@import"static/css/iconfont.css";
	@import"static/css/style.css";
</style>
