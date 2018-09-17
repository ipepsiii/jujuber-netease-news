<template>
    <div class="article-container">
        <div class="one-pic-article" v-if="article.imgsrc3gtype === '1'">
            <div class="article-info">
                <div class="article-title">{{ article.title }}</div>
                <div class="article-meta">
                    {{ article.source }} {{ article.commentCount }}评论量
                </div>
            </div>
            <div :style="{ background: `url(${article.imgsrc})`, backgroundRepeat: 'no-reapt', backgroundSize: 'contain' }" class="article-img-container">

            </div>
        </div>
        <div class="double-pic-article" v-if="article.imgsrc3gtype === '2'">

        </div>
        <div class="triple-pic-article" v-if="article.imgsrc3gtype === '3'">

        </div>
    </div>
</template>

<script>
  export default {
    name: "Article",
    props: [
      'article'
    ]
  }
</script>

<style scoped>

    .article-container {
        height: 1.5rem;
        text-align: left;
        border-bottom: 1px solid rgba(200,200,200,.3);
        padding: .2rem .1rem;
    }

    .one-pic-article .article-info{
        display: inline-block;
    }

    .one-pic-article .article-info .article-title{
        width: 5rem;
        height: 1.1rem;
        font-weight: 400;
        line-height: 1.5;
        font-size: .35rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .one-pic-article .article-info .article-meta {
        font-size: .25rem;
        font-weight: 200;
        height: .3rem;
        color: rgba(100,100,100,.4);
    }

    .one-pic-article .article-img-container {
        display: inline-block;
        width: 2.2rem;
        height: 1.4rem;
    }


</style>