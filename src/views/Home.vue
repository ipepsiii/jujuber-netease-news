<template>
    <div class="home">
        <Searchbar/>
        <Tabbar :onModalToggle="toggleModal"/>
        <PreloadBlock v-show="preLoadBlockShow"/>
        <div class="article-container">
            <Refresh :onRefresh="reload">
                <Article :key="item.docid" v-for="item in homePageArticleInfo" :article="item"/>
            </Refresh>
        </div>
        <transition name="pop">
            <HomePageModal :onModalToggle="toggleModal" v-show="modalShowStatus"/>
        </transition>
    </div>
</template>

<style>
    .home {
        background: #ffffff;
    }

    .fixed-body {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .pop-enter, .pop-leave-to {
        top: 1000px;
    }

    .pop-enter-active , .pop-leave-active{
        transition: top .4s ease-in-out;
    }

    .pop-enter-to, .pop-leave {
        top: 0;
    }

</style>

<script>
  // @ is an alias to /src
  import {mapGetters, mapActions, mapMutations} from 'vuex';
  import Searchbar from '@/components/Searchbar';
  import Tabbar from '@/components/Tabbar';
  import Article from '@/components/Article';
  import Refresh from '@/components/Refresh';
  import PreloadBlock from '@/components/PreloadBlock'
  import HomePageModal from '@/components/HomePageModal'

  export default {
    name: 'home',
    data() {
      return {
        scrollTop: 0
      }
    },
    computed: {
      preLoadBlockShow() {
        return !this.homePageArticleInfo.length;
      },
      ...mapGetters(['homePageArticleInfo','modalShowStatus'])
    },
    methods: {
      ...mapActions(['load', 'reload']),
      ...mapMutations(['toggleModal'])
    },
    components: {
      Searchbar, Article, Refresh, Tabbar, PreloadBlock, HomePageModal
    },
    mounted() {
      this.load();
    },
    watch: {
      modalShowStatus(newValue, oldValue) {
        if (newValue) {
          this.scrollTop = document.scrollingElement.scrollTop;
          document.body.classList.add('fixed-body');
          document.body.style.top = -this.scrollTop + 'px';
        }
        else if (!newValue){
          document.body.classList.remove('fixed-body');
          document.scrollingElement.scrollTop = this.scrollTop;
        }
      }
    }
  }
</script>
