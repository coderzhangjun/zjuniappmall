<template>
	<view>
		<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
			@scrolltolower="lower" @scroll="scroll">
			{{directoryDatas}}
			<!-- <template v-for="(item,index) in directoryDatas" :key="item.miniWallkey">
				<view class="scroll-view-item uni-bg-green">
					{{item.title}}
				</view>
			</template> -->
			<template v-for="item in directoryDatas">
				{{item}}
			</template>
		</scroll-view>

	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				directoryDatas: []
			}
		},
		onLoad() {
			console.log(this.$store.state.directoryDatas);
		},
		methods: {
			upper: function(e) {
				console.log(e)
			},
			lower: function(e) {
				console.log(e)
			},
			scroll: function(e) {
				console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			goTop: function(e) {
				// 解决view层不同步的问题
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				uni.showToast({
					icon: "none",
					title: "纵向滚动 scrollTop 值已被修改为 0"
				})
			}
		}
	}
</script>

<style lang="less">
	.scroll-Y {
		height: 100%;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
</style>
