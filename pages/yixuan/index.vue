<template>
	<view>
		<view class="jhggxseert dx_jz w100 row cen">
			<view class="col">
				<view class="xwerrtxe fz30 z6 pr cen   f_b cz " :class="kjhse==0?'act':''" @tap="kjhse=0">
					{{$store.state.lanser.SelectedSongs}}
				</view>
			</view>
			<view class="col">
				<view class="xwerrtxe fz30 z6 pr cen   f_b cz" :class="kjhse==1?'act':''" @tap="kjhse=1">
					{{$store.state.lanser.SingedSongs}}
				</view>
			</view>
		</view>

		<publiclist :isyhgg="1" v-if="kjhse==0"></publiclist>
		<publiclist v-if="kjhse==1"></publiclist>
	</view>
</template>
<script>
	import publiclist from "@/components/publiclist.vue"
	export default {
		data() {
			return {
				kjhse: 0
			}
		},
		components: {
			publiclist
		},
		methods: {

		},
		onLoad() {
			uni.setNavigationBarTitle({
			    title: this.$store.state.Selected
			})
		},
		mounted() {

		}
	}
</script>
<style scoped>
	.jhggxseert {
		top: 0;
	}

	.xwerrtxe {
		display: inline-block;
	}
</style>
