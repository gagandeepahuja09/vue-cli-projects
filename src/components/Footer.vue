<template>
  <footer>
    <p>{{ copyright }} {{ title }}</p>
  </footer>
</template>

<script>

export default {
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
        copyright: "Gagandeep's application 2020. All rights reserved."
    }
  }
}
</script>

<style scoped>
footer {
    background: #222;
    padding: 6px;
}
p {
    color: green;
    text-align: center;
}
</style>
