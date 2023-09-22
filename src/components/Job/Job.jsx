import { useLoaderData, useParams } from "react-router-dom";
import {FaDollarSign ,FaBagShopping,FaLocationDot} from 'react-icons/fa6';
import { setAppliedJobs } from "../../utilities/localStorage";

const Job = () => {
  let par = useParams();
  const data = useLoaderData().data;
  let jobData = data.find((job) => job.id == par.id);
  let {
    job_title,
    id,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = jobData;
  let { phone, email, address } = contact_information;
  let handleApply=(id)=>{
    setAppliedJobs(id)
  
  }
  return (
    <section className="container mx-auto mt-32 grid lg:grid-cols-3">
      <div className="lg:col-span-2 p-6">
        <div className=" space-x-8 leading-7	">
          <span className=" font-extrabold text-base text-black ">
            {'Job Description :'}
          </span>
          <span className="text-[#757575] text-base font-medium ">{job_description}</span>
        </div>
        <div className="space-x-8 leading-7 mt-10">
          <span className=" font-extrabold text-base text-black ">
            {'Job Responsibility :'}
          </span>
          <span className=" text-[#757575] text-base font-medium">{job_responsibility}</span>
        </div>
        <div className="leading-7 mt-10">
          <h3 className=" font-extrabold text-base text-black ">
            {'Educational Requirements:'}
          </h3>
          <p className="text-[#757575] text-base font-medium mt-3">{educational_requirements}</p>
        </div>
        <div className="leading-7 mt-10">
          <h3 className=" font-extrabold text-base text-black ">
            {'Experiences:'}
          </h3>
          <p className="text-[#757575] text-base font-medium mt-3">{experiences}</p>
        </div>
      </div>
      <div className="lg:col-span-1 lg:p-0 p-4">
       <div className="bg-header lg:p-8 p-4 rounded-lg ">
       <h1 className=" font-extrabold text-xl text-[#1A1919]">Job Details</h1>
        <hr className=" my-6" />
           <p  className="flex items-center text-xl text-[#757575] font-medium gap-4"> <FaDollarSign className="text-[#7E90FE]"></FaDollarSign> <span className="text-black  font-bold">Salary:</span> {salary} (Per Month) </p>
           <p  className="flex items-center text-xl text-[#757575] font-medium gap-4 mt-6"> <FaBagShopping className="text-[#7E90FE]"></FaBagShopping> <span className="text-black  font-bold">Job Title :</span> { job_title}</p>
       <h1 className=" font-extrabold text-xl text-[#1A1919] mt-8">Contact Information</h1>
          
           <hr className=" my-6" />
        <p  className="flex items-center text-xl text-[#757575] font-medium gap-4 mt-6"> <FaBagShopping className="text-[#7E90FE]"></FaBagShopping> <span className="text-black  font-bold">Phone:</span> { phone}</p>
        <p  className="flex items-center text-xl text-[#757575] font-medium gap-4 mt-6"> <FaBagShopping className="text-[#7E90FE]"></FaBagShopping> <span className="text-black  font-bold">Email:</span> { email}</p>
        <p  className="flex items-center text-xl text-[#757575] font-medium gap-4 mt-6"> <FaLocationDot className="text-[#7E90FE]"></FaLocationDot> <span className="text-black  font-bold">Address:</span> { address}</p>
       </div>
        <button className="btn-custom w-full py-4 mt-6" onClick={()=>{handleApply(id)}}>Apply</button>
      </div>
      
    </section>
  );
};

export default Job;
