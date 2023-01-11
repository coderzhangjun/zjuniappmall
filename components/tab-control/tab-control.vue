<template>
	<view class="tabcontrol">
		<template v-for="(item,index) in barDatas.barlist " :key="index">
			<view class="item " @click="itemClick(index)">
				<text :class="{select:currentIndex === index}">{{item}}</text>
			</view>	
		</template>
	</view>
</template>

<script setup>

import { ref ,watch} from "vue";
	const barDatas = defineProps({
		barlist:{
			default:[],
			type:Array
		}
	})
	
	let currentIndex = ref(0)
	
	const itemClick = (index)=>{
		currentIndex.value = index
		
	}
	watch(currentIndex,(newvalue)=>{
		uni.$emit('getCurrentIndex',newvalue)
	})
		
	
</script>

<style lang="less">
	.tabcontrol{
		display: flex;
		.item{
			flex: 1;
			text-align: center;
			text{
				display: inline-block;
				box-sizing: border-box;
				padding: 8rpx ;
				// border-bottom: 4rpx solid red;
				
			}
			.select{
				border-bottom: 4rpx solid red;
			}
		}
		
	}
	
</style>