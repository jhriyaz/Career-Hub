import { useLoaderData } from "react-router-dom";
import Category from "./Category"
const Categories = () => {
    const data=useLoaderData().data
    console.log(data)
    return (
      <section className="container mx-auto mt-32">
        <h1 className="text-tittle text-center text-5xl">Featured Jobs</h1>
        <p className="text-center text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
        <div className="grid lg:grid-cols-4 justify-between item-center grid-cols-1 pt-8 gap-10 lg:p-0 p-6">
            {data.map((category)=><Category key={category.id} category={category}></Category>)}
        </div>
      </section>
    );
};

export default Categories;