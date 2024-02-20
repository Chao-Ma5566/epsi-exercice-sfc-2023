<template>
    <section>
      <h3>{{ albumInfo.title }}</h3>
      <img :src=albumInfo.cover alt="cover album">
      <p>Nombres musiques: {{ albumInfo.nb_tracks }}</p>
    </section>
</template>

<script>
export default {
    props: ['albumInfo'],
}
</script>