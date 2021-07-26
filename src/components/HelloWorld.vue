<template>
  <div class="grid justify-center">
    
    <div class="nav bg-red-300 z-10 flex justify-between rounded-sm">
      <div class="text-white align-middle flex pt-2 pl-2">
     <a> <div class="pr-2 font-bold"> <unicon name="arrow-left" fill="white" class="my-auto w-4 mr-1"></unicon></div></a>
       <div> Quiz </div>
      </div>
      <div class="pt-2 pr-5">
        <unicon name="graph-bar" fill="white" class="my-auto w-4 mr-1"></unicon>
      </div>
    </div>

    <div class="card bg-white justify-self-center rounded-md z-50 relative shadow-lg -mt-28 ">
        <div class="grid rounded-md p-2">
          <img src="@/images/quiz-1.png" class="object-cover w-full h-56 rounded-md shadow-md ">
       <div class="grid grid-cols-2 items-center justify-between py-4">
          <div> 
         <h2 class="text-start font-bold text-gray-500 text-xl pb-2">Better India Quiz</h2>
         
         <p class="flex text-gray-600 pr-4 my-auto">Total price:
         <img src="@/images/rupee.svg" class="px-1 my-auto" >
         <unicon name="rupee-sign" fill="limegreen" class="my-auto w-4 mr-1"></unicon>
        10000</p>
        </div>
        <div>
            <button class="button bg-red-400 rounded-full float-right" type="submit"><span class="px-1 text-2xl">Play</span><unicon name="caret-right" fill="white" class="align-middle px-1"></unicon></button>
      </div>
       </div>
       <div class="absolute bg-red-700 p-2 mt-1 pr-8 rounded-l-full float-right right-0 text-xs text-white text-bold">
         Ends in: 00h:16m:45s
       </div>
      </div>
  </div>

   <div class="card bg-white justify-self-center rounded-md z-20 relative shadow-lg  mt-6 ">
        <div class="grid rounded-md p-2">
          <img src="@/images/quiz-2.png" class="object-cover w-full h-56 rounded-md shadow-md ">
       <div class="grid grid-cols-2 items-center justify-between py-4">
          <div> 
         <h2 class="text-start font-bold text-gray-500 text-xl pb-2">Better India Quiz</h2>
         
         <p class="flex text-gray-600 pr-4 my-auto">Total price:
         <img src="@/images/rupee.svg" class="px-1 my-auto" >
         <unicon name="rupee-sign" fill="limegreen" class="my-auto w-4 mr-1"></unicon>
        10000</p>
        </div>
        <div>
            <button class="button bg-red-400 rounded-full float-right" type="submit"><span class="px-1 text-2xl">Play</span><unicon name="caret-right" fill="white" class="align-middle px-1"></unicon></button>
      </div>
       </div>
       <div class="absolute bg-red-700 p-2 mt-1 pr-8 rounded-l-full float-right right-0 text-xs text-white text-bold">
         Ends in: 00h:16m:45s
       </div>
      </div>
  </div>

   <div class="card bg-white justify-self-center rounded-md z-20 relative shadow-lg mt-6 ">
        <div class="grid rounded-md p-2">
          <img src="@/images/quiz-1.png" class="object-cover w-full h-56 rounded-md shadow-md ">
       <div class="grid grid-cols-2 items-center justify-between py-4">
          <div> 
         <h2 class="text-start font-bold text-gray-500 text-xl pb-2">Better India Quiz</h2>
         
         <p class="flex text-gray-600 pr-4 my-auto">Total price:
         <img src="@/images/rupee.svg" class="px-1 my-auto" >
         <unicon name="rupee-sign" fill="limegreen" class="my-auto w-4 mr-1"></unicon>
        10000</p>
        </div>
        <div>
            <button class="button bg-red-400 rounded-full float-right" type="submit"><span class="px-1 text-2xl">Play</span><unicon name="caret-right" fill="white" class="align-middle px-1"></unicon></button>
      </div>
       </div>
       <div class="absolute bg-red-700 p-2 mt-1 pr-8 rounded-l-full float-right right-0 text-xs text-white text-bold">
         Ends in: 00h:16m:45s
       </div>
      </div>
  </div>

  <div class="card bg-white justify-self-center rounded-md z-20 relative shadow-lg  my-6 ">
        <div class="grid rounded-md p-2">
          <img src="@/images/quiz-2.png" class="object-cover w-full h-56 rounded-md shadow-md ">
       <div class="grid grid-cols-2 items-center justify-between py-4">
          <div> 
         <h2 class="text-start font-bold text-gray-500 text-xl pb-2">Better India Quiz</h2>
         
         <p class="flex text-gray-600 pr-4 my-auto">Total price:
         <img src="@/images/rupee.svg" class="px-1 my-auto" >
         <unicon name="rupee-sign" fill="limegreen" class="my-auto w-4 mr-1"></unicon>
        10000</p>
        </div>
        <div>
            <button class="button bg-red-400 rounded-full float-right" type="submit"><span class="px-1 text-2xl">Play</span><unicon name="caret-right" fill="white" class="align-middle px-1"></unicon></button>
      </div>
       </div>
       <div class="absolute bg-red-700 p-2 mt-1 pr-8 rounded-l-full float-right right-0 text-xs text-white text-bold">
         Ends in: 00h:16m:45s
       </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
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
.button {
  width: 160px;
  height: 46px;
  font-size: 22px;
  font-weight: 900;
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  }
</style>
