<!-- 课室申请 -->
<template>
	<view class="pd fgdfgfdtyy">
		<view class="pt20 pm20 z9 fz24">
			流程明细
		</view>
		<view class="bgff kkjlhjksdftty">
			<image src="../../../static/img/dfgdfgdfg.png" mode="widthFix" class="w100"></image>
		</view>



		<view class="pt20 pm20 z9 fz24">
			申请明细
		</view>
		<view class="bgff kkjlhjksdftty fz28">

			<view class="row dfgdftyx pr">
				<view class="fgdgfdty  z3">
					教学楼 <text class="red">*</text>
				</view>
				<view class="col ">
					<picker @change="bindPickerChangea" :value="index" :range="jaioxidr">
						{{jaioxidr[form.sffgdga]}}
					</picker>
				</view>
				<image src="../../../static/img/down.png" class="dsfdsftyxre"></image>
			</view>

			<view class="row dfgdftyx pr btm">
				<view class="fgdgfdty  z3">
					教学楼 <text class="red">*</text>
				</view>
				<view class="col ">
					<picker @change="bindPickerChangeb" :value="index" :range="jaioxidrb">
						{{jaioxidrb[form.sffgdgb]}}
					</picker>
				</view>
				<image src="../../../static/img/down.png" class="dsfdsftyxre"></image>
			</view>

			<view class="row dfgdftyx pr btm">
				<view class="fgdgfdty  z3">
					申请人 <text class="red">*</text>
				</view>
				<view class="col ">
					<input type="text" placeholder="请输入申请人" v-model="form.sffgdgc" class="dsftgrfyy w100 fz28" />
				</view>
			</view>
			<view class="row dfgdftyx pr btm">
				<view class="fgdgfdty  z3">
					联系电话 <text class="red">*</text>
				</view>
				<view class="col ">
					<input type="number" placeholder="请输入联系电话"v-model="form.sffgdgd" class="dsftgrfyy w100 fz28" />
				</view>
			</view>
			<view class="row dfgdftyx pr btm">
				<view class="fgdgfdty  z3">
					课室数量 <text class="red">*</text>
				</view>
				<view class="col ">
					<input type="number" placeholder="请输入申请的课室数量" v-model="form.sffgdge" class="dsftgrfyy w100 fz28" />
				</view>
				<view class="z6 z3">
					间
				</view>
			</view>

			<view class="row dfgdftyx pr btm">
				<view class="fgdgfdty  z3">
					申请日期
				</view>
				<view class="col ">
					<picker mode="date"  @change="bindPickerChangedase"  >
						{{form.sffgdgf}}
					</picker>
				</view>
			</view>


			<view class="row dfgdftyx pr btm">
				<view class="fgdgfdty  z3">
					开始时间
				</view>
				<view class="col ">
					<picker @change="bindPickerChangec" :value="index" :range="jaioxidrc">
						{{jaioxidrc[form.sffgdgg]}}
					</picker>
				</view>
				<image src="../../../static/img/down.png" class="dsfdsftyxre"></image>
			</view>


			<view class="row dfgdftyx pr btm">
				<view class="fgdgfdty  z3">
					结束时间
				</view>
				<view class="col ">
					<picker @change="bindPickerChanged" :value="index" :range="jaioxidrc">
						{{jaioxidrc[form.sffgdgh]}}
					</picker>
				</view>
				<image src="../../../static/img/down.png" class="dsfdsftyxre"></image>
			</view>





			<view class="row dfgdftyx pr btm">
				<view class="fgdgfdty  z3">
					申请理由 <text class="red">*</text>
				</view>
				<view class="col ">

					<textarea placeholder="请输入申请理由" class="dsfdsrtty w100 fz28 w100"></textarea>
				</view>
			</view>


		</view>

		<view class="pt20 pm20 z9 fz24">
			申请设备
		</view>
		<view class="bgff kkjlhjksdftty fz28">
			<view class="row dfgdftyx pr ">
				<view class="col">
					<view class="row">
						<view class="jjhdsdsrtt">
							投影仪
						</view>
						<view class="col">
							<view class="dfdstydrr">
								<uni-number-box :min="1" :max="9" :value="1" />
							</view>
						</view>
					</view>

					<view class="row">
						<view class="jjhdsdsrtt">
							话筒
						</view>
						<view class="col">
							<view class="dfdstydrr">
								<uni-number-box :min="1" :max="9" :value="1" />
							</view>
						</view>
					</view>
				</view>



				<view class="col">
					<view class="row">
						<view class="jjhdsdsrtt">
							投影仪
						</view>
						<view class="col">
							<view class="dfdstydrr">
								<uni-number-box :min="1" :max="9" :value="1" />
							</view>
						</view>
					</view>

					<view class="row">
						<view class="jjhdsdsrtt">
							话筒
						</view>
						<view class="col">
							<view class="dfdstydrr">
								<uni-number-box :min="1" :max="9" :value="1" />
							</view>
						</view>
					</view>
				</view>

			</view>
		</view>


		<view class="bgff kkjlhjksdftty mt20 fz28 pm20">
			<view class="fz28 z3 pd pt20 pm20">
				附件推文 <text class="z9 fz26 ml10">({{ujnjse.length}}/5)</text>
			</view>


			<view class="pl10">
				<view class="eerttser ml10 cz mt20 pr " v-for="(sd,idx) in ujnjse" @tap="closweer(idx)">
					<image :src="sd" class="fm"></image>
					<icon type="clear" color="red" class="dsfertxe"></icon>
				</view>

				<image src="../../../static/img/asddf.jpg" class="eerttser ml10 cz mt20" @tap="yjjhsd"></image>
			</view>
		</view>
		<view class="kjnmxeeretr fz32">
			提交
		</view>
	</view>
