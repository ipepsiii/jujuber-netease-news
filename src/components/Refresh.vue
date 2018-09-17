<template>
    <div class="loader"
         @touchstart="touchStart($event)"
         @touchmove="touchMove($event)"
         @touchend="touchEnd">
        <section class="inner">
            <transition>
                <header v-show="canRefresh" class="refresh">
                    <div class="content"
                         :style="{ height: (top >=80 ? 80 : top) + 'px', width:`100%`, marginBottom: '10px',background: `white`, overflow: `hidden`}">
                        <div class="row-main">
                            <img width="32" height="32"
                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACHElEQVRYR+2WO28TURCFz4ll/wDAAiQiSCKBLJIovlfwAyggFDwkhAQVNLSIlkcJNaKlg44o0AABCjraufa6QK4SkEBQ8KhShGw8yCEI7+7dlyjc7HarmXPn25nZs0uM+eKY66MCKNwBtXYGg8FlkKdBHqZIs8j4dG5uGvX6Hx3QosjuUV0ugM7OTqLReAhycUQYUqSeBeDVqQ7oXK0wgBrTAvkOwK5YsUyAVF0ZAG23m5iYCADs9zxpKkCmrhSAMW9BnvC2WfUJnbvki2mWDlimyMXcEagxiyBfeQr8gOo1OvfMW9zakwDeJGKqP7d1nc7TeMy7hGrMa5CnYslbCMNjDIJO2vKpMSs72z6asgXgOEWcT5cA0Pn5KdTrq57kRxS5mlq83T4Icg1k/MzHFLmSpksCGHMD5H1PG8/QuRepANZeB/DAoztL556XAVgGeSEhCMMDDILPGQBLACILtp27uTnJXu9TcQBr+wCOJATr63vY73/PmP97kC1PvEmRb4UAFCCs3QCQ5XJdAHco8nL0UDVmA2Qj1R1VewBux8cY2QG1dlj4V+oh/wJrFJn+e6tADdaGuTrVj3TuUKoPlACIOGEJgOxvQQVQdaDqwPD9VGu/Atib806vUmQmYkTWfgGwL1On+oHOTaX6wA7AeQB3ARz1HjZ0tMHgJrvdlQjAwsI51Gr3MnXkrbiD5v6U5rrbfyZUAFUHxt6B33UxGDC75PyNAAAAAElFTkSuQmCC"
                                 alt="">
                            <p style="font-size: .33rem;font-weight: bolder;padding-left: 15px">风停之后再扬帆，船绝不会前行。</p>
                        </div>
                        <div class="row-meta">
                            <p>
                                <small>——东野圭吾 《分身》</small>
                            </p>
                        </div>
                    </div>
                    <div :style="{ height: (top >=20 ? 20 : top) + 'px', width:(top >=20 ? 20 : top) + 'px', background: `#ff3333` }"
                         class="icon-o"></div>
                </header>
            </transition>
            <slot></slot>
        </section>
    </div>
</template>

<script>

  export default {
    name: "Refresh",
    props: {
      onRefresh: {
        type: Function,
        default: undefined,
        required: false
      }
    },
    data() {
      return {
        top: 0,
        startY: 0,
        touching: false,
        state: 0,
        canRefresh: false
      }
    },
    methods: {
      touchStart(e) {
        this.startY = e.targetTouches[0].pageY;
        this.touching = true;
      },
      touchMove(e) {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (!this.touching || scrollTop > 0) return;
        let diff = e.targetTouches[0].pageY - this.startY;
        this.canRefresh = true;
        if (diff > 0) {
          e.preventDefault();
        }
        else {
          return;
        }
        this.top = Math.floor(diff * 0.4) + (this.state === 2 ? 80 : 0);
        if (this.top >= 80) {
          this.state = 1;
        }
        else {
          this.state = 0;
        }
      },
      touchEnd() {
        this.touching = false;
        if (this.state === 0) {
          this.canRefresh = false;
        }
        if (this.state === 2) {
          this.top = 80;
          return;
        }

        if (this.top >= 80) {
          this.refresh();
        }
        else {
          this.state = 0;
          this.top = 0;
        }
      },
      refresh() {
        this.state = 2;
        this.top = 80;
        this.onRefresh();
        setTimeout(() => {
          this.refreshDone();
        }, 2000)
      },
      refreshDone() {
        this.state = 0;
        this.top = 0;
        this.canRefresh = false;
      }
    }
  }
</script>

<style scoped>

    .icon-o {
        margin: 0 auto;
        border-radius: 50%;
        animation: loading 1.5s ease-in infinite;
        position: relative;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon-o::before {
        content: '';
        display: block;
        position: absolute;
        height: 12px;
        line-height: 32px;
        width: 12px;
        background: white;
        border-radius: 50%;
    }

    @keyframes loading {
        25% {
            transform: scale(.7);
        }

        50% {
            transform: scale(1);
        }

        75% {
            transform: scale(.8);
        }
        100% {
            transform: scale(1);
        }
    }

    .row-main {
        display: flex;
        flex-flow: row;
        height: 32px;
    }

    .content {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }

    .row-meta {
        margin-right: -3rem;
        font-size: .28rem;
        color: rgba(100, 100, 100, .5);
    }

    .v-enter-active {
        transition: all .4s ease-in;
    }

    .v-enter, .v-leave-to {
        opacity: 0;
    }

    .v-enter-to {
        opacity: 1;
    }


</style>
