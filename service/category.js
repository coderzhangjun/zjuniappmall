import ZJrequest from "./index.js"

export function getDirectoryData() {
	return ZJrequest.request('/category')
}

