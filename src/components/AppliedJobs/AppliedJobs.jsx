import { useLoaderData } from "react-router-dom";
import { getAppliedJobs } from "../../utilities/localStorage";
import { useEffect, useState } from "react";
import FeaturedJob from "../Featured/FeaturedJob";
const AppliedJobs = () => {
    let previouslyAppliedJob=getAppliedJobs()
    const data=useLoaderData().data
let [appliedJobs,setAppliedJobs]=useState([])
useEffect(()=>{
   let arr=[]
    for(let idx of previouslyAppliedJob){
        let job= data.find((data)=>data.id===idx)
        arr.push(job)
     }
     setAppliedJobs(arr)
},[])

    return (
        <>
        <section className="container mx-auto mt-32">
        <div className="grid lg:grid-cols-2 justify-between item-center grid-cols-1 gap-10 lg:p-0 p-6 lg:pt-8">

            {appliedJobs.map((featured)=><FeaturedJob key={featured.id} featured={featured}></FeaturedJob>)}
            
        </div>
       
      </section>
      
        </>
    );
};

export default AppliedJobs;