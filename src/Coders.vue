<template>
  <div>
    <ul>
        <li v-for="coder in coders">{{ coder }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
        coders: [ 'Gagandeep', 'Gary', 'Harry', 'Larry', 'Barry', 'Chotu' ]
    }
  },
  methods: {
    greeting () {
      return "";
    }
  }
}
</script>

<style>
</style>
