<template>
    <section class="topNav">
     <div class="back" @click="home">
      <ion-icon name="arrow-back-outline"></ion-icon>
     </div>
      <div class="name">Утром</div>
      <div></div>
     
    </section>
    <div class="farzlar">
      <div class="farz">
          <h2>1.Вспомнить Аллаха (зикр):</h2>
          <p>Первое, что нужно сделать после пробуждения, — это произнести вышеуказанную молитву или упомянуть имена Аллаха.</p>
      </div>
      <div class="farz">
          <h2>2.Провести руками по лицу:</h2>
          <p>Согласно сунне, после пробуждения рекомендуется провести ладонями по лицу.</p>
      </div>
      <div class="farz">
          <h2>3.Чистить зубы (мисвак):</h2>
          <p>Использование мисвака для очищения рта после сна является важной сунной.</p>
      </div>
      <div class="farz">
          <h2>4.Совершить омовение (тахарат):</h2>
          <p>Если во время сна омовение нарушилось, его нужно обновить.</p>
      </div>
      <div class="farz">
          <h2>5.Совершение утреннего намаза (фаджр) вовремя:</h2>
          <p>Чтение утреннего намаза в его установленное время — одна из важных сунн Пророка (мир ему).</p>
      </div>
      <div class="farz">
          <h2>6.Молитва после пробуждения от сна:</h2>
          <p>"Альхамду лилляхи-ллязи ахйана ба‘да ма аматана ва иляйхи-ннушур."</p> <hr>
          <p>«Хвала Аллаху, который оживил нас после того, как умертвил, и к Нему будет возвращение.»</p>
          
          
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