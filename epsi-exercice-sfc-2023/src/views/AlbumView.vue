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
  <style scoped>
  #list-album{
    margin-top: 0.8em;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
  }
  #list-album li{
    margin: 0.5em;
    padding: 1em;
    width: 45%;
    text-align: center;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgba(250, 92, 92, 0.1);
    background-color: #2e2e2e;
    transition: box-shadow 0.3s ease;
  }
 #title-album{
    text-align: center;
    margin-top: 0.5em;
 }
 #list-album li:hover {
  box-shadow: 10px 5px 5px rgba(255, 26, 26, 0.2);
  cursor: pointer;
}
#list-album li h3 {
  margin-bottom: 0.5em;
  font-size: 1.1em;
}
#list-album li img {
  border-radius: 4px;
}
#list-album li p {
  margin-top: 0.5em;
  font-size: 0.9em;
}
  </style>