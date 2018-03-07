<template>
  <div id="outer">
    <div class="wrapper">
      <div 
        id="dragger"
        ref="dragger"
        @mousedown="mousedownBox"
        @mousemove="mousemoveBox"
        @mouseleave="cancelMove"
        @mouseup="cancelMove"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      initialX: 0,
      initialY: 0,
      draggerOffsetX: 0,
      draggerOffsetY: 0,
      dragger: null,
      down: false
    }
  },

  mounted () {
    this.dragger = this.$refs.dragger
    this.setInitialOffset()
  },

  methods: {
    setInitialOffset () {
      this.draggerOffsetX = this.dragger.offsetLeft
      this.draggerOffsetY = this.dragger.offsetTop
    },

    mousemoveBox (e) {
      if (this.down) {
        this.dragger.style.left = this.draggerOffsetX + (e.clientX - this.initialX) + 'px'
        this.dragger.style.top = this.draggerOffsetY + (e.clientY - this.initialY) + 'px'
      }    
    },

    mousedownBox (e) {
      this.down = true
      this.initialX = e.clientX
      this.initialY = e.clientY
    },

    cancelMove (e) {
      this.down = false
      this.setInitialOffset()
    }
  }
}
</script>

<style>
body {
  height: 100vh;
}

#outer {
  height: 100%;
}

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#dragger {
  position: absolute;
  border: 1px solid silver;
  width: 100px;
  height: 100px;
}
</style>
