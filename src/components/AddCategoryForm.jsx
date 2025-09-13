import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCategory } from '../features/categoriesSlice'
import { v4 as uuidv4 } from 'uuid'

export default function AddCategoryForm(){
  const dispatch = useDispatch()
  const [name, setName] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!name.trim()) return
    dispatch(addCategory({ id: 'cat-' + uuidv4(), name: name.trim() }))
    setName('')
  }

  return (
    <form className="add-category" onSubmit={submit}>
      <input placeholder="New category name" value={name} onChange={e => setName(e.target.value)} />
      <button className="btn" type="submit">Add Category</button>
    </form>
  )
}
