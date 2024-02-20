<template>
    <main>
      <div>
          <h2 id="title-album">Albums de Daft Punk</h2>
          <ul id="list-album">
              <li v-for="album in daftPunkAlbums" :key="album.id">
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
@media screen and (max-width:500px){
    #list-album li{
    width: 100%;
  }
}
  </style>