import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Home/Header";
import { Loader } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(product.title)
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [id]);

  if (!product.title) {
    return (
    <div className="text-center p-4">
        <Loader size={50} color="black"/>
    </div>
)
  }

  return (
    <>
        <div>
            <Header/>
            <div className="bg-black w-full h-[1px]"/>
            <div className="flex justify-center">
                <div className="flex bg-white h-full sticky top-0 w-1/3">
                    <div >
                        <img src={product.image} className="h-130 p-10 object-contain my-10" />
                    </div>
                </div>
                <div className="m-10 w-2/3 ">
                    <div className="w-2/4 ">
                        <p className="raleway  text-2xl font-black pb-1">
                            {product.description}
                        </p>
                        <p className="raleway text-sm font-black text-gray-500 pb-5">
                            Sell by <a className="text-black pointer-cursor">{product.seller?.name}</a>
                        </p>

                        <p className="text-2xl  pb-5">
                            ₹ {product.price}.00
                        </p>
                    </div>
                    <div>
                        <div className="flex gap-10">
                            <div>
                                <button className="w-xs cursor-pointer items-center px-4 py-2 font-black text-black bg-yellow-400 rounded-md opacity-80 hover:opacity-100 my-2">
                                    <p>Buy Now</p>
                                </button>
                            </div>
                            <div>
                                <button className="w-xs cursor-pointer items-center px-4 py-2 font-black text-black bg-orange-400 rounded-md  opacity-90 hover:opacity-100 my-2">
                                    <p>Add to Cart</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 py-10">
                        <div className="bg-gray-300 w-full h-[1px]"/>
                    </div>
                    <div className="w-3/4">
                    <h2 className="raleway text-2xl font-black mb-2">
                        About this Product
                    </h2>
                    <ul className="raleway text-md list-disc list-inside space-y-1">
                        {product.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                        ))}
                    </ul>
                    </div>

                    <div className="w-3/4 py-10">
                        <div className="bg-gray-300 w-full h-[1px]"/>
                    </div>
                    <div className="w-3/4">
                        <h2 className="raleway text-2xl font-black mb-2">
                            About the Seller
                        </h2>
                        <ul className="raleway text-md list-disc list-inside space-y-1">
                            <li><span className="font-medium">Sold by:</span> {product.seller.name}</li>
                            <li><span className="font-medium">College:</span> {product.seller.college}</li>
                            <li><span className="font-medium">City:</span> {product.seller.city}</li>
                            <li>
                            <span className="font-medium">Email:</span>{" "}
                            <a
                                href={`mailto:${product.seller.email}`}
                                className="text-blue-600 hover:underline underline-offset-4 hover:text-orange-500"
                            >
                                {product.seller.email}
                            </a>
                            </li>
                            <li>
                            <span className="font-medium">Joined in:</span>{" "}
                            {new Date(product.seller?.joinedAt).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "long",
                            })}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
