import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      app: {
        title: 'DevCards',
        subtitle: 'Ace your OTTO Interview',
        prev: '← Prev',
        next: 'Next →',
        progress: 'Progress',
        reveal: 'Tap to reveal'
      }
    },
    de: {
      app: {
        title: 'DevCards',
        subtitle: 'Meistere dein OTTO Interview',
        prev: '← Zurück',
        next: 'Weiter →',
        progress: 'Fortschritt',
        reveal: 'Tippen zum Aufdecken'
      }
    }
  }
})

export default i18n
