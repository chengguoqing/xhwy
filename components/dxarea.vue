<!-- 获取省市区 -->
<template>
	<view class="sfds_j_deert bgff">
		<view class="dsfdsf_deer pd">
			<view class="pr " v-for="(sd,idx) in peissdf" :class="sd.cls" @tap="qiehuaner(sd,idx)">{{sd.name}}</view>
			<view class="pr act" v-if="peissdf.length<=0">
				请选择
			</view>
		</view>
		<scroll-view scroll-y="true" class="ssd_deerttewt">
			<view class="pd pt20 pm20 z3  fz30 dfdsf_deerte" v-for="sd in getlist" @tap="gdsfdfr(sd)">
				{{sd.name}}
			</view>
		</scroll-view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				peissdf: [],
				getlist: [],
				jijibu: 0 //步骤 1市 2区
			}
		},
		components: {
		},
		methods: {
			qiehuaner(sd, idx) {
				this.peissdf.map(a => {
					a.cls = ""
				})
				this.jijibu = idx
				let sd_de = {}
				sd_de.type = idx
				sd_de.code = sd.code
				if (idx == 0) {
					this.peissdf = []
				}
				if (idx == 1) {
					this.peissdf[0].cls = "act"
					this.peissdf = [this.peissdf[0]]
					sd_de.code = this.peissdf[0].code
				}
				sd.cls = "act"
				if (idx == 0) {
					sd_de = ""
				}
				this.getdata(sd_de)
			},
			async getdata(data, call) { //获取数据
				this.getlist = await this.get("public/area", data)
				try {
					call()
				} catch (e) {
					//TODO handle the exception
				}
			},
			init() {
				this.peissdf = []
				this.getlist = [],
					this.jijibu = 0 //步骤 1市 2区
				this.getdata()
			},
			gdsfdfr(sd) {
				if (this.jijibu > 2) {
					return
				}
				this.jijibu++
				this.peissdf.map(a => {
					a.cls = ""
				})
				try {
					this.peissdf[this.jijibu].name = sd.name
					this.peissdf[this.jijibu].cls = "act"
					this.peissdf[this.jijibu].code = sd.code
				} catch (e) {
					this.peissdf.push({
						name: sd.name,
						cls: 'act',
						code: sd.code
					})
				}
				if (this.jijibu > 2) {
					this.$emit("closew", this.peissdf)
					this.init()
					return
				}
				let sd_de = {}
				sd_de.type = this.jijibu
				sd_de.code = sd.code
				this.getdata(sd_de)
			}
		},
		mounted() {
			this.init()
		}
	}
</script>
<style scoped>
	.dsfdsf_deer view.pr {
		display: inline-block;
		font-size: 28upx;
		color: #666;
		margin-right: 40upx;
		padding-bottom: 10upx;
	}
	.dsfdsf_deer view.pr.act:after {
		content: ' ';
		position: absolute;
		left: 0;
		right: 0;
		margin: auto;
		bottom: 0;
		height: 4upx;
		width: 60upx;
		background: #00a0e9;
	}
	.dfdsf_deerte {
		border-top: 1px solid #f8f8f8;
	}
	.dfdsf_deerte:active {
		background: #f8f8f8;
	}
	.ssd_deerttewt {
		height: 500upx;
	}
</style>