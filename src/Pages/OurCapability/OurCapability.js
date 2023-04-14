import React from 'react';
import search from "../../Assets/images/search.png"
import call from "../../Assets/images/call-center.png"
import check from "../../Assets/images/check-list.png"
import phon from "../../Assets/images/megaphone.png"
import OurCapabilityDetails from './../OurCapabilityDetails/OurCapabilityDetails';
import './OurCapability.css'
const OurCapability = () => {

    const serviceData = [
        {
            img: search,
            title: "MARKETING"
        },
        {
            img: phon,
            title: "MARKETING"
        },
        {
            img: call,
            title: "24/7 SUPPORT"
        },
        {
            img: check,
            title: "PLANNINGS"
        }
    ]
    return (
        <section id="aboutUs" className="capability my-5">
            <div className="container">
                <div className="section-header text-center">
                    <h5 className="  title text-uppercase ">Our Capability</h5>
                    <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus illum velit error, libero nobis rem magnam expedita, recusandae, perferendis fugiat ex autem. Modi dicta temporibus labore, nostrum suscipit earum nisi.</p>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5">
                        {
                            serviceData.map((service,index) => <OurCapabilityDetails key={index} service={service}></OurCapabilityDetails>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurCapability;