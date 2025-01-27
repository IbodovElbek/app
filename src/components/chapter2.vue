<template>
    <div style="margin-top: 7vh;">
      <h1>Surah: {{ chapter.name }}</h1>
      <h2>Translation: {{ chapter.translation }}</h2>
      <h2>{{ this.$store.state.api }}</h2>
      <h2>{{ this.api }}</h2>
      <ul>
        <li v-for="(verse, index) in chapter.verses" :key="index">
          <p> {{ verse.text }}</p>
          <p> {{ verse.translation }}</p>
          <!-- <p><em>Translation:</em> {{ verse.translation }}</p> -->
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chapter: {
          name: "",
          translation: "",
          verses: [],
          api: this.$store.state.api
        }
      };
    },
    methods: {
      fetchChapter() {
  if (!this.$store.state.api) {
    alert("API URL mavjud emas!");
    return;
  }
  // (chapters[duaIndex] ? chapters[duaIndex].verses : [])
  fetch((this.$store.state.api? this.$store.state.api : []))
    .then(response => {
      if (!response.ok) {
        throw new Error('Serverdan xato javob: ${response.status}');
      }
      return response.json();
    })
    .catch(error => {
      console.error("API so'rov xatosi:", error);
      alert("Ma'lumotni yuklashda xatolik yuz berdi. Keyinroq qayta urinib ko'ring.");
    });
}
    },
    created() {
      this.fetchChapter();
    }
  };
  </script>
  <style scoped>
  *{
    margin: 0;
    padding: 0;box-sizing: border-box;
  }
  </style>
  