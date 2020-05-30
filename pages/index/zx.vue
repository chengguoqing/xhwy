<!-- 资讯 -->
<template>
    <view class="btm pd pt40 bgff pm40">
        <view class="fz34 z3">
        	{{res.informationSubject}}
        </view>
		
		<view class="mt40 fz26 z9 sdfrrxer" v-html="res.informationDesc">
			
		</view>
		<view class="tr fz26 z3 mt20 btm pt20">
			{{res.createdDate}}
		</view>
    </view>
</template>
<script>
    export default {
        data() {
            return {
				res:''
			}
        },
        components: {},
        methods: {
			async getdata(id){
				let res = await this.post('/information/informationDetail/'+id)
				res.data.informationDesc = res.data.informationDesc.replace(/\<img/gi, '<img style="max-width:100%;height:auto;display:block;"')
				let hhgde = new Date(res.data.createdDate)
				res.data.createdDate = this.time_d(hhgde.getTime())
				this.res = res.data
			}
		},
		onLoad(e) {
			this.getdata(e.id)
		},
        mounted() {}
    }

</script>
<style  scoped>
	.sdfrrxer{
		line-height: 1.8;
		text-indent: 40upx;
	}
</style>
