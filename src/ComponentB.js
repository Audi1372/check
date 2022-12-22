import React, { useContext } from 'react';
import { store } from './App'

export default function ComponentB() {
  const[data,setData]=useContext(store)
  return (
    <div>
      
              componentB {data}
      
    </div>
  )
}
