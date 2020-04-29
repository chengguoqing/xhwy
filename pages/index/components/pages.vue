<template>
	<scroll-view scroll-y="true" class="h100" refresher-enabled="true" :refresher-triggered="triggered"
	 :refresher-threshold="100"  @refresherpulling="onPulling" @refresherrefresh="onRefresh"
	 @refresherrestore="onRestore" @refresherabort="onAbort" @scrolltolower="jjhseer">
		<view class="">
			<view class="pd">
				<view class="parentse ">
					<navigator class="cdderrty pr" v-for="sd in SongList" :url='"/pages/index/geshouxq?name=" + sd.SingerName + "&femian="+sd.ImagePaths+"&id="+sd.Id'>
						<image :src="sd.ImagePaths" mode="aspectFill" v-if="sd.ImagePath"></image>
						<image src="../../../static/img/morentx.png" mode="aspectFill" v-else></image>
						<view class="kjhxer ">
							{{sd.SingerName}}
						</view>
					</navigator>
				</view>
			</view>
		</view>
		<uni-load-more iconType="snow" :iconSize="36" :status="loading" v-if="SongList.length>10" />
	</scroll-view>
</template>
<script>
	export default {
		data() {
			return {
				SongList: [],
				triggered: true,
				_freshing: false,
				pages:1,
				loading:'more',
				idxse: 0
			}
		},
		components: {

		},
		methods: {
			async kkjsdddv(a, b, c, d) {
				let sdeer = await this.post(a, b, c, d)
				JSON.parse(sdeer.MessageContent).SingerList.map(a=>{
					if (!a.IsSelected) {
						a.IsSelected = false
						a.ImagePaths = uni.getStorageSync('gcook').ImageAddress + a.ImagePath
						a.cls=""
					} else {
						a.cls="act"
					}
					this.SongList.push(a)
				})
				console.log(this.SongList)
				this.loading ="more"
			},
			hhsf(idx) {
				this.idxse = idx
			},
			initd () {
				let hhgsd = {}
				hhgsd.Value = null
				hhgsd.SingerLangId=this.$store.state.SingerLangId
				hhgsd.SingerTypeId = this.$store.state.SingerTypeId
				hhgsd.Value = this.$store.state.seartext
				hhgsd.PageNo = this.pages
				hhgsd.ListCount = 20
				this.kkjsdddv("vod/server/sendmessage", 'Search-Singer', hhgsd, 2)
			},
			iqhjwr () {
				this.SongList = []
				this.pages = 1
				this.initd()
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
			onAbort() {
				console.log("onAbort");
			},
			onRestore() {
				this.SongList=[]
				this.triggered = 'restore'; // 需要重置
				this.pages=1
				this.initd()
			},
			jjhseer(e){
				this.pages++
				this.loading ="loading"
				this.initd()
			}
		},
		mounted() {
			this.initd()
		},
	}
</script>
<style scoped>

	.kjhggdert {
		border-radius: 20upx;
		font-size: 26upx;
		padding: 6upx 20upx;
		background: #F2F2F2;
		color: #666;
		margin-right: 30upx;
		margin-bottom: 20upx;
	}

	.kjhggdert.act {
		color: #fff;
		background: #FFD33E;
	}

	.cdderrty {
		height: 280upx;
	}

	.cdderrty image {
		height: 100%;
		width: 100%;
		border-radius: 8upx;
	}

	.parentse {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 40upx;
		grid-row-gap: 40upx;
	}
	.kjhxer{
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 0;
		line-height: 50upx;
		color: #fff;
		font-size: 28upx;
		background: rgba(0,0,0,0.5);
		text-align: center;
	}
</style>
