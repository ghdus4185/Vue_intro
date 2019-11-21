<template>
  <div class="static" v-bind:class="{ active: isActive, error: hasError }"></div>
</template>

<script>
export default {
  data: {
    isActive: ture,
    hasError: false,
  }
}
</script>

<style>

</style>