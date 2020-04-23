<template>
    <div>
        <navbar class="home">
            <span slot="slot-count">首页</span>
        </navbar>
    </div>
</template>
<script>

import Navbar from '../../components/common/navber/Navbar'
export default {
    name:"Home",
    components:{
        Navbar
    }

}
</script>
<style scoped>
.home{
    background-color: var(--color-nav-background);
    color: var(--color-f);
}

</style>