import React, { useContext } from 'react'
import { store } from './App'

export default function ComponentA() {
    const[data,setData] = useContext(store)
  return (
    <div>
          component A {data}
    </div>
  )
}
