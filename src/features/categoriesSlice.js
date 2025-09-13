import { createSlice } from '@reduxjs/toolkit'
import { loadState, saveState } from '../utils/localStorage'
import { v4 as uuidv4 } from 'uuid'

const persisted = loadState()

const initialState = persisted?.categories ?? [
  {
    id: 'cat-1',
    name: 'CSPM Executive Dashboard',
    widgets: [
      { id: 'w-' + uuidv4(), name: 'CPU Usage', text: 'Random CPU stats' },
      { id: 'w-' + uuidv4(), name: 'Memory Usage', text: 'Random memory stats' },
    ],
  },
  {
    id: 'cat-2',
    name: 'Security Dashboard',
    widgets: [
      { id: 'w-' + uuidv4(), name: 'Login Attempts', text: 'Random auth stats' },
    ],
  },
]

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory(state, action) {
      state.push({ id: action.payload.id, name: action.payload.name, widgets: [] })
    },
    removeCategory(state, action) {
      return state.filter(c => c.id !== action.payload)
    },
    addWidget(state, action) {
      const { categoryId, widget } = action.payload
      const cat = state.find(c => c.id === categoryId)
      if (cat) cat.widgets.push(widget)
    },
    removeWidget(state, action) {
      const { categoryId, widgetId } = action.payload
      const cat = state.find(c => c.id === categoryId)
      if (cat) cat.widgets = cat.widgets.filter(w => w.id !== widgetId)
    },
    updateWidget(state, action) {
      const { categoryId, widget } = action.payload
      const cat = state.find(c => c.id === categoryId)
      if (cat) {
        const idx = cat.widgets.findIndex(w => w.id === widget.id)
        if (idx !== -1) cat.widgets[idx] = widget
      }
    },
    reorderWidgets(state, action) {
      const { categoryId, widgets } = action.payload
      const cat = state.find(c => c.id === categoryId)
      if (cat) cat.widgets = widgets
    },
    setAll(state, action) {
      return action.payload
    }
  },
})

export const {
  addCategory, removeCategory, addWidget, removeWidget, updateWidget, reorderWidgets, setAll
} = categoriesSlice.actions

// subscribe to store changes for persistence
// We can't import store here due to circular deps; export a helper to wire persistence in main if needed.
// But for simplicity, we export a function to save externally.

export default categoriesSlice.reducer
