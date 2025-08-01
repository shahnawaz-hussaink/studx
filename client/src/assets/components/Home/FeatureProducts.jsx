import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'


export default function FeatureProducts() {
    const [FeatureProduct, setFeatureProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/featured-products")
            .then((res) => res.json())
            .then((data) => {
                setFeatureProduct(data);
            })
            .catch((err) => {
                console.error("Error fetching deals:", err);
                setFeatureProduct([]);
            });
    }, []);

    return (
        <section className="raleway w-full block md:flex ">
            <div>
                <img
                    src="/Sale/image.png"
                    alt="Featured Sale Product"
                    className="hidden md:block h-full"
                />
                <div className="block mb-5 md:hidden flex justify-center">
                    <Link to="/">
                        <img
                            src="/Sale/imageCropped.png"
                            alt="Featured Sale Product"
                            className="h-[300px] w-[400px]"
                        />
                    </Link>
                </div>
            </div>
            <div className="w-full  flex flex-col mx-2">
                <div className="flex flex-col gap-4 mb-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-sm md:text-4xl font-semibold">
                            Feature Products
                        </h2>
                        <nav className="flex flex-wrap gap-2 md:gap-5  text-sm md:text-base items-center px-2">
                            <a href="" className='hover:text-orange-400 hover:underline underline-offset-8'>All Products</a>
                            <a href="" className='hover:text-orange-400 hover:underline underline-offset-8'>Laptop</a>
                            <a href="" className='hover:text-orange-400 hover:underline underline-offset-8'>Books</a>
                            <a href="" className='hover:text-orange-400 hover:underline underline-offset-8'>Furniture</a>
                            <a href="" className='hover:text-orange-400 hover:underline underline-offset-8'>Utensils</a>
                            <a href="" className="flex items-center text-center gap-1 text-orange-400 hover:underline underline-offset-8 hover:text-orange-500">
                                Browse all products <ArrowRight size={16} />
                            </a>
                        </nav>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {FeatureProduct.map((product,index) => (
                        <Link key={index}
                        to={`/api/product/${product._id}`}
                        >
                            <div
                            key={product.id}
                            className="p-4 rounded-md shadow-md border border-gray-200 hover:shadow-lg transition mb-10 h-80"
                        >
                                <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-30 md:h-40 object-contain mb-2"
                            />
                            <p className="text-sm text-gray-700 ">{product.description}</p>
                            <p className="text-green-600 font-semibold mt-1">₹{product.price}</p>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
