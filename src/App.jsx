import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Categories from './components/Categories'
import AddCategoryForm from './components/AddCategoryForm'
import SearchBar from './components/SearchBar'
import { saveState, loadState } from './utils/localStorage'
import { setAll } from './features/categoriesSlice'

export default function App(){
  const categories = useSelector(s => s.categories)
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  // persist categories to localStorage
  useEffect(() => {
    saveState({ categories })
  }, [categories])

  // load once (in case other flows need it)
  useEffect(() => {
    const persisted = loadState()
    if (persisted?.categories) {
      dispatch(setAll(persisted.categories))
    }
  }, [dispatch])

  return (
    <div className="app">
      <header className="header">
        <h1>Dynamic Dashboard — Interview Assignment</h1>
        <div className="header-actions">
          <SearchBar value={query} onChange={setQuery} />
          <AddCategoryForm />
        </div>
      </header>

      <main className="main">
        <Categories searchQuery={query} />
      </main>

      <footer className="footer">
        <small>Built with React + Redux Toolkit · Persistent in localStorage</small>
      </footer>
    </div>
  )
}
