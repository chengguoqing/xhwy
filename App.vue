<script>
	export default {
		methods: {

		},
		onLaunch() {
			let userinfo = uni.getStorageSync('userinfo')
			if (userinfo) {
				this.$store.commit('setuserinfo', userinfo)
			}
		}
	}
</script>

<style>
	@import"static/css/base.css";
	@import"static/css/iconfont.css";
	@import"static/css/style.css";
</style>
