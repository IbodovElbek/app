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
        <h2>1.Благодарность Аллаху за путешествие:</h2>
        <p>Вернувшись из хаджа или умры, мусульманин должен выразить благодарность Аллаху за дарованную возможность.</p>
    </div>
    <div class="farz">
        <h2>2.Приятные вести для родных:</h2>
        <p>Пророк Мухаммад (мир ему) советовал делиться радостной вестью и привозить подарки своим близким.</p>
    </div>
    <div class="farz">
        <h2>3.Совершение дуа за других:</h2>
        <p>Возвращающемуся из хаджа или умры рекомендуется делать молитвы за своих родных, друзей и всех мусульман.</p>
    </div>
    <div class="farz">
        <h2>4.Делиться духовным опытом:</h2>
        <p>Передача полученных знаний и духовных переживаний другим — это способ укрепить свою веру и вдохновить других на подобное.</p>
    </div>
    <div class="farz">
        <h2>5.Улучшение характера:</h2>
        <p>После возвращения мусульманин должен стремиться улучшить свои моральные качества и вести себя с милосердием и добротой.</p>
    </div>
    <div class="farz">
        <h2>6.Молитвы после возвращения:</h2>
        <h2>1.</h2>
        <p>"Альхамду лилляхи раббиль-‘алямин."</p> <hr>
        <p>Хвала Аллаху, Господу миров."</p>
        <h2>2.</h2>
        <p>"Раббана такяббал минна иннака антас-сами’уль ‘алим."</p> <hr>
        <p>"Господь наш! Прими от нас (наши молитвы), ведь Ты Слышащий, Знающий."</p>
        
        
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