<template>
    <div>
        <view class="bgkkjsdrer"></view>
		<view class="pr">
			<view class="kdsfsdt cen">
				<image :src="imgurl+'phonepage.png'" class="loofrrty" mode="widthFix"></image>
			</view>
			<view class="mt200 cen z9 fz30">
				学海无涯，我们为你保航
			</view>
			<view class="mt20 pd">
				<button class="jjjdrrtt fz30" open-type="getUserInfo" @getuserinfo="getuserrtw">
				<image :src="imgurl+'weixin.png'" class="weixeddr cz mr10"></image>	微信登陆获取手机号
				</button>
			</view>
		</view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
				urls:''
			}
        },
        components: {},
        methods: {
			getuserrtw(e){
				
			}
		},
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
		onLoad(e) {
			
		},
        mounted() {}
    }

</script>
<style  scoped>
	.bgkkjsdrer{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background: #fff;
	}
	.kdsfsdt{
		margin-top: 200upx;
	}
	.loofrrty{
		width: 636upx;
	}
	.jjjdrrtt{
		background: #19AD56;
		color: #fff;
		height: 90upx;
		line-height: 90upx;
	}
	.weixeddr{
		width: 52upx;
		height: 52upx;
	}
</style>
