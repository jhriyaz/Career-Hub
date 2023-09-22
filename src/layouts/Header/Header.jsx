import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Banner from "../../components/Banner/Banner";
import { Toaster } from 'react-hot-toast';
const Header = () => {
  let location = useLocation();

  let pathName=location.pathname
  return (
    <header
      className={
        location.pathname === "/"
          ? "bg-header"
          : "bg-header-with-image overflow-hidden"
      }
    >
      <NavBar></NavBar>
      {location.pathname === "/" ? (
        <Banner></Banner>
      ) : (
        <h1 className=" my-24 text-tittle text-center text-4xl ">
          {location.pathname === "/statistics"
            ? "Statistics"
            : pathName ==="/applied-jobs"
            ? "Applied Jobs"
            : pathName==="/blog"?"Blog":'Job Details'}
        </h1>
      )}
      <Toaster />
    </header>
  );
};

export default Header;
