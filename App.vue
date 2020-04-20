<script>
	export default {
		onLaunch() {
			uni.getStorage({
				key:'lanindex',
				success: (a) => {
					this.$store.commit('setlanser',a.data)
				}
			})
			
		}
	}
</script>

<style>
	@import"static/css/base.css";
	@import"static/css/iconfont.css";
	@import"static/css/style.css";
</style>
