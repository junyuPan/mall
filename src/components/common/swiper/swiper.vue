<template>
    <div>
        <mt-swipe :auto="4000"  :show-indicators="false"  :speed="3000" :continuous="true"  class="swiper"  v-for="(item,index) in banner" >
            <mt-swipe-item   class="swiper-item">
                <a :href="item.link">
                    <img :src="item.image"  width="100%" height="120">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>