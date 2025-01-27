<template>
  <section class="topNav">
   <div class="back" @click="home">
    <ion-icon name="arrow-back-outline"></ion-icon>
   </div>
    <div class="name">Фард</div>
    <div></div>
   
  </section>
  <div class="farzlar">
    <div class="farz">
        <h2>1.Шахада:</h2>
        <p>Вера в то, что "Нет бога, кроме Аллаха, и Мухаммад — Его посланник". Это основа Ислама и обязательное условие принятия ислама.</p>
    </div>
    <div class="farz">
        <h2>2.Намаз:</h2>
        <p>Ежедневные пять молитв. Намаз является одной из важнейших форм поклонения Аллаху.</p>
    </div>
    <div class="farz">
        <h2>3.Пост:</h2>
        <p>Соблюдение поста в месяц Рамадан. В течение этого месяца мусульмане воздерживаются от еды, питья и других мирских удовольствий с рассвета до заката.</p>
    </div>
    <div class="farz">
        <h2>4.Закят:</h2>
        <p>Раздача части своего имущества нуждающимся и бедным. Это обязательное пожертвование, которое способствует экономической стабильности мусульманского общества.</p>
    </div>
    <div class="farz">
        <h2>5.Хадж:</h2>
        <p>Совершение паломничества в Мекку хотя бы раз в жизни, если есть такая возможность. Это обязательство для тех, кто имеет физические и финансовые возможности.</p>
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