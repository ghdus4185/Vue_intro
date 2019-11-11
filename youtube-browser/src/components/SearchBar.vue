<template>
  <div class="text-center">
    <!-- <input type="text" v-on:input="onInput"> -->
    <input class="w-75" type="text" v-on:keydown.enter="onInput">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    onInput(e){
      console.log(e)
      this.$emit('inputChange', e.target.value)
    }
  }
}
</script>

<style>

</style>