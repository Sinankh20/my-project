import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Overview from './components/Overview'
import WorkoutClassification from './components/WorkoutClassification'
import Features from './components/Features'
import Risks from './components/Risks'
function App() {
  return(
  <>
  <main className='m-4'>
  <Header/>
  <Overview/>
  </main>
  <div>
    <WorkoutClassification/>
  </div>
  <div>
    <Features/>
  </div>
  <div><Risks/></div>
  </>
  )
}

export default App
