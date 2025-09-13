import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWidget } from '../features/categoriesSlice'
import { v4 as uuidv4 } from 'uuid'

export default function AddWidgetForm({ categoryId }){
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
    <div className="add-widget">
      {!open ? (
        <button className="btn" onClick={() => setOpen(true)}>+ Add Widget</button>
      ) : (
        <form className="form-inline" onSubmit={submit}>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Widget name" />
          <input value={text} onChange={e => setText(e.target.value)} placeholder="Widget text" />
          <button className="btn" type="submit">Add</button>
          <button className="btn muted" type="button" onClick={() => setOpen(false)}>Cancel</button>
        </form>
      )}
    </div>
  )
}
