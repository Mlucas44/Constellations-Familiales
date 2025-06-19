<template>
  <textarea
    v-model="inputValue"
    class="textarea"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  placeholder?: string
  modelValue?: string
}>(), {
  placeholder: '',
  modelValue: ''
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<style lang="css" scoped>
@import '@/assets/styles/variables.css';

.textarea {
  width: 100%;
  min-height: 120px;
  padding: 0.5rem 1rem;
  border: none;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  font-family: var(--font-family-body);
  font-size: var(--font-size-p);
  line-height: 1.5;
  resize: vertical;
  transition: all 0.2s ease;
}

.textarea::placeholder {
  color: var(--color-primary);
  opacity: 0.7;
}

.textarea:focus {
  outline: none;
}
</style> 