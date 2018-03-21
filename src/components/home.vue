<template>
  <div class="home">
    <router-link to="iot-bookshelf">IoT Bookshelf</router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
