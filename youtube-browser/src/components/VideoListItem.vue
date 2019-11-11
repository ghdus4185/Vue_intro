<template>
  <li @click="onVideoSelect" class="list-group-item">
    <img :src="thumbnailURL" class="mr-3">
    {{video.snippet.title}}
  </li>
</template>

<script>
export default {
  name: 'videoListItem',
  props: {
    video: Object,
  },
  methods: {
    onVideoSelect(){
      this.$emit('videoSelect', this.video)
    }    
  },
  computed: {
    thumbnailURL(){
      return this.video.snippet.thumbnails.default.url
    }
  }
}
</script>

<style>

</style>