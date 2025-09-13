import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWidget } from '../features/categoriesSlice'
import { v4 as uuidv4 } from 'uuid'
import PopupModal from './PopupModal/PopupModal'

export default function AddWidgetForm({ categoryId }) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    const widget = { id: 'w-' + uuidv4(), name: name.trim(), text: text.trim() }
    dispatch(addWidget({ categoryId, widget }))
    setName(''); setText(''); setOpen(false)
  }

  return (
    <>
      <button className="btn" onClick={() => setOpen(true)}>+ Add Widget</button>

      <PopupModal open={open} onClose={() => setOpen(false)} title="Add Widget">
        <form onSubmit={submit}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              placeholder="Widget name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Widget text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
            <button className="btn" type="submit">Add</button>
            <button className="btn muted" type="button" onClick={() => setOpen(false)}>Cancel</button>
          </div>
        </form>
      </PopupModal>
    </>
  )
}
