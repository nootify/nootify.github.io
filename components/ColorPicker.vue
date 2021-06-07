<template>
  <div id="picker-container">
    <sui-list horizontal>
      <sui-list-item
        v-for="option of options"
        :key="option.tooltip"
        @click="$colorMode.preference = option.color"
      >
        <sui-list-content class="icons">
          <sui-icon
            :name="option.icon"
            size="large"
            :color="getIconColor(option.color, $colorMode.value)"
            link
            inverted
            bordered
          />
        </sui-list-content>
      </sui-list-item>
    </sui-list>
    <h3 is="sui-header" id="option-text" class="subtitle">
      {{ getOptionText($colorMode.preference, $colorMode.value) }}
    </h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          color: 'system',
          tooltip: 'System',
          icon: 'desktop',
          position: 'left center'
        },
        {
          color: 'light',
          tooltip: 'Light Mode',
          icon: 'sun',
          position: 'bottom center'
        },
        {
          color: 'dark',
          tooltip: 'Dark Mode',
          icon: 'moon',
          position: 'right center'
        }
      ]
    }
  },
  methods: {
    getIconColor (optionColorValue, colorValue) {
      if (optionColorValue === colorValue && colorValue === 'dark') {
        return 'blue'
      }
      if (optionColorValue === colorValue && colorValue === 'light') {
        return 'black'
      }
      return 'grey'
    },
    getOptionText (colorPreference, colorValue) {
      const mode = `${colorValue.charAt(0).toUpperCase()}${colorValue.substr(1)} Mode`
      if (colorPreference === 'system') {
        return `Auto (${mode})`
      } else {
        return mode
      }
    }
  }
}
</script>

<style scoped>
.icons {
  padding-top: 15px;
}
#option-text {
  opacity: 0;
  transition: opacity .5s;
}
#picker-container:hover #option-text {
  opacity: 1;
  transition: opacity .5s;
}
</style>
