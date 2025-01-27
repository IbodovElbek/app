<template>
  <div class="all">
    <div class="content">
      <section class="top">
        <h3>Крепости мусульманина</h3>
      </section>
      <section class="basic">
        <div class="b">
          <div class="box" id="b01" @click="goLink(1)"><h3>Главы</h3></div>
          <div class="box" id="b02" @click="goLink(2)"><h3>Избранно</h3></div>
        </div>
        <div class="b">
          <div class="box" id="b03" @click="goLink(3)"><h3>Все дуа</h3></div>
          <div class="box" id="b04" @click="goLink(4)">
            <h3>Избранно дуа</h3>
          </div>
        </div>
      </section>
      <section class="basic2">
        <div class="b">
          <div class="b2" id="b05" @click="goLink(5)"><h3>Утром</h3></div>
          <div class="b2" id="b06" @click="goLink(6)"><h3>Вечером</h3></div>
          <div class="b2" id="b07" @click="goLink(7)"><h3>Перед сном</h3></div>
        </div>
        <div class="b">
          <div class="b2" id="b08" @click="goLink(8)">
            <h3>
              После <br />
              моли...
            </h3>
          </div>
          <div class="b2" id="b09" @click="goLink(9)"><h3>Истисфара</h3></div>
          <div class="b2" id="b10" @click="goLink(10)"><h3>Счётчик</h3></div>
        </div>
      </section>

    </div>
    <div class="navbox">
      <div class="nav">
        <div class="btn">
          <router-link to="/" id="link">
            <div class="img" @click="home"><ion-icon name="home"></ion-icon></div>
            <div class="text">Главное</div>
          </router-link>
        </div>
        <div class="btn">
          <router-link to="/times" id="link">
            <div class="img"><ion-icon name="alarm"></ion-icon></div>
            <div class="text" style="font-size: 18px;white-space: nowrap;">Время намаз</div>
          </router-link>
        </div>
        <div class="btn">
          <router-link to="/farz" id="link">
            <div class="img"><ion-icon name="document-text"></ion-icon></div>
            <div class="text" style="font-size: 18px;white-space: nowrap;">Фард</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    home(){
      this.$router.push('/');
    },
    goLink(i) {
      if (i === 1) {
        this.$router.push("/chapters");
      } else if (i === 2) {
        this.$router.push("/saved");
      } else if (i === 3) {
        this.$router.push("/dua");
      } else if (i === 4) {
        this.$router.push("/savedDua");
      } else if (i === 5) {
        this.$router.push("/morning");
      } else if (i === 6) {
        this.$router.push("/evening");
      } else if (i === 7) {
        this.$router.push("/night");
      } else if (i === 8) {
        this.$router.push("/moli");
      } else if (i === 9) {
        this.$router.push("/istixfor");
      } else if (i === 10) {
        this.$router.push("/tasbeh");
      }
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
.all {
  position: relative;
  font-family: "Roboto", serif;
  font-weight: 100;
  font-style: normal;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
.content {
  height: 87vh;
  overflow: auto;
  /* background-color: #f1c6c6; */
}
.nav {
  padding-top: .5vh;
  height: 13vh;
  width: 100% !important;
  display: flex;
  background-color: #e2ecfd;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  /* font-size: 30px; */
}
.btn {
  height: 90%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  margin-top: 1vh;
  text-align: center;
  font-size: 30px;
}
.text {
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  outline: none;
}
#link {
  height: 10vh;
  width: 19vw;
  border-radius: 15px;
  outline: none;
  text-decoration: none;
  color: black;
  /* background-color: #fff; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
#b01 {
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("~@/assets/images.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.top {
  text-align: center;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
}
.basic {
  display: flex;
  flex-direction: column;
  margin: 0 2vw 0 2vw;
  gap: 2vw;
}
.box {
  width: 48vw;
  height: 24vh;
  background-color: #777;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: rgba(0, 0, 0, 0.5); */
}
.b {
  display: flex;
  justify-content: space-around;
  gap: 2vw;
  /* height: 50%; */
}
.basic2 {
  display: flex;
  flex-direction: column;
  padding-top: 2vw;
  margin: 0 2vw 0 2vw;
  gap: 2vw;
  /* height: calc(87vh - min(87vh, 100vw)); */
  height: 20vh;
}
.b2 {
  width: 31vw;
  height: 14vh;
  background-color: #ff7f7f;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#b02 {
  background: linear-gradient(rgba(66, 240, 31, 0.57), rgba(64, 245, 64, 0.8)),
    url("~@/assets/saved.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#b03 {
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("~@/assets/quron.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#b04 {
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("~@/assets/kitob.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#b05 {
  background: url("~@/assets/kun.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#b06 {
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("~@/assets/shom.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#b07 {
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("~@/assets/moon.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#b08 {
  background: linear-gradient(
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.4)
    ),
    url("~@/assets/kaba.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#b09 {
  background: url("~@/assets/istigfor.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
#b10 {
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("~@/assets/tasbeh.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
