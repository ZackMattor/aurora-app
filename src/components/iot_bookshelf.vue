<template>
  <div class="hello">
    <h1>IoT Bookshelf</h1>

    <h3>Brightness</h3>
    <slider :min-value="0" :max-value="100" v-model="brightness"></slider>

    <h3>Spectrum Width</h3>
    <slider :min-value="0" :max-value="100" v-model="spectrum_width"></slider>

    <h3>Speed</h3>
    <slider :min-value="0" :max-value="100" v-model="speed"></slider>
  </div>
</template>

<script>
import Slider from './ui-components/slider'

export default {
  mounted() {
    setTimeout(() => {
      this.sendUpdate();
    },500);
  },

  data () {
    return {
      brightness: 50,
      spectrum_width: 50,
      speed: 50
    }
  },

  methods: {
    sendUpdate() {
      let data = JSON.stringify(this.$data);
      this.$connection.send(data);
    }
  },

  watch: {
    '$data': {
      handler() {
        this.sendUpdate();
      },
      deep: true
    }
  },

  components: {
    'slider': Slider
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
