import { useState } from 'react'

export default function App(): JSX.Element {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <h1>🕰️ Week App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}
