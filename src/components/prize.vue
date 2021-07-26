<template>
  <div class="grid justify-center">
    
    <div class="nav bg-red-300 z-10 flex rounded-sm justify-between">
      <div class="text-white align-middle flex pt-2 pl-2">
     <a> <div class="pr-2 font-bold"> <unicon name="arrow-left" fill="white" class="my-auto w-4 mr-1"></unicon></div></a>
       <div> Quiz </div>
      </div>
      <div class="pt-2 pr-5">
        <unicon name="graph-bar" fill="white" class="my-auto w-4 mr-1"></unicon>
      </div>
    </div>

    <div class="card bg-white justify-self-center z-50 rounded-md relative shadow-lg -mt-28 ">
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

    
    <div class="my-6 bg-white prize card justify-self-center rounded-md
shadow-lg p-2">
   
     
      

<Tabs>
  <TabItem name="PRIZE" active>
    <div class="first-tab">
       <div id="prize">
        <div class="flex  justify-center align-center p-2">
           <img src="@/images/clock.svg" class="h-5 w-5 align-middle mr-1">
           <p class="align-middle ml-1 text-gray-900">Ends in</p>
        </div>
          <div class="flex justify-center text-center mb-6">
          <div>
            <h1 class="text-5xl font-medium text-gray">
          00:
            </h1>
            <p class="text-gray-600">
              hrs
            </p>
        </div>
        <div>
            <h1 class="text-5xl font-medium text-gray">
          54:
            </h1>
            <p class="text-gray-600">
              mins
            </p>
        </div>
        <div>
            <h1 class="text-5xl font-medium text-gray">
          44 
            </h1>
            <p class="text-gray-600">
              secs
            </p>
        </div>
        </div> 

        <div class="flex justify-center pb-10 border-b-2 mx-2">
          <unicon name="circle" fill="green" class="align-middle px-1"></unicon>
          <span class="text-xs my-auto">Player online:585</span>
        </div>  
        <div class="text-center font-medium text-l py-2">
          Rankings
        </div>  
        <div class="font-medium text-gray-700 text-l mt-2 pb-8 border-b-2 mx-2">
          <div class="bg-gray-100 mx-2 flex justify-between p-3">
            <div>
              Rank: 1 to 5
            </div>
            <div class="flex align-center">
                <unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon><span class="my-auto">1000 to 3000</span>
            </div>
          </div>
          <div class="bg-white mx-2 flex justify-between p-3">
            <div>
              Rank: 6 to 10
            </div>
            <div class="flex align-center">
                <unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon><span class="my-auto">100 to 300</span>
            </div>
          </div>
          <div class="bg-gray-100 mx-2 flex justify-between p-3">
            <div>
              Rank: 11 to 100
            </div>
            <div class="flex align-center">
                <unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon><span class="my-auto">10 to 30</span>
            </div>
          </div>
          <div class="bg-white mx-2 flex justify-between p-3">
            <div>
              Rank: Total Prize pool:
            </div>
            <div class="flex align-center">
                <unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon><span class="my-auto">150000</span>
            </div>
          </div>
        </div>

        <div class="px-4 pb-6">
          <div class="text-center text-gray-700 font-medium text-l py-2">
          Details
        </div>
        <div class=" text-gray-500 font-medium text-sm pl-2 pr-4">
          <p class="py-3">
            1. Lorem ipsum dolor sit amit.constructor elite ,sed to for the kingdom of tempor incident ut.
          </p>
          <p class="py-3">
            2. Rissus Commodo viverra measns an accusman laccus vel fecility.
          </p>
          <p class="py-3">
            3. Lorem ipsum dolor sit amit.constructor elite ,sed to for the kingdom of tempor incident ut. 
          </p>
          <p class="py-3">
             4. Rissus Commodo viverra measns an accusman laccus vel fecility.
          </p>
        </div>
        </div>
      </div>

    </div>
  </TabItem>
  <TabItem name="LEADERBOARD">
    <div class="second-tab"><div class="leaderboard font-medium text-gray-800 bg-white pt-16 pb-28 text-center" id="leaderboard">
        You have not participated yet.
        
      </div></div>
  </TabItem>
</Tabs>

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
</style>
