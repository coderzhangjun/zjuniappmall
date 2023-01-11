<template>
	<view class="" ref="root">
		<homeSwipe></homeSwipe>
		<recommend :imageUrl="recommendDatas"></recommend>
		<image class="propular" src="../../static/images/home/recommend_bg.jpg" mode="widthFix"></image>
		<tab-control :barlist="['流行','新款','精选']"></tab-control>
		<shop :shopDatas="shopDatas"></shop>
	</view>
</template>

<script>
	import homeSwipe from "@/pages/home/cpns/home-swipe/home-swipe.vue"
	import tabControl from "../../components/tab-control/tab-control.vue"
	import recommend from "@/pages/home/cpns/recommend/recommend.vue"
	import shop from "@/pages/home/cpns/shop/shop.vue"
	import {
		getSwipeData,
		getShopData
	} from "@/service/home.js";
	export default {
		data() {
			return {
				recommendDatas: [],
				shopDatas: [],
				currentIndex: 1,
				typeArray: [{
						type: 'pop',
						page: 1
					},
					{
						type: 'new',
						page: 1
					}, {
						type: 'sell',
						page: 1
					}
				],
			}
		},
		components: {
			homeSwipe,
			tabControl,
			recommend,
			shop
		},
		created() {
			getSwipeData().then(res => {
				this.recommendDatas = res.data.data.recommend.list
			})
			// 列表数据
			getShopData(this.typeArray[this.currentIndex].type, this.typeArray[this.currentIndex].page).then(res => {
				let datas = res.data.data.list
				datas.forEach((item) => {
					this.shopDatas.push(item)
				})
				this.typeArray[this.currentIndex].page++
			})

		},
		onShow() {
			uni.$on('getCurrentIndex', (index) => {
				this.currentIndex = index
				this.shopDatas = []
				getShopData(this.typeArray[this.currentIndex].type, this.typeArray[this.currentIndex].page).then(
					res => {
						let datas = res.data.data.list
						datas.forEach((item) => {
							this.shopDatas.push(item)
						})
						this.typeArray[this.currentIndex].page++
					})
			})
		},
		onReachBottom() {
			getShopData(this.typeArray[this.currentIndex].type, this.typeArray[this.currentIndex].page).then(res => {
				let datas = res.data.data.list
				datas.forEach((item) => {
					console.log(item);
					this.shopDatas.push(item)
				})
				this.typeArray[this.currentIndex].page++
			})
		},
		methods: {

		}

	}
</script>

// import {
// onReachBottom
// } from "@/dcloudio/uni-app"
// import homeSwipe from "@/pages/home/cpns/home-swipe/home-swipe.vue"
// import tabControl from "../../components/tab-control/tab-control.vue"
// import recommend from "@/pages/home/cpns/recommend/recommend.vue"
// import shop from "@/pages/home/cpns/shop/shop.vue"
// import {
// ref
// } from "vue";
// import {
// getSwipeData,
// getShopData
// } from "@/service/home.js";
// // 推荐页数据
// let recommendDatas = ref()
// let shopDatas = ref({})
// getSwipeData().then(res => {
// console.log(res.data.data.recommend.list);
// recommendDatas.value = res.data.data.recommend.list
// })
// getShopData().then(res => {
// console.log(res.data.data.list);
// shopDatas.value = res.data.data.list
// })


<style>
	.propular {
		width: 100%;
		position: relative;
		right: -1rpx;

	}
</style>
