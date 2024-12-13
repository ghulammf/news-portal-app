import Button from "../components/Button";
import winnicode from "../assets/winnicode.png";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:7000/api/users/login",
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      //console.log(response.data.user);
      setUser(response.data.user);
      navigate("/dashboard");
    } catch (error) {
      setUser(null);
      alert(error.response?.data?.message);
    }
  };
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="w-[421px] h-[437px] rounded-[10px] shadow-xl">
        <form
          action=""
          onSubmit={handleLogin}
          className="grid justify-items-center"
        >
          <img
            src={winnicode}
            alt=""
            className="w-[235px] h-[100px] object-cover object-center mt-[40px] mb-[35px] "
          />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="border-2 w-[279px] h-[40px] ps-[18px] mb-[24px] rounded-[10px] focus:outline-[#5272ffa7]"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border-2 w-[279px] h-[40px] ps-[18px] mb-[62px] rounded-[10px] focus:outline-[#5272ffa7]"
            required
          />
          <Button name="Login" />
        </form>
      </div>
    </div>
  );
}

export default Login;
