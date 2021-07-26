<template>
  <div class="grid justify-center">
    
    <div class="nav bg-red-300 z-10 flex justify-between rounded-sm">
      <div class="text-white align-middle flex pt-2 pl-2">
     <a> <div class="pr-2 font-bold"> <unicon name="arrow-left" fill="white" class="my-auto w-4 mr-1"></unicon></div></a>
       
      </div>
      
    </div>  



    <div class="justify-center my-6 bg-white prize card justify-self-center rounded-md
shadow-lg z-50 -mt-28">
    
        <div class="justify-self-center text-center pt-20 pb-6">
          <img src="@/images/congrats.svg" class="px-1 mx-auto" >
        </div>
        
        <div class=" px-4 text-center text-gray-900 font-medium text-2xl py-2">
          Congrats on the completing the Quiz!
        </div>
        
        <div class="pt-6  px-4 text-center text-gray-900 font-medium text-xl ">
         Quiz Score 2541
        </div>
        <div class="pt-1 pb-6 px-4 text-center text-gray-900 font-medium text-xl ">
         Time Bonus 500
        </div>
        <div class=" px-4 text-center text-gray-700 font-bold text-xl py-2">
          Total Score is 3041
        </div>
<div class="text-center py-12">
          <button class="rounded-full bg-gray-300 text-l py-1 px-10 hover:text-white hover:bg-red-300">SEE LEADERBOARD</button>
        </div>
          </div>
       
        
      

     

</div>
</template>

<script>
export default {
  name: "prize",
  props: {
    msg: String,
  }
 
};

</script> 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card{
  width: 440px;
}

.nav{
  width: 460px;
  height: 160px;
}

</style>
