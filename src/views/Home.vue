<template>
  <div class="bg-gray-300">
    <HelloWorld></HelloWorld>
    <prize></prize>
    <question></question>
    <lastquestion></lastquestion>
    <congratulation></congratulation>
    <leaderboard></leaderboard>
     <history></history>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import prize from "@/components/prize.vue";
import question from "@/components/question.vue";
import lastquestion from "@/components/lastquestion.vue";
import congratulation from "@/components/congratulation.vue";
import leaderboard from "@/components/leaderboard.vue";
import history from "@/components/history.vue";


export default {
  name: "Home",
  components: {
    HelloWorld,
    prize,
    question,
    lastquestion,
    congratulation,
    leaderboard,
    history

  },
};
</script>
