<template>
  <div class="container">
    <div>
      <!-- <Logo /> -->
      <h1 class="title">
        Hello there.
      </h1>
      <h1 class="title">
        Are you looking for something?
      </h1>
      <div class="links">
        <a
          href="https://www.linkedin.com/in/echa"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-buttons"
        >
          <LinkedinIcon />
          LinkedIn
        </a>
        &nbsp; &nbsp;
        <a
          href="https://github.com/nootify"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-buttons"
        >
          <GithubIcon />
          GitHub
        </a>
      </div>
      <div class="toggles">
        <ColorPicker />
      </div>
    </div>
  </div>
</template>

<script>
import ColorPicker from '@/components/ColorPicker'
import { GithubIcon, LinkedinIcon } from 'vue-feather-icons'

export default {
  components: {
    ColorPicker,
    GithubIcon,
    LinkedinIcon
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Noto Sans KR',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 30px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.toggles {
  padding-top: 15px;
}
</style>
