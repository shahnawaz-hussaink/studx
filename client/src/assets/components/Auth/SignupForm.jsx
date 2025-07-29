import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import HeaderMain from "../Home/HeaderMain";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate();

  const handleOnClick = () => {
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!agreed) {
      alert("You must agree to the Terms & Conditions.");
      return;
    }

    alert("Welcome aboard! Your STUDx account has been created successfully. ❤️");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAgreed(false);

    navigate("/");
  };

  return (
    <>
      <HeaderMain showSearchBar={false} />
      <div className="raleway justify-center w-2/4 mt-20 ml-15 rounded-lg shadow-md">
        <div className="w-full p-6 rounded-lg">
          <div className="w-full pb-10">
            <h1 className="text-3xl font-black py-5">Sign up</h1>
            <p className="text-xl text-gray-600">
              Sign up to buy, sell, and save more — all in one place.
            </p>
          </div>

          <form className="w-full">
            <div className="w-full my-5">
              <label htmlFor="name" className="text-xl font-bold text-[#1E1E1E]">Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Shaz Hussain"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-xl border-2 border-gray-500 w-full h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
              />
            </div>

            <div className="w-full my-5">
              <label htmlFor="email" className="text-xl font-bold text-[#1E1E1E]">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="abc@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-xl border-2 border-gray-500 w-full h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
              />
            </div>

            <div className="w-full my-5">
              <label htmlFor="password" className="text-xl font-bold text-[#1E1E1E]">Password</label>
              <input
                id="password"
                type="password"
                placeholder="abc#123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-xl border-2 border-gray-500 w-full h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
              />
            </div>

            <div className="w-full my-5">
              <label htmlFor="confirm-password" className="text-xl font-bold text-[#1E1E1E]">Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                placeholder="abc#123"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="text-xl border-2 border-gray-500 w-full h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
              />
            </div>

            <div className="flex items-center space-x-3 my-4">
              <input
                id="terms"
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the <span className="underline cursor-pointer">Terms & Conditions</span>.
              </label>
            </div>
          </form>
        </div>

        <div className="flex justify-center w-full px-6 py-2">
          <button
            className="w-full bg-[#1B6392] p-3 border-2 border-[#1B6392] rounded-2xl font-black text-white text-3xl"
            onClick={handleOnClick}
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}
