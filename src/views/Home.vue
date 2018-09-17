<template>
  <div class="home">
    <Searchbar/>
    <Tabbar />
    <div class="article-container">
      <Refresh :onRefresh="reload">
      <Article :key="item.docid" v-for="item in homePageArticleInfo" :article="item"/>
      </Refresh>
    </div>
  </div>
</template>

<style>
  .home {
    background: inherit;
  }
</style>

<script>
// @ is an alias to /src
import { mapGetters, mapActions } from 'vuex';
import Searchbar from '@/components/Searchbar';
import Tabbar from '@/components/Tabbar';
import Article from '@/components/Article';
import Refresh from '@/components/Refresh';

export default {
  name: 'home',
  computed: {
    ...mapGetters(['homePageArticleInfo'])
  },
  methods: {
    ...mapActions(['load','reload'])
  },
  components: {
    Searchbar,Article,Refresh,Tabbar
  },
  mounted(){
    this.load()
  }
}
</script>
