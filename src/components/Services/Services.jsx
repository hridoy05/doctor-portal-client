import React from 'react';
import fluoride from '../../images/fluride.png'
import cavity from '../../images/cavity.png'
import whitening from '../../images/whitening.png'
import Servicedetail from './Servicedetail/Servicedetail';
const serviceData = [
    {
        name: "Fluride treatment",
        img:  fluoride
    },
    {
        name: "cavity Filling",
        img:  cavity
    },
    {
        name: "Teath whitening",
        img:  whitening
    }
]
const Services = () => {
    return (
        <section className="services-container mt-4 ">
            <div className="text-center">
            <h5 style={{color: "#1CC7C1"}}> OUR SERVICES</h5>
            <h2 style={{color: "#3A4256"}}>Services We Provide</h2>
            </div>
            <div class="d-flex justify-content-center ">
            <div className="w-75 row mt-5 pt-3">
            {
                serviceData.map(service => <Servicedetail service={service}></Servicedetail>)
            }
            </div>

        </div>
        </section>
    );
};

export default Services;