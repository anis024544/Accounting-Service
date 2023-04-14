import React from "react";
import {Table } from "react-bootstrap";

const OrderListDetails = ({orders,updateOrderStatus}) => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Email</th>
          <th>ServiceName</th>
          <th>Paid with</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
            orders.map((order,index)=><tr key={index}>
          
                <td>{index+1}</td>
                <td></td>
                <td>{order.user.email}</td>
                <td>{order.serviceName}</td>
                <td>Credit Card</td>
                <td><select
                                        className={order.status === "Pending" ? "btn btn-danger" : order.status === "Done" ? "btn btn-success" : "btn btn-info"}
                                        defaultValue={order.status}
                                        onChange={e => updateOrderStatus(e.target.value, order._id)}>
                                        <option className="bg-white text-muted">Pending</option>
                                        <option className="bg-white text-muted">On going</option>
                                        <option className="bg-white text-muted">Done</option>
                                    </select></td>
                                 
              </tr>)
      
        }
      </tbody>
    </Table>
  );
};

export default OrderListDetails;
