import ZJrequest from "./index.js"

export function getDirectoryData() {
	return ZJrequest.request('/category')
}

export function getDirectorySecondData(maitKey) {
	return ZJrequest.get('/subcategory',{maitKey})
}

