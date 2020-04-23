<template>
    <tabbar>
        <!-- <tabbar-item path="/home" actionColor="green">
          <img slot="item-icon" src="~assets/img/tabbar/icon_lxsh_tab_sc_yes.png" alt="" >
          <img slot="item-icon-action" src="~assets/img/tabbar/icon_lxsh_tab_sc_yes.png">
          <div slot="item-text">首页</div>
        </tabbar-item>
        <tabbar-item path="/profile" >
          <img slot="item-icon" src="~assets/img/tabbar/icon_lxsh_tab_sc_no.png" alt="" >
          <img slot="item-icon-action" src="~assets/img/tabbar/icon_lxsh_tab_sc_yes.png">
          <div slot="item-text">我的</div>
        </tabbar-item> -->
        <template v-for="item in TabbarItemList">
          <tabbar-item :path="item.path" :actionColor="item.colorAction" :color="item.color">
             <img slot="item-icon" :src="item.img" alt="" >
            <img slot="item-icon-action" :src="item.imgAction">
            <div slot="item-text">{{item.text}}</div>
          </tabbar-item>
        </template>
      </tabbar> 
</template>
<script>
// const imga = require("~assets/img/tabbar/icon_lxsh_tab_sc_yes.png")
import Tabbar from '../../common/tabbar/Tabbar'
import TabbarItem from '../../common/tabbar/TabbarItem'
import MainColor from '../../../assets/css/base.css'
export default {
    name:"TabbarMain",
    components: {
        Tabbar,
        TabbarItem
    },
    data(){
        return{
          TabbarItemList:[
              {
                  path:"/home",
                  img:require("../../../assets/img/tabbar/icon_tab_upgrade_no.png"),
                  imgAction:require("../../../assets/img/tabbar/icon_tab_upgrade_yes.png"),
                  text:"首页",
                  colorAction:"blue",
                  color:"pink"
              },
              {
                  path:"/cart",
                  img:require("../../../assets/img/tabbar/icon_lxsh_tab_sc_no.png"),
                  imgAction:require("../../../assets/img/tabbar/icon_lxsh_tab_sc_yes.png"),
                  text:"分类",
                  colorAction:"red",
                  color:"#000"
              },
              {
                  path:"/category",
                  img:require("../../../assets/img/tabbar/icon_lxsh_tab_share_no.png"),
                  imgAction:require("../../../assets/img/tabbar/icon_lxsh_tab_share_yes.png"),
                  text:"购物车",
                  colorAction:"#000",
                  color:"pink"
              },
              {
                  path:"/profile",
                  img:require("../../../assets/img/tabbar/icon_lxsh_tab_mine_no.png"),
                  imgAction:require("../../../assets/img/tabbar/icon_lxsh_tab_mine_yes.png"),
                  text:"个人",
                  colorAction:"red",
                  color:"green"

              },
          
          ]
        }
    }
}
</script>
<style scoped>

</style>