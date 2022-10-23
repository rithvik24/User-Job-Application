import React from "react";
import { Link, Route } from "react-router-dom";
import Home from "./Home";
import ApplicationForm from "./ApplicationForm";
import AdminDashBoard from "./AdminDashBoard";

const NavBar = (props) => {
  return (
    <div>
      <Link to="/"> Home </Link> |
      <Link to="/applicationForm"> Aplication Form </Link> |
      <Link to="adminDashboard"> Admin Dashboard </Link>

      <Route path="/" component={Home} exact={true} />
      <Route path='/applicationForm' component={ ApplicationForm }/>
      <Route path='/adminDashboard' component={ AdminDashBoard }/>
    </div>
  );
};

export default NavBar;
