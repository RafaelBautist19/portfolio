import React from "react";
import InformacionPersonal from "../InformacionPersonal/InformacionPersonal";
import Skills from "../Skills/Skills";


function Sidebar() {
  return (
    <div>
        <div className='text-center sticky'>
            <img src="profile-photo.jpeg" alt="Profile" className="img-fluid mt-4"/>
            <h3 className="mt-1">Rafael Bautista</h3>
            <h5>Web Developer</h5>
          </div>
          <hr></hr>
          <InformacionPersonal />
          <hr></hr>
          <Skills />
    </div>
  );
}

export { Sidebar}