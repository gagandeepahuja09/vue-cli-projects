<template>
  <div>
    <h1>List Of Coders</h1>
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

<style scoped>
h1 {
  color: green;
}
</style>
