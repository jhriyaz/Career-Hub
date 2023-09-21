import PropTypes from 'prop-types';
const Category = ({category}) => {
    let {logo,availability,category_name}=category
    return (
        <div className=" p-10 w-full bg-header rounded-lg shadow-lg lg:text-left text-center">
           <img className=" w-10 h-10 mx-auto lg:ml-0" src={logo} alt="icon" />
           <h3 className=" font-extrabold text-xl pt-8">{category_name}</h3>
           <p className=" font-medium text-base pt-3">{availability}</p>
        </div>
    );
};
Category.propTypes={
    category:PropTypes.object
}

export default Category;