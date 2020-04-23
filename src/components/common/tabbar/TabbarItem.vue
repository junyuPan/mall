<template>
    <div class="tab-bar-item" @click="getItem">
        <div v-if="!isAction">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-action"></slot>
        </div>
        <div :style="actionStyle" >
            <slot name="item-text"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name:"TabbarItem",
    props:{
        path:String,
        actionColor:{
            type:String,
            default:'#333'
        },
        color:{
            type:String,
            default:'pink'
        }

    },
    data(){
        return{
            // isAction:true,
         
        }
    },
    computed:{
        isAction(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        actionStyle(){
            console.log(this.actionColor, this.isAction,!this.hasShow);
            
            return this.isAction ? {color: this.actionColor}:{color: this.$props.color}
        }
        
    },
    methods:{
        getItem(){
            this.$router.replace(this.path)
        }
            
    }
}
</script>
<style scoped>
 .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }
  .tab-bar-item img{
      margin-top: 3px;
      width: 24px;
      height: 24px;
  }
 

</style>