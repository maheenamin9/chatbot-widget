import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import styles from './index.css?inline'

// Shadow DOM provides a way to scope CSS styles to a specific DOM subtree 
// and isolate that subtree from the rest of the document. 
const element = document.createElement("div")
const shadow = element.attachShadow({
  mode: "closed",  // you won't be able to access the shadow DOM from the outside
});
document.body.appendChild(element)
// document.getElementById('root').appendChild(element)

ReactDOM.createRoot(shadow).render(
  <React.StrictMode>
    <style>{styles}</style>
    <App />
  </React.StrictMode>,
)
