<script>
	export default {
		methods: {
			
		},
		onLaunch() {
			var ddfer = uni.getStorageSync('gcook')
			var times = uni.getStorageSync('times')
			 // 缓存了5小时清除缓存
			let cerertr =  new Date().getTime()
			if((cerertr -times) >(1000*60*60*5)||!times){
				uni.clearStorage();
				uni.reLaunch({
				    url: '/pages/loading'
				});
			}
			if (!ddfer.Lang){
				uni.reLaunch({
				    url: '/pages/loading'
				});
			}
			uni.setStorageSync('',new Date().getTime())
			
			let sdr = uni.getStorageSync('lanindex')
			this.$store.commit('setlanser', sdr || 0)
		}
	}
</script>

<style>
	@import"static/css/base.css";
	@import"static/css/iconfont.css";
	@import"static/css/style.css";
</style>
