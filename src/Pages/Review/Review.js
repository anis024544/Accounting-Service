import React, { useState } from "react";
import SidebarNav from "../Dashboard/SidebarNav";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Review = () => {

    const [review, setReview] = useState({})
    const [user, loading, error] = useAuthState(auth);
    


    const handleBlur = e => {
        const rewReview = { ...review, img: user.img };
        rewReview[e.target.name] = e.target.value;
        setReview(rewReview);

    }


    const handleReview = (e) => {
        e.preventDefault();
        const loading = toast.loading('Please wait...!');
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(data => {
                toast.dismiss(loading);
                if (data) {
                    console.log(data);
                    return swal("Review Added", "Review has been added successful.", "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })


    }


  return (
    <div className="row">
      <SidebarNav />
      <div className="col-md-9">
        <div>
          <div className=" d-flex justify-content-center     align-items-center  ">
            <form
              style={{ backgroundColor: "#F4FDFB" }}
              onSubmit={handleReview}
              className=" w-75 p-5  shadow"
            >
              <div className="row mb-4">
                <div className="col-sm-10">
                  <input
                    type="text"
                    onBlur={handleBlur}
                    placeholder="your name"
                    name="name"
                    className="form-control"
                    id=""
                  ></input>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="designation"
                    onBlur={handleBlur}
                    placeholder="Company's name designation"
                    className="form-control"
                    id="inputEmail3"
                  ></input>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-sm-10">
                  <input
                    type="text-aria"
                    name="description"
                    onBlur={handleBlur}
                    placeholder="description"
                    className="form-control"
                    id=""
                  ></input>
                </div>
              </div>

              <div className="d-flex justify-content-between ">
                <button type="submit" className="btn main-bg">
                  Send review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
