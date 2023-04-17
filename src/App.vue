<script setup lang="ts">

import BoxComponent from "@/components/BoxComponent.vue";
import {useIndexStore} from "@/stores";
import {ref} from "vue";

const store = useIndexStore();

let objectLeft = store.randomObject()
let objectRight = store.randomObjectDifferentFrom(objectLeft);
const btnClicked = ref(false);
const score = ref(0);
//ottengo il valore di highScore dal localStorage e lo salvo in una variabile
const highScore = JSON.parse(localStorage.getItem("highScore") || "0");

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//funzione che al click del button cambia il valore di btnClicked
async function clickButton(value: string) {
  let result: boolean;
  btnClicked.value = true;
  if (value === "+") {
    result = objectLeft.count < objectRight.count;
  } else {
    result = objectLeft.count > objectRight.count;
  }
  score.value = result ? score.value + 1 : score.value;
  saveHighStore(score.value);
  await sleep(1000)
  .then(() => {
    resetGame();
  });
}

//salva su localStorage il valore di btnClicked
function saveHighStore(score: number) {
  if (score > highScore) {
    localStorage.setItem("highScore", JSON.stringify(score));
  }
}

//funzione che rinizializza il gioco
function resetGame() {
  objectLeft = objectRight;
  objectRight = store.randomObjectDifferentFrom(objectLeft);
  btnClicked.value = false;
}
</script>

<template>
  <div class="container-full">
    <!--LEFT-->
    <BoxComponent classContainer="container-left" :title-box="objectLeft.title">
      <template #content>
        <p class="text-follower-center counter">{{ objectLeft.count }}</p>
      </template>
      <template #scoreDescription>
        <p class="text-bottom-left">High Score: {{ highScore }}</p>
      </template>
    </BoxComponent>
    <!--CENTER-->
    <div class="circle"><p>VS</p></div>
    <div class="rectangle"><p>Which topic is the most searched for?</p></div>
    <!--RIGHT-->
    <BoxComponent classContainer="container-right" :title-box="objectRight.title">
      <template #content>
        <div v-if="!btnClicked">
          <button class="button" @click="clickButton('+')">Higher</button>
          <button class="button" @click="clickButton('-')">Lower</button>
        </div>
        <div v-else>
          <p class="text-follower-center counter">{{ objectRight.count }}</p>
        </div>
      </template>
      <template #scoreDescription>
        <p class="text-bottom-right">Score: {{ score }}</p>
      </template>
    </BoxComponent>
  </div>
</template>