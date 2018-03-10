<template>
  <div id="outer">
    <div id="dragger" v-drag></div>
  </div>
</template>

<script>
import drag from './drag'

export default {
  name: 'app',

  directives: {
    drag
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
