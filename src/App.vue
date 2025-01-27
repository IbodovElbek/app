<template>
  <div>
    <router-view/>
  </div>
   
 
      
   
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", serif;
  font-optical-sizing: auto;
}
@media(min-width: 500px){
  .all{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content{
    width: 430px;
  }
  .navbox{
    width: 430px;
    padding: 0 1.7vw;
  }
  .basic, .basic2, .b{
    gap: 10px !important;
    
  }
  .basic2{
    padding-top: 10px !important;
  }
}
</style>
