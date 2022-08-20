import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/app.component'
import { isDef, Nullable } from './types/lang.types'
import reportWebVitals from './reportWebVitals'

const container: Nullable<HTMLElement> = document.getElementById('root')

if (isDef(container)) {
  const root = ReactDOM.createRoot(container)

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
