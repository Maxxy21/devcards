export interface Question {
  id: number;
  category: 'Kotlin' | 'TypeScript' | 'Vue.js' | 'AWS' | 'General' | 'Soft Skills' | 'Retail Media' | 'Architecture';
  question: { en: string; de: string };
  answer: { en: string; de: string };
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const questions: Question[] = [
  // Kotlin
  {
    id: 1,
    category: 'Kotlin',
    question: {
      en: 'What is the difference between `val` and `var` in Kotlin?',
      de: 'Was ist der Unterschied zwischen `val` und `var` in Kotlin?'
    },
    answer: {
      en: '`val` is immutable (read-only reference), while `var` is mutable. However, the object a `val` points to can still be modified if it is mutable.',
      de: '`val` ist unveränderlich (read-only Referenz), während `var` veränderlich ist. Das Objekt selbst kann jedoch verändert werden, wenn es mutierbar ist.'
    },
    difficulty: 'Easy'
  },
  {
    id: 2,
    category: 'Kotlin',
    question: {
      en: 'Explain Data Classes in Kotlin.',
      de: 'Erkläre Data Classes in Kotlin.'
    },
    answer: {
      en: 'Data classes (`data class`) are concise classes primarily used to hold data. They automatically generate `equals()`, `hashCode()`, `toString()`, `copy()`, and `componentN()` functions.',
      de: 'Data Classes (`data class`) sind Klassen, die primär zum Speichern von Daten dienen. Sie generieren automatisch Methoden wie `equals()`, `hashCode()`, `toString()` und `copy()`.'
    },
    difficulty: 'Easy'
  },
  {
    id: 3,
    category: 'Kotlin',
    question: {
      en: 'What are Coroutines in Kotlin?',
      de: 'Was sind Coroutines in Kotlin?'
    },
    answer: {
      en: 'Coroutines are light-weight threads used for non-blocking asynchronous programming. They allow writing async code in a sequential manner.',
      de: 'Coroutines sind leichtgewichtige Threads für nicht-blockierende asynchrone Programmierung. Sie ermöglichen das Schreiben von async-Code in sequenzieller Form.'
    },
    difficulty: 'Medium'
  },

  // TypeScript
  {
    id: 4,
    category: 'TypeScript',
    question: {
      en: 'What is the difference between `interface` and `type` in TypeScript?',
      de: 'Unterschied zwischen `interface` und `type` in TypeScript?'
    },
    answer: {
      en: 'Both define shapes. `interface` is better for extending (via `extends`) and declaration merging. `type` is more flexible (unions, intersections, primitives).',
      de: 'Beide definieren Strukturen. `interface` eignet sich besser für Vererbung (`extends`). `type` ist flexibler für Union-Types, Intersections und primitive Typen.'
    },
    difficulty: 'Medium'
  },
  {
    id: 5,
    category: 'TypeScript',
    question: {
      en: 'What are Generics in TypeScript?',
      de: 'Was sind Generics in TypeScript?'
    },
    answer: {
      en: 'Generics allow creating reusable components/functions that work with a variety of types while retaining type safety (e.g., `Array<T>`).',
      de: 'Generics ermöglichen wiederverwendbare Komponenten, die mit verschiedenen Typen funktionieren, aber Typensicherheit wahren (z.B. `Array<T>`).'
    },
    difficulty: 'Medium'
  },

  // Vue.js
  {
    id: 6,
    category: 'Vue.js',
    question: {
      en: 'What is the standard Vue 3 Composition API setup?',
      de: 'Was ist das Standard-Setup für die Vue 3 Composition API?'
    },
    answer: {
      en: 'Using the `<script setup>` syntax, which provides a cleaner, more concise way to use the Composition API without the `setup()` function wrapper.',
      de: 'Die Nutzung von `<script setup>`, was eine sauberere und prägnantere Weise ist, die Composition API ohne `setup()`-Wrapper zu nutzen.'
    },
    difficulty: 'Easy'
  },
  {
    id: 7,
    category: 'Vue.js',
    question: {
      en: 'Explain `v-model` in Vue.',
      de: 'Erkläre `v-model` in Vue.'
    },
    answer: {
      en: '`v-model` creates two-way data binding on form inputs or components. In Vue 3, it defaults to `modelValue` prop and `update:modelValue` event.',
      de: '`v-model` erstellt Two-Way Data Binding. In Vue 3 nutzt es standardmäßig die `modelValue`-Prop und das `update:modelValue`-Event.'
    },
    difficulty: 'Medium'
  },
  {
    id: 8,
    category: 'Vue.js',
    question: {
      en: 'What is the Virtual DOM?',
      de: 'Was ist das Virtual DOM?'
    },
    answer: {
      en: 'A lightweight JavaScript representation of the actual DOM. Vue modifies the Virtual DOM first, calculates the difference (diffing), and then updates the real DOM efficiently.',
      de: 'Eine leichtgewichtige JS-Repräsentation des echten DOMs. Vue ändert erst das Virtual DOM, berechnet die Differenz (Diffing) und aktualisiert dann effizient das echte DOM.'
    },
    difficulty: 'Medium'
  },

  // AWS
  {
    id: 9,
    category: 'AWS',
    question: {
      en: 'What is AWS Lambda?',
      de: 'Was ist AWS Lambda?'
    },
    answer: {
      en: 'A serverless compute service that runs code in response to events (e.g., API Gateway calls, S3 uploads) without provisioning servers.',
      de: 'Ein serverloser Compute-Service, der Code als Reaktion auf Ereignisse (z.B. API-Aufrufe, S3-Uploads) ausführt, ohne Server bereitzustellen.'
    },
    difficulty: 'Medium'
  },
  {
    id: 10,
    category: 'AWS',
    question: {
      en: 'Explain "Infrastructure as Code" (Terraform context).',
      de: 'Erkläre "Infrastructure as Code" (Terraform).'
    },
    answer: {
      en: 'Managing and provisioning infrastructure through machine-readable definition files (like Terraform .tf files) rather than physical hardware configuration or interactive tools.',
      de: 'Verwaltung und Bereitstellung von Infrastruktur durch maschinenlesbare Definitionsdateien (z.B. .tf) statt manueller Konfiguration.'
    },
    difficulty: 'Medium'
  },

  // Soft Skills / Agile
  {
    id: 11,
    category: 'Soft Skills',
    question: {
      en: 'How do you approach Pair Programming?',
      de: 'Wie gehst du an Pair Programming heran?'
    },
    answer: {
      en: 'Collaborative coding where one drives (writes code) and one navigates (reviews/guides). Requires open communication, low ego, and frequent role switching.',
      de: 'Gemeinsames Coden: Einer "fährt" (schreibt), einer "navigiert" (prüft). Erfordert offene Kommunikation, wenig Ego und häufigen Rollenwechsel.'
    },
    difficulty: 'Easy'
  },
  {
    id: 12,
    category: 'Soft Skills',
    question: {
      en: 'What is CI/CD?',
      de: 'Was ist CI/CD?'
    },
    answer: {
      en: 'Continuous Integration (merging code frequently with auto-tests) and Continuous Delivery/Deployment (automating release to environments).',
      de: 'Continuous Integration (häufiges Mergen mit automatischen Tests) und Continuous Delivery (automatisierte Bereitstellung).'
    },
    difficulty: 'Easy'
  },

  // Personal / CV Specific
  {
    id: 13,
    category: 'General',
    question: {
      en: 'Explain the architecture of your "Pista" project.',
      de: 'Erkläre die Architektur deines "Pista"-Projekts.'
    },
    answer: {
      en: 'It is a Next.js 15 app using Convex for serverless backend and Clerk for auth. It integrates OpenAI/Whisper for analyzing startup pitches.',
      de: 'Eine Next.js 15 App mit Convex (Serverless Backend) und Clerk (Auth). Nutzt OpenAI/Whisper zur Analyse von Startup-Pitches.'
    },
    difficulty: 'Medium'
  },
  {
    id: 14,
    category: 'AWS',
    question: {
      en: 'How does your experience with Convex compare to AWS Lambda/DynamoDB?',
      de: 'Vergleich Convex vs. AWS Lambda/DynamoDB?'
    },
    answer: {
      en: 'Convex is a managed cohesive backend-as-a-service, whereas AWS offers granular primitives (Lambda for compute, DynamoDB for storage) requiring manual integration (or IaC like Terraform).',
      de: 'Convex ist ein "All-in-One" BaaS. AWS bietet granulare Bausteine (Lambda, DynamoDB), die manuell oder per Terraform verbunden werden müssen.'
    },
    difficulty: 'Hard'
  },
  {
    id: 15,
    category: 'Vue.js',
    question: {
      en: 'Compare React Hooks (used in Pista) with Vue Composition API.',
      de: 'Vergleich React Hooks (genutzt in Pista) mit Vue Composition API.'
    },
    answer: {
      en: 'Both allow extracting logic. React Hooks rely on call order and re-renders. Vue Composition API (`setup`) runs once and uses mutable reactive proxies (`ref`, `reactive`).',
      de: 'Beide erlauben Logik-Extraktion. React Hooks hängen von der Aufrufreihenfolge ab (Re-Renders). Vue Composition API läuft einmalig und nutzt mutable Proxies.'
    },
    difficulty: 'Hard'
  },
  {
    id: 16,
    category: 'Kotlin',
    question: {
      en: 'You used Java Spring Boot. How does Kotlin improve upon it?',
      de: 'Du hast Java Spring Boot genutzt. Was macht Kotlin besser?'
    },
    answer: {
      en: 'Kotlin reduces boilerplate (data classes), handles null safety at compile time, and offers Coroutines, making Spring Boot applications more concise and safer.',
      de: 'Kotlin reduziert Boilerplate (Data Classes), bietet Null-Safety zur Compile-Zeit und Coroutines, was Spring Boot Apps prägnanter und sicherer macht.'
    },
    difficulty: 'Medium'
  },

  // NEW: Job Specific (Retail Media & Microservices)
  {
    id: 17,
    category: 'Retail Media',
    question: {
      en: 'What is Retail Media (Context: OTTO Advertising)?',
      de: 'Was ist Retail Media (Kontext: OTTO Advertising)?'
    },
    answer: {
      en: 'Advertising sold by retailers within their own digital properties (like Sponsored Products on otto.de). It leverages first-party shopper data for precise targeting.',
      de: 'Werbung, die Händler auf ihren eigenen Plattformen verkaufen (z. B. Sponsored Products auf otto.de). Nutzt First-Party-Daten für präzises Targeting.'
    },
    difficulty: 'Hard'
  },
  {
    id: 18,
    category: 'Architecture',
    question: {
      en: 'What are the benefits of Microservices in e-commerce?',
      de: 'Vorteile von Microservices im E-Commerce?'
    },
    answer: {
      en: 'Scalability (scale specific services like Checkout independently), Agility (teams work on decoupled services), and Resilience (failure in one service doesn\'t crash the whole shop).',
      de: 'Skalierbarkeit (Checkout unabhängig skalieren), Agilität (entkoppelte Teams) und Resilienz (Fehler in einem Service crashen nicht den ganzen Shop).'
    },
    difficulty: 'Hard'
  },
  {
    id: 19,
    category: 'General',
    question: {
      en: 'What is Shared Responsibility in Agile/DevOps context?',
      de: 'Was bedeutet "Shared Responsibility" im Agile/DevOps Kontext?'
    },
    answer: {
      en: 'The entire team owns the product quality, deployment, and operation ("You build it, you run it"), rather than tossing code over the wall to QA/Ops.',
      de: 'Das gesamte Team verantwortet Qualität, Deployment und Betrieb ("You build it, you run it"). Kein "Abwerfen" von Code an QA/Ops.'
    },
    difficulty: 'Medium'
  }
];
