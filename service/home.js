import ZJrequest from "./index.js"

export function getSwipeData() {
	return ZJrequest.request('/home/multidata')
}
