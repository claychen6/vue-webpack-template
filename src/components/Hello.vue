<template>
  <div class="hello">
    <h1>Hello World</h1>
    <h2>{{msg}}</h2>
  </div>
</template>
<script>
import * as Common from '../apis/common.js'

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    Common.test().then(response => {
      console.log(response)
    })
  }
}
</script>
<style scoped></style>
