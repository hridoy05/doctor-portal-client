import React from 'react';
import chair from "../../images/bg.png"
const Banner = () => {
    return (
        <main style={{height: "600px",width: "100%"}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: "#3A4256"}}>Your new smile <br/>starts here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non maxime ratione alias optio adipisci. Impedit cum pariatur quidem, beatae inventore fuga quisquam similique laudantium, doloribus totam culpa aut dolores maiores.</p>
                <button className="btn btn-primary">Get Appiontment</button>
                
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default Banner;