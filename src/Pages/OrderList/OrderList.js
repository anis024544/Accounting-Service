import React, { useEffect, useState } from "react";
import OrderListDetails from "./OrderListDetails";
import SidebarNav from "./../Dashboard/SidebarNav";
import toast from "react-hot-toast";

const OrderList = () => {
  const [orderLists, setOrderLists] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrderLists(data));
  }, []);

  const updateOrderStatus = (status, productKey) => {
    console.log(status, productKey);

    let statusUpdatingInfo = {
      id: productKey,
      status: status,
    };
    fetch(`http://localhost:5000/updateStatusForOrders/${productKey}`, {
      method: "PATCH",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(statusUpdatingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result.success) {
          setOrderLists(data.result.data);
          toast.success(data.result.message);
        } else {
          toast.error("something went wrong");
        }
      });
  };

  return (
    <div className="row">
      <SidebarNav></SidebarNav>
      <div style={{ width: "80%" }}>
        {
          <OrderListDetails
            orders={orderLists}
            updateOrderStatus={updateOrderStatus}
          ></OrderListDetails>
        }
      </div>
    </div>
  );
};

export default OrderList;
