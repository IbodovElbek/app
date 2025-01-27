<template>
    <div>
      <h1>Qur'on Duolari</h1>
      <div
        v-for="chapter in chapters"
        :key="chapter.id"
        class="chapter"
      >
        <h2>{{ chapter.name }} ({{ chapter.transliteration }})</h2>
        <p>{{ chapter.translation }}</p>
        <div
          v-for="verse in chapter.verses"
          :key="verse.id"
          class="verse"
          @click="toggleVerse(verse.id)"
        >
          <p><strong>Arabcha:</strong> {{ verse.text }}</p>
          <p v-if="isOpen(verse.id)"><strong>Transliteratsiya:</strong> {{ verse.transliteration }}</p>
          <p v-if="isOpen(verse.id)"><strong>Tarjima:</strong> {{ verse.translation }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        chapters: [],
        openVerses: []  // Ochilgan oyat IDlarini saqlaydi
      };
    },
    created() {
      this.fetchChapters();
    },
    methods: {
      fetchChapters() {
        axios.get('API_YOUR_ENDPOINT_HERE')
          .then(response => {
            this.chapters = response.data.chapters;
          })
          .catch(error => {
            console.error('API so‘rovida xato:', error);
          });
      },
      toggleVerse(id) {
        if (this.openVerses.includes(id)) {
          this.openVerses = this.openVerses.filter(v => v !== id);
        } else {
          this.openVerses.push(id);
        }
      },
      isOpen(id) {
        return this.openVerses.includes(id);
      }
    }
  };
  </script>
  
  <style>
  .chapter {
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #f9f9f9;
  }
  
  .verse {
    border: 1px solid #ccc;
    padding: 15px;
    margin-top: 10px;
    background-color: #fff;
    cursor: pointer;
  }
  </style>
  