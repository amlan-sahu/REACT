import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>My App hello</h1>
    </div>
  )
}

const anotherElement =(
  <a href="http://google.com" target='_blank'>Visit google</a>
)

const anotherUser = 'chai aur react'
const reactElement = React.createElement(
  'a',
  { href: 'http://google.com', target: '_blank' },
  ' Click toVisit google ' ,
  anotherUser
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
    <App />
    {reactElement}
    <br />
    {anotherElement}
  </StrictMode>,
)
