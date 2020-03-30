<template>
	<view class="sdfdtty">
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
		<view class="pd pt20 pm20 fz24 z9">
			使用情况
			<view class="f_b ml20 dffgdgty">
				<text class="xdrrty cz"></text>
				空闲
			</view>
			<view class="f_b ml20 dffgdgty ab">
				<text class="xdrrty cz"></text>
				已占
			</view>
		</view>
		<uni-collapse>
			<uni-collapse-item title="第一时间段（8：00-9：40）" thumb="../../../static/img/gfdgfdga.png" jhghgs="0">

			</uni-collapse-item>

			<uni-collapse-item title="第二时间段（10：00-11：40）" thumb="../../../static/img/gfdgfdga.png" jhghgs="1">
				<view class="pd fz30">
					<uni-list>
						<uni-list-item title="申请人" rightText="独行工匠" :showArrow="false" thumb="../../../static/img/gfdgfdgb.png"></uni-list-item>
						<uni-list-item title="申请单位" rightText="计算机学生会" :showArrow="false" thumb="../../../static/img/gfdgfdgc.png"></uni-list-item>
						<uni-list-item title="联系电话" rightText="13538190372" :showArrow="false" thumb="../../../static/img/gfdgfdgd.png"></uni-list-item>
						<uni-list-item title="申请设备" rightText="投影仪 * 2    音响*1" :showArrow="false" thumb="../../../static/img/gfdgfdge.png"></uni-list-item>
						<uni-list-item title="活动详情" rightText="计算机十大歌手" :showArrow="false" thumb="../../../static/img/gfdgfdgf.png"></uni-list-item>
					</uni-list>
				</view>
			</uni-collapse-item>
			<uni-collapse-item title="第三时间段（10：00-11：40）" thumb="../../../static/img/gfdgfdga.png" jhghgs="1">
				<view class="pd fz30">
					<uni-list>
						<uni-list-item title="申请人" rightText="独行工匠" :showArrow="false" thumb="../../../static/img/gfdgfdgb.png"></uni-list-item>
						<uni-list-item title="申请单位" rightText="计算机学生会" :showArrow="false" thumb="../../../static/img/gfdgfdgc.png"></uni-list-item>
						<uni-list-item title="联系电话" rightText="13538190372" :showArrow="false" thumb="../../../static/img/gfdgfdgd.png"></uni-list-item>
						<uni-list-item title="申请设备" rightText="投影仪 * 2    音响*1" :showArrow="false" thumb="../../../static/img/gfdgfdge.png"></uni-list-item>
						<uni-list-item title="活动详情" rightText="计算机十大歌手" :showArrow="false" thumb="../../../static/img/gfdgfdgf.png"></uni-list-item>
					</uni-list>
				</view>
			</uni-collapse-item>

			<uni-collapse-item title="第四时间段（8：00-9：40）" thumb="../../../static/img/gfdgfdga.png" jhghgs="0">

			</uni-collapse-item>
		</uni-collapse>

		<view class="fz26 z9 pt20 pm20 pd">
			设备信息
		</view>
		<uni-collapse>
			<uni-collapse-item title="投影仪" thumb="../../../static/img/sdfdsfa.png" >
					<view class="fz30 z3 pd pt20 pm20">
						<view class="">
							型号: G12382WERSTFZD2
						</view>
						<view class="mt20">
							型号: G12382WERSTFZD2
						</view>
					</view>
			</uni-collapse-item>
			<uni-collapse-item title="话筒" thumb="../../../static/img/sdfdsfb.png" >
					<view class="fz30 z3 pd pt20 pm20">
						<view class="">
							型号: G12382WERSTFZD2
						</view>
						<view class="mt20">
							型号: G12382WERSTFZD2
						</view>
					</view>
			</uni-collapse-item>
		</uni-collapse>

	</view>
</template>
<script>
	export default {
		data() {
			return {
				uuhe: ''
			}
		},
		components: {},
		methods: {
			dertrety(e) {
				this.uuhe = e.detail.value
			},
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '501'
			});
		},
		mounted() {}
	}
</script>
<style>
	.sdfdtty .uni-list{
		background:transparent !important;
	}
</style>
<style scoped>
	.xdrrty {
		width: 30upx;
		height: 30upx;
		border-radius: 50%;
		background: #00C656;
		display: inline-block;
		margin-right: 10upx;
	}

	.dffgdgty {
		color: #00C656;
	}

	.dffgdgty.ab {
		color: rgba(252, 10, 10, 1);
	}

	.dffgdgty.ab .xdrrty {
		background: rgba(252, 10, 10, 1);
	}
</style>
