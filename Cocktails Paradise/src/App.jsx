import { useState } from 'react'

import './styles/styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
      <h1>Cocktails Paradise</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    
    </>
  )
}

export default App
