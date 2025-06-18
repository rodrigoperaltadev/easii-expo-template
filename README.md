# Rick and Morty App

A modern mobile app built with **React Native** and **Expo**, consuming the public [Rick and Morty API](https://rickandmortyapi.com/). This codebase follows a **feature-based architecture**, designed for scalability, maintainability, and high-quality engineering practices.

---

## 📁 Feature-Based Architecture

Each feature (like `characters`, `favorites`) is self-contained and includes its own components, hooks, navigation, services, and types.

```
app/
  features/
    characters/
    favorites/
  navigation/
  shared/
```

- `features/`: Domain-specific logic grouped by functionality.
- `shared/`: Reusable components, hooks, themes, layouts, HTTP config, and providers.
- `navigation/`: App-level navigation including tab and stack navigators.

---

## 🚀 Tech Stack

- **React Native** + **Expo**
- **React Navigation**
- **@tanstack/react-query**
- **Zustand**
- **Axios**
- **AsyncStorage**
- **Zod**
- **FlashList**
- **TypeScript**
- **Biome (formatter & linter)**
- **Jest + Testing Library**

---

## ⚙️ Getting Started

```bash
# 1. Clone the repo
git clone <repo-url>
cd rick-and-morty-app

# 2. Install dependencies
yarn install

# 3. Start the development server
yarn start

# 4. Run tests
yarn test
```

---

## 🔍 Scripts

| Script            | Description                              |
|-------------------|------------------------------------------|
| `yarn start`      | Start Expo server                        |
| `yarn test`       | Run test suite                           |
| `yarn lint`       | Lint + auto-fix with Biome               |
| `yarn format`     | Format code with Biome                   |
| `yarn typecheck`  | TypeScript validation                    |
| `yarn prepare-hooks` | Regenerate Husky hooks (if needed)    |

---

---

## 📝 Automatic Environment Variable Check

Before starting the app or running important scripts, the project automatically runs a script that validates all required environment variables are defined in your `.env` file.  
If any required variable is missing, the script will stop execution and display a message indicating which variables are missing.

**Required variables include:**
- `EXPO_PUBLIC_API_URL`

You can find an example in the [`.env.example`](.env.example) file.

**How does it work?**

Whenever you run `yarn start`, `yarn android`, `yarn ios`, or `yarn web`, the [`scripts/check-env.mjs`](scripts/check-env.mjs) script is executed before starting the development server.  
This ensures your environment is properly configured and helps prevent hard-to-debug runtime errors.

**If you need to add new required variables**, simply update the `REQUIRED_VARS` array in [`scripts/check-env.mjs`](scripts/check-env.mjs).

---

## 🛡️ Quality & Tooling

- **Strict TypeScript** for robust, self-documenting code.
- **Biome** handles formatting, import order, and linting.
- **Husky** + **Commitlint** ensure clean and conventional commits.
- **Git Hooks**:
  - `pre-commit`: runs format and lint (re-adds changed files)
  - `pre-push`: runs typecheck and tests
  - `commit-msg`: validates commit message format

You can regenerate all hooks at any time using:

```bash
yarn prepare-hooks
```

---

## 🧩 Engineering Principles

- **Scalable architecture**: Features are isolated and reusable.
- **Reusability**: Shared components, hooks, and logic live in `shared/`.
- **Consistency**: All formatting and import rules enforced by Biome.
- **Performance**: Uses `FlashList` and React Query cache.
- **Testability**: Covers UI and logic with Jest + Testing Library.
- **Offline-ready**: Zustand + AsyncStorage for local persistence.

---

## 👤 Author

**Rodrigo Peralta**

If you have any questions about the architecture or implementation, feel free to reach out.

---
