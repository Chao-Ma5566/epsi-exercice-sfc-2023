<template>
  <div>
    <h1>Recherche d'albums sur Deezer</h1>
    <input class="search" v-model="searchTerm" @input="searchAlbums" placeholder="Rechercher un album par nom"/>
    <ul>
      <li v-for="album in filteredAlbums" :key="album.id">
        {{ album.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const apiURL = "https://api.deezer.com/search/album";
const albums = ref([]);
const filteredAlbums = ref([]);
const searchTerm = ref("");
let timer = null;

const fetchAlbums = async () => {
  try {
    const response = await axios.get(apiURL, {
      params: {
        q: "", // Empty query initially
      },
    });
    albums.value = response.data.data;
    filteredAlbums.value = albums.value; // Initialize filteredAlbums with all albums
  } catch (error) {
    console.error("Une erreur s'est produite lors de la récupération des albums :", error);
    albums.value = [];
    filteredAlbums.value = [];
  }
};

const searchAlbums = () => {
  if (timer) {
    clearTimeout(timer);
  }
  // Debouncing
  timer = setTimeout(() => {
    if (searchTerm.value === "") {
      filteredAlbums.value = albums.value; // Reset filteredAlbums to all albums if search term is empty
    } else {
      filteredAlbums.value = albums.value.filter(album =>
          album.title.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    }
  }, 500);
};

fetchAlbums();
</script>

<style scoped>

</style>
