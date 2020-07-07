<template>
  <div>
    <component :is="component"></component>
    <button @click="component = 'form-one'">Open form one</button>
    <button @click="component = 'form-two'">Open form two</button>
  </div>
</template>

<script>
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default {
  components: {
    'form-one': formOne,
    'form-two': formTwo
  },
  data () {
    return {
      component: 'form-two',
    }
  },
}
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
