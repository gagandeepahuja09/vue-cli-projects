<template>
  <header>
    <div id="coders">
        <ul>
            <li v-for="coder in coders">
                <h2 @click="coder.show = !coder.show">{{ coder.name }}</h2>
                <h3 v-show="coder.show">{{ coder.majors }}</h3>
            </li>
        </ul>
        <button @click="showAll">Toggle All</button>
    </div>
  </header>
</template>

<script>

export default {
    props: {
        coders: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
        }
    },
    methods: {
        showAll() {
            this.coders.map(coder => {
                coder.show = !coder.show;
            })
        }
    }
}
</script>

<style scoped>
ul {
    /* will come in one line */
    display: flex;
    /* will wrap around each other */
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li {
    /* now elements will become equidistant to each other */
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}

#coders {
    /* this is highly crucial */
    max-width: 1200px;
    width: 100%;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box; 
}
</style>
