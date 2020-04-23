<template>
    <div id="Navbar">
        <div class="left"><slot name="slot-left"></slot></div>
        <div class="count"><slot name="slot-count"></slot></div>
        <div class="right"><slot name="slot-right"></slot></div>
    </div>
</template>
<script>
export default {
    name:"Navbar"
}
</script>
<style scoped>
#Navbar{
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.left{
    width: 60px;
}
.right{
    width: 60px;
}
.count{
    flex: 1;
}

</style>
