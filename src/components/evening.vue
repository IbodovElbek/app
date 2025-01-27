<template>
    <section class="topNav">
     <div class="back" @click="home">
      <ion-icon name="arrow-back-outline"></ion-icon>
     </div>
      <div class="name">Вечером</div>
      <div></div>
     
    </section>
    <div class="farzlar">
      <div class="farz">
          <h2>1.Совершать Магриб-намаз вовремя:</h2>
          <p>Время молитвы Магриб начинается сразу после захода солнца, и её следует совершать без задержки.</p>
      </div>
      <div class="farz">
          <h2>2.Частое упоминание Аллаха:</h2>
          <p>В это время рекомендуется произносить тасбих (Субханаллах), тахмид (Альхамдулиллях) и такбир (Аллаху Акбар).</p>
      </div>
      <div class="farz">
          <h2>3.Нафиль-намазы:</h2>
          <p>После обязательной молитвы Магриб Пророк (мир ему) рекомендовал читать два раката дополнительной (суннат) молитвы.</p>
      </div>
      <div class="farz">
          <h2>4.Защита детей и животных:</h2>
          <p>Пророк (мир ему) советовал закрывать двери, забирать детей и животных в дом после захода солнца, так как в это время активизируются шайтаны.</p>
          <h2>Хадис:</h2>
          <p>«Когда заходит солнце, приведите своих детей домой, так как в это время шайтаны начинают разгуливать.» (Бухари, Муслим)</p>
      </div>
      <div class="farz">
          <h2>5.Мольбы и зикры:</h2>
          <p>Это благословенное время, чтобы просить Аллаха обо всем, так как молитвы на закате имеют особую силу.</p>
      </div>
      <div class="farz">
          <h2>6.Молитва на закате:</h2>
          <h2>1.</h2>
          <p>"Аллахумма иннака афуввун тухиббу-ль-афва фа’фу анни."</p> <hr>
          <p>«О Аллах! Ты Прощающий, любишь прощение, прости меня.»</p>
          <h2>2.</h2>
          <p>"А’узу би калимати-ллахи-т-таммати мин шарри ма халақ."</p> <hr>
          <p>«Ищу защиты в совершенных словах Аллаха от зла того, что Он сотворил.»</p>
          
          
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