<template>
	<view class="bgff  pt20 pm20">
		<view class="pd">

			<textarea value="" placeholder="请输入审批意见" class="dfsrteeret" />
			</view>
		
		<view class="pl10">
			<view  class="eerttser ml10 cz mt20 pr "  v-for="(sd,idx) in ujnjse" @tap="closweer(idx)">
				<image :src="sd" class="fm"></image>
				<icon type="clear" color="red" class="dsfertxe"></icon>
			</view>
			
			<image src="../../../static/img/asddf.jpg" class="eerttser ml10 cz mt20" @tap="yjjhsd"></image>
		</view>
		
		
		<view class="kjnmxeeretr fz32 row">
			<view class="col" @tap="shenbpi">
				同意
			</view>
			<view class="col dsfsdft"  @tap="shenbpi">
				拒绝
			</view>
		</view>
    </view>
</template>
<script>
export default {
    data () {
        return {
			ujnjse:[]
		}
    },
    components: {},
    methods: {
		yjjhsd () {
			let th=this
				uni.chooseImage({
				    success: function (res) {
						res.tempFilePaths.map(a=>{
							th.ujnjse.push(a)
						})
				    }
				});
		},
		shenbpi () {
			uni.showModal({
				title:"温馨提示",
				content:"审核完成",
				'cancelText':'返回审批',
				confirmText:'分配场地',
				   success: function (res) {
				        if (res.confirm) {
				            uni.navigateTo({
				            	url:'/pages/gongzuo/shenhe/index'
				            })
				        } else if (res.cancel) {
				            uni.navigateTo({
				            	url:'/pages/gongzuo/shenhe/index'
				            })
				        }
				    }
			})
		},
		closweer (e){
			this.ujnjse.splice(e, 1); 
		}
	},
    mounted () {}
}
</script>
<style  scoped>
	.dfsrteeret{
		font-size: 30upx;
		width: 100%;
		border-radius: 8upx;
		height: 300upx;
		padding-top: 10upx;
	}
	.eerttser{
		width: 160upx;
		height: 160upx;
		display: inline-block;
	}
	.eerttser image.fm{
		width: 100%;
		height: 100%;
	}
	.dsfsdft{
		background: #10FC97;
	}
	.dsfertxe{
		position: absolute;
		right: -10upx;
		top: -10upx;
	}
</style>
