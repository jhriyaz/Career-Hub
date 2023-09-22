import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    let navigation = useNavigation()
    return (
      <>
      <Header></Header>
      {
        navigation.state==='loading'?<span className="loading loading-spinner text-accent mx-auto flex justify-center"></span>:<Outlet></Outlet>
      }
      
      <Footer></Footer>
      </>
    );
};

export default Root;