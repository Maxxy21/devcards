<script setup lang="ts">
import { PropType } from 'vue'

// Define a local interface for the "flattened" question received from parent
interface LocalizedQuestion {
  category: string;
  question: string;
  answer: string;
  difficulty: string;
}

defineProps({
  question: {
    type: Object as PropType<LocalizedQuestion>,
    required: true
  },
  isFlipped: {
    type: Boolean,
    default: false
  },
  revealText: {
    type: String,
    default: 'Tap to reveal'
  }
})

const emit = defineEmits(['flip'])
</script>

<template>
  <div class="scene">
    <div 
      class="card" 
      :class="{ 'is-flipped': isFlipped }" 
      @click="emit('flip')"
    >
      <div class="card-face card-front glass-panel">
        <div class="category-tag">{{ question.category }}</div>
        <div class="content">
          <h2>{{ question.question }}</h2>
        </div>
        <div class="hint-text">{{ revealText }}</div>
      </div>
      
      <div class="card-face card-back glass-panel">
        <div class="category-tag">{{ question.category }}</div>
        <div class="content">
          <p>{{ question.answer }}</p>
        </div>
        <div class="difficulty-pill" :class="question.difficulty.toLowerCase()">
          {{ question.difficulty }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scene {
  width: 100%;
  max-width: 400px;
  height: 500px;
  perspective: 1000px;
}

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-style: preserve-3d;
  cursor: pointer;
}

.card.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; /* Key for flip effect */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
}

.card-front {
  background: linear-gradient(135deg, rgba(30,32,38,0.9), rgba(30,32,38,0.7));
}

.card-back {
  background: linear-gradient(135deg, rgba(20,20,25,0.95), rgba(30,32,38,0.9));
  transform: rotateY(180deg);
  border: 1px solid rgba(100, 108, 255, 0.3); /* Subtle blue border for back */
}

/* Typography & Elements */
.category-tag {
  position: absolute;
  top: 1.5rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.4);
}

.content h2 {
  font-size: 1.5rem;
  line-height: 1.4;
  font-weight: 600;
}

.content p {
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
}

.hint-text {
  position: absolute;
  bottom: 1.5rem;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.3);
}

.difficulty-pill {
  position: absolute;
  bottom: 1.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.difficulty-pill.easy { background: rgba(76, 175, 80, 0.2); color: #81c784; }
.difficulty-pill.medium { background: rgba(255, 193, 7, 0.2); color: #ffd54f; }
.difficulty-pill.hard { background: rgba(244, 67, 54, 0.2); color: #e57373; }

/* Responsive */
@media (max-width: 480px) {
  .scene {
    height: 400px;
  }
}
</style>
