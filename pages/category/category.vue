<template>
	<view class="category">
		<scroll-view class="left scroll-Y" :scroll-top="scrollTop" scroll-y="true">
			<template v-for="(item,index) in this.$store.state.directoryDatas" :key="item.miniWallkey">
				<view class="title scroll-view-item uni-bg-green" @click="itemClick(item.maitKey)">
					{{item.title}}
				</view>
			</template>
		</scroll-view>
		<scroll-view class="right scroll-Y" :scroll-top="scrollTop" scroll-y="true">
			<view class="scroll-view-item uni-bg-green">
				<top-lists></top-lists>
			</view>
		</scroll-view>

	</view>
</template>

<script>
	import store from '@/store/index.js';
	import topLists from '@/pages/category/cpns/topLists.vue'
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
		components: {
			topLists
		},
		created() {
			this.$store.commit('add')
			this.$store.dispatch('directorySecondData', this.maitKey)
			console.log(this.maitKey);
		},
		methods: {
			itemClick(maitKey) {
				this.maitKey = maitKey
				console.log(maitKey);
				this.$store.dispatch('directorySecondData', this.maitKey)
			}
		}
	}
</script>

<style lang="less">
	.scroll-Y {
		height: 100%;
	}

	// .scroll-view-item {
	// 	height: 300rpx;
	// 	line-height: 300rpx;
	// 	text-align: center;
	// 	font-size: 36rpx;
	// }

	.category {
		display: flex;

		.left {
			width: 20%;

			.title {
				height: 150rpx;
				line-height: 150rpx;
				text-align: center;
				font-size: 36rpx;
				background-color: beige;
			}
		}
		.right{
			width: 80%;
		}
	}
</style>
