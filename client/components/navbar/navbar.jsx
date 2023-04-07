import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navcontainer">
        <span>YourBooking</span>
        <div className="navitems">
            <button className="navbtn">Register</button>
            <button className="navbtn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
