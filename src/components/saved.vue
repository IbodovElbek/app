<template>
  <div>
    <!-- Menupage -->
    <div
      ref="menu"
      class="menupage"
      :style="{ transform: isActive ? 'translate(0)' : 'translate(-110%)' }"
    >
      <div class="topNav">
        <div class="back" @click="menu3">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div class="name">Главы</div>
        <div></div>
      </div>
      <div ref="getText" style="display: block; margin-top: 7vh;">
        {{ chapters[duaIndex]?.link }}
      </div>
    </div>

    <!-- Top Navigation -->
    <div class="topNav">
      <div class="back" @click="home">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <div class="name">Главы</div>
      <div></div>
    </div>

    <!-- Content -->
    <div style="margin-top: 7vh; padding: 0 2vw;">
      <div v-if="loading" class="spinnerBox" style="margin-top: 7vh;">
        <div class="spinner"></div>
      </div>
      <div v-else style="margin-top: 7vh;">
        <div
          v-for="chapter in chapters"
          :key="chapter.id"
          class="chapter"
          @click="menu2(chapter.id)"
        >
          <h2>Глава. {{ chapter.id }}</h2>
          <h3>{{ chapter.name }} {{ chapter.transliteration }}</h3>
          <div
            v-for="verse in chapter.verses"
            :key="verse.id"
            class="verse"
            @click="toggleVerse(verse.id)"
          >
            <p><strong>Arabcha:</strong> {{ verse.text }}</p>
            <p v-if="isOpen(verse.id)">
              <strong>Transliteratsiya:</strong> {{ verse.transliteration }}
            </p>
            <p v-if="isOpen(verse.id)">
              <strong>Tarjima:</strong> {{ verse.translation }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      chapters: [], // Bo'limlar ro'yxati
      openVerses: [], // Ochilgan oyatlar IDlari
      loading: true, // Yuklanish holati
      isActive: false, // Menupage holati
      dua: "", // Hozirgi oyat
      duaIndex: 0, // Hozirgi bo'lim indeksi
    };
  },
  created() {
    this.fetchChapters(); // API orqali ma'lumotni olish
  },
  methods: {
    // Home tugmasi
    home() {
      this.$router.push("/"); // Home sahifasiga o'tish
    },
    // Bo'limlarni olish
    fetchChapters() {
      axios
        .get("https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/chapters/ru/index.json")
        .then((response) => {
          this.chapters = response.data.chapters || []; // Bo'limlar ro'yxati
          this.loading = false; // Yuklanish tugadi
        })
        .catch((error) => {
          console.error("API so‘rovida xato:", error);
          this.loading = false;
        });
    },
    // Menupage ochish
    menu2(i) {
      this.duaIndex = i - 1;
      this.dua = this.chapters[this.duaIndex]?.link || ""; // To‘g‘ri qiymatni olish
      this.isActive = !this.isActive;
    },
    // Menupage yopish
    menu3() {
      this.isActive = !this.isActive;
    },
    // Oyatni ochish/yopish
    toggleVerse(id) {
      if (this.isOpen(id)) {
        this.openVerses = this.openVerses.filter((verseId) => verseId !== id); // Ochilgan oyatni yopish
      } else {
        this.openVerses.push(id); // Oyatni ochish
      }
    },
    // Oyat ochilganligini tekshirish
    isOpen(id) {
      return this.openVerses.includes(id);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.topNav {
  padding: 0 2vw;
  height: 6vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 30px;
  position: fixed;
  top: 0 !important;
  background-color: #fff;
  z-index: 10;
}
.back {
  display: flex !important;
  align-items: center;
  font-weight: 400;
}
.name {
  font-weight: 300;
}
.chapter {
  border: 1px solid #ddd;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
}
.verse {
  border: 1px solid #ccc;
  padding: 15px;
  margin-top: 10px;
  background-color: #fff;
  cursor: pointer;
}
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #09f;
  animation: spin 1s ease infinite;
}
.spinnerBox {
  height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.menupage {
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  transform: translate(-110%);
  transition: 0.4s ease;
  background-color: #fff;
  z-index: 110;
}
</style>
