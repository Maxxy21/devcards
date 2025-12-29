export interface Question {
  id: number;
  category: 'Kotlin' | 'TypeScript' | 'Vue.js' | 'AWS' | 'General' | 'Soft Skills' | 'Retail Media' | 'Architecture' | 'Behavioral';
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
  },

  // NEW: Kotlin / Spring Boot (OTTO Stack)
  {
    id: 20,
    category: 'Kotlin',
    question: {
      en: 'What are Sealed Classes in Kotlin and when would you use them?',
      de: 'Was sind Sealed Classes in Kotlin und wann nutzt man sie?'
    },
    answer: {
      en: 'Sealed classes restrict class hierarchies to a limited set of subclasses (defined in the same file). Useful for representing restricted states like API responses (Success, Error, Loading).',
      de: 'Sealed Classes beschränken Klassenhierarchien auf definierte Subklassen (gleiche Datei). Ideal für begrenzte Zustände wie API-Responses (Success, Error, Loading).'
    },
    difficulty: 'Medium'
  },
  {
    id: 21,
    category: 'Kotlin',
    question: {
      en: 'Explain Kotlin Flows and how they differ from Coroutines.',
      de: 'Erkläre Kotlin Flows und den Unterschied zu Coroutines.'
    },
    answer: {
      en: 'Flows are cold asynchronous streams that emit multiple values over time. Coroutines handle single async operations, while Flows handle streams of data (like real-time auction updates).',
      de: 'Flows sind kalte asynchrone Streams, die mehrere Werte über Zeit emittieren. Coroutines behandeln einzelne Async-Operationen, Flows dagegen Datenstreams (z.B. Echtzeit-Auktionen).'
    },
    difficulty: 'Hard'
  },
  {
    id: 22,
    category: 'Kotlin',
    question: {
      en: 'How does Kotlin handle null safety? What are `?.`, `!!`, and `?:`?',
      de: 'Wie behandelt Kotlin Null Safety? Was bedeuten `?.`, `!!` und `?:`?'
    },
    answer: {
      en: '`?.` (safe call) returns null if receiver is null. `!!` (not-null assertion) throws NPE if null. `?:` (Elvis operator) provides default value if null.',
      de: '`?.` (Safe Call) gibt null zurück wenn Empfänger null. `!!` wirft NPE bei null. `?:` (Elvis) liefert Standardwert bei null.'
    },
    difficulty: 'Easy'
  },
  {
    id: 23,
    category: 'Kotlin',
    question: {
      en: 'What is the `suspend` keyword in Kotlin?',
      de: 'Was bedeutet das `suspend` Keyword in Kotlin?'
    },
    answer: {
      en: 'It marks a function that can be paused and resumed later without blocking the thread. Suspend functions can only be called from coroutines or other suspend functions.',
      de: 'Es markiert Funktionen, die pausiert und später fortgesetzt werden können, ohne den Thread zu blockieren. Nur aus Coroutines oder anderen suspend-Funktionen aufrufbar.'
    },
    difficulty: 'Medium'
  },
  {
    id: 24,
    category: 'Kotlin',
    question: {
      en: 'How would you integrate Kotlin with Spring Boot for a REST API?',
      de: 'Wie integrierst du Kotlin mit Spring Boot für eine REST API?'
    },
    answer: {
      en: 'Use Spring Initializr with Kotlin, data classes for DTOs, @RestController with @GetMapping/@PostMapping, and leverage null safety in request validation.',
      de: 'Spring Initializr mit Kotlin nutzen, Data Classes für DTOs, @RestController mit @GetMapping/@PostMapping, und Null Safety für Request-Validierung.'
    },
    difficulty: 'Medium'
  },

  // NEW: TypeScript Advanced
  {
    id: 25,
    category: 'TypeScript',
    question: {
      en: 'What are Utility Types in TypeScript? Name 3 examples.',
      de: 'Was sind Utility Types in TypeScript? Nenne 3 Beispiele.'
    },
    answer: {
      en: 'Built-in types for common transformations: `Partial<T>` (all optional), `Required<T>` (all required), `Pick<T, K>` (subset of props), `Omit<T, K>`, `Record<K, V>`.',
      de: 'Eingebaute Typen für Transformationen: `Partial<T>` (alle optional), `Required<T>` (alle required), `Pick<T, K>` (Subset), `Omit<T, K>`, `Record<K, V>`.'
    },
    difficulty: 'Medium'
  },
  {
    id: 26,
    category: 'TypeScript',
    question: {
      en: 'Explain `unknown` vs `any` in TypeScript.',
      de: 'Erkläre `unknown` vs `any` in TypeScript.'
    },
    answer: {
      en: '`any` disables type checking entirely. `unknown` is type-safe: you must narrow the type before using it (via type guards). Prefer `unknown` for safer code.',
      de: '`any` deaktiviert Typprüfung komplett. `unknown` ist typsicher: Typ muss vor Nutzung eingeschränkt werden (Type Guards). `unknown` für sichereren Code.'
    },
    difficulty: 'Medium'
  },
  {
    id: 27,
    category: 'TypeScript',
    question: {
      en: 'What are Discriminated Unions in TypeScript?',
      de: 'Was sind Discriminated Unions in TypeScript?'
    },
    answer: {
      en: 'Union types with a common literal property (discriminant) that TypeScript uses for type narrowing. E.g., `type Result = { status: "success", data: T } | { status: "error", error: string }`.',
      de: 'Union Types mit gemeinsamer Literal-Property (Diskriminator) für Type Narrowing. Z.B. `type Result = { status: "success", data: T } | { status: "error", error: string }`.'
    },
    difficulty: 'Hard'
  },

  // NEW: Vue.js Advanced
  {
    id: 28,
    category: 'Vue.js',
    question: {
      en: 'What is Pinia and how does it differ from Vuex?',
      de: 'Was ist Pinia und wie unterscheidet es sich von Vuex?'
    },
    answer: {
      en: 'Pinia is the official Vue 3 state management. Simpler API (no mutations), better TypeScript support, modular stores, and works with Composition API out of the box.',
      de: 'Pinia ist das offizielle Vue 3 State Management. Einfachere API (keine Mutations), bessere TypeScript-Unterstützung, modulare Stores, native Composition API.'
    },
    difficulty: 'Medium'
  },
  {
    id: 29,
    category: 'Vue.js',
    question: {
      en: 'Explain `ref` vs `reactive` in Vue 3 Composition API.',
      de: 'Erkläre `ref` vs `reactive` in der Vue 3 Composition API.'
    },
    answer: {
      en: '`ref` wraps primitives/objects in a reactive container (access via `.value`). `reactive` makes objects reactive directly. Use `ref` for primitives, `reactive` for complex objects.',
      de: '`ref` umwickelt Werte in einen reaktiven Container (Zugriff via `.value`). `reactive` macht Objekte direkt reaktiv. `ref` für Primitive, `reactive` für komplexe Objekte.'
    },
    difficulty: 'Easy'
  },
  {
    id: 30,
    category: 'Vue.js',
    question: {
      en: 'What are Composables in Vue 3?',
      de: 'Was sind Composables in Vue 3?'
    },
    answer: {
      en: 'Functions that encapsulate and reuse reactive logic (like React Hooks). They use Composition API features (ref, computed, watch) and can be shared across components.',
      de: 'Funktionen, die reaktive Logik kapseln und wiederverwenden (wie React Hooks). Nutzen Composition API (ref, computed, watch) und können zwischen Komponenten geteilt werden.'
    },
    difficulty: 'Medium'
  },
  {
    id: 31,
    category: 'Vue.js',
    question: {
      en: 'How does Vue Router handle navigation guards?',
      de: 'Wie behandelt Vue Router Navigation Guards?'
    },
    answer: {
      en: 'Guards control navigation: `beforeEach` (global), `beforeEnter` (per-route), `beforeRouteEnter/Leave` (in-component). Used for auth checks, data fetching, or preventing unsaved changes.',
      de: 'Guards kontrollieren Navigation: `beforeEach` (global), `beforeEnter` (pro Route), `beforeRouteEnter/Leave` (in Komponente). Für Auth, Daten-Laden, ungespeicherte Änderungen.'
    },
    difficulty: 'Medium'
  },

  // NEW: AWS Services
  {
    id: 32,
    category: 'AWS',
    question: {
      en: 'What is Amazon DynamoDB and when would you use it?',
      de: 'Was ist Amazon DynamoDB und wann nutzt man es?'
    },
    answer: {
      en: 'A fully managed NoSQL key-value/document database with single-digit millisecond latency. Ideal for high-scale, low-latency apps like real-time bidding or session storage.',
      de: 'Eine vollständig verwaltete NoSQL Key-Value/Document-Datenbank mit Millisekunden-Latenz. Ideal für High-Scale, Low-Latency Apps wie Echtzeit-Bidding oder Session-Speicherung.'
    },
    difficulty: 'Medium'
  },
  {
    id: 33,
    category: 'AWS',
    question: {
      en: 'What is Amazon CloudWatch and what can you monitor with it?',
      de: 'Was ist Amazon CloudWatch und was kann man damit überwachen?'
    },
    answer: {
      en: 'AWS monitoring service for logs, metrics, and alarms. Monitor Lambda invocations, API latency, error rates, and set up alerts for anomalies.',
      de: 'AWS Monitoring-Service für Logs, Metriken und Alarme. Lambda-Aufrufe, API-Latenz, Fehlerraten überwachen und Alerts für Anomalien einrichten.'
    },
    difficulty: 'Easy'
  },
  {
    id: 34,
    category: 'AWS',
    question: {
      en: 'How would you design a serverless API on AWS?',
      de: 'Wie würdest du eine serverlose API auf AWS designen?'
    },
    answer: {
      en: 'API Gateway for HTTP endpoints, Lambda functions for business logic, DynamoDB for data storage, CloudWatch for monitoring, and IAM for security.',
      de: 'API Gateway für HTTP-Endpunkte, Lambda für Business-Logik, DynamoDB für Datenspeicherung, CloudWatch für Monitoring und IAM für Security.'
    },
    difficulty: 'Hard'
  },
  {
    id: 35,
    category: 'AWS',
    question: {
      en: 'What is the difference between S3 and EBS?',
      de: 'Was ist der Unterschied zwischen S3 und EBS?'
    },
    answer: {
      en: 'S3 is object storage (files via HTTP, unlimited scale). EBS is block storage attached to EC2 instances (like a hard drive). S3 for static assets, EBS for databases.',
      de: 'S3 ist Object Storage (Dateien via HTTP, unbegrenzt skalierbar). EBS ist Block Storage für EC2 (wie Festplatte). S3 für statische Assets, EBS für Datenbanken.'
    },
    difficulty: 'Easy'
  },

  // NEW: Terraform / Infrastructure as Code
  {
    id: 36,
    category: 'Architecture',
    question: {
      en: 'What is Terraform and how does it work?',
      de: 'Was ist Terraform und wie funktioniert es?'
    },
    answer: {
      en: 'HashiCorp tool for Infrastructure as Code. Define resources in `.tf` files, `terraform plan` shows changes, `terraform apply` provisions infrastructure. State file tracks current state.',
      de: 'HashiCorp-Tool für Infrastructure as Code. Ressourcen in `.tf`-Dateien definieren, `terraform plan` zeigt Änderungen, `terraform apply` provisioniert. State-Datei trackt aktuellen Stand.'
    },
    difficulty: 'Medium'
  },
  {
    id: 37,
    category: 'Architecture',
    question: {
      en: 'What is Terraform state and why is it important?',
      de: 'Was ist Terraform State und warum ist er wichtig?'
    },
    answer: {
      en: 'The state file maps Terraform config to real resources. It tracks what exists, enables change detection, and should be stored remotely (S3) for team collaboration.',
      de: 'Die State-Datei mappt Terraform-Config auf echte Ressourcen. Trackt was existiert, ermöglicht Change Detection, sollte remote (S3) für Teamarbeit gespeichert werden.'
    },
    difficulty: 'Medium'
  },

  // NEW: Retail Media / Sponsored Ads
  {
    id: 38,
    category: 'Retail Media',
    question: {
      en: 'How do real-time ad auctions work (RTB)?',
      de: 'Wie funktionieren Echtzeit-Werbeauktionen (RTB)?'
    },
    answer: {
      en: 'When a user loads a page, an auction runs in milliseconds: advertisers bid for the slot, highest bid wins, ad is displayed. Factors: bid amount, relevance, quality score.',
      de: 'Beim Laden einer Seite läuft eine Auktion in Millisekunden: Werbetreibende bieten auf den Slot, höchstes Gebot gewinnt. Faktoren: Gebotshöhe, Relevanz, Quality Score.'
    },
    difficulty: 'Hard'
  },
  {
    id: 39,
    category: 'Retail Media',
    question: {
      en: 'What metrics are important for Sponsored Product Ads?',
      de: 'Welche Metriken sind wichtig für Sponsored Product Ads?'
    },
    answer: {
      en: 'CTR (Click-Through Rate), CPC (Cost-per-Click), ROAS (Return on Ad Spend), Conversion Rate, Impressions, and ACoS (Advertising Cost of Sales).',
      de: 'CTR (Klickrate), CPC (Kosten pro Klick), ROAS (Return on Ad Spend), Conversion Rate, Impressions und ACoS (Werbekosten des Umsatzes).'
    },
    difficulty: 'Medium'
  },
  {
    id: 40,
    category: 'Retail Media',
    question: {
      en: 'What is the difference between Managed Service and Self-Service in Retail Media?',
      de: 'Was ist der Unterschied zwischen Managed Service und Self-Service in Retail Media?'
    },
    answer: {
      en: 'Managed Service: OTTO team runs campaigns for advertisers. Self-Service: Advertisers manage their own campaigns via a platform/UI. Self-Service scales better.',
      de: 'Managed Service: OTTO-Team betreibt Kampagnen für Werbetreibende. Self-Service: Werbetreibende verwalten Kampagnen selbst über Plattform/UI. Self-Service skaliert besser.'
    },
    difficulty: 'Easy'
  },

  // NEW: Architecture / Microservices
  {
    id: 41,
    category: 'Architecture',
    question: {
      en: 'What is Event-Driven Architecture?',
      de: 'Was ist Event-Driven Architecture?'
    },
    answer: {
      en: 'System design where services communicate via events (messages). Decouples producers/consumers, enables async processing, and scales well. Used with Kafka, SQS, SNS.',
      de: 'Systemdesign wo Services via Events (Nachrichten) kommunizieren. Entkoppelt Producer/Consumer, ermöglicht async Verarbeitung, skaliert gut. Mit Kafka, SQS, SNS genutzt.'
    },
    difficulty: 'Hard'
  },
  {
    id: 42,
    category: 'Architecture',
    question: {
      en: 'What is API versioning and why is it important?',
      de: 'Was ist API-Versionierung und warum ist sie wichtig?'
    },
    answer: {
      en: 'Managing different versions of an API (v1, v2) to allow breaking changes without disrupting existing clients. Methods: URL path, header, or query parameter.',
      de: 'Verwaltung verschiedener API-Versionen (v1, v2) für Breaking Changes ohne bestehende Clients zu stören. Methoden: URL-Pfad, Header oder Query-Parameter.'
    },
    difficulty: 'Medium'
  },

  // NEW: CI/CD and Testing
  {
    id: 43,
    category: 'Soft Skills',
    question: {
      en: 'What is the difference between Unit, Integration, and E2E tests?',
      de: 'Was ist der Unterschied zwischen Unit, Integration und E2E Tests?'
    },
    answer: {
      en: 'Unit: test single functions in isolation. Integration: test multiple components together. E2E: test entire user flows in a real browser. Balance all three (testing pyramid).',
      de: 'Unit: einzelne Funktionen isoliert. Integration: mehrere Komponenten zusammen. E2E: ganze User-Flows im echten Browser. Alle drei ausbalancieren (Testing-Pyramide).'
    },
    difficulty: 'Easy'
  },
  {
    id: 44,
    category: 'Soft Skills',
    question: {
      en: 'What is "You build it, you run it" in DevOps?',
      de: 'Was bedeutet "You build it, you run it" in DevOps?'
    },
    answer: {
      en: 'Development teams are responsible for operating their services in production, not just writing code. Encourages better quality, faster incident response, and ownership.',
      de: 'Entwicklungsteams sind für den Betrieb ihrer Services in Production verantwortlich, nicht nur fürs Coden. Fördert bessere Qualität, schnellere Incident Response und Ownership.'
    },
    difficulty: 'Easy'
  },
  {
    id: 45,
    category: 'Soft Skills',
    question: {
      en: 'How do you handle disagreements during Pair Programming?',
      de: 'Wie gehst du mit Meinungsverschiedenheiten beim Pair Programming um?'
    },
    answer: {
      en: 'Listen actively, discuss trade-offs objectively, try both approaches if time allows, and defer to data/tests. Focus on the best solution, not winning the argument.',
      de: 'Aktiv zuhören, Trade-offs objektiv diskutieren, beide Ansätze ausprobieren wenn Zeit erlaubt, auf Daten/Tests vertrauen. Auf beste Lösung fokussieren, nicht aufs Gewinnen.'
    },
    difficulty: 'Medium'
  },

  // NEW: Behavioral / Personal Interview Questions
  {
    id: 46,
    category: 'Behavioral',
    question: {
      en: 'Tell me about yourself.',
      de: 'Erzähl mir etwas über dich.'
    },
    answer: {
      en: "I'm Maxwell, a Hamburg-based Full Stack Developer finishing my CS degree in October 2025. I have hands-on experience with TypeScript, React, Vue.js, and Java/Spring Boot. At Amazon, I built production tools including a browser extension with CI/CD and Grafana dashboards. My thesis project Pista uses Next.js, Convex (serverless), and OpenAI APIs. I'm excited about OTTO's Retail Media space and the SPArks team's real-time auction technology.",
      de: 'Ich bin Maxwell, Full Stack Developer in Hamburg, schließe mein Informatik-Studium im Oktober 2025 ab. Ich habe praktische Erfahrung mit TypeScript, React, Vue.js und Java/Spring Boot. Bei Amazon entwickelte ich Produktionstools mit CI/CD und Grafana-Dashboards. Meine Bachelorarbeit Pista nutzt Next.js, Convex (serverless) und OpenAI APIs. Ich freue mich auf OTTOs Retail Media und die Echtzeit-Auktions-Technologie des SPArks-Teams.'
    },
    difficulty: 'Easy'
  },
  {
    id: 47,
    category: 'Behavioral',
    question: {
      en: 'Why do you want to work at OTTO Advertising?',
      de: 'Warum möchtest du bei OTTO Advertising arbeiten?'
    },
    answer: {
      en: "Three reasons: 1) Retail Media is a growing field combining e-commerce and advertising tech - I want to be part of that. 2) The tech stack (Kotlin, TypeScript, Vue.js, AWS, Terraform) aligns perfectly with my skills and what I want to deepen. 3) The SPArks team's focus on real-time auctions and campaign management is technically challenging and impactful.",
      de: 'Drei Gründe: 1) Retail Media ist ein wachsendes Feld, das E-Commerce und Advertising-Tech verbindet. 2) Der Tech-Stack (Kotlin, TypeScript, Vue.js, AWS, Terraform) passt perfekt zu meinen Skills. 3) Der Fokus des SPArks-Teams auf Echtzeit-Auktionen und Kampagnenmanagement ist technisch anspruchsvoll und impactvoll.'
    },
    difficulty: 'Easy'
  },
  {
    id: 48,
    category: 'Behavioral',
    question: {
      en: 'Describe your Pista project and the technical decisions you made.',
      de: 'Beschreibe dein Pista-Projekt und die technischen Entscheidungen.'
    },
    answer: {
      en: 'Pista is a startup pitch evaluation tool. I chose Next.js 15 for the React ecosystem and SSR. Convex for real-time backend (simpler than Lambda+DynamoDB for rapid iteration). Clerk for auth (secure, fast to integrate). OpenAI Whisper for audio transcription. Key challenge: rate limiting API calls under load - solved with request queuing.',
      de: 'Pista ist ein Tool zur Startup-Pitch-Bewertung. Next.js 15 für React-Ökosystem und SSR. Convex für Real-Time Backend (einfacher als Lambda+DynamoDB). Clerk für Auth. OpenAI Whisper für Audio-Transkription. Herausforderung: Rate Limiting unter Last - gelöst mit Request Queuing.'
    },
    difficulty: 'Medium'
  },
  {
    id: 49,
    category: 'Behavioral',
    question: {
      en: 'Tell me about your Amazon experience and what you built there.',
      de: 'Erzähl von deiner Amazon-Erfahrung und was du dort entwickelt hast.'
    },
    answer: {
      en: 'At Amazon Hamburg, I built a browser extension (JavaScript) used daily by a 6-person team, saving 90 minutes/day. It has a full CI/CD pipeline with GitHub Actions, Jest tests, and auto-deployment. I also created Grafana dashboards with Elasticsearch for monitoring 300+ delivery routes. Practiced agile: dailies, sprints, code reviews.',
      de: 'Bei Amazon Hamburg entwickelte ich eine Browser-Extension (JavaScript), täglich vom 6-köpfigen Team genutzt, spart 90 Min/Tag. Volle CI/CD-Pipeline mit GitHub Actions, Jest-Tests, Auto-Deployment. Dazu Grafana-Dashboards mit Elasticsearch für 300+ Routen. Agile Praxis: Dailies, Sprints, Code Reviews.'
    },
    difficulty: 'Medium'
  },
  {
    id: 50,
    category: 'Behavioral',
    question: {
      en: 'What is your experience with Agile/Scrum methodologies?',
      de: 'Was ist deine Erfahrung mit Agile/Scrum-Methoden?'
    },
    answer: {
      en: 'At Amazon: daily standups, sprint planning, retrospectives. I value short feedback loops and continuous improvement. At EWO: pair programming with seniors, code reviews, user story refinement. I appreciate Kanban for flow-based work and Scrum for time-boxed delivery.',
      de: 'Bei Amazon: Daily Standups, Sprint Planning, Retrospektiven. Ich schätze kurze Feedback-Loops und kontinuierliche Verbesserung. Bei EWO: Pair Programming mit Seniors, Code Reviews, User Story Refinement. Kanban für Flow-basierte Arbeit, Scrum für Time-Boxed Delivery.'
    },
    difficulty: 'Easy'
  },
  {
    id: 51,
    category: 'Behavioral',
    question: {
      en: 'How do you approach learning a new technology (like Kotlin)?',
      de: 'Wie gehst du ans Lernen einer neuen Technologie (z.B. Kotlin) heran?'
    },
    answer: {
      en: 'I learn by doing: 1) Official docs/tutorials for fundamentals. 2) Kotlin Koans for hands-on exercises. 3) Small project to apply concepts. 4) Read production code (Spring Boot examples). For Kotlin specifically, I\'m leveraging my Java/Spring Boot background - the transition is natural.',
      de: 'Ich lerne durch Praxis: 1) Offizielle Docs für Grundlagen. 2) Kotlin Koans für Übungen. 3) Kleines Projekt zur Anwendung. 4) Production-Code lesen (Spring Boot Beispiele). Bei Kotlin nutze ich meine Java/Spring Boot Erfahrung - der Übergang ist natürlich.'
    },
    difficulty: 'Easy'
  },
  {
    id: 52,
    category: 'Behavioral',
    question: {
      en: 'Tell me about a challenging bug you fixed.',
      de: 'Erzähl von einem schwierigen Bug, den du behoben hast.'
    },
    answer: {
      en: 'In Pista, OpenAI API calls were timing out under load. Debugging: added logging, found concurrent requests exceeded rate limits. Solution: implemented request queuing with exponential backoff and retry logic. Lesson: always design for failure in external API integrations.',
      de: 'In Pista hatten OpenAI API-Calls Timeouts unter Last. Debugging: Logging hinzugefügt, parallele Requests überschritten Rate Limits. Lösung: Request Queuing mit Exponential Backoff und Retry-Logik. Lektion: Bei externen APIs immer für Failure designen.'
    },
    difficulty: 'Medium'
  },
  {
    id: 53,
    category: 'Behavioral',
    question: {
      en: 'How do you handle working with legacy code?',
      de: 'Wie gehst du mit Legacy-Code um?'
    },
    answer: {
      en: 'First understand before changing: read code, add tests if missing, document findings. Make incremental improvements - don\'t rewrite everything at once. Respect existing patterns unless there\'s a strong reason to change. Communicate changes to the team.',
      de: 'Erst verstehen, dann ändern: Code lesen, Tests hinzufügen falls fehlend, Erkenntnisse dokumentieren. Inkrementelle Verbesserungen - nicht alles auf einmal umschreiben. Bestehende Patterns respektieren, außer es gibt guten Grund. Änderungen im Team kommunizieren.'
    },
    difficulty: 'Medium'
  },
  {
    id: 54,
    category: 'Behavioral',
    question: {
      en: 'Describe a situation where you disagreed with a team decision.',
      de: 'Beschreibe eine Situation, in der du mit einer Team-Entscheidung nicht einverstanden warst.'
    },
    answer: {
      en: 'At EWO, team wanted to skip E2E tests for a deadline. I raised concerns about production risk, suggested a compromise: minimal E2E coverage for critical paths, full coverage post-release. Team agreed. Result: caught a regression before launch. Lesson: voice concerns constructively, offer alternatives.',
      de: 'Bei EWO wollte das Team E2E-Tests für einen Deadline auslassen. Ich äußerte Bedenken zum Production-Risiko, schlug Kompromiss vor: Minimale E2E-Coverage für kritische Pfade, volle Coverage nach Release. Team stimmte zu. Ergebnis: Regression vor Launch gefunden. Lektion: Bedenken konstruktiv äußern, Alternativen anbieten.'
    },
    difficulty: 'Hard'
  },
  {
    id: 55,
    category: 'Behavioral',
    question: {
      en: 'Why are you leaving your current role at Amazon?',
      de: 'Warum verlässt du deine aktuelle Rolle bei Amazon?'
    },
    answer: {
      en: 'I\'m grateful for the experience at Amazon - it taught me CI/CD, monitoring, and working in a complex environment. However, my role is Operations-focused. I want to return to full-time software development, especially in a product team like SPArks where I can own features end-to-end.',
      de: 'Ich bin dankbar für die Amazon-Erfahrung - CI/CD, Monitoring, komplexes Umfeld. Aber meine Rolle ist Operations-fokussiert. Ich möchte zurück zur Vollzeit-Softwareentwicklung, besonders in einem Product-Team wie SPArks, wo ich Features End-to-End ownen kann.'
    },
    difficulty: 'Medium'
  },
  {
    id: 56,
    category: 'Behavioral',
    question: {
      en: 'What do you know about Sponsored Product Ads?',
      de: 'Was weißt du über Sponsored Product Ads?'
    },
    answer: {
      en: 'SPAs are native ads that appear in search results or category pages, looking like organic products but marked as sponsored. Advertisers bid in real-time auctions for placements. Key metrics: CTR, CPC, ROAS. They\'re a major revenue stream for platforms like OTTO, leveraging first-party shopping data for targeting.',
      de: 'SPAs sind native Ads in Suchergebnissen oder Kategorie-Seiten, sehen aus wie organische Produkte, aber als sponsored markiert. Werbetreibende bieten in Echtzeit-Auktionen. Key Metrics: CTR, CPC, ROAS. Wichtige Umsatzquelle für Plattformen wie OTTO, nutzt First-Party-Daten für Targeting.'
    },
    difficulty: 'Medium'
  },
  {
    id: 57,
    category: 'Behavioral',
    question: {
      en: 'How do you use AI tools in your development workflow?',
      de: 'Wie nutzt du AI-Tools in deinem Entwicklungs-Workflow?'
    },
    answer: {
      en: 'I use GitHub Copilot for code completion and boilerplate. ChatGPT/Claude for debugging, explaining unfamiliar code, and brainstorming solutions. Key: AI assists but doesn\'t replace understanding - I always review and validate AI suggestions. Also used OpenAI APIs in Pista for actual product features.',
      de: 'Ich nutze GitHub Copilot für Code-Completion und Boilerplate. ChatGPT/Claude für Debugging, Code-Erklärung, Brainstorming. Wichtig: AI unterstützt, ersetzt aber nicht das Verständnis - ich prüfe AI-Vorschläge immer. In Pista nutzte ich OpenAI APIs auch für Product-Features.'
    },
    difficulty: 'Easy'
  },
  {
    id: 58,
    category: 'Behavioral',
    question: {
      en: 'What are your strengths as a developer?',
      de: 'Was sind deine Stärken als Entwickler?'
    },
    answer: {
      en: '1) Full-stack versatility: comfortable in frontend (React, Vue), backend (Java, Node), and infrastructure (AWS, CI/CD). 2) Proactive problem-solving: I built tools at Amazon without being asked. 3) Fast learner: picked up Convex, Clerk, OpenAI APIs quickly for Pista. 4) Communication: multilingual (EN, DE, IT).',
      de: '1) Full-Stack Vielseitigkeit: Frontend (React, Vue), Backend (Java, Node), Infrastructure (AWS, CI/CD). 2) Proaktives Problem-Solving: Baute Tools bei Amazon eigeninitiativ. 3) Schnelles Lernen: Convex, Clerk, OpenAI APIs für Pista schnell aufgenommen. 4) Kommunikation: Mehrsprachig (EN, DE, IT).'
    },
    difficulty: 'Easy'
  },
  {
    id: 59,
    category: 'Behavioral',
    question: {
      en: 'What are your weaknesses or areas for improvement?',
      de: 'Was sind deine Schwächen oder Verbesserungsbereiche?'
    },
    answer: {
      en: 'Kotlin is still in learning phase - I have Java/Spring Boot experience but need to deepen Kotlin-specific patterns (Coroutines, Flows). Also, I tend to over-engineer sometimes; I\'m learning to balance "good enough" with "perfect". I\'m actively improving both through side projects.',
      de: 'Kotlin ist noch in der Lernphase - ich habe Java/Spring Boot Erfahrung, aber muss Kotlin-spezifische Patterns (Coroutines, Flows) vertiefen. Außerdem neige ich manchmal zum Over-Engineering; ich lerne, "gut genug" mit "perfekt" zu balancieren. Beides verbessere ich aktiv durch Projekte.'
    },
    difficulty: 'Medium'
  },
  {
    id: 60,
    category: 'Behavioral',
    question: {
      en: 'Where do you see yourself in 3 years?',
      de: 'Wo siehst du dich in 3 Jahren?'
    },
    answer: {
      en: 'As a strong senior developer at OTTO, deeply knowledgeable in the Retail Media domain. I want to have contributed significantly to SPArks, mentored juniors, and potentially taken on technical leadership in a feature area. I\'m interested in the Expert career path, not necessarily management.',
      de: 'Als starker Senior Developer bei OTTO, tief im Retail Media Bereich. Signifikanter Beitrag zum SPArks-Team, Juniors mentoren, evtl. technische Leadership in einem Feature-Bereich. Ich interessiere mich für die Expert-Laufbahn, nicht unbedingt Management.'
    },
    difficulty: 'Easy'
  },
  {
    id: 61,
    category: 'Behavioral',
    question: {
      en: 'How do you handle tight deadlines and pressure?',
      de: 'Wie gehst du mit engen Deadlines und Druck um?'
    },
    answer: {
      en: 'Prioritize ruthlessly: what\'s the MVP? Communicate early if timeline is at risk. Focus on the 20% effort that delivers 80% value. At Amazon, daily operations taught me to stay calm under pressure - 300+ routes depend on timely decisions.',
      de: 'Konsequent priorisieren: Was ist das MVP? Früh kommunizieren wenn Timeline gefährdet. Auf die 20% Aufwand fokussieren, die 80% Wert liefern. Bei Amazon lehrte mich der tägliche Betrieb, unter Druck ruhig zu bleiben - 300+ Routen hängen von zeitnahen Entscheidungen ab.'
    },
    difficulty: 'Medium'
  },
  {
    id: 62,
    category: 'Behavioral',
    question: {
      en: 'Do you have experience with monitoring and observability?',
      de: 'Hast du Erfahrung mit Monitoring und Observability?'
    },
    answer: {
      en: 'Yes! At Amazon I built Grafana dashboards with Elasticsearch for real-time monitoring of 300+ operational processes. Set up alerting for anomalies. In Pista, I implemented error logging and tracking for API failures. I understand the importance of observability for "You build it, you run it".',
      de: 'Ja! Bei Amazon baute ich Grafana-Dashboards mit Elasticsearch für Echtzeit-Monitoring von 300+ Prozessen. Alerting für Anomalien eingerichtet. In Pista implementierte ich Error-Logging für API-Failures. Ich verstehe die Wichtigkeit von Observability für "You build it, you run it".'
    },
    difficulty: 'Medium'
  },
  {
    id: 63,
    category: 'Behavioral',
    question: {
      en: 'What questions do you have for us?',
      de: 'Welche Fragen hast du an uns?'
    },
    answer: {
      en: '1) How does the SPArks team handle on-call/incident response? 2) What\'s the biggest technical challenge the team is currently facing? 3) How do you balance feature development with tech debt? 4) What does success look like in the first 6 months?',
      de: '1) Wie handhabt das SPArks-Team On-Call/Incident Response? 2) Was ist die größte technische Herausforderung aktuell? 3) Wie balanciert ihr Feature-Entwicklung mit Tech Debt? 4) Was bedeutet Erfolg in den ersten 6 Monaten?'
    },
    difficulty: 'Easy'
  },
  {
    id: 64,
    category: 'Behavioral',
    question: {
      en: 'How do you stay updated with new technologies?',
      de: 'Wie bleibst du bei neuen Technologien auf dem Laufenden?'
    },
    answer: {
      en: 'Twitter/X tech community, Hacker News, dev.to. I follow key people in the Vue, React, and Kotlin ecosystems. Conference talks on YouTube (VueConf, KotlinConf). Most importantly: side projects to try new things hands-on.',
      de: 'Twitter/X Tech-Community, Hacker News, dev.to. Ich folge Key People in Vue, React und Kotlin Ecosystems. Conference Talks auf YouTube (VueConf, KotlinConf). Am wichtigsten: Side Projects, um Neues praktisch auszuprobieren.'
    },
    difficulty: 'Easy'
  },
  {
    id: 65,
    category: 'Behavioral',
    question: {
      en: 'Tell me about a project you\'re proud of.',
      de: 'Erzähl von einem Projekt, auf das du stolz bist.'
    },
    answer: {
      en: 'Pista - my bachelor thesis. Built a full-stack app from scratch, integrated 3 external APIs (OpenAI, Whisper, Clerk), solved real performance challenges (rate limiting, queueing), and it\'s deployed in production. It proves I can deliver end-to-end: from architecture decisions to deployment.',
      de: 'Pista - meine Bachelorarbeit. Full-Stack-App von Grund auf, 3 externe APIs integriert (OpenAI, Whisper, Clerk), echte Performance-Challenges gelöst (Rate Limiting, Queueing), produktiv deployed. Es beweist, dass ich End-to-End liefern kann: von Architektur bis Deployment.'
    },
    difficulty: 'Easy'
  }
];
