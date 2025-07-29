import { ShoppingCart, Heart, User } from "lucide-react";

export default function MobileMenu({ children }) {
  return (
    <div className="md:hidden mt-4 space-y-4">
      {children}
      <div className="flex justify-around text-white">
        <a href="/"><ShoppingCart size={28} /></a>
        <a href="/"><Heart size={28} /></a>
        <a href="/login"><User size={28} /></a>
      </div>
    </div>
  );
}
