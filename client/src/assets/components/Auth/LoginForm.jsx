import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleOnClick = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Now you are Logged into STUdx ❤️");
    setEmail("");
    navigate("/"); // go to home or dashboard
  };

  return (
    <div className="raleway justify-center w-2/4 mt-20 ml-15 rounded-lg shadow-md">
      <div className="w-full p-6 rounded-lg">
        <div className="w-full pb-10">
          <h1 className="text-3xl font-black py-5">Sign in</h1>
          <p className="text-xl text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="underline underline-offset-4 text-black">
              Create now
            </Link>
          </p>
        </div>
        <form className="w-full">
          <div className="w-full my-5">
            <label htmlFor="email" className="text-xl font-bold text-[#1E1E1E]">
              E-mail
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              className="text-xl border-2 border-gray-500 w-full h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
            />
          </div>
          <div className="w-full my-5">
            <label htmlFor="password" className="text-xl font-bold text-[#1E1E1E]">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="abc#123"
              className="text-xl border-2 border-gray-500 w-full h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
            />
          </div>
        </form>
      </div>
      <div className="flex justify-center w-full px-6 py-2">
        <button
          className="w-full bg-[#1B6392] p-3 border-2 border-[#1B6392] rounded-2xl font-black text-white text-3xl"
          onClick={handleOnClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}
