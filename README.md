# Ndihmësi i Matematikës

Një aplikacion React Native + Expo për ndihmë me detyrat e matematikës, kreuar me Expo SDK 54.

## 📱 Ekranet

Aplikacioni përmban pesë seksione kryesore:

1. **Kontrolli** - Paneli kryesor me statistika, progresin javor dhe kategoritë e matematikës
2. **Të Ruajtura** - Lista e problemeve të ruajtura për më vonë
3. **Mëso** - Leksionet dhe materialet mësimore
4. **Kuiz** - Kuizet për testim dhe sfida ditore
5. **Cilësimet** - Preferencat e përdoruesit dhe cilësimet e aplikacionit

## 🏗️ Struktura e Projektit

```
MathHelper/
├── screens/              # Ekranet kryesore
│   ├── DashboardScreen.js
│   ├── SavedScreen.js
│   ├── LearnScreen.js
│   ├── QuizScreen.js
│   └── SettingsScreen.js
├── data/                 # Të dhënat e përkohshme
│   └── placeholderData.js
├── components/           # Komponentët e ripërdorshëm (bosh aktualisht)
├── App.js               # Skedari kryesor me navigimin
└── package.json
```

## 🚀 Si të Filloni

1. **Instalimi i varësive:**
   ```bash
   npm install
   ```

2. **Fillimi i aplikacionit:**
   ```bash
   npm start
   ```

3. **Hapja në platformë specifike:**
   ```bash
   npm run android    # Për Android
   npm run ios        # Për iOS
   npm run web        # Për Web
   ```

## 📦 Varësitë Kryesore

- **React Native** - Framework për aplikacione mobile
- **Expo SDK 54** - Mjetet dhe shërbimet e Expo
- **React Navigation** - Navigimi midis ekraneve
- **@expo/vector-icons** - Ikonat për UI

## 🎨 Ngjyrat Kryesore

- **Primari:** `#6C63FF` (Vjollcë)
- **Sfondi:** `#F8F9FA` (Gri e lehtë)
- **Teksti:** `#2C3E50` (E errët)
- **Aksenti:** `#4ECDC4`, `#FF6B6B`, `#FFB84D`, `#96CEB4`

## 📝 Karakteristikat Aktuale

✅ Navigim i plotë me bottom tabs
✅ Dizajn i plotë për të gjitha ekranet
✅ Të dhëna të përkohshme (placeholder)
✅ UI i optimizuar për mobile
✅ Përdorim i ikonave dhe vizualeve
✅ Komponentë të stilizuar dhe responsivë

## 🔜 Hapat e Ardhshëm

Aktualisht, aplikacioni përmban vetëm frontend me të dhëna të përkohshme. Në të ardhmen mund të shtohen:

- Funksionaliteti i plotë i kuizeve
- Sistemi i vlerësimit
- Integrimi me backend
- Ruajtja lokale e të dhënave
- Autentifikimi i përdoruesve
- Algoritmat për zgjidhjen e problemeve matematikore
- Sinkronizimi në cloud
- Njoftimet push

## 📱 Platformat e Mbështetura

- ✅ iOS
- ✅ Android
- ✅ Web

## 📄 Liçensa

Ky projekt është krijuar për qëllime edukative.
