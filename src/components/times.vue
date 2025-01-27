<template>
    <div>
        <div class="topNav">
    <div class="back" @click="home">
      <ion-icon name="arrow-back-outline"></ion-icon>
    </div>
    <div class="name">Время намаз</div>
    <div></div>
  </div> <hr>
  
      <div class="container">
        <div class="current-time">Текущее время: {{ currentTime }}</div>
        <div class="next-prayer">Следующий намаз: {{ nextPrayer }}</div>
        <div class="time-table">
          <div
            v-for="(time, prayer) in filteredPrayerTimes"
            :key="prayer"
            class="time-box"
          >
            <i class="fas fa-clock"></i>
            <h2>{{ prayerNames[prayer] }}</h2>
            <h1>{{ time }}</h1>
          </div>
        </div>
      </div>
  
     
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        apiURL: "https://api.aladhan.com/v1/timingsByCity?city=Moscow&country=Russia&method=2",
        currentTime: "загружается...",
        prayerTimes: {},
        nextPrayer: "вычисляется...",
        prayerNames: {
          Fajr: "Фаджр",
          Dhuhr: "Зухр",
          Asr: "Аср",
          Maghrib: "Магриб",
          Isha: "Иша",
        },
        allowedPrayers: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"],
      };
    },
    computed: {
      filteredPrayerTimes() {
        return Object.fromEntries(
          Object.entries(this.prayerTimes).filter(([key]) =>
            this.allowedPrayers.includes(key)
          )
        );
      },
    },
    methods: {
        home(){
            this.$router.push('/');
        },
      async fetchPrayerTimes() {
        try {
          const response = await fetch(this.apiURL);
          const data = await response.json();
          this.prayerTimes = data.data.timings;
          this.updateNextPrayer();
        } catch (error) {
          console.error("Ошибка при получении данных от API:", error);
        }
      },
      updateCurrentTime() {
        setInterval(() => {
          const now = new Date();
          const moscowTime = new Date(
            now.toLocaleString("en-US", { timeZone: "Europe/Moscow" })
          );
          this.currentTime = moscowTime.toLocaleTimeString();
        }, 1000);
      },
      updateNextPrayer() {
        const now = new Date();
        const moscowTime = new Date(
          now.toLocaleString("en-US", { timeZone: "Europe/Moscow" })
        );
        const currentTimeMinutes = moscowTime.getHours() * 60 + moscowTime.getMinutes();
  
        const prayerTimesArray = Object.entries(this.filteredPrayerTimes).map(
          ([prayer, time]) => {
            const [hours, minutes] = time.split(":").map(Number);
            return { prayer, timeInMinutes: hours * 60 + minutes };
          }
        );
  
        const nextPrayer =
          prayerTimesArray.find((p) => p.timeInMinutes > currentTimeMinutes) ||
          prayerTimesArray[0];
  
        const remainingMinutes =
          nextPrayer.timeInMinutes - currentTimeMinutes +
          (nextPrayer.timeInMinutes < currentTimeMinutes ? 1440 : 0);
  
        const hours = Math.floor(remainingMinutes / 60);
        const minutes = remainingMinutes % 60;
  
        this.nextPrayer = `${this.prayerNames[nextPrayer.prayer]} через ${hours} ч. ${minutes} мин.`;
      },
    },
    mounted() {
      this.updateCurrentTime();
      this.fetchPrayerTimes();
    },
  };
  </script>
  
  <style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #1d2b64, #f8cdda);
    color: white;
  }
  
  .container {
    max-width: 900px;
    margin: 0 auto 0 auto;
    padding: 20px;
    text-align: center;
  }
  .current-time {
    height: 2vh;
    font-size: 1.5rem;
    margin: 0 0 10px 0;
    color: #3ef108;
    margin-top: 5.5vh;
  }
  .next-prayer {
    font-size: 1.8rem;
    margin: 20px 0;
    font-weight: bold;
    color: #296829;
  }
  .time-table {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-around;
  }
  .time-box {
    background-color:#fddfb2 !important;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    flex: 1 1 250px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  .time-box i {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  .time-box h2 {
    font-size: 1.5rem;
    margin: 10px 0;
  }
  footer {
    text-align: center;
    padding: 10px;
    background: rgba(0, 0, 0, 0.8);
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    header {
      flex-direction: column;
      text-align: center;
    }
    .time-box {
      flex: 1 1 100%;
    }
  }
  .topNav {
  padding: 0 3vw 0 4vw;
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
  z-index: 1000;
  border-bottom: #000;
}
.back {
  display: flex !important;
  align-items: center;
  font-weight: 400;
}
  </style>
  