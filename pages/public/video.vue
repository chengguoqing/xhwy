<template>
    <view>
         <video id="myVideo" :src="urls" class="dsfsdttse" autoplay></video>
    </view>
</template>
<script>
    export default {
        data() {
            return {
				urls:''
			}
        },
        components: {},
        methods: {},
		onLoad(e) {
			this.urls = e.urls
		},
        mounted() {}
    }

</script>
<style  scoped>
  .dsfsdttse{
	  position: fixed;
	  left: 0;
	  top: 0;
	  width: 100%;
	  height: 100%;
  }
</style>