<template>
  <div class="container">
    <img :src="album.cover" alt="Album Cover" class="img"/>
    <div class="desc-container">
        <h1>{{ album.title }}</h1>
    <div class="info">
        <img :src="album.artist_img" alt="Image de l'artiste"/>
        <h3>{{ album.artist_name }} - </h3>
        <p> Durée: {{ formatDuration(album.duration) }} - </p>
        <p> Fans: {{ album.fans }} - </p>
        <p> {{ album.release_date }}</p>
        
        
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    album: Object,
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
.container{
    display: flex;
    background-color: #EEEEEE;
    margin-bottom: 20px;
}

.img {
    padding: 10px;
}

.info {
    display: flex;
    align-items: center;
}

.info img  {
    padding: 5px;
    border-radius: 50%;
}

.info p {
    padding-left: 3px;
}
</style>
