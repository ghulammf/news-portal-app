import winnicode from "../assets/winnicode.png";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:7000/api/users/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      localStorage.clear();
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="w-full h-[70px] md:h-[90px] shadow-lg flex justify-center">
      <div className="w-[75%] h-full flex items-center justify-between">
        <div className=" overflow-hidden">
          <img
            src={winnicode}
            alt="Winnicode Garuda Teknologi"
            className="w-16 md:w-60 shadow-2xl object-cover object-center"
          />
        </div>
        {user ? (
          <div onClick={handleLogout}>
            <Button name="Logout" />
          </div>
        ) : (
          <div className="flex gap-[18px]">
            <Link to={"/api/users/login"}>
              <Button name="Login" />
            </Link>
            <Link to={"/api/users/register"}>
              <Button name="Register" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
