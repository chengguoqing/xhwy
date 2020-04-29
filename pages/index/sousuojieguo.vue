<template>
	<view class="btm" :style="{height:xrrtxeertx+'px'}">
		<scroll-view scroll-y="true" class="h100" refresher-enabled="true" :refresher-triggered="triggered"
		 :refresher-threshold="100" @refresherpulling="onPulling" @refresherrefresh="onRefresh" @refresherrestore="onRestore"
		 @refresherabort="onAbort" @scrolltolower="jjhseer">
			<uni-list v-if="typese==2">
				<uni-list-item :thumb="sd.ImagePaths" @tap="tiosjjsd(sd.SingerName,sd.ImagePaths,sd.Id)" v-for="sd in SongList">
					<view>{{kjhx.Singers}}：<text class="ye f_b">{{sd.SingerName}}</text></view>
				</uni-list-item>
			</uni-list>
			<uni-list v-if="typese==0">
				<uni-list-item :thumb="sd.ImagePaths" @tap="tiosjjsd(sd.SingerName,sd.ImagePaths,sd.Id)" v-for="sd in kkjhjjdd">
					<view>{{kjhx.Singers}}：<text class="ye f_b">{{sd.SingerName}}</text></view>
				</uni-list-item>
			</uni-list>
			<publiclist  :SongList="SongList" v-if="typese==1||typese==0" @zhiding="zhiding" @delsd="delsd" @xuanze="xuanze"></publiclist>
			<uni-load-more iconType="snow" :iconSize="36" :status="loading" v-if="SongList.length>10" />
		</scroll-view>
	</view>
</template>
<script>
	import publiclist from "@/components/publiclist.vue"
	export default {
		data() {
			return {
				typese: 0, // 0全部  1歌曲  2歌手
				ihhdf: "",
				SongList: [],
				xrrtxeertx: 0,
				loading: 'more',
				triggered: true,
				_freshing: false,
				pages: 1,
				ddrrtt: '',
				cansu:'',
				kkjhjjdd:[]
			}
		},
		components: {
			publiclist
		},
		computed: {
			kjhx() {
				return this.$store.state.lanser
			}
		},
		methods: {
			tiosjjsd(SingerName, ImagePaths, id) {
				this.hf('/pages/index/geshouxq?name=' + SingerName + ' + &femian=' + ImagePaths + '&id=' + id)
			},
			// 获取歌曲列表
			async kkjsdddv(a, b, c, d) {
				let sdeer = await this.post(a, b, c, d)
				JSON.parse(sdeer.MessageContent)[this.cansu].map(a => {
					if (!a.IsSelected) {
						a.IsSelected = false
						if (a.ImagePath) {
							a.ImagePaths = uni.getStorageSync('gcook').ImageAddress + a.ImagePath
						} else {
							a.ImagePaths = 'https://oybab.net/Files/Images/original.png'
						}
						a.cls = ""
					} else {
						a.cls = "act"
					}
					this.SongList.push(a)
				})
				if (this.typese == 0){
					JSON.parse(sdeer.MessageContent).SingerList.map(a => {
						if (!a.IsSelected) {
							a.IsSelected = false
							if (a.ImagePath) {
								a.ImagePaths = uni.getStorageSync('gcook').ImageAddress + a.ImagePath
							} else {
								a.ImagePaths = 'https://oybab.net/Files/Images/original.png'
							}
							a.cls = ""
						} else {
							a.cls = "act"
						}
						this.kkjhjjdd.push(a)
					})
				}
				this.loading = "more"
			},
			gethhhgs(url) {
				let hhgsd = {}
				hhgsd.PageNo = this.pages
				hhgsd.ListCount = 20
				hhgsd.Value = this.ihhdf
				hhgsd.SearchType = this.typese
				this.kkjsdddv("vod/server/sendmessage", this.ddrrtt, hhgsd, 2)
			},
			onPulling(e) {},
			async onRefresh() {
				if (this._freshing) return;
				this._freshing = true;
				setTimeout(() => {
					this.triggered = false;
					this._freshing = false;
				}, 2000)
			},
			onRestore() {
				this.SongList = []
				this.triggered = 'restore'; // 需要重置
				this.pages = 1
				this.gethhhgs()
			},
			onAbort() {
				console.log("onAbort");
			},
			jjhseer(e) {
				this.pages++
				this.loading = "loading"
				this.gethhhgs()
			},
			// 置顶
			async zhiding(data) {
				await this.post("vod/server/sendmessage", "Song-Top", data.Id)
			},
			// 删除
			async delsd(data) {
				await this.post("vod/server/sendmessage", "Song-Remove", data.Id)
			},
			// 选择
			async xuanze(data) {
				await this.post("vod/server/sendmessage", "Song-Select", data.Id)
				uni.hideLoading()
			},
		},
		onLoad(e) {
			this.typese = e.type
			this.ihhdf = e.ihhdf
			if (e.type == 0) {
				this.cansu = 'SongList'
				this.ddrrtt = 'Search-All'
			}
			if (e.type == 1) {
				this.cansu = 'SongList'
				this.ddrrtt = 'Search-Song'
			}
			if (e.type == 2) {
				this.cansu = 'SingerList'
				this.ddrrtt = 'Search-Singer'
			}
			this.gethhhgs()
			this.xrrtxeertx = uni.getSystemInfoSync().windowHeight
			uni.setNavigationBarTitle({
				title: this.$store.state.lanser.Search + "：" + e.ihhdf
			})
		},
		mounted() {

		}
	}
</script>
<style scoped>

</style>
