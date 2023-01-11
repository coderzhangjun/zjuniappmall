<template>
	<view class="" ref="root">
		<homeSwipe></homeSwipe>
		<recommend :imageUrl="recommendDatas"></recommend>
		<image class="propular" src="../../static/recommend_bg.jpg" mode="widthFix"></image>
		<tab-control :barlist="['流行','新款','精选']"></tab-control>
		<shop :shopDatas="typeArray[currentIndex].datas"></shop>
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
				currentIndex: 0,
				typeArray: [{
						type: 'pop',
						page: 1,
						datas: []
					},
					{
						type: 'new',
						page: 1,
						datas: []
					}, {
						type: 'sell',
						page: 1,
						datas: []
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
			// 请求列表数据
			getShopData(this.typeArray[this.currentIndex].type, this.typeArray[this.currentIndex].page).then(res => {
				let requestDatas = res.data.data.list
				requestDatas.forEach((item) => {
					this.typeArray[this.currentIndex].datas.push(item)
				})
			})

		},
		onShow() {
			uni.$on('getCurrentIndex', (index) => {
				this.currentIndex = index
				// 请求列表数据
				getShopData(this.typeArray[this.currentIndex].type, this.typeArray[this.currentIndex].page).then(
					res => {
						let requestDatas = res.data.data.list
						requestDatas.forEach((item) => {
							this.typeArray[this.currentIndex].datas.push(item)
						})
					})
			})
		},
		// 上拉加载跟多
		onReachBottom() {
			// 请求列表数据
			getShopData(this.typeArray[this.currentIndex].type, this.typeArray[this.currentIndex].page).then(
				res => {
					let requestDatas = res.data.data.list
					requestDatas.forEach((item) => {
						this.typeArray[this.currentIndex].datas.push(item)
					})
					// page+1
					this.typeArray[this.currentIndex].page++
				})
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.typeArray[this.currentIndex].page = 1
			// 只请求第一页的数据，把数据赋值
			getShopData(this.typeArray[this.currentIndex].type, this.typeArray[this.currentIndex].page).then(
				res => {
					let requestDatas = res.data.data.list
					this.typeArray[this.currentIndex].datas = requestDatas
				})
			uni.stopPullDownRefresh()
		}


	}
</script>

<style>
	.propular {
		width: 100%;
		position: relative;
		right: -1rpx;

	}
</style>
