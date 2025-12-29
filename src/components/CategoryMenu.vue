<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Props: List of categories and current counts
defineProps({
  categories: {
    type: Array as () => string[],
    required: true
  },
  categoryCounts: {
    type: Object as () => Record<string, number>,
    required: true
  }
})

const emit = defineEmits(['selectCategory'])
</script>

<template>
  <div class="menu-grid">
    <div class="menu-intro">
      <h2>{{ t('app.categories') }}</h2>
    </div>

    <!-- "All Questions" Card -->
    <button class="category-card primary-card" @click="emit('selectCategory', null)">
      <div class="card-content">
        <h3>{{ t('app.allQuestions') }}</h3>
      </div>
      <div class="card-footer">
        <span>∞</span>
      </div>
    </button>

    <!-- Individual Categories -->
     <button 
      v-for="cat in categories" 
      :key="cat" 
      class="category-card glass-panel"
      @click="emit('selectCategory', cat)"
    >
      <div class="card-content">
        <h3>{{ cat }}</h3>
      </div>
      <div class="card-footer">
        <span class="count-badge">{{ categoryCounts[cat] || 0 }} cards</span>
      </div>
    </button>
  </div>
</template>

<style scoped>
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;
  padding: 1rem;
}

.menu-intro {
  grid-column: 1 / -1;
  text-align: left;
  margin-bottom: 0.5rem;
}

.menu-intro h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.category-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  min-height: 120px;
  padding: 1.5rem;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(30, 32, 38, 0.6);
}

.category-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.primary-card {
  background: linear-gradient(135deg, rgba(100, 108, 255, 0.2), rgba(100, 108, 255, 0.05));
  border-color: rgba(100, 108, 255, 0.3);
}

.primary-card:hover {
  border-color: rgba(100, 108, 255, 0.6);
  box-shadow: 0 10px 30px rgba(100, 108, 255, 0.15);
}

.card-content h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3;
}

.card-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}

.count-badge {
  font-size: 0.8rem;
  opacity: 0.5;
  font-variant-numeric: tabular-nums;
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 8px;
  border-radius: 10px;
}
</style>
