<template>
    <view>
		<!--  -->
		<view class="jjhhdrtrts pd">
			<view class="bgsddrrt" v-if="gdse>70"></view>
			<view class="pr"  @tap="ht">
				<image :src="imgurl+'left.png'" mode="widthFix" class="leistrrt cz" v-if="gdse>70"></image>
				<image :src="imgurl+'left_cf.png'" mode="widthFix" class="leistrrt cz" v-else></image>
				<text class="fz32  ml10" :class="gdse>70?'z3':'cf'">我的活动</text>
			</view>
		</view>
		
        <view class="pr">
        	<image :src="imgurl+'bgtp.png'" class="w100 sdfstrxef cz" mode="aspectFill"></image>
			<view class="bhghsert">
				
			</view>
			<view class="jnnxertxe pd">
				<view class="cf fz40 mt180">
					中国青少年音乐比赛(CYMC)
				</view>
				<view class="mt20">
					<text class="cf sfgttxer">还有 5天结束</text>
				</view>
			</view>
        </view>
		<view class="jjhsdfdttx pd pt20">
			<view class="fz32 z3">
				活动详情
			</view>
			<view class="fz24 z3 mt20 dsfrtxerxe">
				全国27个省市同步开启，参与即送专属道具，百万奖金等你来拿！省冠直接晋级TGA大奖赛！周周有比赛，月月有冠军，人人有奖品！
				<text class="ml10">更多 <image :src="imgurl+'gengdda.png'" class="kjjdsfrtt cz" mode="widthFix"></image></text>
			</view>
			<view class="btm mt20 pt20">
				<uni-search-bar placeholder="搜索选手名称" class="dsfsttse" />
			</view>
		</view>
		<view class="pt20 pm20 pd row">
			<view class="col pr10">
				<view class="dfsttxeert " :class="iisd==0?'act':''" @tap="dfdfgdf(0)">
					最新
					 <image :src="imgurl+'gengddb.png'" class="oisderrt aa"></image>
					 <image :src="imgurl+'gengddc.png'" class="oisderrt ab"></image>
				</view>
			</view>
			<view class="col pl10">
				<view class="dfsttxeert" :class="iisd==1?'act':''" @tap="dfdfgdf(1)">
					票数 
					<image :src="imgurl+'gengddb.png'" class="oisderrt aa"></image>
					<image :src="imgurl+'gengddc.png'" class="oisderrt ab"></image>
				</view>
			</view>
		</view>
		
		<view class="mb20 pd" v-for="(sd,idx) in jhhgsd">
			<view class="bgff yj8">
				<view class="row pd pt20 pr">
					<image :src="imgurl+'banner.png'" class="yj usertxert"></image>
					<view class=" col pl20">
						<view class="fz28 z3 mt5">
							王境泽
						</view>
						<view class="z9 fz24 mt5">
							10分钟前
						</view>
					</view>
					<view class="pr cttxeert mt5">
						<button class="sdfdsrtt" open-type="share"></button>
						<image class="ml10  cz" :src="imgurl+'fenxiang.png'" mode="widthFix" @tap="fx"></image>
					</view>
				</view>
				<view class="mt20 z3 fz32 dianer pd">
					中国青少年音乐鉴赏
				</view>
				<view class="mt20 jjjdfrtxe pd">
					<view class="jjjhcxderx" v-for="(sd,idx) in 4">
						<image :src="imgurl+'banner.png'" class="yj4 w100 h100"></image>
					</view>
				</view>
				<view class="mt20 pd fz26 z6 dianer fdgtxer">
					和阳光的人在一起，心里就不会晦暗；和快乐的人在一起，嘴角就常带微笑嘴角就常带微笑嘴角就常带微笑嘴角就常带微笑嘴角就常带微笑；和进取的人在一
				</view>
				<view class="tr ls fz26 pd mt20">
					更多 <image :src="imgurl+'gengddd.png'" class="sdfttxertx cz"></image>
				</view>
				<view class="btm mt20 pt10 pm10 row pd">
					<view class="col dian fz26 z9 ddrtxweeert">
						北京师范附中 三年级 12班
					</view>
					<view class="">
						<text class="jkjhnmnxert pl20 " :class="sd.cls?'act':''" @tap="kjjhxdfd(sd)">
							<image :src="imgurl+'gengdde.png'" class="cz aa"></image>
							<image :src="imgurl+'gengddf.png'" class="cz ab"></image>
							6
						</text>
					</view>
				</view>
			</view>
		</view>
		
		
    </view>
