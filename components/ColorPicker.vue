<template>
  <div>
    <div
      class="toggle-area"
    >
      <ul>
        <li
          v-for="color of colors"
          :key="color"
        >
          <component
            :is="`icon-${color}`"
            size="35"
            :class="getClasses(color)"
            @click="$colorMode.preference = color;"
          />
          <!-- The icon size needs to be set in the size attribute -->
        </li>
      </ul>
    </div>
    <div
      class="details"
    >
      <ColorScheme placeholder="..." tag="span">
        <b
          v-if="$colorMode.preference === 'system'"
        >Auto
        </b>
        <b
          v-else
        >{{ $colorMode.preference.charAt(0).toUpperCase() + $colorMode.preference.substr(1) }} Mode
        </b>
        <span
          v-if="$colorMode.preference === 'system'"
        >(using <i>{{ $colorMode.value }} mode</i>)
        </span>
      </ColorScheme>
    </div>
  </div>
</template>

<script>
import { CpuIcon, MoonIcon, SunIcon } from 'vue-feather-icons'
export default {
  components: {
    'icon-system': CpuIcon,
    'icon-dark': MoonIcon,
    'icon-light': SunIcon
  },
  data () {
    return {
      colors: ['system', 'light', 'dark'],
      pressed: true
    }
  },
  methods: {
    getClasses (color) {
      // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style scoped>
.feather {
  position: relative;
  top: 0px;
  cursor: pointer;
  padding: 4px; /* Controls the size of the icon inside the button */
  background-color: var(--bg-secondary);
  border: 2px solid var(--border-color);
  margin: 0;
  border-radius: 5px;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
ul li {
  display: inline-block;
  padding: 12px;
}
p {
  margin: 0;
  padding-top: 5px;
  padding-bottom: 20px;
}
.details {
  opacity: 0;
  transition: opacity .5s;
}
.toggle-area:hover+.details {
  opacity: 1;
  transition: opacity .5s;
}
</style>
