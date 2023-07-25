import { useState } from 'react'
import Cocktail from './components/Cocktail'
import Footer from './components/Footer'
import Header from './components/Header'
import './styles/styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Header />
      <h1>Cocktails Paradise</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
          <Cocktail />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default App
