import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1> Azure Static Web App Demo</h1>
      <p>Detta är en testfrontend för Permanent Deployment in main.</p>

      <button onClick={() => setCount(count + 1)}>
        Klickad {count} gånger
      </button>
    </div>
  )
}

export default App
