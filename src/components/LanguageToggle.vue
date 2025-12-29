<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'de' : 'en'
}
</script>

<template>
  <button class="lang-toggle" @click="toggleLanguage">
    <span :class="{ active: locale === 'en' }">EN</span>
    <span class="divider">/</span>
    <span :class="{ active: locale === 'de' }">DE</span>
  </button>
</template>

<style scoped>
.lang-toggle {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease;
}

.lang-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
}

.divider {
  opacity: 0.3;
}

.active {
  color: #fff;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
</style>
