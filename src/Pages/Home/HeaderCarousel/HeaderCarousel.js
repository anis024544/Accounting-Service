import React from 'react';
import  { useEffect } from 'react';
import './HeaderCarousel.css'
import AOS from "aos";
import "aos/dist/aos.css";

import invoice from '../../../Assets/images/accounting-hero.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const HeaderCarousel = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    const imageStyles = {
        filter: 'hue-rotate(80deg)'
      };


    return (
        <div className=" hero-container container ">
        <div className="row ">
                <div className="col-md-4 order-2 order-md-1  d-flex  align-items-center justify-content-center">
                    <div className="text-dark ">
                        <h3 className='section-title'>Professional accountant</h3>
                        <h6 className='py-3 text-muted' >Start your dream Of an Accountant today. Conquer the world..</h6>
                        <div style={{ BorderRadius: "60px", fontSize: "20px " }} className="btn  main-bg text-center text-light lg-w-5 md-w-50">
                            <Link href="#service" className="text-light text-decoration-none">Take a service  <FontAwesomeIcon icon={faArrowCircleRight} /></Link></div>
                    </div>
                </div>
                <div data-aos={"zoom-in-down"} className="order-1 order-md-2  col-md-8 hero-img-section">
                    <img style={imageStyles}  src={invoice} className=" w-100  img-fluid img-animation" alt="..."></img>
           
            </div>

        </div>
    </div>
    );
};

export default HeaderCarousel;