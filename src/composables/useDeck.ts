import { ref, computed } from 'vue'
import { questions } from '../data/questions'

export function useDeck(locale: any) {
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

  const currentQuestionLocalized = computed(() => {
    if (filteredQuestions.value.length === 0) return null
    const q = filteredQuestions.value[currentCustomIndex.value]
    return {
      ...q,
      question: q.question[locale.value as 'en' | 'de'],
      answer: q.answer[locale.value as 'en' | 'de']
    }
  })

  // Actions
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

  const selectCategory = (category: string | null) => {
    selectedCategory.value = category
    currentCustomIndex.value = 0
    isFlipped.value = false
  }

  return {
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
    selectCategory
  }
}
