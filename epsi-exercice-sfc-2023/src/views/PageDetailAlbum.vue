<template>
  <div>
    <DetailAlbum :album="album" />
    
    <h2>Tracks:</h2>
        <Track v-for="track in album.tracks" :key="track.id" :track="track" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Track from '../components/detail/Track.vue';
import DetailAlbum from '../components/detail/DetailAlbum.vue'

const apiURL = "https://api.deezer.com/album/302127";

export default {
    components: {
    Track,
    DetailAlbum
  },
  setup() {
    const album = ref({
      title: '',
      cover: '',
      duration: 0,
      fans: 0,
      release_date: '',
      artist_name: '',
      artist_img: '',
      tracks: [],
    });

    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL);
        album.value.title = response.data.title;
        album.value.cover = response.data.cover_medium;
        album.value.duration = response.data.duration;
        album.value.fans = response.data.fans;
        album.value.release_date = response.data.release_date;
        album.value.artist_name = response.data.artist.name;
        album.value.artist_img = response.data.artist.picture_small;
        album.value.tracks = response.data.tracks.data;
      } catch (error) {
        console.error('Error fetching data from Deezer API:', error);
      }
    };

    const formatDuration = (duration) => {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    

    onMounted(() => {
      fetchData();
    });

    return {
      album,
      formatDuration
    };
  },
};
</script>


<style>

</style>