import React, { useState } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('you pressed')
    if (!name) {
      // display alert
      showAlert(true, 'Cdanger', 'please enter value')
    } else if (name && isEditing) {
      // deal with edit
    } else {
      showAlert(true, 'success', 'item added to the list')
      // show alert
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }

  // show Alert function
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  // clear all List items
  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }

  // remove individual Item function
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item deleted')
    setList(list.filter((item) => item.id !== id))
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery budget</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
