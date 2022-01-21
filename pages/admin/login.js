import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-gray-300 space-y-4">
      <h1 className="text-3xl text-red-500 font-semibold">Admin DashBoard</h1>
      {error && <p className="text-red-500">Invalid Credentials</p>}
      <div>
        <label htmlFor="username" className="mr-4">
          Username:
        </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 rounded-lg font-bold"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="mr-4">
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          className="w-full p-2 rounded-lg font-bold"
          required
        />
      </div>
      <button
        className="bg-red-500 rounded-xl p-2 mt-9 text-white active:scale-90 transition-all duration-200 ease-out w-80 bg-opacity-80 hover:bg-opacity-100"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
