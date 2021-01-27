<template>
  <div class="hello">
    <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut sunt asperiores recusandae doloremque, quibusdam numquam harum molestiae accusamus rem incidunt illum doloribus sapiente nulla aut modi. Maiores, aspernatur voluptatum.</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
    </p>

  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods : {

  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
