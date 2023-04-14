import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SidebarNav from "../Dashboard/SidebarNav";
import BookedItemsDetails from "./BookedItemsDetails";
const BookedItems = () => {
  const [bookingList, setBookingList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [user, loading, error] = useAuthState(auth);
  console.log(bookingList);
  useEffect(() => {
    fetch(`http://localhost:5000/orders?loggeduser=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookingList(data);
        setIsLoading(true)
        
      });
  }, [user?.email]);

  return (
    <div className="row">
      <SidebarNav></SidebarNav>


      {/* <div className=" row   mt-5 pt-5">
        {bookingList.map((booking) => (
          <BookedItemsDetails booking={booking} key={booking._id}></BookedItemsDetails>
        ))}
      </div> */}


<div className=" p-4 pr-5" style={{ backgroundColor: "#F4FDFB" }}>


<div className="d-flex justify-content-center ">
    {bookingList.length < 1 && !isLoading && <div className="d-flex py-5 my-5 justify-content-center">
        <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>}
    {bookingList.length < 1 && isLoading ?
        <h1>No order placed yet.....</h1>
        :
        <div className=" row   mt-5 pt-5">
            {
                bookingList.map(booking => <BookedItemsDetails booking={booking} key={booking._id}></BookedItemsDetails>)
            }
        </div>
    }
</div>
</div>


    </div>
  );
};

export default BookedItems;
