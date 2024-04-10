import { HoverEffect } from "./ui/card-hover-effect";

export function Educationcard() {
  return (
    <div className="max-w-7xl  mx-auto  px-8" id="education">
        <div className="flex justify-center">
            <div className=" flex justify-center  text-xl w-56 bg-black text-white rounded-full">Education</div>
        </div>
        
        <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Graduation",
    description:
      "St. Vincent Pallotti college of Engineering & Technology  , Nagpur, Maharashtra — Bachelor of Information Technology .",
    timeline : "MONTH 2021 - MONTH 2025",
  },
  {
    title: "H.S.C Board",
    description:
      "Jupiter High School , Nagpur, Maharashtra — 12th Grade - 82%",
      timeline : "MONTH 2019 - MONTH 2021",
  },
  {
    title: "C.B.S.E Board",
    description:
      "Sanakar Vidya Sagar ,Nagpur, Maharashtra — 10th Grade - 84%",
      timeline : "MONTH 2009 - MONTH 2019",
  },
  
];
