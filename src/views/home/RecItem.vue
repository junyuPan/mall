<template>
    <div class="recItem">
        <div v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image"/>
                <p>{{item.title}}</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:"RecItem",
    props:{
        recommends:{
            type:Array ,
            defalut(){
                return []
            }

        }
    }
}
</script>
<style scoped>
.recItem{
    display: flex;
}
.recItem div{
    flex: 1;
    text-align: center;
    

    border-bottom: 20px solid #bbb;
}
.recItem img{
    margin-top: 20px;
    width: 65px;
    height: 65px;
}
</style>