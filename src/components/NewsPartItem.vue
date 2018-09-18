<template>
    <div @click="changePartAndClose(part)" class="tab" :class="part === homePagePartSelection ? 'tab-active' : ''">{{innerText.trim()}}</div>
</template>

<script>

  import {mapGetters,mapActions, mapMutations} from 'vuex';

  export default {
    name: "NewsPartItem",
    props: [
      'innerText',
      "part",
    ],
    computed: {
      ...mapGetters(['homePagePartSelection'])
    },
    methods: {
      changePartAndClose(part) {
        this.changePart(part);
        this.toggleModal();
      },
      ...mapActions(['changePart']),
      ...mapMutations(['toggleModal'])
    }
  }
</script>

<style scoped>


    .tab {
        font-size: .37rem;
        color: rgba(1,1,1,.6);
        padding: .1rem .1rem;
        margin: .2rem .1rem;
        flex-basis: 1.2rem;
        border: 1px solid rgba(1,1,1,.2);
        border-radius: 100rem;
    }


    .tab-active {
        color: #ff3333;
    }

</style>