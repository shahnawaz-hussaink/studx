import {React, useEffect, useState } from "react";
import {ArrowRight} from 'lucide-react'
export default function BestDeals() {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/deals")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched deals:", data); 
        setDeals(data);
      })
      .catch((err) => {
        console.error("Error fetching deals:", err);
        setDeals([]); 
      });
  }, []);

  return (
    <div >
      <div className="flex justify-between m-3  md:m-10">
        <div>
          <h2 className="raleway pt-5 text-lg font-bold md:text-4xl text-black  font-semi-bold ">
              BEST DEALS
          </h2>
        </div>
        <div className="raleway flex justify-content md:pt-10 text-blue-600">
            <div>
              <a href="/deals">
              Browse all products 
              </a>
            </div>
            <div className="pt-0.5">
              <ArrowRight size={20} />
            </div>
        </div>
      </div>
      <div className="hidden raleway md:block m-10 border-1 border-gray-400 rounded-xl p-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {deals.map((deal) => (
          <div key={deal.id} className="p-4 rounded-md shadow-lg border border-gray-500">
            <img src={deal.image} alt={deal.title} className="w-100 h-40 object-contain" />
            <h2 className="text-lg font-bold">{deal.title}</h2>
            <p>{deal.description}</p>
            <p className="text-green-600 font-semibold">₹{deal.price}</p>
          </div>
        ))}
      </div>
      </div>
      <div className="block sm:hidden p-5">
        <div className="grid grid-cols-3 gap-4 ">
        {deals.map((deal) => (
          <div key={deal.id} className="p-1  shadow-lg ">
            <img src={deal.image} alt={deal.title}className="w-full h-40 object-cover"/>
            <p className="text-green-600 font-semibold">₹{deal.price}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};
