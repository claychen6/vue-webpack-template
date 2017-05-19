<template>
  <div class="hello">
    <h1>Hello World</h1>
    <h2>{{msg}}</h2>
  </div>
</template>
<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.$http.get('api/user').then(response => {
      console.log(response)
    }, response => {})
  }
}
</script>
<style scoped></style>
