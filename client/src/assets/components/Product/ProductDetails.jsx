import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Home/Header";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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

  if (!product) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <>
        <div>
            <Header/>
            <div className="bg-black w-full h-[1px]"/>
            <div className="flex justify-center">
                <div className="flex  bg-white  w-1/3">
                    <div >
                        <img src={product.image} className="h-130 p-10 object-contain my-10" />
                    </div>
                </div>
                <div className="w-2/3 ">
                    <div className="w-2/4 m-10">
                        <p className="raleway  text-2xl font-black pb-1">
                            {product.description}
                        </p>
                        <p className="raleway  text-sm font-black text-gray-500 pb-5">
                            Sell by {product.sellBy}
                        </p>

                        <p className="text-2xl  pb-5">
                            ₹ {product.price}.00
                        </p>
                    </div>
                    <div>
                        <div className="flex gap-10 m-10">
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
                    <div className="bg-black w-full h-[1px]"/>
                </div>
            </div>
        </div>
    </>
  );
}
