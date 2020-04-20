<template>
	<scroll-view scroll-y="true" class="h100">
		<view class="pt20">
			<view class="kjhgder">
				<text v-for="(sd,idx) in kjhder" :key="idx" @tap="hhsf(idx)" class="kjhggdert" :class="idxse==idx?'act':''">{{sd}}</text>
			</view>
			<view class="pd">
				<view class="parentse mt40">
					<navigator class="cdderrty pr" v-for="sd in 10" url="/pages/index/geshouxq">
						<image src="../../../static/img/fengmian.jpg" mode="aspectFill"></image>
						<view class="kjhxer">
							独行工匠
						</view>
					</navigator>
				</view>
			</view>
		</view>
	</scroll-view>
</template>
<script>
	export default {
		data() {
			return {
				idxse: 0,
				kjhder: [this.$store.state.lanser.All, this.$store.state.lanser.MaleSingerNew,this.$store.state.lanser.FemaleSingerNew,this.$store.state.lanser.Group]
			}
		},
		components: {

		},
		methods: {
			hhsf(idx) {
				this.idxse = idx
			}
		},
		mounted() {

		},
	}
</script>
<style scoped>
	.kjhgder {
		padding-left: 30upx;
	}

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
