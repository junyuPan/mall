<template>
    <div>
        <navbar class="home">
            <span slot="slot-count">首页</span>
        </navbar>

        <!--  Swiper -->
        <div class="swiper-container" >
            <div class="swiper-wrapper"  >
                  
                <div class="swiper-slide"   v-for="(item,index) in banner" :key="index"  >
                        <a :href="item.link" > 
                            <img :src="item.image"  width="100%"  height="120"/>
                        </a>
                  
                    <!-- {{item.width}} -->
                
                    <!-- {{ item.width}} -->
                    <!-- <img src="../../assets/img/tabbar/icon_lxsh_tab_mine_no.png"/> -->
                </div>
                 <!-- <div class="swiper-slide" ></div>
                <div class="swiper-slide" ></div>
                <div class="swiper-slide" ></div>
                <div class="swiper-slide" ></div> -->
             
               
            </div>
              <div class="swiper-pagination"></div> 
              <!-- <div class="swiper-button-next"></div>  
              <div class="swiper-button-prev"></div> -->
        </div>
        <recitem :recommends="recommend"></recitem>

        <recommend></recommend>
        <tab-comtrol-item 
        :titles="classify"
        @tabClick="tabClick"
         class="tab-item"
        
        />

        <goods-list :goodslist= "getGoodLists" />
        


        <ul>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
            <li>测试</li>
        </ul>



    </div>
</template>
<script>
import Navbar from 'components/common/navber/Navbar';

import {getHomeMultidata,
        getHomeGoods,
        getGoodsList
        } from 'network/home.js';
import Swiper from 'components/common/swiper/swiper.js';   
import Recitem from './RecItem.vue'
import Recommend from './recommend.vue'
import TabComtrolItem from 'components/content/TabComtrol/TabComtrolItme.vue'
import GoodsList from 'components/content/Goods/GoodsList.vue'




export default {
    name:"Home",
    components:{
        Navbar,
        Recitem,
        Recommend,
        TabComtrolItem,
        GoodsList
    },
    data(){
        return{
            indexkey:0,
            banner:[],
            dKeyword:[],
            keywords:[],
            recommend:[],
            classify:[],
            goods:{
                "pop":{page:0,list:[]},
                "new":{page:0,list:[]},
                "sell":{page:0,list:[]}
            },
            getGoodLists:[],
            

        }
    },
    created(){
            this.getHomeMultidata();
            
            this.getHomeGoods();
            this.getGoodsList(808,1)
      
            
                        
    },
    mounted(){
        console.log("mounted");
     
        
        console.log("end mounted");
    },
    methods:{
        //事件
        tabClick(index){
            switch(index){
                case 0:
                     this.getGoodsList(808,1);
                    break;
                case 1:
                     this.getGoodsList(809,1);
                    break;
                case 2:
                     this.getGoodsList(810,1);
                    break    
            }
            
        },
        //网络请求
        getHomeMultidata(){
             getHomeMultidata().then( res =>{
            // console.log(res);
                this.banner= res.data.banner.list;
                this.dKeyword= res.data.dKeyword.list;
                this.keywords= res.data.keywords;
                this.recommend= res.data.recommend.list;
                console.log("banner",this.banner); 
                console.log("dKeyword",this.dKeyword);
                console.log("keywords",this.keywords);
                console.log("recommend",this.recommend);   
                this.$nextTick(()=>{ 
                    console.log(this.banner,'111')
                    this.showSwiper();
                })
                // this.showSwiper();
                
            }).catch(err=>{
                // config.faillure(err)
                console.log(err);
                
            })
        },
        getHomeGoods(){
            // const page = this.goods[type].page+1;
            getHomeGoods()
            .then( res =>{
                    this.classify = res.result.content.filter(item => (item.id < 811));
                    // this.indexkey=this.classify[0].id;
                   console.log("分类开始getHomeGoods:",this.classify );
            })
            .catch(err =>{
                console.log(err);
            })
        },
        showSwiper(){
            new Swiper ('.swiper-container', {
                pagination: {
                el: '.swiper-pagination',
                },
                autoplay: true,
                initialSlide :0,
                autoplay : {
                    delay:3000,
                },
                // grabCursor : false,
                //  parallax : true,
                //  virtualTranslate : true,// 定
                //  autoHeight: true, //高度随内容变化

                pagination: {
                    el: '.swiper-pagination',
                },
                // uniqueNavElements: false,
            });
        },
        getGoodsList(id,page){
            getGoodsList(id,page)
            .then(res=>{
                this.getGoodLists=res.result.content;
                console.log("getGoodsList",this.getGoodLists);
            })
            .catch(err=>{
                console.log(err);
                
            });
        }


    }

}
</script>
<style scoped>


.home{
    background-color: var(--color-nav-background);
    color: var(--color-f);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}



    .swiper-container {
      width: 100%;
      height: 120px;
      margin-top: 40px;
    }
   .tab-item{
       position: sticky;
       top: 39px;
       background-color: #fff;
       z-index: 9;
   }

</style>