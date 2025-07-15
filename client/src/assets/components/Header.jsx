import {
  ShoppingCart,
  Heart,
  User,
  Search
} from "lucide-react";
import '../../assets/Styles/Header.css'
import { useState } from "react";

export default function Header() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <div className="Head w-full h-25 bg-[#1B6392] flex items-center justify-between px-6 sticky">
      <div className="flex items-center">
        <a href="/">
          <h3 className="unbounded text-2xl px-5 text-white">Stud X</h3>
        </a>
      </div>

      <div className="flex items-center w-1/2 px-5">
        <div className="flex items-center h-12 w-full bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm">
          <input
            type="text"
            placeholder="Search for anything..."
            onChange={(e) => setSearchText(e.target.value)}
            className="flex-grow py-1 text-gray-700 focus:outline-none"
          />
          <button onClick={handleSearch} type="button" className="text-gray-700 hover:text-black">
            <Search size={25} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-5 text-white pr-5">
        <a href="/">
          <ShoppingCart size={28} className="cursor-pointer hover:text-gray-300" />
        </a>
        <a href="/">
          <Heart size={28} className="cursor-pointer hover:text-gray-300" />
        </a>
        <a href="/">
          <User size={28} className="cursor-pointer hover:text-gray-300" />
        </a>
      </div>
    </div>
  );
}
