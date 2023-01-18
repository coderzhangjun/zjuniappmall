<template>
	<view class="top-lists">
		<template v-for="(item,index) in this.$store.state.directorySecondDatas" :key="item.acm">
			<view class="item">
				<image :src="item.image" mode="aspectFill"></image>
				<view>{{item.title}}</view>
			</view>
		</template>
	</view>
</template>



<script>
	import store from '@/store/index.js';
	export default {
		data() {
			return {}
		},
		created() {
			console.log(this.$store.state.directorySecondData);
		},

	}
</script>

<style lang="less">
	.top-lists {
		display: flex;
		flex-wrap: wrap;
		width: 100%;

		.item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: calc(50% - 16rpx);
			overflow: hidden;

			image {
				// display: inline-block;
				width: 164rpx;
				height: 164rpx;
			}
		}
	}
</style>
