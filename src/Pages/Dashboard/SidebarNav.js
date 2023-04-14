import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SidvarNav/SidebarNav.css";
import React, { useEffect, useState } from "react";
import { Col, Nav, TabContainer } from "react-bootstrap";
import {
  faCog,
  faSignOutAlt,
  faPlusCircle,
  faHome,
  faBars,
  faTasks,
  faUserCircle,
  faShoppingBag,
  faShoppingCart,
  faUserPlus,
  faUsers,
  faSearchDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-hot-toast";


const SidebarNav = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, loading, error] = useAuthState(auth);
     
  //  if(loading){
  //   toast.loading('Please wait for a while')
  //  }

useEffect(() => {
if(user){
  console.log(user.email);
  fetch(`http://localhost:5000/isAdmin?loggedUser=${user?.email}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    if (data.length) {
      setIsAdmin(true);
    }
    
  })
}

  }, [user]);

  return (
    <TabContainer id="left-tabs-example" defaultActiveKey="first">
      <Col>
        <Nav variant="pills" className="flex-column nav-container">
          <Nav.Item>
            <Link to="/dashboard/Profile">
              {" "}
              <FontAwesomeIcon icon={faUserCircle} /> Profile
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to="/dashboard/Book">
              <FontAwesomeIcon icon={faShoppingBag} /> Book
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/dashboard/Review">
              <FontAwesomeIcon icon={faSearchDollar} /> Review
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/dashboard/BookList">
              <FontAwesomeIcon icon={faShoppingCart} /> Book list
            </Link>
          </Nav.Item>
          {isAdmin && (
            <div>
              <Nav.Item>
                <Link to="/dashboard/addService">
                  <FontAwesomeIcon icon={faPlusCircle} /> Add Service
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/dashboard/MakeAdmin">
                  <FontAwesomeIcon icon={faPlusCircle} /> make admin
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/dashboard/OrderList">
                  <FontAwesomeIcon icon={faBars} /> Order List
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/dashboard/manageService">
                  <FontAwesomeIcon icon={faTasks} /> Manage Services
                </Link>
              </Nav.Item>
            </div>
          )}

          <Nav.Item>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} /> Home page
            </Link>
          </Nav.Item>
        </Nav>
      </Col>
    </TabContainer>
  );
};

export default SidebarNav;
