<template>
	<view class="bjhgser row cen">
		<view class="col" v-for="(sd,idx) in jhhbbde" @tap="jhgxer(idx)">
			<view class="jhjdrert">
				<image :src="idxdf ===idx?sd.icons:sd.icon" class="kjhxeeert cz"></image>
			</view>
			<view class="fz24" :class="idxdf ===idx?'ls':'z9'">
				{{sd.name}}
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: ['jhhbbde','idxdf'],
		data() {
			return {
			}
		},
		components: {},
		methods: {
			jhgxer(idx) {
				this.idxdf = idx
				this.$emit("call",idx)
			}
		},
		mounted() {}
	}
</script>
<style lang='scss' scoped>

</style>
