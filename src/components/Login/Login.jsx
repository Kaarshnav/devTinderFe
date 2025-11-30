import React, { useState } from "react";
import { API_BASE_URL } from "../../../config";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/slices/authSlice";

const Login = () => {
  const [userEmail, SetUserEmail] = useState("matru@gmail.com");
  const [password, setPassword] = useState("123");
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const data = await fetch(`${API_BASE_URL}/login`, {
        method: "POST",
        credentials: "include", // 🔥 REQUIRED for cookies
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
          password: password,
        }),
      });
      const response = await data.json();

      dispatch(loginUser(response.data));
      console.log("Login successful:", response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="h-full flex justify-center items-center ">
      <div className="bg-base-200 border-base-300 rounded-box w-xs p-5 m-10">
        <label className="label m-3">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={userEmail}
          onChange={(e) => SetUserEmail(e.target.value)}
        />

        <label className="label m-3">Password</label>
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-neutral mt-4" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
