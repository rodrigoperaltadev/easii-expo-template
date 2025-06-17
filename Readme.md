# Rick and Morty App

This project is a mobile application built with **React Native** and **Expo**, consuming the public Rick and Morty API. The codebase follows a **feature-based architecture**, designed for scalability, maintainability, and clear separation of concerns—demonstrating senior-level engineering practices.

---

## 🏗️ Feature-Based Architecture

The project is organized by features, meaning each main functionality (such as "characters" and "favorites") has its own domain, grouping together components, hooks, services, navigation, and types.  
This approach makes the codebase scalable, testable, and easy to collaborate on in large teams.

**Main structure:**

```
app/
  feature/
    characters/
      components/
      hooks/
      navigation/
      screens/
      services/
      types/
    favorites/
      navigation/
      screens/
      services/
      store/
  navigation/
    app-navigation.tsx
    tab-navigation.tsx
  shared/
    components/
    hooks/
    http/
    layout/
    providers/
    theme/
    types/
```

- **feature/**: Each folder is a self-contained feature.
- **shared/**: Reusable resources and global utilities (theme, layouts, providers, http, etc).
- **navigation/**: Main app navigation (tab bar, main stacks).

---

## 🚀 Technologies & Libraries

- **React Native** + **Expo**: Cross-platform mobile development.
- **React Navigation**: Navigation management (tab bar and stacks).
- **@tanstack/react-query**: Async state management and data caching.
- **Zustand**: Local state management for favorites.
- **Axios**: HTTP client.
- **@shopify/flash-list**: High-performance list rendering.
- **Testing Library** + **Jest**: Unit and integration testing.
- **TypeScript**: Strict static typing.
- **Biome**: Code formatting and linting.

---

## ⚡ How to Run the Project

1. **Clone the repository**

   ```sh
   git clone <repo-url>
   cd rick-and-morty-app
   ```

2. **Install dependencies**

   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```sh
   npm start
   # or
   yarn start
   ```

   This will open the Expo developer tools. From there, you can run the app on an emulator or a physical device (iOS/Android).

4. **Run tests**

   ```sh
   npm test
   # or
   yarn test
   ```

---

## 🧩 Principles & Best Practices

- **Separation of concerns**: Each feature is self-contained and decoupled.
- **Reusability**: Shared components and hooks live in `shared/`.
- **Scalability**: Easy to add new features without impacting existing ones.
- **Strict typing**: TypeScript is used throughout the project.
- **Testing**: Unit and integration tests for logic and UI.
- **Local persistence**: Favorites are stored using Zustand and AsyncStorage.
- **Performance**: Optimized lists and data caching with React Query.

---

## 📂 Navigation & Structure

- **TabNavigation**: Main navigation with tabs for "Characters" and "Favorites".
- **Feature stacks**: Each feature has its own navigation stack, defined within its domain.
- **Global providers**: Contexts and providers (theme, react-query, safe area, etc.) are defined in `shared/providers`.

---

## 📝 Additional Notes

- The project follows Expo and React Native conventions for maximum compatibility.
- Code is automatically formatted and linted with Biome.
- The UI is responsive and uses SafeArea for a consistent experience across devices.
- Error and loading states are handled centrally with reusable layouts.

---

## 👨‍💻 Author

Rodrigo Peralta

---

If you have any questions about the architecture or code, feel free to ask