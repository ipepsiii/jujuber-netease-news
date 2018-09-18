<template>
    <div class="pre-container">
        <div class="pre-load pre-load-news"></div>
        <div class="pre-load pre-load-news"></div>
        <div class="pre-load pre-load-one"></div>
    </div>
</template>

<script>
  export default {
    name: "PreloadBlock"
  }


</script>

<style scoped>

    .pre-load-news {
        padding: .22rem;
        height: 1.46rem;
    }

    .pre-load-news:after {
        content: "";
        background: url(../assets/news-pre.png);
        -webkit-background-size: cover;
        background-size: cover;
        width: 100%;
        height: 100%;
        display: block;
    }

    .pre-load-one {
        height: 4rem;
        padding: .22rem;
        background: #fff;
        position: relative;
    }

    .pre-load-one:after {
        content: "";
        background: url(../assets/one-pre.png);
        -webkit-background-size: cover;
        background-size: cover;
        width: 100%;
        height: 100%;
        display: block;
    }
</style>