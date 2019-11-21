<template>
  <div>
    <button>Toggle</button>
    <h1 v-bind:class="divClasses">빨강과 파랑을 섞으면 보라색이 됩니다.</h1>
  </div>
</template>

<script>
export default {
  el: '#app',
  data: {
    attachRed: false,
    color:'green'
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        green: !this.attachRed
      }
    }
  }
}
</script>

<style>

</style>