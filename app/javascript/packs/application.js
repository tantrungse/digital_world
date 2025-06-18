import React from 'react'
import { createRoot } from 'react-dom/client'
import '../stylesheets/application.css'
import Hello from './components/hello_react'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('hello-react')
  console.log("Hi")

  if (node) {
    console.log("Hello")
    const root = createRoot(node)
    root.render(<Hello name="Vo Tan Trung" />)
  }
});
