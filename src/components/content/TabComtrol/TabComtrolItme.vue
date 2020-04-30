<template>
    <div class="tab-comtrol">
        <div v-for="(item , index ) in titles" 
        class="tab-comtrol-item" 
         :class="{action : index === currentindex}"
         @click="getItem(index)">
            <span >{{item.classification}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"TabComtrol",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentindex:0
        }
    },
    methods:{
        getItem(index){
            this.currentindex=index;
            
            this.$emit("tabClick",index)
            
        }
    }
}
</script>
<style scoped>
.tab-comtrol{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
}
.tab-comtrol-item{
    flex: 1;
}
.tab-comtrol-item span{
    padding: 0 6px 6px;   
}
.action{
    color: var(--color-high-text);
}
.action span{
    border-bottom: 2px solid var(--color-high-text);
}
</style>