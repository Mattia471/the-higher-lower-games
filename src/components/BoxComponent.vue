<script setup lang="ts">
//crea una props
const props = defineProps<{
  classContainer: string,
  titleBox: string
}>()
</script>
<template>
  <div :class="classContainer">
    <div class="sub-container-full">
      <p class="text-follower-center-up">{{ titleBox }}</p>
      <slot name="content"></slot>
    </div>
    <slot name="scoreDescription"></slot>
  </div>
</template>
