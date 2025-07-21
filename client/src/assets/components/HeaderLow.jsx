import { MapPin, Info, Headphones, Phone } from "lucide-react";
import SearchBar from "./SearchBar";

export default function HeaderTop() {
  return (
    <>
      <div className="w-full bg-white border-b border-gray-200 text-sm lg:text-md">
      <div className="hidden md:flex justify-between items-center px-4 py-3">
        <div className="flex gap-6 items-center">
          <select className="border ml-2 px- py-1 rounded">
            <option>Select Category</option>
            <option>Furniture</option>
            <option>Electronics</option>
            <option>Stationary</option>
            <option>Kitchen</option>
          </select>
          <a href="/track" className="flex items-center gap-1">
            <MapPin size={18} /> Track Order
          </a>
          <a href="/sell">Sell</a>
          <a href="/buy">Buy</a>
          <a href="/contact" className="flex items-center gap-1">
            <Info size={18} /> Need Help
          </a>
          <a href="/contact" className="flex items-center gap-1">
            <Headphones size={18} /> Support
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <Phone size={18} />
          <span>+91-965-080-XXXX</span>
        </div>
      </div>
      
    </div>
    <div className="flex md:hidden w-full p-5">
      <SearchBar/>
    </div>
    </>
  );
}
