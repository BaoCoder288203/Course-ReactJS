import './App.css'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { ThemeProvider } from "./components/ThemeProvider";

function App() {

  return (
    <>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
