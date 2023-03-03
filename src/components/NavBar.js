import logo from "../images/logo-black.png";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-4 w-3/4 mx-auto">
      <img src={logo} alt="Website logo" className="h-10" />
      <ul className="flex gap-6">
        <li className="nav-item">Home</li>
        <li className="nav-item">About Us</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Blogs</li>
        <li className="nav-item">Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
