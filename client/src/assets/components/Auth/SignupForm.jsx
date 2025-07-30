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

  const handleOnClick = async () => {
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

  // 🔥 Send data to backend
  try {
    const response = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error || "Something went wrong.");
      return;
    }

    alert("Welcome aboard! Your STUDx account has been created successfully. ❤️");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAgreed(false);

    navigate("/"); // go to home page

  } catch (error) {
    console.error("Signup Error:", error);
    alert("Server error, please try again later.");
  }
};


  return (
    <>
      

      <div className="raleway flex flex-col md:flex-row w-full min-h-screen">
        <div className="w-full md:w-2/4 flex justify-center h-screen ">
          <div className="w-full p-5 md:p-10">
            <div className="pb-6 md:pb-10">
              <h1 className="text-2xl md:text-3xl font-black py-3">Sign up</h1>
              <p className="text-base md:text-lg text-gray-600">
                Sign up to buy, sell, and save more — all in one place.
              </p>
            </div>

            <form className="w-full">
              <div className="my-4 md:my-5">
                <label htmlFor="name" className="block text-base md:text-xl font-bold text-[#1E1E1E]">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Shaz Hussain"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-base md:text-lg border-2 border-gray-500 w-full h-10 md:h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
                />
              </div>
              <div className="my-4 md:my-5">
                <label htmlFor="email" className="block text-base md:text-xl font-bold text-[#1E1E1E]">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="abc@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-base md:text-lg border-2 border-gray-500 w-full h-10 md:h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
                />
              </div>

              <div className="my-4 md:my-5">
                <label htmlFor="password" className="block text-base md:text-xl font-bold text-[#1E1E1E]">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="abc#123"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-base md:text-lg border-2 border-gray-500 w-full h-10 md:h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
                />
              </div>

              <div className="my-4 md:my-5">
                <label htmlFor="confirm-password" className="block text-base md:text-xl font-bold text-[#1E1E1E]">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="abc#123"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="text-base md:text-lg border-2 border-gray-500 w-full h-10 md:h-12 my-2 px-4 rounded-md focus:outline-none focus:border-[#1B6392]"
                />
              </div>

              <div className="flex items-center space-x-3 my-4">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4"
                />
                <label htmlFor="terms" className="text-sm md:text-base text-gray-700">
                  I agree to the <span className="underline cursor-pointer">Terms & Conditions</span>.
                </label>
              </div>
            </form>

            <div className="mt-6">
              <button
                className="w-full bg-[#1B6392] py-3 md:py-4 border-2 border-[#1B6392] rounded-2xl font-bold md:font-black text-white text-xl md:text-3xl"
                onClick={handleOnClick}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-2/4">
          <img
            src="/Login_Signup/login.png"
            alt="Signup Visual"
            className="h-screen w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
