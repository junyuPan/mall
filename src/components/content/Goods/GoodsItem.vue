<template>
    <div class="goodsItems">
        <img :src="GoosItem.thumbnail">
       <div class="goods-info">
            <p>{{GoosItem.goodsName}}</p>
            <span class="price">{{GoosItem.price}}</span>
            <span class="collect">{{GoosItem.price}}</span>
       </div>
    </div>
</template>
<script>
export default {
    name:"GoodsItem",
    props:{
        GoosItem:{
            type:Object,
            default(){
                return {}
            }
        }
    }

}
</script>
<style scoped>
.goodsItems{
    position: relative;
    padding-bottom: 40px;
    background: pink;
    width: 48%;
}
.goodsItems img{
    width: 100%;
    border-radius: 5px;
}
.goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
   overflow: hidden;
   text-align: center;
}
.goods-info p{
    overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
   margin-bottom: 3px;

}
.goods-info .price{
    color: var(--color-high-text);
    margin-right: 20px;
}
.goods-info .collect{
    position: absolute;
}
.goods-info .collect::before{
    content: "";
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/home/recommend_bg.jpg") 0 0/14px 14px;
}
</style>