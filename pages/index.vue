<template>
  <div class="container">
    <div>
      <h1 is="sui-header" class="title">
        Hi there.
      </h1>
      <h1 is="sui-header" class="title">
        Are you looking for something?
      </h1>
      <Links />
      <ColorPicker />
    </div>
  </div>
</template>

<script>
import ColorPicker from '@/components/ColorPicker'
import Links from '@/components/Links'

export default {
  components: {
    ColorPicker,
    Links
  }
}
</script>

<style>
body {
  background-color: var(--bg);
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.3s;
  animation: 2s appear;
  background-color: var(--bg);
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
.title.ui.header {
  font-family: 'Noto Sans KR';
  font-size: 35px;
  color: var(--color);
  text-shadow: 0 0 2px black;
}
.subtitle.ui.header {
  color: var(--color);
  text-shadow: 0 0 2px black;
}
</style>
