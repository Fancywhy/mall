import {request} from "./request.js";

export function getHomeMultidata(){
	return request({
		url:'home/multidata'
	})
}

export function  getHomeGoods(type,page){
	return request({
		url:'/home/data',
		params:{
			type,
			page
		}
	})
}

let totalNums=[]
const nums1=[20,11,222]
const nums2=[111,11,333]

totalNums.push(...nums1)