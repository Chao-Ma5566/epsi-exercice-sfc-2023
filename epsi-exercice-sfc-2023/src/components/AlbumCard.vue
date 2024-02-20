<template>
    <section>
      <h3>{{ albumInfo.title }}</h3>
      <img :src=albumInfo.cover alt="cover album">
      <p>Nombres musiques: {{ albumInfo.nb_tracks }}</p>
    </section>
</template>

<script setup>
defineProps({
  albumInfo: {
    required: true
  }
})
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
