<template>
    <section class="topNav">
     <div class="back" @click="home">
      <ion-icon name="arrow-back-outline"></ion-icon>
     </div>
      <div class="name">Перед сном</div>
      <div></div>
     
    </section>
    <div class="farzlar">
      <div class="farz">
          <h2>1.Совершить омовение (тахарат):</h2>
          <p>Пророк (мир ему) перед сном находился в состоянии чистоты.</p>
      </div>
      <div class="farz">
          <h2>2.Чтение аятов из Корана:</h2>
          <p>Аятуль-Курси (Сура Аль-Бакара, аят 255).</p>
          <p>Суры: Аль-Ихлас, Аль-Фалак, Ан-Нас — их нужно читать по три раза и проводить руками по всему телу.</p>
      </div>
      <div class="farz">
          <h2>3.Ложиться на правый бок:</h2>
          <p>Пророк (мир ему) ложился на правый бок, а не на левый.</p>
      </div>
      <div class="farz">
          <h2>4.Краткие зикры:</h2>
          <p>«Субханаллах» (33 раза).</p>
          <p>«Альхамдулиллях» (33 раза).</p>
          <p>«Аллаху Акбар» (34 раза).</p>
      </div>
      <div class="farz">
          <h2>5.Очистить место для сна:</h2>
          <p>Перед сном рекомендуется очистить постель рукой.</p>
      </div>
      <div class="farz">
          <h2>6.Молитва перед сном:</h2>
          <p>"Бисмика Аллахумма амуту ва ахйа."</p> <hr>
          <p>«С твоим именем, о Аллах, я умираю и оживаю.»</p>
          
          
      </div>
    </div>
  </template>
  
  <script>
  export default {
      methods:{
          home(){
              this.$router.push('/');
          }
      },
      
  }
  </script>
  
  <style scoped>
  *{
      margin: 0;
      padding: 0;box-sizing: border-box;
  }
  .topNav{
      padding: 0 2vw 0 2vw;
  height: 6vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  /* background-color: #c48080; */
  align-items: center;
  font-size: 30px;
  /* position: fixed; */
  }
  .back{
      display: flex !important;
      align-items: center;
      font-weight: 400;
  }.name{
      font-weight: 300;
  }
  .farzlar{
      margin: 2vh 0;
      display: flex;
      flex-direction: column;
      width: 100vw;
      padding: 0 2vw;
      gap: 2vh;
  }
  .farz{
      display: flex;
      flex-direction: column;
      gap: 1vh;
  }
  .farz p{
      font-size: 23px;
      text-align: center;
      color: rgba(77, 47, 3, 0.863);
      font-weight: 500;
  }
  .farz h2{
      color: rgb(12, 102, 32);
  }
  </style>