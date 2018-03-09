import Vue from 'vue'

let draggerOffsetX = 0
let draggerOffsetY = 0
let initialX = 0
let initialY = 0
let down = false
let outer

function setInitialOffset (e, el) {
  draggerOffsetX = el.offsetLeft
  draggerOffsetY = el.offsetTop
}

function mousemove (e, el) {
  if (down) {
    el.style.left = draggerOffsetX + (e.clientX - initialX) + 'px'
    el.style.top = draggerOffsetY + (e.clientY - initialY) + 'px'
  }    
}

function mouseup (e, el) {
  down = false
  outer.removeEventListener('mouseup', mouseup)
  outer.removeEventListener('mousedown', mousedown)
  outer.removeEventListener('mousemove', mousemove)
  outer.remove()
  setInitialOffset(e, el)
}

function mousedown (e, el) {
  down = true
  initialX = e.clientX
  initialY = e.clientY
  outer = document.createElement('div')
  outer.setAttribute('style', 'background-color: silver; width: 100vw; height: 100vh;')
  outer.addEventListener('mousemove', e => mousemove(e, el))
  outer.addEventListener('mouseup', e => mouseup(e, el))
  outer.addEventListener('mousedown', e => mousedown(e, el))
  el.parentElement.append(outer)
}

export default Vue.directive('drag', {
  inserted: function (el, binding, vnode) {
    draggerOffsetX = el.offsetLeft
    draggerOffsetY = el.offsetTop
    el.addEventListener('mouseup', e => mouseup(e, el))

    el.addEventListener('mousedown', (e) => mousedown(e, el))

    el.addEventListener('mousemove', e => mousemove(e,el))
  }
})
