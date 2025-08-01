import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleOnClick = async () => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!password) {
    alert("Please enter a password.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || "Invalid credentials");
      return;
    }

    alert(`${data.message} ${data.user.name} ❤️`);
    setEmail("");
    setPassword("");
    navigate("/");

  } catch (err) {
    console.error("Login Error:", err);
    alert("Something went wrong. Please try again later.");
  }
};

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      <div className="raleway w-full md:w-2/4 flex justify-center py-10 px-10 md:py-20">
        <div className="w-full rounded-xl shadow-2xl p-5 md:p-15 py-10">
          <div className="pb-6 md:pb-10">
            <h1 className="text-2xl md:text-3xl font-black py-3">Login to your account</h1>
            <p className="text-base md:text-lg text-gray-500">
              Don't have an account?{" "}
              <Link to="/signup" className="underline underline-offset-4 text-black">
                Create now
              </Link>
            </p>
          </div>

          <form className="w-full">
            <div className="w-full my-1 md:my-2">
              <label htmlFor="email" className="block text-base md:text-xl font-bold text-[#1E1E1E]">
                E-mail
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abc@gmail.com"
                className="text-base md:text-lg border-2 border-gray-500 w-full h-10 md:h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
              />
            </div>
            <div className="w-full my-1 md:my-2">
              <label htmlFor="password" className="block text-base md:text-xl font-bold text-[#1E1E1E]">
                Password
              </label>
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="abc#123"
                className="text-base md:text-lg border-2 border-gray-500 w-full h-10 md:h-12 my-1 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
              />
            </div>
          </form>

          <div className="mt-6">
            <button
              className="w-full bg-[#1B6392] py-1 md:py-2 border-2 border-[#1B6392] rounded-2xl font-bold md:font-black text-white text-xl md:text-3xl"
              onClick={handleOnClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full md:w-2/4">
        <img
          src="/Login_Signup/login.png"
          alt="Login Visual"
          className="h-screen w-full object-cover"
        />
      </div>
    </div>
  );
}
