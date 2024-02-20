<template>
  <div>
    <img :src="album.cover" alt="Album Cover" />
    <h1>{{ album.title }}</h1>
    
    <h2>Tracks:</h2>
    <ul>
      <li v-for="track in album.tracks" :key="track.id">{{ track.title }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const album = ref({
      title: '',
      cover: '',
      tracks: [],
    });

    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.deezer.com/album/302127');
        album.value.title = response.data.title;
        album.value.cover = response.data.cover_medium;
        album.value.tracks = response.data.tracks.data;
      } catch (error) {
        console.error('Error fetching data from Deezer API:', error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      album,
    };
  },
};
</script>


<style>

</style>