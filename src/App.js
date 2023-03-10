import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from 'pages/dashboard';
import RAdmin from 'components/react-admin/admin';
import Login from 'pages/login';
import Register from 'pages/register';
import Home from 'pages/home';
import ForgotPassword from 'pages/forgot-password';
import PasswordReset from 'pages/password-reset';
import NotFoundPage from 'pages/404';
// Landing:
import HomePage from 'pages/home-page';
import PaymentPage from 'pages/payments';

function App() {
  return (
    <div className="antialiased">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/payments" element={<PaymentPage/>} />
        <Route path="/React" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password-reset/:token" element={<PasswordReset />} />
        <Route path="/pre_dashboard" element={<Dashboard />} />
        <Route path="/dashboard/*" element={<RAdmin />} />
        <Route path="*" element={<NotFoundPage/>} />
      </Routes>
    </div>
  );
}

export default App;
