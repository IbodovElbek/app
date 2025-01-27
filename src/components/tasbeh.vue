<template>
  <div id="all">
    <section class="topNav">
   <div class="back" @click="home">
    <ion-icon name="arrow-back-outline"></ion-icon>
   </div>
    <div class="name">Cчётчик</div>
    <div></div>
   
  </section>
  <section class="number">
    <div class="numberBox">
        <div class="isSe" v-if="isSee">{{ number }}/{{ limitn }}</div>
    </div>
  </section>
  <section class="tap">
    <ion-icon name="finger-print-outline" @click="add" style="cursor: pointer;"></ion-icon>
  </section>
  <div class="actions">
    <div id="action" class="see" @click="see"><ion-icon name="eye-outline" v-if="!isSee"></ion-icon><ion-icon name="eye-off-outline" v-if="isSee"></ion-icon></div>
    <div id="action" class="limit" @click="limit">{{ limitn2 }}</div>
    <div id="action" class="restart" @click="refresh"><ion-icon name="refresh-outline"></ion-icon></div>
  </div>
  </div>
  
</template>

<script>
export default {
    data(){
        return{
            number: 0,
            isSee: true,
            limitn:33,
            limitn2:99
        }
    },
    methods:{
        home(){
            this.$router.push('/');
        },
        see(){
            this.isSee = !this.isSee
        },
        refresh(){
            this.number=0
        },
        add(){
            if(this.number===this.limitn){
                this.number = 0
            }
            this.number++
        },
        limit(){
            if(this.limitn===33){
                this.limitn = 99
                this.limitn2 = 33
            }else{
                this.limitn = 33
                this.limitn2 = 99
            }
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;padding: 0;
    box-sizing: border-box !important;
}
@media(min-width: 500px){
    #all{
        height: 100vh;
        width: 100vw;
        width: 430px;
        display: flex;
        /* flex-direction: row !important; */
        flex-direction: column !important;
        /* justify-content: center !important; */
        align-items: center;
    }
}
div{
    display: flex;
    flex-direction: column;
    /* background-color: #f5f5f5; */
}
section{
padding: 0 2vw 0 2vw;
height: 6vh;
width: 100vw;
display: flex;
justify-content: space-between;
/* background-color: #c48080; */
align-items: center;
font-size: 30px;
position: fixed;
}
.back{
    display: flex !important;
    align-items: center;
    font-weight: 400;
}.name{
    font-weight: 300;
}
.number{
    width: 100%;
    height: 20vh;
    margin-top: 9vh;

}
.numberBox{
    height: 100%;
    width: 100%;
    border-radius: 20px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 120px;
}
.tap{
    margin-top: 35vh;
    height: 40vh;
    /* background-color: #f3fff5; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 260px;
}
.actions{
    padding: 4vh 2vw 0 2vw;
    height: 25vh;
    margin-top: 75vh;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 40px;
}
#action{
    cursor: pointer;
}
</style>