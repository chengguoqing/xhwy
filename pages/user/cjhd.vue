<template>
	<view class="pd bgff pt40 btm pm40">
		<view class="">
			<view class="fz30">
				<text class="red cz">*</text>
				<text class="ml10">活动主题</text>
			</view>
			<input type="text" value="" placeholder="请输入活动主题" class="fz30 userinput" />
		</view>
		<view class="mt30">
			<view class="fz30">
				<text class="red cz">*</text>
				<text class="ml10">活动详情</text>
			</view>
			<textarea value="" placeholder="请输入活动具体内容" class="w100 fz30 userinput ab" />
			</view>
		<view class="mt30">
			<view class="fz30">
				<text class="ml10">图片</text>
			</view>
			<view class="mt20">
				<view class="jjhghsedert pr fl mr10 mb20" v-for="(sd,idx) in tupoojs">
					<image :src="sd" class="w100 h100 " ></image>
					<image :src="imgurl+'close.png'" class="cloasert" @tap="clossert(idx)"></image>
				</view>
				
				<view class="jjhghsedert fl" @tap="upimgsd">
					<image :src="imgurl+'upicon.png'" class="kjnxertrt cz" ></image>
				</view>
				<view class="qc">
					
				</view>
			</view>
		</view>
		
		<view class="mt30">
			<view class="fz30 row">
				<text class="ml10">标签</text>
				<view class="col tr">
					<text class="dsfdsrtfs" @tap="addbiaoq">添加标签</text>
				</view>
			</view>
			<view class="mt20">
				<view class="kjhnxderrt" v-for="(sd,idx) in xzbq">
					{{sd}}
					<image :src="imgurl+'close.png'" class="cloasert" @tap="gunhas(idx)"></image>
				</view>
			</view>
		</view>
		
			<view class="mt30 w100 fz30 userinput ac row pr20" @tap="kaisjdd(1)">
				活动开始时间
				<view class="col tr">
					<text class="z3 " v-if="kkjasda">{{kkjasda}}</text>
					<text class="z9 " v-else>请选择</text>
					<image :src="imgurl+'right.png'" class="dsfsdrtt cz" mode="widthFix"></image>
				</view>
			</view>
			
			
			<view class="mt30 w100 fz30 userinput ac row pr20"  @tap="kaisjdd(2)">
				活动结束时间
				<view class="col tr">
					<text class="z3 " v-if="kkjasdb">{{kkjasdb}}</text>
					<text class="z9 " v-else>请选择</text>
					<image :src="imgurl+'right.png'" class="dsfsdrtt cz" mode="widthFix"></image>
				</view>
			 </view>
			 
			<view class="mt70">
				<view class="kjhnxeertx row">
					<view class="fdgdttxeer">
						保存并预览
					</view>
					<view class="col dfrtxeertr">
						立即发布
					</view>
				</view>
			</view>
		<!-- 选择时间 -->
		<van-popup :show="jjhsd" @close="jjhsd=false" position="bottom" >
			<view class="bgff pr">
				<van-datetime-picker
				  title="请选择活动开始时间"
				  type="datetime"
				  :min-date="minDate"
				  :max-date="maxDate"
				  @cancel="jjhsd=false"
				  @confirm="querener"
				/>
			</view>
		</van-popup>
		<!-- 添加标签 -->
		<!-- #ifdef MP-WEIXIN -->
		<van-popup :show="biaoqian" @close="biaoqian=false" position="bottom" >
			<view class="bgff pr dsfrttysew">
				 <icon type="clear" size="20" class="closderert" @tap="biaoqian=false"/>
				<view class="pt20 pm20 fz32 cen">
					添加标签
				</view>
				<view class="pd">
					<view class="pr">
						<input type="text" v-model="kjhsdd" placeholder="请输入自定义标签" class="fz30 userinput" />
						<view class="quiejdertr" @tap="quenert">
							确定
						</view>		
					</view>
					<view class="mt30" v-if="jhhsdrtr.length>0">
						<view class="fz30 row">
							<text class="ml10">标签</text>
						</view>
						<view class="mt20">
							<view class="kjhnxderrt " :class="xassd==idx?'':'acte'" v-for="(sd,idx) in jhhsdrtr" @tap="jjhsddf(idx,sd)" v-if="idx<8">
								{{sd}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</van-popup>
		<!-- #endif -->
		
	</view>
</template>
<script>
	export default {
		data() {
			return {
				ijhhghsd:1, // 1=开始时间 2结束时间
				jjhsd:false,
				minHour: 10,
				maxHour: 20,
				minDate: new Date().getTime(),
				maxDate: new Date(2030, 10, 1).getTime(),
				currentDate: new Date().getTime(),
				kkjasda:'',
				kkjasdb:'',
				tupoojs:[],
				biaoqian:false,
				xassd:0,
				kjhsdd:'',
				xzbq:[],// 用户选择的标签
				jhhsdrtr:[] // 缓存的标签
			}
		},
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		components: {},
		onLoad(e) {
			if (e.tys==2){
				uni.setNavigationBarTitle({
					title:'编辑活动'
				})
				this.getxq(e.id)
			}
		},
		methods: {
			async getxq(id){
				let res = await this.post('/activity/activityDetail/'+id)
				let resd = res.data
			},
			onInput(event) {
			    this.currentDate = event.detail
			  },
			  // 活动时间按钮触发 1=开始时间 2结束时间
			  kaisjdd(ty){
				  this.ijhhghsd = ty
				  this.jjhsd = true
			  },
			  // 选择时间的确认按钮触发
			  querener (e){
				  if (this.ijhhghsd == 1) {
					  this.kkjasda = this.time_d(e.detail/1000)
				  } else  if (this.ijhhghsd == 2)  {
					  this.kkjasdb = this.time_d(e.detail/1000)
				  }
				  this.jjhsd=false
			  },
			  // 上传图片按钮触发 999
			  upimgsd() {
				  uni.chooseImage({
				  	count:1,
					success: (a) => {
						this.tupoojs.push(a.tempFilePaths[0])
					}
				  })
			  },
			  clossert(idx){
				  uni.showModal({
				  	title:"确认删除该图片吗？",
					success: (e) => {
						if (e.confirm) {
							this.tupoojs.splice(idx,1)
						}
					}
				  })
			  },
			  jjhsddf(idx,sd){
				  this.xassd = idx
				  this.kjhsdd = sd
			  },
			  // 标签的确认按钮触发
			  quenert(){
				  let sddr = this.kjhsdd
				  this.jhhsdrtr.unshift(sddr)
				  this.xzbq.push(sddr)
				  this.kjhsdd = ''
				  this.biaoqian = false
				  uni.setStorageSync('biaoqian',this.jhhsdrtr)
			  },
			  addbiaoq(){
				   this.jhhsdrtr = uni.getStorageSync('biaoqian') || []
				   this.biaoqian = true
			  },
			  // 删除标签按钮触发
			  gunhas (idx) {
				  uni.showModal({
				  	title:"确认删除该标签吗？",
						success: (e) => {
				  			if (e.confirm) {
				  				this.xzbq.splice(idx,1)
				  			}
				  	}
				  })
			  }
		},
		mounted() {}
	}
</script>
<style scoped>
	
</style>
