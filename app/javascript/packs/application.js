import React from 'react'
import ReactDOM from 'react-dom'

// Optional: import any global styles or libraries here
// import "../../assets/stylesheets/application.css";
import '../stylesheets/application.css';

// Mount your root React component (optional)
import Hello from './hello_react.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('root')
  if (node) {
    ReactDOM.render(<Hello />, node)
  }
})
