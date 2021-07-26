<template>
  <div class="grid justify-center">
    
    <div class="nav bg-red-300 z-10 flex justify-between rounded-sm">
      <div class="text-white align-middle flex pt-2 pl-2">
     <a> <div class="pr-2 font-bold"> <unicon name="arrow-left" fill="white" class="my-auto w-4 mr-1"></unicon></div></a>    
      </div>
    </div>  



    <div class="justify-center my-6 bg-white prize card justify-self-center rounded-md
shadow-lg z-50 -mt-14">
     <div class="grid align-center mx-auto justify-center -mt-16 rounded-full h-32 w-32  bg-white m-2 border-8 border-red-100 inline-block">
     <div class="flex justify-center text-center mt-6">
          <div class="">
            <p class="text-gray-600 text-sm">
              hr
            </p>
             <h1 class="text-xl font-bold text-gray">
          04:
            </h1>
        </div>
       <div class="">
            <p class="text-gray-600 text-sm">
              min
            </p>
             <h1 class="text-xl font-bold text-gray">
          09:
            </h1>
        </div>
        <div class="">
            <p class="text-gray-600 text-sm">
              sec
            </p>
             <h1 class="text-xl font-bold text-gray">
          27
            </h1>
        </div>
        </div> 


   </div>
        <div class=" pb-6 px-4">
          <div class="border-b -px-4 text-center text-gray-800 font-medium text-xl py-2">
          Question 2/2
        </div>
        <div class=" text-gray-600 font-medium text-sm pl-2 pr-4">
          <p class="py-3">
          Lorem ipsum dolor sit amit.constructor elite ,sed to for the kingdom of tempor incident ut.Rissus Commodo viverra measns an accusman laccus vel fecility.Lorem ipsum dolor sit amit.constructor elite . an accusman laccus vel fecility.Lorem ipsum dolor sit amit.constructor elite . 
          </p>  
        </div>


        <div class="font-medium text-gray-700 text-l mt-8  pb-8 mx-4">
          <div class="rounded-full mx-2 flex border border-red-400 justify-between px-2">
            <div class="flex ">
              <div class="border-r-2 px-2 py-2 border-red-300">
             A
           </div> 
             <div class="py-2 pl-2">
              Argentina and coulmbia
            </div>
            </div>
            
            <div class="flex align-center py-2  ">
                 <img src="@/images/wrong-answer.svg" class="px-1 w-6 h-6 my-auto" >
            </div>
          </div>
          <div class="rounded-full mx-2 mt-6 flex border border-red-400 justify-between px-2">
            <div class="flex ">
              <div class="border-r-2 px-2 py-2 border-red-300">
             B
           </div> 
             <div class="py-2 pl-2">
              Argentina and coulmbia
            </div>
            </div>
            
            <div class="flex align-center py-2  ">
                 <img src="@/images/wrong-answer.svg" class="px-1 w-6 h-6 my-auto" >
            </div>
          </div>
          <div class="rounded-full mx-2 mt-6 flex border border-red-400 justify-between px-2">
            <div class="flex ">
              <div class="border-r-2 px-2 py-2 border-red-300">
             C
           </div> 
             <div class="py-2 pl-2">
              Argentina and coulmbia
            </div>
            </div>
          
            <div class="flex align-center py-2  ">
                 <img src="@/images/wrong-answer.svg" class="px-1 w-6 h-6 my-auto" >
            </div>
          </div>
          <div class="rounded-full mx-2 mt-6 flex border hover:border-red-400 justify-between px-2 show">
            <div class="flex ">
              <div class="border-r-2 px-2 py-2 hover:border-red-300 ">
             D
           </div> 
             <div class="py-2 pl-2">
              Argentina and coulmbia
            </div>
            </div>
            
            <div class="flex align-center py-2 wrong">
                 <img src="@/images/wrong-answer.svg" class="px-1 w-6 h-6 my-auto" >
            </div>
          </div>
        </div>
        </div>
        <div class="text-center pb-8">
          <button class="rounded-full bg-gray-100 text-l py-1 px-10 hover:text-white hover:bg-red-300">SUBMIT</button>
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
  .wrong{
  display: none;
  }
  .show{
    display:block;
  }
</style>
