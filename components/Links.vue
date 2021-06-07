<template>
  <div>
    <sui-list horizontal>
      <sui-list-item
        v-for="link of links"
        :key="link.tooltip"
      >
        <sui-list-content>
          <!-- workaround for sui-popup giving an unresolvable error -->
          <div
            class="icons"
            :data-tooltip="link.tooltip"
            :data-position="link.position"
            data-inverted
          >
            <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <sui-icon
                :name="link.icon"
                size="large"
                :color="getIconColor($colorMode.value)"
                link
                inverted
                bordered
              />
            </a>
          </div>
        </sui-list-content>
      </sui-list-item>
    </sui-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          tooltip: 'Resume',
          icon: 'file alternate',
          position: 'left center',
          url: 'https://drive.google.com/file/d/1Zxrq3KE9qjw5F62-iWFUzDKsFohsoamc/view'
        },
        {
          tooltip: 'GitHub',
          icon: 'github',
          position: 'bottom center',
          url: 'https://github.com/nootify'
        },
        {
          tooltip: 'LinkedIn',
          icon: 'linkedin',
          position: 'right center',
          url: 'https://www.linkedin.com/in/echa'
        }
      ]
    }
  },
  methods: {
    getIconColor (colorValue) {
      if (colorValue === 'dark') {
        return 'blue'
      } else {
        return 'black'
      }
    }
  }
}
</script>

<style scoped>
.icons {
  padding-top: 20px;
}
</style>
