<template>
    <div> 
        <!-- #ifdef MP-WEIXIN -->
        <van-popup :show="jjhsd" @close="jjhsd=false" position="bottom" >
        	<view class="bgff pr pm40">
        		<view class="row pt20 pm20 pd">
        			 <icon type="clear" size="20" class="closderert" @tap="jjhsd=false"/>
					<view class="col tr">
						<van-button type="primary" size="small" @tap="fasong" >发布</van-button>
					</view>
				</view>
				<view class=" pd">
					<textarea v-model="commentContent" placeholder="请输入评论内容" class="dsfdstyyxe w100 fz30" />
				</view>
        	</view>
        </van-popup>
        <!-- #endif -->
    </div>
</template>
<script>
    export default {
		props:['activityId'],
        data() {
            return {
				commentContent:'',
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
			},
			async fasong () {
				let cshu = {}
				cshu.activityId = this.activityId
				cshu.commentContent = this.commentContent
				let res = await this.post('/activity/addActivityComment', cshu)
				this.jjhsd=false
			}
		},
        mounted() {
			
		}
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
