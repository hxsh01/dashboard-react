import React from 'react'
import { useSelector } from 'react-redux'
import WidgetCard from './WidgetCard'
import AddWidgetForm from './AddWidgetForm'

export default function Categories({ searchQuery='' }){
  const categories = useSelector(s => s.categories || [])

  const matches = (widget) => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return true
    return widget.name.toLowerCase().includes(q) || widget.text.toLowerCase().includes(q)
  }

  return (
    <div className="categories">
      {categories.map(cat => {
        const filtered = cat.widgets.filter(matches)
        return (
          <section key={cat.id} className="category">
            <div className="category-header">
              <h2>{cat.name}</h2>
              <div className="category-actions">
                <AddWidgetForm categoryId={cat.id} />
              </div>
            </div>

            <div className="widgets-grid">
              {filtered.length === 0 ? (
                <div className="empty">No widgets</div>
              ) : filtered.map(w => (
                <WidgetCard key={w.id} widget={w} categoryId={cat.id} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
