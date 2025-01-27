<template>
  
  <div class="topNav">
    <div class="back" @click="home">
      <ion-icon name="arrow-back-outline"></ion-icon>
    </div>
    <div class="name">Все дуа</div>
    <div></div>
  </div>

  <div style="margin-top: 7vh; padding: 0 2vw">
    <div v-if="loading" class="spinnerBox" style="margin-top: 7vh">
      <div class="spinner"></div>
    </div>
    <div v-else style="margin-top: 7vh; ">
      <div
        v-for="chapter in chapters"
        :key="chapter.id"
        class="chapter"
      >
        <div @click="menu2(chapter.id)"><h2>{{ chapter.name }} ({{ chapter.transliteration }})</h2>
          <p>{{ chapter.translation }}</p></div>
        
          <div class="save" @click="save(chapter.id)">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
      </div>
    </div>
  </div>
  <div
    ref="menu"
    class="menupage"
    :style="{ transform: isActive ? 'translate(0)' : 'translate(-110)' }"
  >
    <div class="topNav">
      <div class="back" @click="menu3">
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <div class="name">Все дуа</div>
      <div></div>
    </div>
   
   <div class="body" style="margin-top: 7vh; padding: 0 2vw; text-align: center;">
    
    <div
  v-for="verse in (chapters[duaIndex] ? chapters[duaIndex].verses : [])"
  :key="verse.id"
  class="verse"
  style="font-size: 28px; border-radius: 15px;"
>
  <p> {{ verse.id }}. {{ verse.text }} <br> {{ verse.translation }} </p>
</div>

   </div>
  </div>
</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
      saved:[],
      chapters: [],
      loading: true, // Yuklanish holati
      isActive: false, // Yuklanish holati
      dua: "",
    };
  },
  methods: {
    menu2(i) {
      this.duaIndex = i - 1;
      this.isActive = !this.isActive;
      this.$refs.menu.style.transform = "translate(-110%)";
      // alert(this.duaIndex )
    },
    home() {
      this.$router.push("/");
    },
    fetchChapters() {
  this.loading = true; // Yuklanish boshlanishida
  axios
    .get("https://cdn.jsdelivr.net/npm/quran-cloud@1.0.0/dist/quran_ru.json")
    .then((response) => {
      this.chapters = response.data;
      this.loading = false; // Yuklanish tugadi
    })
    .catch((error) => {
      console.error("API so‘rovida xato:", error);
      this.loading = false; // Yuklanish tugadi
    });
},


    menu3() {
      this.isActive = !this.isActive;
      this.$refs.menu.style.transform = "translate(-110%)";
    },
    save(i){
      // this.duaIndex = i - 1;
      // this.saved.push((chapters[duaIndex] ? chapters[duaIndex].verses : []))
      alert(this.$refs.chapter1.textContent);
    }
  },
  
  created() {
    this.fetchChapters();
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
  padding: 0 2vw 0 2vw;
  height: 6vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  /* background-color: #c48080; */
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
h3 {
  display: flex;
  gap: 10px;
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
  /* padding-top: 120px; */
  background-color: #fff;
  z-index: 1100;
  overflow-x: auto;
}
.chapter{
 display: flex;
 justify-content: space-between;
}
.save{
  display: flex;
  align-items: center;
  font-size: 25px;
}
</style>
