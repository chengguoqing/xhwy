<!-- 成绩单 -->
<template>
	<view class="pt40 pd bgff btm">
		<scroll-view scroll-x="true">
			<view class="jkjnnxeert">

				<t-table @change="change">
					<t-tr>
						<t-th>学生</t-th>
						<t-th>语文 <image :src="imgurl+'downs.png'" class="dowdrtxw"></image> </t-th>
						<t-th>数学 <image :src="imgurl+'downs.png'" class="dowdrtxw"></image></t-th>
						<t-th>地理 <image :src="imgurl+'downs.png'" class="dowdrtxw"></image></t-th>
						<t-th>英语 <image :src="imgurl+'downs.png'" class="dowdrtxw"></image></t-th>
						<t-th>数学 <image :src="imgurl+'downs.png'" class="dowdrtxw"></image></t-th>
						<t-th>地理 <image :src="imgurl+'downs.png'" class="dowdrtxw"></image></t-th>
						<t-th>英语 <image :src="imgurl+'downs.png'" class="dowdrtxw"></image></t-th>
					</t-tr>
					<t-tr v-for="item in 10" :key="item.id">
						<t-td>独行工匠</t-td>
						<t-td>50</t-td>
						<t-td>50</t-td>
						<t-td>50</t-td>
						<t-td>50</t-td>
						<t-td>50</t-td>
						<t-td>50</t-td>
						<t-td>50</t-td>
					</t-tr>
				</t-table>

			</view>
		</scroll-view>
		
		<view class="mt140 cen fz26 pm40">
			<view class="pr f_b">
				扫码登录网页版上传成绩单，点击 <text class="ls">查看更多</text>
				<button type="default" class="mt40 sdfsdrttxer">分享到班级群</button>
			</view>
		</view>

	</view>
</template>
<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	export default {
		data() {
			return {
				
			}
		},
		components: {
			tTable,
			tTh,
			tTr,
			tTd
		},
		methods: {},
		mounted() {}
	}
</script>
<style scoped>
	.jkjnnxeert {
		width: 1600upx;
		min-height: 600upx;
	}
	.dowdrtxw{
		width: 20upx;
		height: 20upx;
	}
	.sdfsdrttxer{
		background: #1A75F6;
		height: 90upx;
		line-height: 90upx;
		border-radius: 80upx;
		color: #fff;
		font-size: 32upx;
	}
</style>
