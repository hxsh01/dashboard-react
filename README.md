# Dashboard-react

This is a small React + Vite project implementing the dashboard assignment:
- JSON-driven categories & widgets
- Add / Remove widgets
- Add / Remove categories
- Search across widgets
- Persistent state via localStorage

## Live link of the website
   ```bash
   https://dashboard-react-one-sigma.vercel.app/
   ```

## Steps to run the Code on your machine

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

## Files of interest

- `src/features/categoriesSlice.js` — main redux slice (add/remove widgets & categories)
- `src/components/*` — UI components (AddWidgetForm, AddCategoryForm, SearchBar, Categories, WidgetCard)
- `src/utils/localStorage.js` — persistence helpers

