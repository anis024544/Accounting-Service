import React from 'react';
import SidebarNav from '../SidebarNav';
import man from '../../../Assets/images/man.png'
const Profile = () => {
    return (
        <div className="row" style={{ backgroundColor: "#F4FDFB",height:"100vh" }}>

            <SidebarNav></SidebarNav>
            <div className="col-md-6 bg-red">
                <div className="" >
                    <div className="d-flex justify-content-center ">
                        <div className=" row   mt-5 pt-5">
                            <div className="col-md-6 col-sm-12">
                                <div className="card text-center ">
                                    <h1 className="text-muted bg-light">Profile</h1>
                                    <div style={{borderRadius:"50%"}} className="text-center ">
                                        <img style={{ width: "150px" ,borderRadius:"50%"}} src={man} className="   card-img-top" alt="..."></img>
                                    </div>
                                    <div className="card-body ">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Profile;