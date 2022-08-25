import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import auth from "../Login/Firebase/firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  return (
    <div class="drawer drawer-mobile px-12">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <!-- Page content here --> */}
        <h2 className="text-4xl font-bold text-primary">Dashboard</h2>
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard"><span className="text-primary">{user?.displayName}</span> Appointment</Link>
          </li>
          <li>
            <Link to="/dashboard/review">My Review</Link>
          </li>
          <li>
            <Link to="/dashboard/history">My History</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
