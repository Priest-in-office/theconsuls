import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Live from './pages/Live'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import { useAuth } from './components/SignIn-Components/AuthContext';
import { useEffect, useState } from 'react';
import Profile from './pages/Profile';
import Groups from './pages/Groups';


function App() {
  const { isAuthReady } = useAuth();
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isAuthReady || pageLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-dark">
        <span className="material-symbols-outlined text-primary text-6xl animate-spin">donut_large</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/live" element={<Live />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </div>
  );
}

export default App
