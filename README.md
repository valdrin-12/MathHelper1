# MathHelper

Aplikacion për mësimin e matematikës (klasat 6–12) në **shqip, anglisht dhe gjermanisht**, për iOS, Android dhe web ([mathhelper.online](https://mathhelper.online)).

- **Zgjidhës hap pas hapi**: shkruani ose fotografoni një detyrë. Zgjidhësi pa internet (`services/solver`) e zgjidh vetë; nëse nuk mundet, shkon te Wolfram Alpha dhe Gemini AI. Përgjigjet e tyre kontrollohen me MathJS (`services/verifyAnswer.js`).
- **Grafik** me analizë automatike, **13 mjete llogaritëse** dhe fletë formulash, të gjitha pa internet.
- **Kurse** (45) dhe **kuize** (23, me mënyrat Ushtrim dhe Test, XP dhe nivele).
- **Llogari** me email ose Google; **Premium** me abonim (Paddle në web, Google Play dhe App Store në aplikacione).

## Teknologjia

| Pjesa | Çfarë përdoret |
|---|---|
| Aplikacioni | React Native + Expo SDK 54, react-native-web, React Navigation, i18next |
| Zgjidhësi | JavaScript i pastër mbi mathjs; grafiku me react-native-svg |
| Backend | Node.js + Express, PostgreSQL, JWT, Paddle, Gemini, Wolfram Alpha |
| Hosting | Render (API dhe faqja web), EAS për aplikacionet e dyqaneve |

## Struktura

```
App.js, index.js     pika hyrëse e aplikacionit
screens/             ekranet: Dashboard, Learn, Quiz, Saved, Settings, Auth, Onboarding, Splash
components/          modalet dhe pjesët e ripërdorshme; components/ui është kiti i përbashkët
context/             gjendja globale: User, Stats, SavedItems, Language, Theme
services/            API-ja dhe logjika: apiClient, authService, geminiService, ...
  solver/            zgjidhësi pa internet (18 module të vogla, të testuara)
data/                kurset dhe kuizet
  quizzes/           një skedar për çdo grup kuizi, me tri gjuhët brenda
  localized/         kurset sipas gjuhës: courseContent_al|en|de/ dhe courses_al|en|de.js
locales/             tekstet e ndërfaqes (al, en, de)
utils/ hooks/ config/ theme/
backend/             API-ja: src/ (routes → controllers → models/services), migrations/, pages/, scripts/
scripts/             testet e aplikacionit dhe ndërtimi i web-it
.github/workflows/   CI dhe publikimi
docs/                dokumente shtesë (p.sh. integrimi i Paddle)
```

Kodi i gjuhës shqipe është **`al`** (jo `sq`) kudo: te `locales/`, te skedarët e të dhënave dhe te API-ja.

## Si ta nisni

```bash
npm install
cp .env.example .env     # plotësoni vlerat (shih më poshtë)
npm start                # Expo; shtypni i, a ose w për iOS, Android ose web
```

Backend-i lokal (nevojitet një PostgreSQL; `docker compose up -d postgres` e ngre një):

```bash
cd backend
cp .env.example .env     # DATABASE_URL, JWT_SECRET, çelësat e shërbimeve
npm install
npm run migrate
npm run dev
```

## Testet

```bash
npm test                 # kuizet, zgjidhësi, grafiku, verifikuesi i përgjigjeve
npm run test:backend     # rrugët e hyrjes me Postgres të përkohshëm në Docker (nevojitet Docker)
```

Testet fund-më-fund (Playwright + Gherkin) janë në repon e tyre, [MathHelper1-e2e](https://github.com/valdrin-12/MathHelper1-e2e), dhe provojnë faqen e gjallë.
Në çdo PR, CI (`.github/workflows/ci.yml`) ekzekuton `npm test`, `expo-doctor`, ndërtimin e paketave iOS/Android dhe testet e backend-it.

## Variablat e mjedisit

Aplikacioni (`.env`, vlera publike, përfundojnë në paketë): `EXPO_PUBLIC_API_URL`, `EXPO_PUBLIC_MAX_IMAGE_SIZE_MB`,
`EXPO_PUBLIC_PADDLE_ENV`, `EXPO_PUBLIC_PADDLE_CLIENT_TOKEN`, `EXPO_PUBLIC_PADDLE_PRICE_MONTHLY`, `EXPO_PUBLIC_PADDLE_PRICE_YEARLY`.

Backend-i (`backend/.env`, sekrete, nuk futen kurrë në git): `DATABASE_URL`, `JWT_SECRET`, `GEMINI_API_KEY`, `WOLFRAM_APP_ID`,
`RESEND_API_KEY`, `PADDLE_API_KEY`, `PADDLE_WEBHOOK_SECRET`, `GOOGLE_CLIENT_IDS` (opsional), e të tjera te `backend/.env.example`.

## Publikimi

- **API-ja dhe web-i**: bashkimi i një PR te `main` nis `deploy.yml`, që ndërton paketën web dhe e vendos, bashkë me `backend/`, te dega `deploy` (një commit i vetëm, zëvendësohet çdo herë). Render ndërton nga ajo degë, dhe migrimet e bazës ekzekutohen gjatë ndërtimit.
- **Aplikacionet e dyqaneve**: `npx eas-cli build --platform all --profile production` (duhet `eas login`). Numrat e versioneve rriten vetë.
- Paketa e ndërtuar web **nuk futet në `main`**: mbahet vetëm te `deploy`. Për ta parë lokalisht nga backend-i: `npm run build:web -- --out backend/public`, pastaj `npm run dev` te `backend/`.

## Liçensa

Projekt privat.
