<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { questions } from './data/questions'
import Flashcard from './components/Flashcard.vue'
import LanguageToggle from './components/LanguageToggle.vue'
import CategoryMenu from './components/CategoryMenu.vue'

const { t, locale } = useI18n()

// App State
type ViewState = 'menu' | 'deck'
const currentView = ref<ViewState>('menu')
const selectedCategory = ref<string | null>(null)
const currentCustomIndex = ref(0)
const isFlipped = ref(false)

// Data Processing
const uniqueCategories = computed(() => {
  const cats = new Set(questions.map(q => q.category))
  return Array.from(cats)
})

const categoryCounts = computed(() => {
  const counts: Record<string, number> = {}
  questions.forEach(q => {
    counts[q.category] = (counts[q.category] || 0) + 1
  })
  return counts
})

const filteredQuestions = computed(() => {
  if (!selectedCategory.value) {
    return questions
  }
  return questions.filter(q => q.category === selectedCategory.value)
})

// Current Question Object (Localized)
const currentQuestionLocalized = computed(() => {
  if (filteredQuestions.value.length === 0) return null
  const q = filteredQuestions.value[currentCustomIndex.value]
  return {
    ...q,
    question: q.question[locale.value as 'en' | 'de'],
    answer: q.answer[locale.value as 'en' | 'de']
  }
})

// Navigation Actions
const selectCategory = (category: string | null) => {
  selectedCategory.value = category
  currentCustomIndex.value = 0
  isFlipped.value = false
  currentView.value = 'deck'
}

const goBackToMenu = () => {
  currentView.value = 'menu'
  isFlipped.value = false
}

const nextCard = () => {
  isFlipped.value = false
  setTimeout(() => {
    if (currentCustomIndex.value < filteredQuestions.value.length - 1) {
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
      
      <!-- Show subtitle only on menu, show breadcrumb on deck -->
      <p v-if="currentView === 'menu'" class="subtitle">{{ t('app.subtitle') }}</p>
      <button v-else class="back-link" @click="goBackToMenu">
        {{ t('app.backToMenu') }}
      </button>
    </header>

    <main>
      <!-- MENU VIEW -->
      <transition name="fade" mode="out-in">
        <CategoryMenu 
          v-if="currentView === 'menu'"
          :categories="uniqueCategories"
          :categoryCounts="categoryCounts"
          @selectCategory="selectCategory"
        />
        
        <!-- DECK VIEW -->
        <div v-else class="deck-view">
          <div class="deck-header">
            <h2 class="category-title">{{ selectedCategory || t('app.allQuestions') }}</h2>
            <div class="progress-bar">
              <div 
                class="progress-fill" 
                :style="{ width: ((currentCustomIndex + 1) / filteredQuestions.length) * 100 + '%' }"
              ></div>
            </div>
          </div>

          <Flashcard 
            v-if="currentQuestionLocalized"
            :question="currentQuestionLocalized" 
            :is-flipped="isFlipped" 
            :reveal-text="t('app.reveal')"
            @flip="handleFlip"
          />

          <div class="controls">
            <button @click="prevCard" :disabled="currentCustomIndex === 0" class="nav-btn">
              {{ t('app.prev') }}
            </button>
            <span class="counter">{{ currentCustomIndex + 1 }} / {{ filteredQuestions.length }}</span>
            <button @click="nextCard" class="primary nav-btn">
              {{ t('app.next') }}
            </button>
          </div>
        </div>
      </transition>
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Changed from center to allow scrolling */
  min-height: 100vh;
  padding: 2rem 1rem;
  gap: 2rem;
  box-sizing: border-box;
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

.back-link {
  background: none;
  border: none;
  color: #646cff;
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 0.5rem;
  padding: 0;
  text-decoration: none;
  display: inline-block;
}

.back-link:hover {
  text-decoration: underline;
  transform: none;
  box-shadow: none;
}

/* Deck View Styles */
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

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
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
