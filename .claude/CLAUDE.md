# MathHelper Project

## Tech Stack
- React Native / Expo
- Bottom tab navigation (Dashboard, Saved, Learn, Quiz, Settings)
- i18n with react-i18next (3 locales: al, en, de)
- AsyncStorage for local persistence
- StatsContext for tracking courses/quizzes/problems
- ThemeContext for dark/light mode

## Key Architecture
- Layout: `src/features/<feature>/` (screen, modals, logic and styles of one feature), `src/shared/` (ui kit, theme, api client, i18n, utils), `src/content/` (courses, quizzes, formulas); `App.js`/`index.js` stay at the root
- Screens: DashboardScreen, LearnScreen, QuizScreen, SavedScreen, SettingsScreen, AuthScreen, OnboardingScreen, SplashScreen
- Modals: CourseDetailModal, ActiveQuizModal, QuizResultModal, ProfileModal, ResultsModal
- Context: UserContext, StatsContext, SavedItemsContext, LanguageContext, ThemeContext
- Theme: src/shared/theme/constants.js (COLORS, SPACING, BORDER_RADIUS, SHADOWS, TYPOGRAPHY)
- Locales: src/shared/i18n/locales/{al,en,de}/ui.json

## Course Progress
- Saved to AsyncStorage under key `@mathhelper_course_progress`
- Format: `{ courseId: lessonIndex }`
- Course statuses: "completed" (from stats), "learning" (has saved progress), "start" (no progress)

## Quiz Progress
- Quiz results tracked in StatsContext via `recordQuizCompleted`
- Best score shown as MiniProgressRing on quiz cards
- Bug fixed: fadeAnim must be reset to 1 when ActiveQuizModal opens

## Language
- Albanian locale code is "al" (not "sq")
- Albanian greeting uses "Mirë se erdhe" (not "Mirë se u ktheve")
