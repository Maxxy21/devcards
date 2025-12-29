<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { questions } from './data/questions'
import Flashcard from './components/Flashcard.vue'
import LanguageToggle from './components/LanguageToggle.vue'

const { t, locale } = useI18n()

const currentCustomIndex = ref(0)
const isFlipped = ref(false)

// Computed property to get the localized question object
const currentQuestionLocalized = computed(() => {
  const q = questions[currentCustomIndex.value]
  // TypeScript hack to dynamic key access if needed, 
  // but better to pass the whole object and let child handle it
  // OR transform it here. Let's transform it here for simplicity in child.
  return {
    ...q,
    question: q.question[locale.value as 'en' | 'de'],
    answer: q.answer[locale.value as 'en' | 'de']
  }
})

const nextCard = () => {
  isFlipped.value = false
  setTimeout(() => {
    if (currentCustomIndex.value < questions.length - 1) {
      currentCustomIndex.value++
    } else {
      currentCustomIndex.value = 0
    }
  }, 200)
}

const prevCard = () => {
  if (currentCustomIndex.value > 0) {
    isFlipped.value = false
    setTimeout(() => {
      currentCustomIndex.value--
    }, 200)
  }
}

const handleFlip = () => {
  isFlipped.value = !isFlipped.value
}
</script>

<template>
  <div class="container">
    <header>
      <div class="header-top">
        <h1>DevCards<span class="dot">.</span></h1>
        <LanguageToggle />
      </div>
      <p class="subtitle">{{ t('app.subtitle') }}</p>
    </header>

    <main>
      <div class="progress-bar">
        <div 
          class="progress-fill" 
          :style="{ width: ((currentCustomIndex + 1) / questions.length) * 100 + '%' }"
        ></div>
        <!-- Optional text label for accessibility/clarity -->
      </div>

      <Flashcard 
        :question="currentQuestionLocalized" 
        :is-flipped="isFlipped" 
        :reveal-text="t('app.reveal')"
        @flip="handleFlip"
      />

      <div class="controls">
        <button @click="prevCard" :disabled="currentCustomIndex === 0" class="nav-btn">
          {{ t('app.prev') }}
        </button>
        <span class="counter">{{ currentCustomIndex + 1 }} / {{ questions.length }}</span>
        <button @click="nextCard" class="primary nav-btn">
          {{ t('app.next') }}
        </button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  gap: 2rem;
  padding-bottom: 2rem; /* Add padding for mobile scroll */
}

.header-top {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

header h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: -1px;
  background: linear-gradient(to right, #fff, #a5a5a5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.dot {
  color: #00c6ff;
  -webkit-text-fill-color: #00c6ff;
}

.subtitle {
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.progress-bar {
  width: 100%;
  max-width: 400px; /* Match card width */
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-bottom: 1.5rem;
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
