import React from "react";
import ProjectItems from "./ProjectItems";
import scops from "../assets/scops.png";
import admission from "../assets/admission.png";
import oop from "../assets/oop.png";
import seeds from "../assets/seeds.png";

export default function () {
  return (
    <div id="projects" className="max-w-[1400px] m-auto md:pl-20 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        explicabo consequatur ut alias minima nesciunt tenetur quo rerum,
        reiciendis officiis? Consectetur soluta deleniti natus dolore, hic
        adipisci iusto quasi veritatis?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItems img={scops} title="S.C.O.P.S." link="scops.slsu.edu.ph" />
        <ProjectItems
          img={admission}
          title="Admission System"
          link="as.slsu.edu.ph"
        />
        <ProjectItems img={oop} title="Accounting System" link="" />
        <ProjectItems img={seeds} title="Plant Monitoring System" link="" />
      </div>
    </div>
  );
}
