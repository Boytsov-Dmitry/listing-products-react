import Listing from './components/Listing'
import React from 'react'
import items from './components/data.json'
import './App.css'

function App() {
  return (
    <>
      <Listing items={items}/>
    </>
  )
}

export default App
