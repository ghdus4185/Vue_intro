<template>
  <button v-on:click="onAnimalImage">{{btnName}}</button>
</template>

<script>
export default {
  props: {
    btnName:String,
  },
  data: function(){
    return {

    }
  },
  methods: {
    onAnimalImage: function(){
      this.$emit('getAnimalImage', this.btnName)
    }
  }
}
</script>

<style>

</style>