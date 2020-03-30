<template>
    <view>
		<view class="">
			<image src="../../../static/img/v2_q6qg01.jpg" class="w100 vtfdgdfg cz"></image>
		</view>
		<uni-list class="mt20">
			<uni-list-item title="501" thumb="../../../static/img/dianano.png" v-for="sd in 10" @tap="fgtyyuse"></uni-list-item>
		</uni-list>
		
    </view>
</template>
<script>
export default {
    data () {
        return {}
    },
    components: {},
    methods: {
		fgtyyuse(){
			uni.navigateTo({
				url:'/pages/gongzuo/guanli/jiaoxuelouxq'
			})
		}
	},
    mounted () {}
}
</script>
<style scoped>
	.vtfdgdfg{
		height: 300upx;
	}
</style>


