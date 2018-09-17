<template>
    <div class="tab-container">
        <TabbarItem inner-text="首页" part="news"/>
        <TabbarItem inner-text="体育" part="sports"/>
        <TabbarItem inner-text="娱乐" part="ent"/>
        <TabbarItem inner-text="科技" part="tech"/>
        <div class="tab tab-more">O</div>
    </div>
</template>

<script>
    import TabbarItem from './TabbarItem';

  export default {
    name: "Tabbar",
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
        justify-content: space-between;
    }



</style>