</template>
<script>
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	import uniSection from '@/components/uni-section/uni-section.vue'
	export default {
		data() {
			return {
				ujnjse: [],
				jaioxidr: ['请选择', '第一教学楼', '第二教学楼', '第三教学楼', '第四教学楼'],
				jaioxidrb: ['请选择', '校团委', '院团委'],
				jaioxidrc: ['请选择时间段', '第一节课（8：00-8：40）', '第二节课（8：50-9：30）'],
				form: {
					sffgdga: 0,
					sffgdgb: 0,
					sffgdgc: '',
					sffgdgd: '',
					sffgdge: '',
					sffgdgf: '请选择开始时间',
					sffgdgg: 0,
					sffgdgh: 0,
					sffgdgi: ''
				}
			}
		},
		components: {
			uniNumberBox,
			uniSection
		},
		methods: {
			bindPickerChangea(a) {
				this.form.sffgdga = a.detail.value
			},
			bindPickerChangeb(a) {
				this.form.sffgdgb = a.detail.value
			},
			bindPickerChangec(a) {
				this.form.sffgdgg = a.detail.value
			},
			bindPickerChanged(a) {
				this.form.sffgdgh = a.detail.value
			},
			bindPickerChangedase(a){
				this.form.sffgdgf= a.detail.value
			},
			yjjhsd() {
				let th = this
				uni.chooseImage({
					success: function(res) {
						res.tempFilePaths.map(a => {
							th.ujnjse.push(a)
						})
					}
				});
			},
			closweer(e) {
				this.ujnjse.splice(e, 1);
			}
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.kkjlhjksdftty {
		background: #fff;
		overflow: hidden;
		border-radius: 8upx;
	}

	.fgdgfdty {
		width: 180upx;
	}

	.dfgdftyx {
		line-height: 88upx;
		padding: 0 20upx;
	}

	.dsftgrfyy {
		height: 88upx;
	}

	.dsfdsrtty {
		height: 200upx;
		padding-top: 20upx;
	}

	.dsfdsftyxre {
		position: absolute;
		right: 20upx;
		top: 34upx;
		width: 22upx;
		height: 22upx;
	}

	.dfdstydrr {
		transform: scale(0.8);
		display: inline-block;
		margin-top: 10upx;
	}

	.jjhdsdsrtt {
		width: 110upx;
		text-align: right;
	}


	.eerttser {
		width: 150upx;
		height: 150upx;
		display: inline-block;
	}

	.eerttser image.fm {
		width: 100%;
		height: 100%;
	}

	.dsfsdft {
		background: #10FC97;
	}

	.dsfertxe {
		position: absolute;
		right: -10upx;
		top: -10upx;
	}

	.fgdfgfdtyy {
		padding-bottom: 120upx;
	}
</style>
