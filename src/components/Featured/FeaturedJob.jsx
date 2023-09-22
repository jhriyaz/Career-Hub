import PropTypes from 'prop-types';
import { FaLocationDot,FaDollarSign } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const FeaturedJob = ({featured}) => {
    console.log(featured)
    let {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=featured
  
    return (
        <div className=" p-10 rounded-lg border-2 border-[#E8E8E8] shadow-md">
           <img className=" w-32 h-10 mb-8" src={logo} alt="Company Logo" />
           <h1 className="text-tittle text-2xl">{job_title}</h1>
           <h4 className="text-[#757575] text-xl font-semibold">{company_name}</h4>
           <div className="flex gap-6 font-extrabold text-base  text-[#7E90FE] my-6">
            <p className='border-[#7E90FE] border-2 px-5 py-3'>{remote_or_onsite}</p>
            <p className='border-[#7E90FE] border-2 px-5 py-3'>{job_type}</p>
            
           </div>
          <div className="flex gap-4 text-[#757575] font-semibold text-xl" >
          <p className="flex items-center gap-1"><FaLocationDot></FaLocationDot>{location}</p>
           <p  className="flex items-center gap-1"><FaDollarSign></FaDollarSign>{salary}</p>
          </div>
         <Link to={`/job/${id}`}> <button className='btn-custom py-3 px-5 mt-6'>View Details</button></Link>
        </div>

    );
};
FeaturedJob.propTypes={
    featured:PropTypes.object
}
export default FeaturedJob;