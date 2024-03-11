import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header/Header'
import { MainComponent } from './components/MainComponent/MainComponent'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <MainComponent />
      <Footer />
    </>
  )
}

export default App
