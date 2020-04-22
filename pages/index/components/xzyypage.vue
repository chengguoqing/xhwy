<template>
	<scroll-view scroll-y="true" class="h100">
		<publiclist :SongList="SongList" v-if="SongList"></publiclist>
	</scroll-view>
</template>
<script>
	
		import publiclist from "@/components/publiclist.vue"
	export default {
		props:['SongTypeId'],
		data() {
			return {
				SongList:[]
			}
		},
		components: {
			publiclist
		},
		methods: {
			async kkjsdddv(a,b,c,d){
				let sdeer = await this.post(a,b,c,d)
				this.SongList = JSON.parse(sdeer.MessageContent).SongList
			console.log(this.SongList)
			}
		},
		mounted() {
			let hhgsd = {}
			hhgsd.Value = null
			hhgsd.SongTypeId =this.SongTypeId
			hhgsd.PageNo = 1
			hhgsd.ListCount =20
			this.kkjsdddv("vod/server/sendmessage", "Search-Type",hhgsd, 2)
		}
	}
</script>
<style scoped>
	
</style>
