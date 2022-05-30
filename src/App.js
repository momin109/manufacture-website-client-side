
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
import Dashboard from './Page/Dashboard/Dashboard';
import MyProfile from './Page/Dashboard/MyProfile';
import MakeAdmin from './Page/Dashboard/MakeAdmin';
import MyOrders from './Page/Dashboard/MyOrders';
import ManageProduct from './Page/Dashboard/ManageProduct';
import ManageAllOrders from './Page/Dashboard/ManageAllOrders';
import Blogs from './Page/Home/Blogs/Blogs';
import Portfolia from './Page/Home/Portfolia/Portfolia';
import AddRevies from './Page/Dashboard/AddRevies';

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
        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />

        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyProfile></MyProfile>}></Route>
          <Route path="myorders" element={<MyOrders></MyOrders>}></Route>
          <Route path="manageproduct" element={<ManageProduct></ManageProduct>}></Route>
          <Route path="manageallorders" element={<ManageAllOrders></ManageAllOrders>}></Route>
          <Route path="AddRewiew" element={<AddRevies></AddRevies>}></Route>
          <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>

        </Route>


        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/portfolio' element={<Portfolia></Portfolia>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />




      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
