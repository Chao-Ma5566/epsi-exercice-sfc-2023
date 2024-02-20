<template>
  <main>
    <div>
      <h1>Albums de Daft Punk</h1>
      <BarreRecherche @search="performSearch" />
      <ul>
        <li v-for="album in filteredAlbums" :key="album.id">
          <h3>{{ album.title }}</h3>
          <p>Artiste: {{ album.artist.name }}</p>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import axios from 'axios';
import BarreRecherche from '@/components/BarreRecherche.vue';

const apiURL = 'https://api.deezer.com/search/album?q=artist:"Daft Punk"';

export default {
  components: { BarreRecherche },
  data() {
    return {
      daftPunkAlbums: [],
      searchQuery: '',
    };
  },
  created() {
    this.fetchDaftPunkAlbums();
  },
  computed: {
    filteredAlbums() {
      if (!this.searchQuery) {
        return this.daftPunkAlbums;
      }
      return this.daftPunkAlbums.filter(album => album.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    },
  },
  methods: {
    async fetchDaftPunkAlbums() {
      try {
        const response = await axios.get(apiURL);
        this.daftPunkAlbums = response.data.data;
      } catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des albums de Daft Punk :', error);
        this.daftPunkAlbums = [];
      }
    },
    performSearch(query) {
      this.searchQuery = query;
    },
  },
};
</script>
