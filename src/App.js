

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Profile from "./Pages/Dashboard/Profile/Profile";
import Book from "./Pages/Book/Book";
import { createContext, useState } from "react";
import AddService from "./Pages/AddService/AddService";
import BookedItems from "./Pages/BookedItems/BookedItems";
import OrderList from "./Pages/OrderList/OrderList";
import Review from "./Pages/Review/Review";
import { Toaster } from 'react-hot-toast';
import ManageService from "./Pages/Home/ManageService/ManageService";
import AddAdmin from "./Pages/AddAdmin/AddAdmin";

export const UserContext = createContext();
export const UserOrder = createContext();

function App() {
  const [order, setOrder] = useState({});
  return (
    <div>
      <UserOrder.Provider value={[order, setOrder]}>
        <Toaster/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/dashboard/profile" element={<Profile />}></Route>
          <Route path="/dashboard/Book" element={<Book />}></Route>
          <Route path="/dashboard/addService" element={<AddService />}></Route>
          <Route path="/dashboard/BookList" element={<BookedItems />}></Route>
          <Route path="/dashboard/OrderList" element={<OrderList />}></Route>
          <Route path="/dashboard/Review" element={<Review />}></Route>
          <Route path="/dashboard/manageService" element={<ManageService />}></Route>
          <Route path="/dashboard/MakeAdmin" element={<AddAdmin />}></Route>
        </Routes>
      </UserOrder.Provider>
    </div>
  );
}

export default App;
