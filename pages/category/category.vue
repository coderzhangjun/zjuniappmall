<template>
	<view class="category">
		<scroll-view class="left scroll-Y" :scroll-top="scrollTop" scroll-y="true">
			<template v-for="(item,index) in this.$store.state.directoryDatas" :key="item.miniWallkey">
				<view class="scroll-view-item uni-bg-green" @click="itemClick(item.maitKey)">
					{{item.title}}
				</view>
			</template>
		</scroll-view>
		<scroll-view class="right scroll-Y" :scroll-top="scrollTop" scroll-y="true">
			<template v-for="(item,index) in this.$store.state.directorySecondDatas" :key="item.acm">
				<view class="item scroll-view-item uni-bg-green">
					<image :src="item.image" mode="aspectFit"></image>
					<view>{{item.title}}</view>
				</view>
			</template>
		</scroll-view>

	</view>
</template>

<script>
	import store from '@/store/index.js';
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				maitKey: 3627,
			}
		},
		created() {
			this.$store.commit('add')
			this.$store.dispatch('directorySecondData', this.maitKey)
		},
		methods: {
			itemClick(maitKey) {
				this.maitKey = maitKey
				this.$store.dispatch('directorySecondData', maitKey)
			}
		}
	}
</script>

<style lang="less">
	.scroll-Y {
		height: 100%;
	}



	.scroll-view-item {
		// height: 300rpx;
		// line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}



	.category {
		display: flex;
		width: 100%;

		.left {
			width: 160rpx;
		}

		.right {
			flex: 1;
			display: flex;
			flex-wrap: wrap;
			width: 100%;
			// background-color: red;
			.item {
				display: flex;
				flex-direction: column;
				// justify-content: center;
				align-items: center;
				width: 150rpx;
			}

			image {
				display: inline-block;
				width: 128rpx;
				height: 128rpx;
			}
		}
	}

	// .category {
	// 	display: flex;

	// 	// .left{
	// 	// 	width: 60rpx;
	// 	// }
	// 	// .right {
	// 	// 	flex: 1;

	// 		.item {
	// 			display: flex;
	// 			flex-direction: column;
	// 			justify-content: center;

	// 			// align-items: center;
	// 			image {
	// 				width: 128rpx;
	// 				height: 128rpx;
	// 			}
	// 		}

	// 		// }

	// 	}
</style>
