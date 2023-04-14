<script setup lang="ts">

import BoxComponent from "@/components/BoxComponent.vue";</script>

<template>
  <div class="container-full">
    <!--LEFT-->
    <BoxComponent classContainer="container-left" title-box="JAVA">
      <template #content>
        <p class="text-follower-center counter">200,565</p>
      </template>
      <template #scoreDescription>
        <p class="text-bottom-left">High Score: 0</p>
      </template>
    </BoxComponent>
    <!--CENTER-->
    <div class="circle"><p>VS</p></div>
    <div class="rectangle"><p>Which topic is the most searched for?</p></div>
    <!--RIGHT-->
    <BoxComponent classContainer="container-right" title-box="PHP">
      <template #content>
        <div>
          <button class="button">Higher</button>
          <button class="button">Lower</button>
        </div>
      </template>
      <template #scoreDescription>
        <p class="text-bottom-right">Score: 0</p>
      </template>
    </BoxComponent>
  </div>
</template>