</template>
<script>
    export default {
        data() {
            return {
				gdse:0,
				iisd:0,
				jhhgsd:[
					{
						cls:''
					},{
						cls:''
					}
				]
			}
        },
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
        components: {},
        methods: {
			dfdfgdf(idx){
				this.iisd = idx
			},
			kjjhxdfd(sd){
				if (sd.cls){
					sd.cls=""
				} else {
					
					sd.cls="act"
				}
			}
		},
		onPageScroll : function(e) { //nvue暂不支持滚动监听，可用bindingx代替
		this.gdse = e.scrollTop
		},
        mounted() {
			
		}
    }

</script>
<style  scoped>
	.sdfstrxef{
		height: 424upx;
	}
	.bhghsert{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.4);
	}
	.jnnxertxe{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 9;
	}
	.sfgttxer{
		background: rgba(255,255,255,0.3);
		font-size: 28upx;
		border-radius: 40upx;
		padding: 4upx 30upx;
	}
	.jjhsdfdttx{
		min-height: 400upx;
		background: #fff;
		position: relative;
		z-index: 100;
		border-top-left-radius: 48upx;
		border-top-right-radius: 48upx;
		
		margin-top: -80upx;
	}
	.dsfrtxerxe{
		line-height: 1.8;
	}
	.kjjdsfrtt{
		width: 28upx;
		height: 28upx;
		position: relative;
		top: -4upx;
	}
	.dfsttxeert{
		line-height: 60upx;
		height: 60upx;
		border-radius: 40upx;
		font-size: 28upx;
		text-align: center;
		background: #fff;
	}
	.dfsttxeert.act{
		
		background: #1A75F6;
		color: #fff;
	}
	.oisderrt{
		width: 20upx;
		height: 20upx;
		display: none;
	}
	.oisderrt.ab{
		display: inline-block;
	}
	.dfsttxeert.act .oisderrt.ab{
		display: none;
	}
	.dfsttxeert.act .oisderrt.aa{
		display: inline-block;
	}
	.usertxert{
		width: 80upx;
		height: 80upx; 
	}
	.cttxeert image{
		width: 138upx;
	}
	.jjjdfrtxe{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: 1fr;
		grid-column-gap: 20upx;
		grid-row-gap: 0px;
	}
	.jjjhcxderx{
		height: 152upx;
	}
	.fdgtxer{
		line-height: 1.8;
	}
	.sdfttxertx{
		width: 28upx;
		height: 28upx;
		position: relative;
		
		top: -4upx;
	}
	.jkjhnmnxert{
		border-radius: 32upx;
		background: #1A75F6;
		color: #fff;
		font-size: 26upx;
		width: 144upx;
		height: 50upx;
		line-height: 50upx;
		display: inline-block;
	}
	.ddrtxweeert{
		line-height: 50upx;
	}
	.jkjhnmnxert image{
		width: 38upx;
		height: 38upx;
		position: relative;
		top: -4upx;
		margin-right: 6upx;
	}
	.jkjhnmnxert image.ab,.jkjhnmnxert.act image.aa{
		display: none;
	}
	.jkjhnmnxert.act{
		background: #D9D9D9;
		color: #808080;
	}
	.jkjhnmnxert.act .z9{
		
	}
	.jkjhnmnxert.act image.ab{
		display: inline-block;
	}
</style>
