<template>
  <ul class="list-group">
    <!-- <VideoListItem v-for="video in videos" :key="video.etag" :video="video" @자식이 올린 함수="부모에서 실행할 함수"/> -->
    <VideoListItem v-for="video in videos" :key="video.etag" :video="video" @videoSelect="onVideoSelect"/>
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',
  props: {
    videos: Array,
  },
  components: {
    VideoListItem,
  },
  methods: {
    onVideoSelect(video){
      this.$emit('videoSelect', video)
    }
  },
}

</script>

<style>

</style>