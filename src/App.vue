<template>
  <form-helper>
  </form-helper>
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
      title: "Practice App",
      coders: [
            { name: "Gary", majors: "EIC", show: false },
            { name: "Harry", majors: "ECE", show: false },
            { name: "Larry", majors: "ENC", show: false },
            { name: "Barry", majors: "CIE", show: false },
        ],
    }
  },
}
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
