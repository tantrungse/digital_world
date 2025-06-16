import React from 'react'
import { createRoot } from 'react-dom/client'

const Hello = ({ name }) => <div>Hello {name}!</div>

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('hello-react')
  if (node) {
    const root = createRoot(node)
    root.render(<Hello name="Vo Tan Trung" />)
  }
})

export default Hello