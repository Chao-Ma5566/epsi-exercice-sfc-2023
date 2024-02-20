<template>
    <main>
    
    </main>
  </template>
  
  <script>
  import axios from 'axios';
  
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
              } catch (error) {
                  console.error("Une erreur s'est produite lors de la récupération des albums de Daft Punk :", error);
                  this.daftPunkAlbums = [];
              }
          }
      },
  };
  </script>
  