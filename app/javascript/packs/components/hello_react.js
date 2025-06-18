import React from 'react'
import { createRoot } from 'react-dom/client'
// import '../../stylesheets/tailwind.css'

const Hello = ({ name }) => <div className="text-4xl text-red-500 font-extrabold underline">Hello {name}!</div>

// document.addEventListener('DOMContentLoaded', () => {
//   const node = document.getElementById('hello-react')
//   if (node) {
//     const root = createRoot(node)
//     root.render(<Hello name="Vo Tan Trung" />)
//   }
// })

export default Hello