<template>
    <div class="tab-container">
        <div ref="scrollBar" class="tab-main">
            <TabbarItem v-for="item in homePagePartListInfo" :innerText="item.name" :key="item.index"
                        :part="item.part"/>
        </div>
        <div @click="onModalToggle" class="tab tab-more"></div>
    </div>
</template>

<script>
  import TabbarItem from './TabbarItem';
  import {mapGetters} from 'vuex';

  export default {
    name: "Tabbar",
    props: [
      'onModalToggle'
    ],
    components: {
      TabbarItem
    },
    computed: {
      currentIndex() {
        return this.homePagePartListInfo.find(item => item.part === this.homePagePartSelection).index;
      },
      ...mapGetters(['homePagePartSelection', 'homePagePartListInfo'])
    },
    methods: {
      resize(v) {

        let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
        if (deviceWidth >= 750) {
          deviceWidth = 750
        }
        else if (deviceWidth <= 320) {
          deviceWidth = 320
        }
        let left = (v - 5) * 1.2 * deviceWidth / 7.5 > 0 ?
          (v - 5) * 1.2 * deviceWidth / 7.5 : 0;
        let currentScrollLeft = this.$refs.scrollBar.scrollLeft;
        if (currentScrollLeft >= left) {
          if (this.currentIndex < this.homePagePartListInfo.length - 5) {
            this.$refs.scrollBar.scrollLeft -= (this.homePagePartListInfo.length - 5 -v) * 1.2 * deviceWidth / 7.5;
          }
          return
        }
        if (v > 5) {
          this.$refs.scrollBar.scrollLeft = left;
        }
      }
    },
    watch: {
      currentIndex(v) {
        this.resize(v)
      }
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

    .tab-main {
        flex-shrink: 4;
        height: .46rem;
        white-space: nowrap;
        overflow-y: hidden;
        overflow-x: scroll;
    }

    ::-webkit-scrollbar {
        display: none;
    }

    .tab-more {
        height: .46rem;
        width: .5rem;
        flex-shrink: 1;
        background: url(../assets/menu.png);
        background-position: right;
        background-size: contain;
        background-repeat: no-repeat;
        margin-top: -.02rem;
    }


</style>