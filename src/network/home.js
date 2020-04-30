import {request,request1} from './request.js'
var brandId=416;
// 轮播图
export function getHomeMultidata(){
    return request({
        url:"/home/multidata"
    })
}
// 商品分类
export function getHomeGoods(){
    return request1({
        method:"post",
        url:"integralmall/app/query/goodsclassification/bybrandid",
        data:{
            brandId:brandId
        }
    })
}
// 商品分类详情
export function getGoodsList(id,page){
    return request1({
        method:"post",
        url:"integralmall/app/query/goodsinformation/bybrandid/andclassificationid",
        data:{
            brandId:brandId,
            classificationId:id,
            page:page,
            size:20,
        }
        // params: {
        //     type,
        //     page
        // }
    })
}

export function getBrand(){
    return request1({
        method:"post",
        url:"user/app/slideshow/query/brandid/",
        data:{
            "brand_id":brandId,
        }
        // params: {
        //     type,
        //     page
        // }
    })
}