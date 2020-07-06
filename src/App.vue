<template>
  <div>
    <h1>{{ title }}</h1>
    <coders></coders>
  </div>
</template>

<script>
import Coders from './Coders.vue';

export default {
  components: {
    'coders': Coders, 
  },
  data () {
    return {
      title: "Practice App"
    }
  },
  methods: {
    greeting () {
      return "";
    }
  }
}
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
