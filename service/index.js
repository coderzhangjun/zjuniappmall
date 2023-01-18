const BASE_URL = "http://152.136.185.210:7878/api/hy66"

class ZJrequest {
	request(url,method,params){
		return new Promise((resolve,reject)=>{
			uni.request({
				url: BASE_URL + url,
				method:method || "GET",
				data:params,
				success:(res)=>{
					resolve(res)
				},
				fail:(err)=>{
					reject(err)
					console.log(err);
				}
			})
		})
	}
	get(url,params){
		return this.request(url,"GET",params)
	}
	post(url,params){
		return this.request(url,"POST",params)
	}
}

export default new ZJrequest()