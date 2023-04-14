import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import swal from "sweetalert";

import { useAuthState } from "react-firebase-hooks/auth";


import auth from "../../firebase.init";
import axios from "axios";

const Payment = ({ order }) => {
  const [user, loading, error] = useAuthState(auth);

 

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleOrder = async (data) => {
    if (!stripe || !elements) {
      console.log("clicked first");

      return;
    }
    const loading = toast.loading("Please wait...!");

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    if (error) {
      toast.dismiss(loading);

      return swal("Failed!", error.message, "error", { dangerMode: true });
      setPaymentError(error.message);
      setPaymentSuccess(null);
      console.log(true);
    }

    console.log(user, paymentMethod.id, order, order.image.img);
    const orderInfo = {
      user,
      orderTime: new Date().toLocaleString(),
      serviceName: order.name,
      price: order.price,
      description: order.description,
      image: order.image,
      status: "Pending",
      paymentId: paymentMethod.id,
    };
    axios
      .post("http://localhost:5000/addOrder", orderInfo)
      .then((res) => {
        toast.dismiss(loading);
        if (res.data) {
          return swal(
            "Payment successful",
            "Your booking and payment has been successful.",
            "success"
          );
        }
        swal("Failed!", "Something went wrong! Please try again.", "error", {
          dangerMode: true,
        });
      })

      .catch((error) => {
        toast.dismiss(loading);
        swal("Failed!", "Something went wrong! Please try again.", "error", {
          dangerMode: true,
        });
      });

    // fetch("http://localhost:5000/addOrder", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(orderInfo),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     toast.dismiss(loading);
    //     if (data) {
    //       return swal(
    //         "Payment successful",
    //         "Your booking and payment has been successful.",
    //         "success"
    //       );
    //     }
    //     swal("Failed!", "Something went wrong! Please try again.", "error", {
    //       dangerMode: true,
    //     });
    //   })
    //   .catch((error) => {
    //     toast.dismiss(loading);
    //     swal("Failed!", "Something went wrong! Please try again.", "error", {
    //       dangerMode: true,
    //     });
    //   });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleOrder)} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Service
          </label>
          <input
            type="text"
            defaultValue={order.name}
            className="form-control"
            id=""
          ></input>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Price
          </label>
          <input
            type="text"
            defaultValue={order.price}
            className="form-control"
            id=""
          ></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Name
          </label>
          <input
            type="text"
            defaultValue={user?.name}
            className="form-control"
            id=""
          ></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Card Number
          </label>
          <CardNumberElement className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="text"
            defaultValue={user?.email}
            className="form-control"
            id=""
          ></input>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            {" "}
            Expiration Date
          </label>
          <CardExpiryElement className="form-control" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            id=""
          ></input>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            CVC
          </label>
          <CardCvcElement className="form-control" />
        </div>

        <div className="pb-5 text-center ">
          <button
            className="btn main-bg me-md-2 text-center"
            type="submit"
            disabled={!stripe}
          >
            Order now
          </button>
        </div>
      </form>

      {paymentError && <p style={{ color: "red" }}>{paymentError}</p>}
      {paymentSuccess && (
        <p style={{ color: "green" }}>Your payment was successful.</p>
      )}
    </div>
  );
};

export default Payment;
