import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-4xl text-green-400'>Welcome to Your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/myorders">My Orders </Link></li>
                    <li><Link to="/dashboard/manageproduct">Manage Order</Link></li>
                    <li><Link to="/dashboard/manageallorders">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/makeadmin">Make Admin </Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;