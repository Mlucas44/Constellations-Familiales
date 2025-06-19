<template>
  <div class="separator">
    <div
      class="separator__line separator__line--first"
      :class="{ 'separator__line--background': variant === 'background' }"
      :style="{
        width: firstwidth,
        height: firstthickness,
      }"
    />
    <div
      class="separator__line separator__line--second"
      :class="{ 'separator__line--background': variant === 'background' }"
      :style="{
        width: secondwidth,
        top: topWidth,
      }"
    />
  </div>
</template>

<script setup lang="ts">

const _props = withDefaults(defineProps<{
  variant?: 'primary' | 'background'
  firstwidth?: string
  secondwidth?: string
  firstthickness?: string
  topWidth?: string
}>(), {
  variant: 'primary',
  firstwidth: '20%',
  secondwidth: '80%',
  firstthickness: '0.4rem',
  topWidth: '0.15rem'
})
</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.separator {
  position: relative;
  width: 100%;
  height: 0.5rem;
}

.separator__line {
  position: absolute;
  background-color: var(--color-primary);
}

.separator__line--background {
  background-color: var(--color-white);
}

.separator__line--first {
  left: 0;
}

.separator__line--second {
  left: 10%;
  height: 0.1rem;
}
</style> 