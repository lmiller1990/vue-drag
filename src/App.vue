<template>
  <div id="outer" 
    @mousemove="mouseoverOuter"
  >
    <div>
      <div>mouse x: {{ mouseX }}</div>
      <div>mouse y: {{ mouseY }}</div>
      <div>Inside box? {{ insideBox }}</div>
      <div>draggerOffsetX: {{ draggerOffsetX }}</div>
      <div>draggerOffsetY: {{ draggerOffsetY }}</div>
      <div>down: {{ down }}</div>
      <div>Before X/Y: {{ beforeX }} / {{ beforeY }}</div>
    </div>
    <div class="wrapper">
      <div 
        id="dragger"
        ref="dragger"
        @mouseenter="mouseenterBox"
        @mouseleave="mouseleaveBox"
        @mousedown="mousedownBox"
        @mouseup="mouseupBox"
        @mousemove="mousemoveBox"
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
      beforeX: 0,
      beforeY: 0,
      draggerOffsetX: 0,
      draggerOffsetY: 0,
      mouseX: 0,
      mouseY: 0,
      insideBox: false,
      dragger: null,
      down: false
    }
  },

  mounted () {
    this.dragger = this.$refs.dragger
    this.setInitial()
  },

  methods: {
    setInitial () {
      console.log('reset')
      this.draggerOffsetX = this.dragger.offsetLeft
      this.draggerOffsetY = this.dragger.offsetTop
    },

    mousemoveBox (e) {
      if (this.down) {
        this.dragger.style.left = this.draggerOffsetX + (e.clientX - this.beforeX) + 'px'
        this.dragger.style.top = this.draggerOffsetY + (e.clientY - this.beforeY) + 'px'
      } else {
        console.log('nothing')
      }
    },

    mousedownBox (e) {
      this.down = true
      this.beforeX = e.clientX
      this.beforeY = e.clientY
    },

    mouseupBox (e) {
      this.down = false
      this.setInitial()
    },

    mouseleaveBox (e) {
      this.insideBox = false
      this.down = false
      this.setInitial()
    },

    mouseenterBox (e) {
      this.insideBox = true
    },

    mouseoverOuter (e) {
      this.mouseX = e.clientX
      this.mouseY = e.clientY
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
