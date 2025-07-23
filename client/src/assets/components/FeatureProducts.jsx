import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from "react";

export default function FeatureProducts() {
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
        <section className="raleway w-full block md:flex">
            <div>
                <img
                    src="/Sale/image.png"
                    alt="Featured Sale Product"
                    className="hidden md:block h-[716px]"
                />
                <div className="block md:hidden flex justify-center">
                    <a href="/">
                        <img
                            src="/Sale/imageCropped.png"
                            alt="Featured Sale Product"
                            className="h-[300px] w-[400px]"
                        />
                    </a>
                </div>
            </div>
            <div className="w-full  flex flex-col mx-2">
                <div className="flex flex-col gap-4 mb-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl md:text-4xl font-semibold">
                            Feature Products
                        </h2>
                        <nav className="flex flex-wrap gap-3 md:gap-5 text-sm md:text-base items-center px-2">
                            <a href="" className='hover:text-orange-400 hover:underline underline-offset-8'>All Products</a>
                            <a href="" className='hover:text-orange-400 hover:underline underline-offset-8'>Laptop</a>
                            <a href="" className='hover:text-orange-400 hover:underline underline-offset-8'>Books</a>
                            <a href="" className='hover:text-orange-400 hover:underline underline-offset-8'>Furniture</a>
                            <a href="" className='hover:text-orange-400 hover:underline underline-offset-8'>Utensils</a>
                            <a href="" className="flex items-center gap-1 text-orange-400 hover:underline underline-offset-8 hover:text-orange-500">
                                Browse all products <ArrowRight size={16} />
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {deals.map((deal) => (
                        <a href='/'>
                            <div
                            key={deal.id}
                            className="p-4 rounded-md shadow-md border border-gray-200 hover:shadow-lg transition mb-10"
                        >
                            <img
                                src={deal.image}
                                alt={deal.title}
                                className="w-full h-40 object-contain mb-2"
                            />
                            <h2 className="text-lg font-bold">{deal.title}</h2>
                            <p className="text-sm text-gray-600">{deal.description}</p>
                            <p className="text-green-600 font-semibold mt-1">₹{deal.price}</p>
                        </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
