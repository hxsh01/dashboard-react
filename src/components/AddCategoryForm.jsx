import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../features/categoriesSlice'
import { v4 as uuidv4 } from 'uuid'
import PopupModal from './PopupModal/PopupModal'

export default function AddCategoryForm() {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [open, setOpen] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    dispatch(addCategory({ id: 'cat-' + uuidv4(), name: name.trim() }))
    setName('')
    setOpen(false)
  }

  return (
    <>
      <button className="btn" onClick={() => setOpen(true)}>+ Add Category</button>
      
      <PopupModal open={open} onClose={() => setOpen(false)} title="Add Category">
        <form onSubmit={submit}>
          <input
            placeholder="New category name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
            <button className="btn" type="submit">Add</button>
            <button className="btn muted" type="button" onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </form>
      </PopupModal>
    </>
  )
}
