import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import Header from '../Home/Header';
import Footer from '../Home/Footer';

export default function AllProducts(){
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
            <>
                <Header />
                <section className="raleway w-full px-4 md:px-10 py-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl md:text-4xl font-bold text-gray-800">
                            Explore Our Curated Collection
                            <span className="text-gray-500 block text-sm md:text-lg font-normal mt-1">
                            Handpicked products for students — grab the best deals today!
                            </span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
                    {FeatureProduct.map((product) => (
                        <Link key={product._id} to={`/api/product/${product._id}`}>
                        <div className="bg-white p-4 rounded-md shadow hover:shadow-xl border border-gray-300 transition-all duration-300 h-full md:h-80 flex flex-col justify-between">
                            <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-32 md:h-40 object-contain mb-3"
                            />
                            <div className="flex flex-col flex-grow">
                            <p className="text-md text-gray-700 font-medium">{product.title}</p>
                            <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                            <p className="text-green-600 font-bold text-base mt-auto">₹{product.price}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                    </div>
                </section>
                <Footer/>
            </>
    );
}
