/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'

const Filter = ({ addFilter }) => {
  return (
    <div>
      filter shown with
      <input onChange={addFilter} />
    </div>
  )
}

export default Filter
