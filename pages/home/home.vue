<template>
	<homeSwipe></homeSwipe>
	<recommend :imageUrl="recommendDatas"></recommend>
	<image class="propular" src="../../static/images/home/recommend_bg.jpg" mode="widthFix"></image>
	<tab-control :barlist="['流行','新款','精选']"></tab-control>
</template>

<script setup>
	import homeSwipe from "@/pages/home/cpns/home-swipe/home-swipe.vue"
	import tabControl from "../../components/tab-control/tab-control.vue"
	import recommend from "@/pages/home/cpns/recommend/recommend.vue"
	import {
		ref
	} from "vue";
	import {
		getSwipeData
	} from "../../service/home.js"
	// 推荐页数据
	let recommendDatas = ref()
	getSwipeData().then(res => {
		console.log(res.data.data.recommend.list);
		recommendDatas.value = res.data.data.recommend.list
	})
</script>

<style>
	.propular {
		width: 100%;
		position: relative;
		right: -1rpx;

	}
</style>
