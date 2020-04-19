<template>
	<view class="pd">
		<view class=" pt20 pm20 btm row" v-for="(sd,idx) in jhgsee">
			<view class="fgfdtyyxe fz28 z6" v-if="isyhgg!=2">
				{{idx<10?'0'+(idx+1):(idx+1)}}
			</view>
			<view class="col">
				<view class="row">
					<view class="col">
						<view class="dian fz32 z3">
							{{sd.name}}
						</view>
						<view class="z9 fz24 mt10">
							{{sd.gename}}
						</view>
					</view>
					<view class="mt20">
						<view class="f_b" v-if="isyhgg!=2">
							<image src="../static/img/zhiding.png" class="cdftyxzer cz" mode="widthFix" @tap="jhhxdrer(idx)"></image>
							<image src="../static/img/sanchu.png" class="cdftyxzer  cz" mode="widthFix" @tap="hgsert(idx)"></image>
							
						</view>
						<view class="f_b" v-if="isyhgg!=1">
							<text class="kjjhxher cz" v-if="!sd.cls" @tap="kjhser(sd,1)">点歌</text>
							<text v-else class="kjjhxher cz ab" @tap="kjhser(sd,2)">已加入</text>
												
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props:{
			isyhgg:{ // 1隐藏点歌 2 搜索
				type:Number
			}
		},
		data() {
			return {
				jhgsee:[
					{
						name:'一年',
						gename:'华晨宇',
						cls:'act'
					},{
						name:'二年',
						gename:'华晨宇',
						cls:''
					},{
						name:'三年',
						gename:'华晨宇',
						cls:''
					},{
						name:'四年',
						gename:'华晨宇',
						cls:''
					},{
						name:'五年',
						gename:'华晨宇',
						cls:''
					},{
						name:'六年',
						gename:'华晨宇',
						cls:''
					},{
						name:'七年',
						gename:'华晨宇',
						cls:''
					},{
						name:'十年',
						gename:'华晨宇',
						cls:''
					}
				]
			}
		},
		components: {
			
		},
		methods: {
			kjhser (sd,idx) {
				uni.showLoading({
					title:"请稍候…"
				})
				setTimeout(a=>{
					if (idx==1){
						sd.cls='act'
					}else{
						sd.cls=''
					}
					uni.hideLoading()
				},2000)
			},
			jhhxdrer (idx) {
				let xcrtra = this.jhgsee[idx-1],
				xcrtrb = this.jhgsee[idx]
				this.$set(this.jhgsee, idx, xcrtra)
				this.$set(this.jhgsee, idx-1, xcrtrb)
			},
			hgsert(idx){
				let th=this
				uni.showModal({
					content:"确定删除吗？",
					success(e) {
						if(e.confirm){
							
							th.jhgsee.splice(idx,1)
						}
					}
				})
			}
		},
		mounted() {
			
		}
	}
</script>
<style scoped>
	.fgfdtyyxe{
		width: 70upx;
	}
	.fgfdtyyxe{
		line-height: 84upx;
	}
	.cdftyxzer{
		width: 44upx;
		margin-right: 20upx;
	}
	.kjjhxher{
		color: #FFD748;
		border: 1px solid #FFD748;
		display: inline-block;
		font-size: 26upx;
		padding: 4upx 20upx;
		border-radius: 20upx;
		width: 100upx;
		text-align: center;
	}
	.kjjhxher.ab{
		color: #AAAAAA;
		border-color: #AAAAAA;
	}
</style>
