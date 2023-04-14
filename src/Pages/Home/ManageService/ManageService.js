import React, { useEffect, useState } from 'react';
import SidebarNav from '../../Dashboard/SidebarNav';
import ManageServiceDetails from './ManageServiceDetails';

const ManageService = () => {

    const [serviceList, setServiceList] = useState([])
    const containerStyle = {
        backgroundColor: "#F4FDFB",
        border: '1px solid red'
    }

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])

    return (
        <div className="row">
        <SidebarNav/>
        <div className="col-md-9 mt-5 ">  <h5 className="text-brand">All Service</h5>
            {
                
                <ManageServiceDetails service={serviceList}></ManageServiceDetails>
            }
        </div>
    </div>
    );
};

export default ManageService;