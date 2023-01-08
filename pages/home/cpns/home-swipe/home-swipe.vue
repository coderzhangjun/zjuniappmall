<template>
	<view class="swipe">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<template v-for="(item,index) in swipeUrl"> 
				<swiper-item>
					<image :src=item.image mode="widthFix"></image>
				</swiper-item>
			</template>
		</swiper>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	import {
		getSwipeData
	} from "../../../../service/home-swipe";

	const swipeUrl = ref()
	getSwipeData().then(res => {
		swipeUrl.value = res.data.data.banner.list
		console.log(swipeUrl.value);
	})
</script>

<style lang="scss">
	image{
		width: 100%;
	}
</style>
