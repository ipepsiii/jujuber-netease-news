<template>
    <div id="app">
        <div class="container">
            <router-view/>
        </div>
        <Navbar>
            <router-link class="home-link" to="/">首页</router-link>
            <router-link class="about-link" to="/about">关于</router-link>
        </Navbar>
    </div>
</template>

<script>
  import Navbar from '@/components/Navbar'

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<style>

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        text-align: center;
        max-width: 768px;
        width: 7.5rem;
        background: #ffffff;
        margin: 0 auto;
    }

    .home-link::before {
        background: url(./assets/news.png);
        display: block;
        margin: 0 auto;
        content: '';
        background-size: cover;
        width: .48rem;
        height: .48rem;
    }

    .home-link.router-link-exact-active::before {
        background: url(./assets/news-active.png);
        display: block;
        margin: 0 auto;
        content: '';
        background-size: cover;
        width: .48rem;
        height: .48rem;
    }

    .about-link::before {
        display: block;
        margin: 0 auto;
        content: '';
        background: url(./assets/me.png);
        background-size: cover;
        width: .48rem;
        height: .48rem;
    }

    .about-link.router-link-exact-active::before {
        background: url(./assets/me-active.png);
        display: block;
        margin: 0 auto;
        content: '';
        background-size: cover;
        width: .48rem;
        height: .48rem;
    }

    .container {
        padding-bottom: 1rem;
    }

</style>
