import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Live from './pages/Live'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/live" element={<Live />} />
      </Routes>
    </div>
  )
}

export default App
