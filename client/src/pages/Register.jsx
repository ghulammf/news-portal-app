import { useState } from "react";
import winnicode from "../assets/winnicode.png";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:7000/api/users/register`,
        {
          username,
          firstName,
          lastName,
          email,
          password,
        }
      );

      alert(response.data.message);
      navigate("/api/users/login");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div className="w-[421px] pb-16 rounded-[10px] shadow-xl">
        <form
          action=""
          onSubmit={handleSubmit}
          className="grid justify-items-center"
        >
          <img
            src={winnicode}
            alt="Winnicode Garuda Teknologi"
            className="w-[235px] h-[100px] object-cover object-center mt-[40px] mb-[35px]"
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
            type="text"
            placeholder="Fisrt Name"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            className="border-2 w-[279px] h-[40px] ps-[18px] mb-[24px] rounded-[10px] focus:outline-[#5272ffa7]"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className="border-2 w-[279px] h-[40px] ps-[18px] mb-[24px] rounded-[10px] focus:outline-[#5272ffa7]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
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
          <Button name="Register" />
        </form>
      </div>
    </div>
  );
}

export default Register;
