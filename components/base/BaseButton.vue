<template>
  <button
    type="button"
    class="btn"
    :class="{ 'btn--inverted': inverted }"
    @click="handleClick"
  >
    <img 
      v-if="icon" 
      :src="icon" 
      class="btn__icon"
    >
    <span v-if="label" class="btn__label">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
const _props = withDefaults(defineProps<{
  label?: string
  icon?: string
  inverted?: boolean
}>(), {
  label: '',
  icon: '',
  inverted: false
})

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-secondary);
  border-radius: 9999px;
  background-color: transparent;
  color: var(--color-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-p);
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn:hover {
  background-color: var(--color-secondary);
  color: var(--color-white);
  border-color: var(--color-primary);
}

.btn:focus {
  outline: none;
}

.btn--inverted {
  color: var(--color-white);
  border-color: var(--color-secondary);
}

.btn--inverted:hover {
  background-color: var(--color-secondary);
  border-color: var(--color-primary);
}

.btn__icon {
  width: 1.25rem;
  height: 1.25rem;
}

.btn__label {
  text-transform: uppercase;
}
</style>