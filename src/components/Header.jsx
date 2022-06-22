import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="container px-5">
      <div className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="w-1/4">
          <h1 className="py-3 text-xl font-bold">Try Reactjs</h1>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <a className="mr-5 hover:text-gray-900">Home</a> */}
          <NavLink to="/" className="mr-5 hover:text-gray-900">
            Home
          </NavLink>
          <NavLink to="/about" className="mr-5 hover:text-gray-900">
            About
          </NavLink>
          <NavLink to="/contact" className="mr-5 hover:text-gray-900">
            Contact
          </NavLink>
          <NavLink to="/me" className="mr-5 hover:text-gray-900">
            Me
          </NavLink>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
