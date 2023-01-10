import ZJrequest from "./index.js"

export function getSwipeData() {
	return ZJrequest.request('/home/multidata')
}

export function getShopData(){
	return ZJrequest.request('/home/data?type=pop&page=1')
}
