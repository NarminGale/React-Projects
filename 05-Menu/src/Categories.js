import React from 'react'

function Categories({ filterItems }) {
  return (
    <div className="btn-container">
      <button
        type="button"
        className="btn filter-btn"
        onClick={() => {
          filterItems('all')
        }}>
        all
      </button>
    </div>
  )
}

export default Categories
