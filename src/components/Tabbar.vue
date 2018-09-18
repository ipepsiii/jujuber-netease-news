<template>
    <div class="tab-container">
        <TabbarItem inner-text="首页" part="news"/>
        <TabbarItem inner-text="体育" part="sports"/>
        <TabbarItem inner-text="科技" part="tech"/>
        <TabbarItem inner-text="独家" part="exclusive"/>
        <div @click="onModalToggle" class="tab tab-more"></div>
    </div>
</template>

<script>
    import TabbarItem from './TabbarItem';

  export default {
    name: "Tabbar",
    props: [
      'onModalToggle'
    ],
    components: {
      TabbarItem
    }
  }
</script>

<style scoped>

    .tab-container {
        display: flex;
        flex-flow: row;
        font-size: .33rem;
        padding-top: .1rem;
        height: .46rem;
        align-items: flex-start;
        justify-content: space-around;
    }

    .tab-more {
        height: .46rem;
        width: .5rem;
        background: url(../assets/menu.png);
        background-position: right;
        background-size: contain;
        background-repeat: no-repeat;
        margin-top: -.02rem;
    }



</style>