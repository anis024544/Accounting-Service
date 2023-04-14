import React, { useState } from 'react';
import SidebarNav from '../Dashboard/SidebarNav';
import { toast } from 'react-hot-toast';
import swal from 'sweetalert';

const AddAdmin = () => {


    const [admin, setAdmin] = useState(null)
    console.log(admin)
    const handleAdmin = (e) => {
        e.preventDefault()
        const loading = toast.loading('Please wait...!');
        fetch("http://localhost:5000/addAdmin", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify({ "email": admin })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.dismiss(loading);
                if (data) {
                    return swal("Admin Added", "Admin has been added successful.", "success");
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
          <SidebarNav/>
            <div className="col-md-9 mt-5">

                <div>



                    <form style={{ backgroundColor: "#F4FDFB" }} onSubmit={handleAdmin} className="w-75 p-5  shadow">


                        <div class="row mb-3">
                            <label for="inputEmail3" name="email" class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-10">
                                <input type="email" name="email" onBlur={(e) => setAdmin(e.target.value)} class="form-control" id="inputEmail3"></input>
                            </div>
                        </div>

                        <button type="submit" class="btn main-bg">Submit</button>

                    </form>



                </div>
            </div>
        </div>
    );
};

export default AddAdmin;