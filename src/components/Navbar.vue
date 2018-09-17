<template>
    <div id="nav">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style>

    #nav {
        position: fixed;
        left: auto;
        right: auto;
        bottom: 0;
        height: .9rem;
        width: 7.5rem;
        max-width: 768px;
        display: flex;
        flex-flow: row;
        align-items: flex-end;
        justify-content: space-around;
        border-top: 1px solid rgba(200,200,200,.2);
    }

    #nav a {
        font-weight: bold;
        background: #ffffff;
        font-size: .24rem;
        color: rgba(50, 50, 50, .6);
        text-decoration: none;
        display: block;
        text-align: center;
        height: 100%;
        padding-top: .1rem;
        line-height: 2;
        width: 100%;
    }


    #nav a.router-link-exact-active {
        color: #ff3333;
    }
</style>