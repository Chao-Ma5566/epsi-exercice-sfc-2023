<template>
  <div class="track">
    <p>{{ track.title }} - {{ formatDuration(track.duration) }} - {{ track.artist.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    track: Object,
  },
  methods: {
    formatDuration(duration) {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
  },
};
</script>

<style scoped>
/* Styles spécifiques à chaque piste */
.track {
  margin-bottom: 10px;
}
</style>