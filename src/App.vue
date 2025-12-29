<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDeck } from './composables/useDeck'
import LanguageToggle from './components/LanguageToggle.vue'
import CategoryMenu from './components/CategoryMenu.vue'
import DeckView from './components/DeckView.vue'

const { t, locale } = useI18n()

// View State
type ViewState = 'menu' | 'deck'
const currentView = ref<ViewState>('menu')

// Deck Logic
const {
  selectedCategory,
  currentCustomIndex,
  isFlipped,
  uniqueCategories,
  categoryCounts,
  filteredQuestions,
  currentQuestionLocalized,
  nextCard,
  prevCard,
  handleFlip,
  selectCategory: setDeckCategory
} = useDeck(locale)

// Navigation Adapters
const activeCategoryTitle = () => selectedCategory.value || t('app.allQuestions')

const handleSelectCategory = (category: string | null) => {
  setDeckCategory(category)
  currentView.value = 'deck'
}

const goBackToMenu = () => {
  currentView.value = 'menu'
  isFlipped.value = false // Reset flip on exit
}
</script>

<template>
  <div class="container">
    <header>
      <div class="header-top">
        <h1 class="main-title">DevCards<span class="dot">.</span></h1>
        <LanguageToggle />
      </div>
      
      <p v-if="currentView === 'menu'" class="subtitle">{{ t('app.subtitle') }}</p>
      <button v-else class="back-link" @click="goBackToMenu">
        {{ t('app.backToMenu') }}
      </button>
    </header>

    <main>
      <transition name="fade" mode="out-in">
        <CategoryMenu 
          v-if="currentView === 'menu'"
          :categories="uniqueCategories"
          :categoryCounts="categoryCounts"
          @selectCategory="handleSelectCategory"
        />
        
        <DeckView 
          v-else
          :category-title="activeCategoryTitle()"
          :question="currentQuestionLocalized"
          :is-flipped="isFlipped"
          :current-index="currentCustomIndex"
          :total-count="filteredQuestions.length"
          @next="nextCard"
          @prev="prevCard"
          @flip="handleFlip"
        />
      </transition>
    </main>
  </div>
</template>

<style>
/* Transition Global */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>

