import React from "react";
import bg from "../assets/profs.jpg";
import { TypeAnimation } from "react-type-animation";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Main() {
  return (
    <div id="main">
      <img className="w-full h-screen object-cover" src={bg} alt="" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/40">
        <div className="max-w-[700px] m-auto lg:ml-60 h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Hi I'm Reniel Domirez
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Front-end Dev",
                2000,
                "Back-end Dev",
                3000,
                "Fullstack Dev",
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "10px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="mailto:iner02232016@gmail.com">
              <FaEnvelope size={20} />
            </a>
            <a href="https://www.facebook.com/iner23.domirez?mibextid=JRoKGi">
              {" "}
              <FaFacebook size={20} />
            </a>
            <a href="https://www.linkedin.com/in/reniel-domirez-a87539244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/Iner022316">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
