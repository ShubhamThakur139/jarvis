import "./Navbar.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  let navigate = useNavigate();
  return (
    <>
      <nav class="navbar navbar-light bg-light" className="p_navbar">
        <div class="container-fluid ml-5">
          <a class="navbar-brand" href="#" onClick={() => {
                    navigate("/");
                  }}>
            <img
              src="cleartrip-logo-vector.svg"
              alt="cleartrip logo"
              width="180"
              height="80"
              class="logo"
            />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
