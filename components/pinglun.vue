<template>
    <div> 
        <!-- #ifdef MP-WEIXIN -->
        <van-popup :show="jjhsd" @close="jjhsd=false" position="bottom" >
        	<view class="bgff pr pm40">
        		<view class="row pt20 pm20 pd">
        			 <icon type="clear" size="20" class="closderert" @tap="jjhsd=false"/>
					<view class="col tr">
						<van-button type="primary" size="small" @tap="jjhsd=false" >发布</van-button>
					</view>
				</view>
				<view class=" pd">
					<textarea value="" placeholder="请输入评论内容" class="dsfdstyyxe w100 fz30" />
				</view>
        	
        	</view>
        </van-popup>
        <!-- #endif -->
    </div>
</template>
<script>
    export default {
        data() {
            return {
				jjhsd:false,
			}
        },
        components: {},
        methods: {
			close(){
				this.jjhsd = false
			},
			open(){
				this.jjhsd = true
			}
		},
        mounted() {}
    }

</script>
<style  scoped>
.closderert{
	position: relative;
	top: 0;
}
.dsfdstyyxe{
	padding-top: 20upx;
	height: 184upx;
	border-radius: 8upx;
	border:1px solid #e0e0e0;
}
</style>
