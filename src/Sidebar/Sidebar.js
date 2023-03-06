import React from "react";
import InformacionPersonal from "../InformacionPersonal/InformacionPersonal";
import Skills from "../Skills/Skills";

function Sidebar() {
  return (
    <div>
      <div className="text-center">
        <img
          src="images/profile-photo.jpeg"
          alt="Profile"
          className="img-fluid mt-4"
        />
        <h2 className="mt-1">Rafael Bautista</h2>
        {/* Software Engineer */}
        <h5 className="">Software Engineer</h5>
      </div>
      <hr></hr>
      <InformacionPersonal />
      <hr></hr>
      <Skills />
      <hr></hr>
      {/* Copyright */}
      <div className="text-center">
        <h6>© 2023 Rafael Bautista</h6>
      </div>
    </div>
  );
}

export { Sidebar };
