<template>
  <div>
    <app-header></app-header>
    <app-coders :coders="coders"></app-coders>
    <hr/>
    <app-coders :coders="coders"></app-coders>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Coders from './components/Coders.vue';

export default {
  components: {
    'app-coders': Coders,
    'app-header': Header,
    'app-footer': Footer, 
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
