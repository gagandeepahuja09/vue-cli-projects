<template>
  <header>
    <slot name="text"></slot>
    <h1 @click="changeTitle">{{ title }}</h1>
    <slot name="title"></slot>
  </header>
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
    }
  },
  methods: {
    changeTitle() {
      this.$emit('changeTitle', 'New Title');
    }
  }
}
</script>

<style scoped>
header {
    background: lightgreen;
    padding: 10px;
}
h1 {
    color: #222;
    text-align: center;
}
</style>
