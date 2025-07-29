import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar.jsx";
import MobileMenu from "./MobileMenu.jsx";
import '../../Styles/Header.css'
import {Link } from 'react-router-dom'

export default function HeaderMain({showSearchBar=true}) {
  const [searchText, setSearchText] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <div className="raleway bg-[#1B6392] px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <a href="/">
          <h3 className="raleway Header-logo text-4xl text-white">STUDx</h3>
        </a>

        <div className="hidden md:flex items-center w-1/2 px-5">
          {showSearchBar && (
            <SearchBar
              searchText={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onSearch={handleSearch}
            />
          )}
        </div>

        <div className="hidden md:flex items-center gap-5 ">
          <a href="/cart" className="text-white hover:text-gray-300"><ShoppingCart size={28} /></a>
          <a href="/wishlist" className="text-white hover:text-gray-300"><Heart size={28} /></a>
          <Link to="/login" className="text-white hover:text-gray-300"><User size={28} /></Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <MobileMenu/>
      )}
    </div>
  );
}
