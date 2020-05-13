<!-- 奖状 -->
<template>
    <view class="btm pt100 bgff pm40 pd">
        <image :src="imgurl+'jiangzhuang.png'" class="w100" mode="widthFix"></image>
    </view>
</template>
<script>
    export default {
        data() {
            return {}
        },
		computed:{
			imgurl(){
				return this.$store.state.imgurl
			}
		},
        components: {},
        methods: {},
        mounted() {}
    }

</script>
<style  scoped>
  
</style>
