
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { UserContext, UserOrder } from '../../../App';
import { useSpring, animated as a } from 'react-spring'

import './ServiceDetails.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { UserOrder } from '../../App';

const ServiceDetails = ({service}) => {

    // const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [order, setOrder] = useContext(UserOrder)

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    const [flipped, set] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false);

    // useEffect(() => {
    //     fetch('http://localhost:10000/isAdmin', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ email: loggedInUser.email })
    //     })
    //         .then(res => res.json())
    //         .then(data => setIsAdmin(data));

    // }, [])








    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })



  



    return (
        <div className="col-md-4 col-sm-6">

            <div style={{ paddingBottom: "80px" }}>
                <div data-aos={"zoom-in-down"}
                 onMouseEnter={() => set(state => !state)}
                 onMouseLeave={() => set(state => !state)}
                 >
                    {
                        !flipped ? <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
                            <div style={{ backgroundColor: "white", borderRadius: "10px",height:"350px" }} className=" text-center  shadow p-4">

                                <img style={{ height: '100px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                                <h5 className="my-2 ">{service.name}</h5>
                                <h6 className="my-2">${service.price}</h6>

                                <p className="text-secondary">Lorem ipsum dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolorum. sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p>


                             

                            </div>
                        </a.div>
                            :
                            <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
                                <div style={{height:"350px",backgroundColor: "rgb(22,25,59)"}} className=" text-center rounded-3 shadow p-4">

                                    <img style={{ height: '240px',width:'240px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />

                                    <Link to={"/dashboard/book"} className='text-decoration-none'>  <button onClick={() => setOrder(service)}  className="btn text-light submitButton">
                                    Buy now
                                    <div className="SubmitButton__horizontal"></div>
                                    <div className="submitButton__vertical"></div>
                                </button></Link>

                                </div>
                               
                            </a.div>
                    }


                </div>
            </div>






        </div>
    );
};

export default ServiceDetails;