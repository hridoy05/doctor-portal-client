import React from 'react';
import InfoCard from './InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone} from '@fortawesome/free-solid-svg-icons'


const infosData = [
    {
        title: 'opening Hours',
        description: 'we are open 7 days',
        icon: faClock,
        background:'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, ny 10003 USA',
        icon: faMapMarker,
        background:'dark'
    },
    {
        title: 'Call us Now',
        description: '+17283748327461',
        icon: faPhone,
        background:'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section class="d-flex justify-content-center ">
            <div className="w-75 row ">
            {
                infosData.map(info => <InfoCard info={info}></InfoCard>)
            }
            </div>

        </section>
    );
};

export default BusinessInfo;