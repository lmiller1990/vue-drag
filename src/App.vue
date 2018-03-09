<template>
  <div id="outer">
<!--    <div 
      ref="dragger"
      id="dragger"
      @click="click"
      @mousedown="mousedown"
      @mouseup="mouseup"
    >
</div>-->
    <div id="dragger" v-drag></div>
  </div>
</template>

<script>
import drag from './drag'

export default {
  name: 'app',

  directives: {
    drag
  },

  data () {
    return {
      overlaySpan: null,
      draggerOffsetX: 0,
      draggerOffsetY: 0,
      initialX: 0,
      initialY: 0,
      down: false,
      el: null
    }
  },

  mounted () {
    this.el = this.$refs.dragger
    // this.setPos()
  },

  methods: {
    click (e) {
    },

    setPos () {
      console.log('set')
      this.draggerOffsetX = this.el.offsetLeft
      this.draggerOffsetY = this.el.offsetTop
    },

    mouseup () {
      this.down = false
      this.overlaySpan.removeEventListener('mouseup', this.mouseup)
      this.overlaySpan.removeEventListener('mousedown', this.mousedown)
      this.overlaySpan.removeEventListener('mousemove', this.mousemove)
      this.overlaySpan.remove()
      this.setPos()
    },

    mousedown (e) {
      this.initialX = e.clientX
      this.initialY = e.clientY
      this.down = true
      const outer = document.createElement('span')
      this.overlaySpan = outer
      outer.setAttribute('class', 'wrapper')
      outer.addEventListener('mousemove', (e) => this.mousemove(e))
      e.target.parentElement.append(outer)
      e.target.addEventListener('mouseup', (e) => this.mouseup(e))
      e.target.addEventListener('mousemove', (e) => this.mousemove(e))
    },

    mousemove (e) {
      console.log('move')
      if (this.down) {
        this.el.style.left = this.draggerOffsetX + (e.clientX - this.initialX) + 'px'
        this.el.style.top = this.draggerOffsetY + (e.clientY - this.initialY) + 'px'
      }    
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
  background-color: silver;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#dragger {
  position: absolute;
  border: 1px solid red;
  width: 100px;
  height: 100px;
}
</style>
