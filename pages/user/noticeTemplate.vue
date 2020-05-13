<!-- 选择 通知模板 -->
<template>
	<view class="bgff parent pd pm40 pt20">
		<view class="dsfdrtttye yj4" :class="idx==idxsd?'act':''" v-for="(sd,idx) in jhhds" @tap="kjhsd(idx)">
			{{sd}}
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				idxsd:7,
				jhhds:[
					'建班第一条','考后总结','防溺水','放假通知','暑期安全','家访通知','家长会','直接发',
				]
			}
		},
		components: {},
		methods: {
			kjhsd(idx){
				this.idxsd = idx
			}
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
	.parent {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-column-gap: 20upx;
		grid-row-gap: 40upx;
	}
	.dsfdrtttye{
		line-height: 140upx;
		text-align: center;
		background-color: #FC8956;
		font-size: 32upx;
		color: #fff;
		border: 1px solid #fff;
	}
	.dsfdrtttye:nth-child(2){
		background-color: #FCB656;
	}
	.dsfdrtttye:nth-child(3){
		background-color: #FC7656;
	}
	.dsfdrtttye:nth-child(4){
		background-color: #47D1A3;
	}
	.dsfdrtttye:nth-child(5){
		background-color: #1A75F6;
	}
	.dsfdrtttye:nth-child(6){
		background-color: #47D1A3;
	}
	.dsfdrtttye:nth-child(7){
		background-color: #47D1A3;
	}
	
	.dsfdrtttye:nth-child(8){
		background-color: #1A75F6;
	}
	.dsfdrtttye.act{
		border-color:#1A75F6 ;
		background: #fff;
		color: #1A75F6;
	}
</style>
