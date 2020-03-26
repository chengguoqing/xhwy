<template>
	<view>
		<view class="fz32 z3">
			<text class="red">*</text>
			预约时间
		</view>
		<view class="sdfdfsderr mt20" v-for="sd in foersd">
			<label>
				<checkbox /><text class="fz28">{{sd.name}}</text>
			</label>
		</view>
		<view class="qc">

		</view>
		<view class="mt20 pt20">
			<view class="pt20 pm20 btm pr row">
				<label class="fz30 z3 lanhgsdert">
					<text class="red fz28">*</text>
					首付能力：
				</label>
				<view class="col">
					<picker mode="selector" :range="rangeseer" @change="ssdfdrtt">
						<view class="fz30 z3">{{rangeseer[ixer]}}</view>
					</picker>
				</view>
				<image src="../../static/img/right.png" class="rightxeert" mode="widthFix"></image>
			</view>
			<view class="pt20 pm20 btm pr row">
				<label class="fz30 z3 lanhgsdert">
					<text class="red fz28">*</text>
					月供能力：
				</label>
				<view class="col">
					<picker mode="selector" :range="rangesesan" @change="ssdfdrttsan">
						<view class="fz30 z3">{{rangesesan[ixsan]}}</view>
					</picker>
				</view>
				<image src="../../static/img/right.png" class="rightxeert" mode="widthFix"></image>
			</view>
			<view class="" v-for="sd in useer">
				<view class="pt20 pm20 btm pr row" v-if="sd.type == 'textarea'">
					<label class="fz30 z3 lanhgsdert">
						<text class="red fz28">*</text>
						{{sd.label}}：
					</label>
					<view class="col">
						 <textarea class="fz30 w100" :placeholder="sd.placeholder"/>
					</view>
				</view>
				<view class="pt20 pm20 btm pr row" v-if="sd.type == 'text'">
					<label class="fz30 z3 lanhgsdert">
						<text class="red fz28">*</text>
						{{sd.label}}：
					</label>
					<view class="col">
						<input type="text" value="" :placeholder="sd.placeholder" class="fz30" />
					</view>
				</view>
			</view>
			
		</view>
		<view class="btm pt40">
			<view class="sdfdfsderr pr10">
				<button class="fz30">重置</button>
			</view>
			<view class="sdfdfsderr pl10">
				<button type="primary" class="fz30">提交</button>
			</view>
			<view class="qc"></view>
		</view>
	</view>
</template>
<script>
	export default {
		props: ['tid'],
		data() {
			return {
				useer:[],
				foersd: [{
					name: '今天看房',
					value: ""
				}, {
					name: '明天看房',
					value: ""
				}, {
					name: '后天看房',
					value: ""
				}, {
					name: '大后天看房',
					value: ""
				}, {
					name: '周末有时间看房',
					value: ""
				}, {
					name: '工作日有时间看房',
					value: ""
				}, {
					name: '请联系我约时间看房',
					value: ""
				}],
				ixer: 0,
				ixsan: 0,
				rangeseer: [
					'请选择', '可一次性付款', '我最多首付5万', '最多8万', '最多12万', '最多15万', '40万以上'
				],
				rangesesan: [
					'请选择', '最多1000', '1500', '2000', '3000', '3500', '4500', '4500以上', '我不用贷款'
				]
			}
		},
		components: {},
		methods: {
			ssdfdrtt(e) {
				this.ixer = e.detail.value
			},
			ssdfdrttsan(e) {
				this.ixsan = e.detail.value
			},
			async getformsd (){
				const cahse = {}
				cahse.a = 'readput'
				cahse.tid = '2903753'
				let sderrt = await this.get(cahse,'comaction.php')
				this.useer= sderrt.inputa
			}
		},
		mounted() {
			this.getformsd()
		}
	}
</script>
<style scoped>

</style>
