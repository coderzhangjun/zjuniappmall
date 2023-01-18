// 页面路径：store/index.js (Vue3 导入的语法，Vue2不是这样导入的哈)
import {
	createStore
} from 'vuex'
import {
	getDirectoryData,
	getDirectorySecondData
} from '../service/category.js'
const store = createStore({
	state: {
		directoryDatas: [],
		directorySecondDatas:[]
	},
	mutations: {
		add(state) {
			getDirectoryData().then(res => {
				state.directoryDatas = res.data.data.category.list
			})
		},
		addSecond(state,newDatas){
			state.directorySecondDatas = newDatas
			console.log(state.directorySecondDatas);
		}
	},
	actions: {
		directorySecondData(context,maitKey) {
			getDirectorySecondData(maitKey).then(res=>{
				// state.directorySecondDatas = res.data.list
				context.commit('addSecond',res.data.data.list)
				
			})
			// 
		}
	}
})

export default store
