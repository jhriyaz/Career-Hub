import { Link } from "react-router-dom";
import portfolioPicture from "../../assets/images/user.png";
const Banner = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row container mx-auto items-center gap-8 pt-16 px-6 lg:px-0">
      <div className="banner-text flex-1">
        <h1 className="text-tittle text-4xl text-center lg:text-left lg:text-[80px]">One Step Closer To Your <span className="bannerSpan">Dream Job</span></h1>
        <p className=" py-6 font-medium text-lg">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
        <Link to='/'><button className="btn-custom px-7 py-5">Get Started</button></Link>
      </div>
        <img className="flex-1" src={portfolioPicture} alt="portfolio image" />
    </div>
  );
};

export default Banner;
