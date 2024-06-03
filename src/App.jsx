import { useState } from 'react'
import { Outlet } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default App
