<template>
	<view class="btm ">
		<view class="pd row fgfyxer">
			<view class="pr20">
				<image src="../../static/img/fanhui.png" class="fanhui " @tap="housd" mode="widthFix"></image>
			</view>
			<view class="col  pm10 pr">
				<view class="bbm pm10 pr">
					<input type="text" value="" v-model="khsdre" :placeholder="tishid" class="fz30  " @input="hggysd" />
					<view class="kjjddeert fz28" v-if="khsdre">
						<view class="ye pd pt20 pm20 bbm">
							{{kjhx.Search}}“{{khsdre}}”
						</view>
						<view class="z6 pd pt20 pm20 bbm" v-for="sd in SongList" @tap="fdgfgf(sd.Name)">
							<icon type="search" size="16" class="cz mr10"></icon>{{sd.Name}}
						</view>
					</view>
				</view>
				<view class="mt10">
					<view class="f_b fz28 mr40" v-for="(sd,idx) in ddfrt" @tap="dfd(idx)">
						<text class="kjhxdrrt cz" :class="idx==idxsw?'act':''"></text>
						{{sd}}
					</view>
				</view>
			</view>
			<view class="fz30 z3 ml20" @tap="hiuhhwe">
				{{kjhx.Search}}
			</view>
		</view>
		<view class="" v-if="skkjde.length>0">
			<view class="mt60 row pd">
				<view class="fz32 z3 col">
					{{kjhx.SearchHistory}}
				</view>
				<image src="../../static/img/sanchu.png" class="kjjxerer" mode="widthFix" @tap="qihsd"></image>
			</view>
			<view class="pl30 mt20">
				<text class="hhggxerert" v-for="sd in skkjde" @tap="khsdre=sd">{{sd}}</text>
			</view>
		</view>
		<view class="mt60 pd" v-show="SongListsd">
			<view class="z3 fz32">
				{{kjhx.Hot}}{{kjhx.Search}}
			</view>
			<publiclist :SongList="SongListsd" v-if="SongListsd" :dsfrttyx="false"></publiclist>
			</view>

		</view>

	</view>
</template>
<script>
	import publiclist from "@/components/publiclist.vue"
	import xzyypage from "./components/xzyypage.vue"
	export default {
		data() {
			return {
				kjjnxr:false,
				SongList: [],
				SongListsd:'',
				xrrtxeertx: '',
				seartext: "",
				idxsw: 0,
				ddfrt: [this.$store.state.lanser.All,this.$store.state.lanser.Song, this.$store.state.lanser.Singers],
				khsdre: '',
				skkjde: [],
				tishid:''
			}
		},
		components: {
			publiclist,
			xzyypage
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.$store.state.Search
			})
			this.xrrtxeertx = uni.getSystemInfoSync().windowHeight - 250
		},
		computed: {
			kjhx() {
				return this.$store.state.lanser
			}
		},
		methods: {
			drtrtxe(data){
				if (data>0) {
					this.kjjnxr = true
				}
			},
			// 大家都在搜
			async dajiasd(){
				let hhgsd = {}
				hhgsd.PageNo = 1
				hhgsd.ListCount = 20
				let sdeer = await this.post("vod/server/sendmessage", 'Search-Main', hhgsd, 2)
				let hjhggsd = JSON.parse(sdeer.MessageContent)
				if (!hjhggsd.LikeSearchName){
					this.tishid = this.kjhx.SearchDescription
				}else {
					this.tishid =this.$store.state.lanser.EverybodySearching + hjhggsd.LikeSearchName
				}
				if (hjhggsd.SongList.length>0){
					this.SongListsd = hjhggsd.SongList
				}
				
			},
			housd() {
				uni.navigateBack({

				})
			},
			dfd(idx) {
				this.idxsw = idx
			},
			fdgfgf(ihhdf) {
				uni.navigateTo({
					url: '/pages/index/sousuojieguo?ihhdf=' + ihhdf +'&type='+this.idxsw
				})
			},
			async kkjsdddv(a, b, c, d,e) {
				let sdeer = await this.post(a, b, c, d,e)
				this.SongList = []
				JSON.parse(sdeer.MessageContent).KeyList.map(a => {
					if (!a.IsSelected) {
						a.IsSelected = false
						a.cls = ""
					} else {
						a.cls = "act"
					}
					this.SongList.push(a)
				})
				console.log(this.SongList)
				this.loading = "more"
			},
			hggysd(e) {
				let hhgsd = {}
				hhgsd.PageNo = this.pages
				hhgsd.ListCount = 20
				hhgsd.Value = e.detail.value
				hhgsd.SearchType = this.idxsw
				this.kkjsdddv("vod/server/sendmessage", 'Search-Key', hhgsd, 2,6)
			},
			// 搜索按钮触发
			hiuhhwe() {
				if (!this.khsdre) {
					uni.showToast({
						title: "请输入关键字",
						icon: "none"
					})
					return
				}
				// 获取 搜索历史
				let getsd = uni.getStorageSync("sslkd") || []
				getsd.unshift(this.khsdre)
				this.skkjde =getsd
				// 当前的搜索添加缓存
				uni.setStorageSync('sslkd', getsd)
				this.fdgfgf(this.khsdre)
				this.khsdre = ''
			},
			// 清除缓存
			qihsd() {
				let th = this
				uni.showModal({
					content: '确定清空搜索历史吗?',
					success: function(res) {
						if (res.confirm) {
							uni.removeStorageSync('sslkd')
							th.skkjde = []
						}
					}
				});
			}
		},
		mounted() {
			this.dajiasd()
			this.skkjde = uni.getStorageSync("sslkd")
		}
	}
</script>
<style scoped>
	.fgfyxer {
		background: #fff;
		position: sticky;
		padding-top: 22upx;
		top: 0;
		z-index: 10;
	}

	.fanhui {
		width: 40upx;
		position: relative;
		top: 6upx;
	}

	.kjhxdrrt {
		display: inline-block;
		width: 20upx;
		height: 20upx;
		border-radius: 50%;
		border: 1px solid #FFD33E;
		margin-right: 10upx;
	}

	.kjhxdrrt.act {
		background: #FFD33E;
	}

	.kjjxerer {
		width: 46upx;
	}

	.hhggxerert {
		background: #F2F2F2;
		color: #777777;
		font-size: 26upx;
		padding: 4upx 20upx;
		border-radius: 20upx;
		margin-right: 30upx;
	}

	.kjjddeert {
		position: absolute;
		left: 0;
		top: 55upx;
		background: #fff;
		min-height: 200upx;
		width: 100%;
		box-shadow: 0 0 20upx rgba(0, 0, 0, 0.1);
	}
</style>
