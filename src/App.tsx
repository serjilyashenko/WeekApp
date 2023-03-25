import { useState } from 'react';

export default function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <h1>🕰️ Week App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <div>
          <form>
            <label>
              Week:
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                defaultValue={1}
              />
              <input type="submit" />
            </label>
          </form>
          <label>
            Dates:
            <output>lol</output>
          </label>
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}
