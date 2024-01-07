import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex items-center bg-green-200 w-full justify-between shadow-lg mb-2">
      <div className="logo-container">
        <Link to="/">
          <img className="w-40" src={LOGO_URL} alt="Logo"></img>
        </Link>
      </div>
      <div className="nav-links">
        <ul className="flex p-4 m-4">
          <li className="p-4">{onlineStatus ? "🍏" : "🔴"}</li>
          <li className="p-4">
            <Link className="font-bold" to="/">
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link className="font-bold" to="/about">
              About
            </Link>
          </li>
          <li className="p-4">
            <Link className="font-bold" to="/contact">
              Contact
            </Link>
          </li>
          <li className="p-4">
            <Link className="font-bold" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="p-4">
            <span className="font-bold">({loggedInUser})</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
