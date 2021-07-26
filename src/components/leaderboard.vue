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
       
      </div>
  </div>

    
    <div class="my-6 bg-white prize card justify-self-center rounded-md
shadow-lg p-2">
   
     
      

<Tabs>
  <TabItem name="PRIZE" active>
     <div class="second-tab"><div class="leaderboard font-medium text-gray-800 bg-white pt-16 pb-28 text-center" id="leaderboard">
        ..
        
      </div></div>
  </TabItem>
  <TabItem name="LEADERBOARD">
   
      <div class="first-tab">
       
        <div class="text-center font-medium  text-xl pt-2 pb-6">
         Current Rankings
        </div>  
        <div class="grid grid-cols-3 text-center justify-center items-center mb-8">
           <div class="justify-center font-medium"><img src="@/images/rank-2.svg" class="mx-auto my-auto" >Mohan</div>
           <div class="justify-center font-medium text-xl"><img src="@/images/rank-2.svg" class="mx-auto my-auto w-24 h-24" >Meet</div>
           <div class="justify-center font-medium"><img src="@/images/rank-2.svg" class="mx-auto my-auto" >Atul</div>
        </div>
        <div class="mx-2">

      <table class="table-auto w-full ">
  
  <tbody>
    <tr class="my-4">
      <td>Rank</td> 
      <td>User</td>
      <td>Score</td>
      <td>Wins</td>
    </tr>
    <tr class="hover:bg-gray-100 p-4">
      <td class="py-2">20</td>
      <td>Saktiman singh</td>
      <td>545422</td>
      <td class="flex py-2"><unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon>56</td>
    </tr>
    <tr class="hover:bg-gray-100 p-4">
      <td class="py-2">1</td>
      <td>Saktiman singh</td>
      <td>545422</td>
      <td class="flex py-2"><unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon>56</td>
    </tr>
    <tr class="hover:bg-gray-100 p-4">
      <td class="py-2">2</td>
      <td>Saktiman singh</td>
      <td>545422</td>
      <td class="flex py-2"><unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon>2000</td>
    </tr>
    <tr class="hover:bg-gray-100 p-4">
      <td class="py-2">3</td>
      <td>Saktiman singh</td>
      <td>545422</td>
      <td class="flex py-2"><unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon>2000</td>
    </tr>
    <tr class="hover:bg-gray-100 p-4">
      <td class="py-2">4</td>
      <td>Saktiman singh</td>
      <td>545422</td>
      <td class="flex py-2"><unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon>1250</td>
    </tr>
    <tr class="hover:bg-gray-100 p-4">
      <td class="py-2">5</td>
      <td>abhishukla</td>
      <td>545422</td>
      <td class="flex py-2"><unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon>1250</td>
    </tr>
    <tr class="hover:bg-gray-100 p-4">
      <td class="py-2">6</td>
      <td>abhishukla</td>
      <td>545422</td>
      <td class="flex py-2"><unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon>1250</td>
    </tr>
    <tr class="hover:bg-gray-100 p-4">
      <td class="py-2">7</td>
      <td>abhishukla</td>
      <td>545422</td>
      <td class="flex py-2"><unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon>1250</td>
    </tr>
    <tr class="hover:bg-gray-100 p-4">
      <td class="py-2">8</td>
      <td>abhishukla</td>
      <td>545422</td>
      <td class="flex py-2"><unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon>56</td>
    </tr>
    <tr class="hover:bg-gray-100 p-4">
      <td class="py-2">9</td>
      <td>Saktiman singh</td>
      <td>545422</td>
      <td class="flex py-2"><unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon>56</td>
    </tr>
    <tr class="hover:bg-gray-100 p-4">
      <td class="py-2">10</td>
      <td>Saktiman singh</td>
      <td>545422</td>
      <td class="flex py-2"><unicon name="rupee-sign" fill="black" class="my-auto w-4 mr-1"></unicon>56</td>
    </tr>
    
  </tbody>
</table>
        </div>
    </div>
  </TabItem>
</Tabs>
  

    </div>
    <div class="text-center">
          <button class="rounded-full text-l py-1 px-10 text-white bg-red-300">Play now</button>
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
