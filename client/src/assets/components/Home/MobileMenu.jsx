import { ShoppingCart, Heart, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileMenu({ children }) {
  return (
    <div className="md:hidden mt-4 space-y-4">
      {children}
      <div className="flex justify-around text-white">
        <Link to="/"><ShoppingCart size={28} /></Link>
        <Link to="/"><Heart size={28} /></Link>
        <Link to="/login"><User size={28} /></Link>
      </div>
    </div>
  );
}
