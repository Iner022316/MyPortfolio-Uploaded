import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "March 2023 - March 2024",
    title: "Computer Programmer",
    company: "Southern Luzon State University",
    details:
      "Develop and write computer programs, Create workflow diagrams and charts, Resolve bugs and inconsistencies, Assists the institution in the creation and management of IT project proposals, Writes documentation and operating manual, Manage database systems",
  },
  {
    year: "July 2022 - January 2023",
    title: "Operation Specialist",
    company: "FastRemit Remittance Service",
    details:
      "Receive and process daily remittances Conducting customer due diligence to ensure the accuracy of the received remittance Update Status of Processed Remittance Monthly Reports Computer Basic Troubleshooting",
  },
  {
    year: "October 2019 - April 2022",
    title: "Technical Support Specialist",
    company: "Carlos SuperDrug Lucena Inc",
    details:
      "Responsible for any computer-related problems. System and server maintenance Network Troubleshooting Database updates such as sales, prices, and stock movements, CCTV troubleshoot and review",
  },
];
export default function Work() {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          company={item.company}
          details={item.details}
        />
      ))}
    </div>
  );
}
