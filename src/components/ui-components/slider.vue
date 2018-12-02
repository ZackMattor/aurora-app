<template>
  <v-touch @pan="onSwipe" @panend="onEnd" @panstart="onStart" class="slider" :class="{active: isActive}">
    <!-- <div class="value">{{currentValue}}</div> -->
    <div class="bar" v-bind:style="valueStyle"></div>
  </v-touch>
</template>

<script>
function map_range(value, low1, high1, low2, high2) {
  return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

export default {
  props: ['name', 'minValue', 'maxValue', 'value'],

  mounted() {
    this.currentValue = this.value;
    this.percent = map_range(this.value, this.minValue, this.maxValue, 0, 100);
  },

  data() {
    return {
      percent: null,
      startPan: null,
      currentValue: null,
      isActive: false
    }
  },

  methods: {
    touchStart() {
      console.log('touchstart');
    },

    onStart() {
      //this.isActive = true;
      this.startPan = this.percent;
    },

    onEnd() {
      this.isActive = false;
    },

    onSwipe(evt) {
      let width = this.$el.clientWidth;
      let delta = evt.deltaX/width*100;

      this.percent = this.startPan + delta;

      if(this.percent < 0) this.percent = 0;
      if(this.percent > 100) this.percent = 100;

      let value = map_range(this.percent, 0, 100, this.minValue, this.maxValue);
      this.setCurrentValue(value);
    },

    setCurrentValue(val) {
      val = parseInt(val);

      this.currentValue = val;
      this.$emit('input', val)
    }
  },

  computed: {
    valueStyle() {
      return {width: `${this.percent}%`};
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider {
  position: relative;
  width: 50%;
  height: 100px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 20px;
  overflow: hidden;
  transition: transform .2s ease-in-out;
}

.active {
  transform: scale(1.05, 1.05);
}

.value {
  position: relative;
  z-index: 10;
  font-size: 70px;
}

.bar {
  z-index: 5;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #ccc;
  height: 100%;
}

</style>
