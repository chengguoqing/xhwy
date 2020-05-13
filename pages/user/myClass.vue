<!-- 我的班级 -->
<template>
	<view class="pm40">
		<view class="jjhhdrtrts pd">
			<view class="bgsddrrt" v-if="gdse>70"></view>
			<view class="pr" @tap="ht">
				<image :src="imgurl+'left.png'" mode="widthFix" class="leistrrt cz"></image>
				<text class="fz32 z3 ml10">我的班级</text>
			</view>
		</view>
		<usertop banji @showewe="dtsd=true"></usertop>
		<view class="btm bgff jhhxrert row">
			<view class="col cen sdfsdrtt pr" :class="idxdd==idx?'act':''" v-for="(sd,idx) in timnse" @tap="qiehnnmsd(idx)">
				{{sd}}
			</view>
		</view>
		<dongtai v-if="idxdd==0"></dongtai>
		<wdbj v-if="idxdd==1"></wdbj>

			<!-- #ifdef MP-WEIXIN -->
			
		<van-popup :show="dtsd" @close="dtsd=false" position="bottom">
			<view class="bgff pr dsfrttysew">
				<icon type="clear" size="20" class="closderert" @tap="dtsd=false" />
				<view class="pt20 pm20 fz32 cen">
					发布动态
				</view>
				<addtd></addtd>
			</view>
		</van-popup>
		
		<!-- #endif -->
	</view>
	</view>
</template>
<script>
	import usertop from "@/components/usertop.vue"
	import dongtai from "./components/dongtai.vue"
	import wdbj from "./components/wdbj.vue"
	import addtd from "./components/addtd.vue"
	export default {
		data() {
			return {
				dtsd:false,
				gdse: 0,
				idxdd: 0,
				timnse: ['班级动态', '我的班级'],
			}
		},
		components: {
			usertop,
			wdbj,
			dongtai,
			addtd
		},
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		methods: {
			qiehnnmsd(idx) {
				this.idxdd = idx
			}
		},
		onPageScroll: function(e) { //nvue暂不支持滚动监听，可用bindingx代替
			this.gdse = e.scrollTop
		},
		mounted() {}
	}
</script>
<style scoped>

</style>
