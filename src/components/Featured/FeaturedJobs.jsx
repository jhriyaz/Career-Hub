import { useLoaderData } from "react-router-dom";
import FeaturedJob from "./FeaturedJob";
import { useState } from "react";

const Featured = () => {
    const data=useLoaderData().data
    let [featuredData,setFeaturedData]=useState([...data].slice(0,4))
    let handleLoadData=()=>{
        setFeaturedData(data)
    }

    return (
        <>
        <section className="container mx-auto mt-32">
        <h1 className="text-tittle text-center text-5xl">Featured Jobs</h1>
        <p className="text-center text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className="grid lg:grid-cols-2 justify-between item-center grid-cols-1 gap-10 lg:p-0 p-6 lg:pt-8">
            {featuredData.map((featured)=><FeaturedJob key={featured.id} featured={featured}></FeaturedJob>)}
            
        </div>
       
      </section>
      <button onClick={handleLoadData} className={`${data.length===featuredData.length?'hidden':'btn-custom py-5 px-7 mt-10 mx-auto flex '}`} >Show All</button>
        </>
    );
};

export default Featured;