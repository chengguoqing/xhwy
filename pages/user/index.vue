<template>
	<view class="pm40">

<usertop></usertop>
		<view class="pt20 pm20 fz34 pd">
			我发起的活动
		</view>
		<view class=" yj4 ov ">
			<uni-list >
				<uni-list-item @tap="hfs('/pages/user/wdhd')">
					<view class="z3 row">
						<text class="dian sdftxeert fz28">《一次体验活动》</text><text class="sfdsdttx f_b">进行中</text>
					</view>
				</uni-list-item>
				<uni-list-item @tap="hfs('/pages/user/wdhd')">
					<view class="z3 row">
						<text class="dian sdftxeert fz28">《一次体验活动一次体验活动一次体验活动一次体验活动一次体验活动一次体验活动一次体验活动一次体验活动》</text><text class="sfdsdttx f_b">进行中</text>
					</view>
				</uni-list-item>
				<uni-list-item @tap="hfs('/pages/user/wdhd')">
					<view class="z3 row">
						<text class="dian sdftxeert fz28">《一次体验活动》</text><text class="sfdsdttx f_b">进行中</text>
					</view>
				</uni-list-item>
			</uni-list>
		</view>
		<view class="pt20 pm20 fz34 pd">
			我加入的班级
		</view>
		<view class=" yj4 ov">
			<uni-list>
				<uni-list-item v-for="sd in 3" @tap="hfs('/pages/user/myClass')">
					<view class="z3 fz28">
						三年级 2班
					</view>
				</uni-list-item>
			</uni-list>
		</view>



		<view class="pt20 pm20 fz34 pd">
			我加入的比赛
		</view>
		<view class=" yj4 ov">
			<uni-list>
				<uni-list-item v-for="sd in 3" @tap="hfs('/pages/user/cansai')">
					<view class="z3 fz28">
						中国青少年音乐比赛(CYMC)
					</view>
				</uni-list-item>
			</uni-list>
		</view>

	</view>
</template>
<script>
	import usertop from "@/components/usertop.vue"
	export default {
		data() {
			return {
				
			}
		},
		components: {
			usertop
		},
		methods: {
			
		},
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		mounted() {}
	}
</script>
<style scoped>
	.sdftxeert {
		max-width: 600upx;
	}
</style>
