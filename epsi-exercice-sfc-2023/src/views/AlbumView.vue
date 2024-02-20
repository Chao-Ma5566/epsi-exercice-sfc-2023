<template>
    <main>
      <div>
          <h2>Albums de Daft Punk</h2>
          <ul>
              <li v-for="album in daftPunkAlbums" :key="album.id" v-cloak>
                  <AlbumCard :albumInfo="album"></AlbumCard>
                  <h3>{{ album.title }}</h3>
                  <img :src=album.cover alt="cover album">
                  <p>Nombres musiques: {{ album.nb_tracks }}</p>
              </li>
          </ul>
      </div>
    </main>
  </template>
  
  <script>
  import axios from 'axios';
  import AlbumCard from "../components/AlbumCard.vue"
  const apiURL = "https://api.deezer.com/search/album?q=artist:\"Daft Punk\"";
  
  export default {
      data() {
          return {
              daftPunkAlbums: []
          };
      },
      created() {
          this.fetchDaftPunkAlbums();
      },
      methods: {
          async fetchDaftPunkAlbums() {
              try {
                  const response = await axios.get(apiURL);
                  this.daftPunkAlbums = response.data.data;
                  console.log(this.daftPunkAlbums)
              } catch (error) {
                  console.error("Une erreur s'est produite lors de la récupération des albums de Daft Punk :", error);
                  this.daftPunkAlbums = [];
              }
          }
      },
  };
  </script>
  