<template>
  <div>
  <button v-on:click="plus">+1</button>
  <h1>Counter: {{nums}}</h1>
  </div>
</template>

<script>
export default {
  name = "Counter",
  data () {
    return {
      nums = 0
    }
  },
  computed: {
    plust (){
      return this.nums += 1
    }
  }
}
</script>

<style>

</style>