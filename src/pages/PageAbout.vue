<script lang="ts" setup>
import Heading from '../components/Heading.vue';
import LayoutDefault from '../layouts/LayoutDefault.vue';
import Button from '../components/Button.vue';
</script>

<template>
  <LayoutDefault>
    <div class="py-12 px-6 flex flex-col justify-between h-full">
      <Heading class="text-center">About</Heading>

      <div class="space-y-6">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt amet.
        </p>

        <p>
          This is <a class="underline text-red" href="#" target="_blank">a Link</a> lorem ipsum dolor sit amet, sadipscing elitr, sed eirmod amet.
        </p>
      </div>

      <div class="flex justify-between">
        <Button as="router-link" to="/" theme="secondary">Back</Button>
      </div>
    </div>
  </LayoutDefault>
</template>

<style scoped></style>
