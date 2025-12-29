<script setup lang="ts">
import { PropType } from 'vue'
import { useI18n } from 'vue-i18n'
import Flashcard from './Flashcard.vue'

defineProps({
  categoryTitle: {
    type: String,
    required: true
  },
  question: {
    type: Object as PropType<any>, // Typed in parent/composable logic
    default: null
  },
  isFlipped: {
    type: Boolean,
    default: false
  },
  currentIndex: {
    type: Number,
    required: true
  },
  totalCount: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['next', 'prev', 'flip'])

const { t } = useI18n()
</script>

<template>
  <div class="deck-view">
    <div class="deck-header">
      <h2 class="category-title">{{ categoryTitle }}</h2>
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          :style="{ width: ((currentIndex + 1) / totalCount) * 100 + '%' }"
        ></div>
      </div>
    </div>

    <Flashcard 
      v-if="question"
      :question="question" 
      :is-flipped="isFlipped" 
      :reveal-text="t('app.reveal')"
      @flip="emit('flip')"
    />

    <div class="controls">
      <button @click="emit('prev')" :disabled="currentIndex === 0" class="nav-btn">
        {{ t('app.prev') }}
      </button>
      <span class="counter">{{ currentIndex + 1 }} / {{ totalCount }}</span>
      <button @click="emit('next')" class="primary nav-btn">
        {{ t('app.next') }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.deck-view {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.deck-header {
  width: 100%;
  max-width: 400px;
  margin-bottom: 1.5rem;
  text-align: center;
}

.category-title {
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.controls {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
}

.counter {
  font-variant-numeric: tabular-nums;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
}

.nav-btn {
  min-width: 100px;
}

@media (max-width: 480px) {
  .controls {
    gap: 1rem;
    width: 100%;
    justify-content: space-between;
    padding: 0 1rem;
  }
}
</style>
