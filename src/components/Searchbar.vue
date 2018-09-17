<template>
    <div class="search-container">
        <div class="netease-icon"><!--网易logo--><h1>网易新闻</h1></div>
        <div class="search-bar-wrapper">
            <div class="animating-wrapper" ref="animating">
                <div v-for="item in searchBarTextListToShow" class="search-bar-item">
                    <span>{{ item }}</span>
                </div>
            </div>
        </div>
        <div class="live-btn"><span>直播</span></div>
    </div>
</template>

<script>


  export default {
    name: "Searchbar",
    data() {
      return {
        searchBarTextList: ["网易跟帖榜", "北京马拉松", "徐璐回应呕吐事件", "韦世豪求婚成功"],
        index: 0,
        interval: undefined
      }
    },
    methods: {
      scrollSearchBarText() {
        this.interval = setInterval(() => {
          let wrapper = this.$refs.animating;
          if (this.index >= this.searchBarTextList.length) {
            wrapper.style.transition = '';
            wrapper.style.top = 0;
            this.index = 0;
            setTimeout(() => {
              wrapper.style.transition = "top .5s ease-in";
              this.index++;
              wrapper.style.top = -(this.index * 0.65) + 'rem';
            });
            return;
          }
          this.index++;
          wrapper.style.transition = "top .5s ease-in";
          wrapper.style.top = -(this.index * 0.65) + 'rem';
        }, 5000)
      }
    },
    mounted() {
      this.scrollSearchBarText()
    },
    destroyed() {
        clearInterval(this.interval)
    },
    computed: {
      searchBarTextListToShow() {
        return Array.prototype.concat(this.searchBarTextList, this.searchBarTextList.slice(0, 1));
      }
    }
  }
</script>

<style scoped>


    .search-container {
        width: 100%;
        height: 1rem;
        background: #ff3333;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: center;
    }

    .netease-icon {
        font-size: 0;
        height: .48rem;
        width: 1rem;
        background: url(../assets/netease.png);
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: .4rem;
    }

    .search-bar-wrapper {
        width: 5rem;
        height: .65rem;
        background: rgba(255, 255, 255, .33);
        border-radius: 10rem;
        font-size: .3rem;
        line-height: .65rem;
        overflow: hidden;
    }

    .animating-wrapper {
        position: relative;
        top: 0;
    }

    .search-bar-item {
        margin: 0 auto;
        height: .65rem;
        background: transparent;
    }

    .search-bar-item::before {
        content: '';
        display: inline-block;
        width: .4rem;
        height: .4rem;
        vertical-align: middle;
        background: url(../assets/search.png);
        background-size: contain;
        background-repeat: no-repeat;
        padding-right: .1rem;
    }

    .search-bar-item span {
        vertical-align: middle;
        color: white;
        background: transparent;
        font-weight: 100;
    }

    .live-btn {
        font-size: .2rem;
        width: .6rem;
        height: .6rem;
        margin-left: .4rem;
        line-height: .6rem;
        color: white;
        background: url(../assets/qr.png);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        text-align: center;
    }

    .live-btn span {
        background-color: #ff3333;
        margin-right: .03rem;
    }

</style>