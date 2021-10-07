import React, { useState, useEffect } from 'react'

function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(',')
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ background: `rgb(${bcg})` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{`#${hexColor}`}</p>
    </article>
  )
}

export default SingleColor
