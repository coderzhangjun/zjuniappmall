<template>
	<view class="recommend">
		<template v-for="(item,index) in imageUrl" :key="index">
			<image :src="item.image" ></image>
		</template>
	</view>
</template>

<script setup>
	const propsData = defineProps({
		imageUrl: {
			default: [],
			type: Array
		}
	})
</script>

<style lang="scss">
.recommend{
	display: flex;
	justify-content: space-around;
	margin-top: 10rpx;
	image{
		width: 150rpx;
		height: 150rpx;
	}
}
</style>
