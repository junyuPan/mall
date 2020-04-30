<template>
    <div class="goodsList">
      
      <good-list-item v-for="item in goodslist" :goos-item="item"/>
      
    </div>
</template>
<script>
import {getGoodsList} from 'network/home'
import GoodListItem from './GoodsItem.vue'
export default {
    name:"GoodssList",
    components:{
        GoodListItem
    },
    props:{
        goodslist:{
            type:Array,
            default(){
                return []
            }
        } 
    },
    data:{
        return(){
            
        }
    },
    methods:{
       
    },
}
</script>
<style scoped>
.goodsList{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding: 2px;
}

</style>