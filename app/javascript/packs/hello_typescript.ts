import React from 'react'
import { createRoot } from 'react-dom/client'

type Props = {
  name: string
}

const Hello = ({ name }: Props) => <div>Hello {name} from TSX!</div>

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('hello-tsx')
  if (node) {
    const root = createRoot(node)
    root.render(<Hello name="Vo Tan Trung" />)
  }
})
