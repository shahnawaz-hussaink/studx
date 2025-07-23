import {
  Instagram,
  Twitter,
  Github,
  Linkedin,
  Facebook,
  Youtube,
  Mail,
  Globe,
  Phone,
  ArrowRight
} from "lucide-react";
import {  useState } from "react";

export default function NewsLetter(){

    let [mail,setMail] = useState("");
    
    const handleOnClick = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("You are subscribing to Stux.");
    setMail("");
  };

    return (
        <>
            <div className="raleway flex justify-center bg-[#1B6392]">
                <div className="my-10 w-full max-w-3xl px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                    Subscribe to our newsletter
                    </h2>
                    <p className="text-base text-gray-300 mx-auto max-w-xl text-justify sm:text-center sm:max-w-2xl sm:px-10">
                    Subscribe to our newsletter for the latest updates, special offers and expert tips delivered straight to your inbox.
                    </p>
                    <div className="flex mx-auto w-full max-w-xl rounded overflow-hidden bg-white shadow-sm my-10">
                    <input
                        type="text"
                        value={mail}
                        onChange={(e)=>{setMail(e.target.value)}}
                        placeholder="Enter your email"
                        className="flex-grow px-4 py-2 text-sm border-none focus:outline-none"
                    />
                    <button
                        className="flex items-center gap-2 px-4 py-2 text-white bg-orange-400"
                        onClick={handleOnClick}
                    >
                        <p>Subscribe</p>
                        <ArrowRight size={18} />
                    </button>
                    </div>  
                    
                    <div className="hidden md:flex justify-center my-4">
                    <div className="border-b border-gray-400 w-3/4 max-w-xl" />
                    </div>

                    <div className="flex justify-center gap-6 text-white mt-4">
                        <a href="https://instagram.com/shahnawaz.hussaink" target="_blank" rel="noopener noreferrer">
                            <Instagram className="hover:text-gray-300 cursor-pointer" />
                        </a>
                        <a href="https://github.com/shahnawaz-hussaink" target="_blank" rel="noopener noreferrer">
                            <Github className="hover:text-gray-300 cursor-pointer" />
                        </a>
                        <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                            <Youtube className="hover:text-gray-300 cursor-pointer" />
                        </a>
                        <a href="https://portfolio2-0-pi-nine.vercel.app" target="_blank" rel="noopener noreferrer">
                            <Globe className="hover:text-gray-300 cursor-pointer" />
                        </a>
                        <a href="mailto:shahnawaz.hussain96508@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Mail className="hover:text-gray-300 cursor-pointer" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}