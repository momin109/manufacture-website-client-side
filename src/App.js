
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login';
import RequireAuth from './Page/Login/ReaquireAuth';
import SignUp from './Page/Login/SignUp';
import Parts from './Page/Parts/Parts';
import Footer from './Page/Shared/Footer/Footer';
import Navber from './Page/Shared/Navber/Navber';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/parts" element={
          <RequireAuth>
            <Parts />
          </RequireAuth>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />



      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
