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
  import TWEEN from '@tweenjs/tween.js';

  function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
  requestAnimationFrame(animate);

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
    watch: {
      currentIndex(v,ov) {
        let num = v - ov;
        let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
        if (deviceWidth >= 750) {
          deviceWidth = 750
        }
        else if (deviceWidth <= 320) {
          deviceWidth = 320
        }
        let currentScrollLeft = this.$refs.scrollBar.scrollLeft;
        let pxsToMove = num * 1.2 * deviceWidth / 7.5;
        let coords = { currentScrollLeft };
        let tween = new TWEEN.Tween(coords)
          .to({ currentScrollLeft: currentScrollLeft + pxsToMove}, Math.abs(num)*300)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onUpdate(()=> {
            this.$refs.scrollBar.scrollLeft = coords.currentScrollLeft;
          })
          .start();
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
        padding-left: .1rem;
        padding-right: .1rem;
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