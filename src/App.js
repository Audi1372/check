
import './App.css';
import React, { createContext, useState } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
export const store = createContext()
function App() {
  const [data, setData] = useState(0)
  return (
    <div className="App">
      <store.Provider value={[data, setData]}  >
        <ComponentA />
        <ComponentB />
        <button onClick={() =>setData(data+1)}> increment</button>
        
      </store.Provider>

    </div>
  );
}

export default App;
