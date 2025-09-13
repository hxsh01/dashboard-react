# Dashboard-react

This is a small React + Vite project implementing the dashboard assignment:
- JSON-driven categories & widgets
- Add / Remove widgets
- Add / Remove categories
- Search across widgets
- Persistent state via localStorage

## Quick start

1. Install dependencies (Node >= 18 recommended):
   ```bash
   npm install
   ```

2. Run the dev server:
   ```bash
   npm run dev
   ```

3. Open the URL shown by Vite (usually `http://localhost:5173`).

## Notes / Extras included

- Uses Redux Toolkit for state management (`src/features/categoriesSlice.js`).
- Uses `localStorage` to persist dashboard changes.
- Small, clean UI with responsive grid layout.
- Uses `uuid` for unique IDs so that widgets/categories won't collide.

## Files of interest

- `src/features/categoriesSlice.js` — main redux slice (add/remove widgets & categories)
- `src/components/*` — UI components (AddWidgetForm, AddCategoryForm, SearchBar, Categories, WidgetCard)
- `src/utils/localStorage.js` — persistence helpers

