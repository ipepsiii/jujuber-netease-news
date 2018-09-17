<template>
    <div @click="changePart(part)" class="tab" :class="part === homePagePartSelection ? 'tab-active' : ''">{{innerText.trim()}}</div>
</template>

<script>

  import {mapGetters,mapActions} from 'vuex';

  export default {
    name: "TabbarItem",
    props: [
      'innerText',
      "part",
    ],
    computed: {
      ...mapGetters(['homePagePartSelection'])
    },
    methods: {
      ...mapActions(['changePart'])
    }
  }
</script>

<style scoped>


    .tab {
        width: 1.2rem;
        color: rgba(100, 100, 100, .8);
        font-weight: lighter;
        text-align: left;
    }

    .tab:first-child {
        padding-left: .1rem;
    }

    .tab:last-child {
        padding-right: .1rem;
    }

    .tab-active {
        color: #000000;
        font-weight: bolder;
    }

    .tab-active::after {
        content: '';
        display: inline-block;
        vertical-align: top;
        margin-left: 4px;
        height: 10px;
        width: 10px;
        background: radial-gradient(white, white 40%, #ff3333 0, #ff3333);
        border-radius: 50%;
    }

</style>