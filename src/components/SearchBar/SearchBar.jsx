import { useState, useRef, useEffect } from 'react'
import './SearchBar.css'

export default function SearchBar({ value = '', onChange = () => {} }) {
  const [open, setOpen] = useState(false)
  const inputRef = useRef(null)

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    }
  }, [open])

  const toggleSearch = () => {
    if (open) {
      // closing → clear input
      onChange('')
    }
    setOpen(!open)
  }

  return (
    <div
      className={`search-wrap ${open ? 'open' : 'closed'}`}
      aria-expanded={open}
    >
      <button
        type="button"
        className="search-icon-btn"
        onClick={toggleSearch}
        aria-label={open ? 'Close search' : 'Open search'}
      >
        {open ? (
          //close icon
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          //search icon
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      <input
        ref={inputRef}
        className="search-input"
        placeholder="Search widgets..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
