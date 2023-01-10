<template>
	<view class="shop">
		<template v-for="(item,index) in props.shopDatas" :key="index">
			<view class="item">
				<view class="">
					<image class="img" :src="item.showLarge.img" mode=""></image>
				</view>
				<view class="desc">{{item.title}}</view>
				<view class="bottom">
					<text class="price">￥{{item.price}}</text>
					<image class='icon' src="/../static/images/common/favor.png" />
					<text class="favCont">{{item.cfav}}</text>
				</view>
			</view>
		</template>
	</view>
</template>


<script setup>
	import {onPullDownRefresh,onReachBottom} from "@dcloudio/uni-app"
	const props = defineProps({
		shopDatas: {
			default: {},
			type: Object
		}
	})
	onPullDownRefresh(){
		console.log(222);
	}
	
</script>

<style lang="less">
	.shop{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 20rpx;
	}
.item{
	// flex: 1;
	width: 48%;
	.img{
		border-radius: 6rpx;
		width: 100%;
	}
	.desc{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.bottom{
		text-align: center;
		.price{
			color: #FF5777;
		}
		image{
			display: inline-block;
			margin: 0 4rpx;
			position: relative;
			top: 3rpx;
			width: 32rpx;
			height: 32rpx;
		}
	}
}
</style>
