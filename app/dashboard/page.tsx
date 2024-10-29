import React from "react";
import UserDashboard from "./component/UserDashboard";
import AdminDashboard from "./component/AdminDashboard";

const roleType = "user";

const Dashboard = () => {
  return (
    <div>{roleType === "user" ? <UserDashboard /> : <AdminDashboard />}</div>
  );
};

export default Dashboard;
