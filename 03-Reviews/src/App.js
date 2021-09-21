import React, { useState } from 'react'
import Reviews from './Reviews'

function App() {
  return (
    <main>
      <div className="conatiner">
        <div className="title">
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Reviews />
      </div>
    </main>
  )
}

export default App
