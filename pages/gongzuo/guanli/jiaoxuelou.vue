<!-- 教学楼 -->
<template>
	<view>
		<view class="kjhnderr pd pm20">
			<view class="drrttser row fz26 pd">
				<view class="col pr">
					<icon type="search" size="16" class="kkjsert cz"></icon>
					<input placeholder="科室号" class="sdfsdtyee" />
				</view>
				<view class="ls dfgtye">
					<picker mode="date" @change="dertrety">
						<view>{{uuhe?uuhe:'年/月/日'}}</view>
					</picker>
				</view>
			</view>
		</view>
		<view class="pt20 bgff">
			<scroll-view scroll-x="true" class="sdfggtyze">
				<view class="fgdfgfytyu pm10" v-for="(sd,idx) in 10" :class="ideer==idx?'act':''" @tap="dsfdtt(idx)">{{idx+1}}</view>
			</scroll-view>
		</view>


		<swiper :current="ideer" class="dsfdrttye" :style="{height:hgjhgs+'px'}" @change="hhvbvgse">
			<swiper-item v-for="sd in 10">
				<scroll-view scroll-y="true" class="jhnxeeert h100">
					<loupage></loupage>
				</scroll-view>
			</swiper-item>
		</swiper>


		<!-- 	<view class="">
			<loupage></loupage>
		</view> -->

	</view>
</template>
<script>
	import loupage from "./components/loupage.vue"
	export default {
		data() {
			return {
				ideer: 0,
				uuhe: '',
				hgjhgs: 0
			}
		},
		components: {
			loupage
		},
		methods: {
			dsfdtt(idx) {
				this.ideer = idx
			},
			dertrety(e) {
				this.uuhe = e.detail.value
			},
			hhvbvgse(e){
				this.dsfdtt(e.detail.current)
			}
		},
		mounted() {
			this.hgjhgs = uni.getSystemInfoSync().windowHeight - 95
		}
	}
</script>
<style scoped>


	.fgdfgfytyu {
		display: inline-block;
		width: 100upx;
		text-align: center;
		line-height: 60upx;
		font-size: 32upx;
		position: relative;
	}

	.sdfggtyze {
		white-space: nowrap;
	}

	.fgdfgfytyu.act {
		color: #3DADEB;
	}

	.fgdfgfytyu.act::after {
		content: ' ';
		position: absolute;
		left: 0;
		bottom: 0upx;
		height: 4upx;
		width: 100%;
		background: #3DADEB;
	}

	.dsfdrttye {
		height: 100%;
	}
</style>
