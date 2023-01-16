// 页面路径：store/index.js (Vue3 导入的语法，Vue2不是这样导入的哈)
import {
	createStore
} from 'vuex'
import {
	getDirectoryData
} from '../service/category.js'
const store = createStore({
	state: {
		directoryDatas: []
	},
	mutations: {
		add(state) {
			getDirectoryData().then(res => {
				state.directoryDatas = res.data.data.category.list
			})
			// state.count += 2
		}
	},
	actions: {
		addCountAction(context) {
			context.commit('add')
		}
	}
})

export default store
