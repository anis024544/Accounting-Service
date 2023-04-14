import React, { useContext, useState } from "react";
import infoEmojis from "../../Assets/images/info-emoji.svg";
import SidebarNav from "../Dashboard/SidebarNav";
import { Toast } from "react-bootstrap";
import { Elements, SimpleCardForm } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { UserOrder } from "../../App";
import Payment from "../Payment/Payment";
const Book = () => {
  const [order, setOrder] = useContext(UserOrder);
  const [show, setShow] = useState(true);
  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  return (
    <div className="row  gx-1">
      <SidebarNav />
      <div className=" mt-5" style={{ width: "78%" }}>
        <div style={{ backgroundColor: "#F4FDFB" }} className="shadow pt-5 px-5 ">
          <div className="d-flex justify-content-center align-items-center mb-5">
            <Toast
              className="toast-right"
              onClose={() => setShow(false)}
              show={show}
              delay={5000}
              auto-hide
            >
              <Toast.Header>
                <img src={infoEmojis} className="rounded mr-2" alt="Info" />
                <strong className="mr-auto">Important Info</strong>
              </Toast.Header>
              <Toast.Body className="text-center">
                Use this Card Number to test the payment
                <br />
                <b>4242 4242 4242 4242</b>
              </Toast.Body>
            </Toast>
          </div>

          <div className="mr-5">
            <Elements stripe={stripePromise}>
              <Payment order={order}></Payment>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
