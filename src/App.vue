<template>
  <div id="outer">
    <div class="wrapper">
      <div 
        v-drag
        id="dragger"
      >
      </div>
    </div>
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
