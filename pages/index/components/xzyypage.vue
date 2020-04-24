<template>
	<scroll-view scroll-y="true" class="h100" refresher-enabled="true" :refresher-triggered="triggered"
	 :refresher-threshold="100"  @refresherpulling="onPulling" @refresherrefresh="onRefresh"
	 @refresherrestore="onRestore" @refresherabort="onAbort" @scrolltolower="jjhseer">
		<publiclist :SongList="SongList" v-if="SongList" @zhiding="zhiding" @delsd="delsd" @xuanze="xuanze"></publiclist>
		<uni-load-more iconType="snow" :iconSize="36" :status="loading" v-if="SongList.length>10" />
	</scroll-view>
</template>
<script>
	import publiclist from "@/components/publiclist.vue"
	export default {
		props: ['SongTypeId','urls'],
		data() {
			return {
				SongList: [],
				triggered: true,
				_freshing: false,
				pages:1,
				loading:'more'
			}
		},
		components: {
			publiclist
		},
		methods: {
			async kkjsdddv(a, b, c, d) {
				let sdeer = await this.post(a, b, c, d)
				JSON.parse(sdeer.MessageContent).SongList.map(a=>{
					if (!a.IsSelected) {
						a.IsSelected = false
						a.cls=""
					} else {
						a.cls="act"
					}
					this.SongList.push(a)
				})
				this.loading ="more"
			},
			initsd () {
				let hhgsd = {}
				hhgsd.Value = null
				if (this.urls =='Search-Type'){ // 分类
					hhgsd.SongTypeId = this.SongTypeId
				}
				if (this.urls =='Search-Hot' || this.urls =='Search-New' ||this.urls=='Search-Song'){ // 热门 最新
					hhgsd.SongLangId = this.SongTypeId
				}
				console.log(this.urls =='Search-Hot')
				hhgsd.PageNo = this.pages
				hhgsd.ListCount = 20
				this.kkjsdddv("vod/server/sendmessage", this.urls, hhgsd, 2)
			},
			onPulling(e) {
			},
			async onRefresh() {
				if (this._freshing) return;
				this._freshing = true;
				setTimeout(() => {
					this.triggered = false;
					this._freshing = false;
				}, 2000)
			},
			onRestore() {
				this.SongList=[]
				this.triggered = 'restore'; // 需要重置
				this.pages=1
				this.initsd()
				console.log("onRestore");
			},
			onAbort() {
				console.log("onAbort");
			},
			jjhseer(e){
				this.pages++
				this.loading ="loading"
				this.initsd()
			},
			// 置顶
			async zhiding (data){
				await this.post("vod/server/sendmessage", "Song-Top", data.Id)
			},
			// 删除
			async delsd (data) {
				await this.post("vod/server/sendmessage", "Song-Remove", data.Id)
			},
			// 选择
			async xuanze (data){
				await this.post("vod/server/sendmessage", "Song-Select", data.Id)
				uni.hideLoading()
			}
			
		},
		mounted() {
			this.initsd()
		}
	}
</script>
<style scoped>

</style>
