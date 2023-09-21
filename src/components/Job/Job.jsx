
import { useLoaderData, useParams } from 'react-router-dom';

const Job = () => {
    let par=useParams()
    const data=useLoaderData().data
let jobData=data.find(job=>job.id==par.id)
    console.log(jobData)
    let {id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information}= jobData
    let{phone,email,address}=contact_information
    return (
        
    );
};

export default Job;