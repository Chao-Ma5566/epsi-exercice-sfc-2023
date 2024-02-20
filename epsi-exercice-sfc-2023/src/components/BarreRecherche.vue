<template>
  <div>
    <input v-model="searchQuery" @input="recherche" placeholder="Rechercher un album" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    recherche() {
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>
