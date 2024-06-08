import { Outlet } from "react-router-dom";
import Footer from './components/Footer';
import './App.css'

function App() {

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
