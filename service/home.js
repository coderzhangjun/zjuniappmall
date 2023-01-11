import ZJrequest from "./index.js"

export function getSwipeData() {
	return ZJrequest.request('/home/multidata')
}

export function getShopData(type,page){
	console.log(type,page);
	return ZJrequest.get('/home/data',{
		type,
		page
		})
}
