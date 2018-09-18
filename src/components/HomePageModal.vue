<template>
    <div class="modal-container">
        <div class="modal-nav-bar">
            <div class="modal-nav-bar-title">所有栏目</div>
            <div @click="onModalToggle" class="close-modal-btn"><!--关闭按钮--></div>
        </div>
        <div class="news-part-container">
            <div class="news-part-nav-bar">
                <div class="news-part-title">我的栏目</div>
                <div class="news-part-meta">点击进入栏目</div>
            </div>
            <div class="news-part-items">
                <NewsPartItem v-for="item in homePagePartListInfo()" :innerText="item.name" :key="item.key" :part="item.part" />
            </div>
        </div>
    </div>
</template>

<script>
    import NewsPartItem from '@/components/NewsPartItem';
    import {mapGetters} from 'vuex';

  export default {
    name: "HomePageModal",
    props: [
      'onModalToggle'
    ],
    data() {
      return {
        ...mapGetters(['homePagePartListInfo'])
      }
    },
    components: {
      NewsPartItem
    },
    mounted(){
    }
  }
</script>

<style>
    .modal-container {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 0;
        z-index: 1000;
        background-color: #ffffff;
    }

    .modal-nav-bar {
        height: 1rem;
        line-height: 1rem;
        font-size: .4rem;
    }

    .modal-nav-bar .modal-nav-bar-title {
        display: inline-block;
        vertical-align: middle;
    }

    .modal-nav-bar .close-modal-btn {
        display: inline-block;
        position: absolute;
        right: .3rem;
    }

    .modal-nav-bar .close-modal-btn::after {
        content: '';
        display: inline-block;
        background: url(../assets/close.png) no-repeat;
        vertical-align: middle;
        background-size: contain;
        width: .4rem;
        height: .4rem;
    }

    .news-part-container {

    }

    .news-part-nav-bar {
        height: 1rem;
        line-height: 1rem;
        width: 100%;
        padding: .1rem .2rem;
        text-align: left;
    }

    .news-part-nav-bar .news-part-title {
        display: inline-block;
        font-size: .33rem;
        margin-right: .2rem;
    }

    .news-part-nav-bar .news-part-meta {
        display: inline-block;
        font-size: .28rem;
        color: rgba(1,1,1,.4);
    }

    .news-part-items {
        padding: .05rem .1rem;
        text-align: center;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
    }




</style>