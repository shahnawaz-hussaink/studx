
import {
  MapPin,
  Info,
  Headphones,
  Phone
} from "lucide-react";
import { useState } from "react";

export default function HeaderB(){
    let [category,setCategory] = useState([furniture,electronics,stationary,kichten]);

    return (
        <>
            <div className="flex space-between">
                <div className="flex gap-10 pt-3">
                    <div className="pl-5">
                        <select name="categories" id="category">
                            <option value="Categories">Select Category</option>
                            <option value="Furtniture">Furniture</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Sationary">Sationary</option>
                            <option value="Kichten">Kichten</option>
                        </select>
                    </div>
                    <div className="flex gap-2 content-center ">
                            <a className="" href="/track">
                                <MapPin size={20}/>
                            </a> 
                            <a href="/track" >
                                Track Order
                            </a>
                    </div>
                    <div>
                        <a href="/sell"> 
                            Sell
                        </a>
                    </div>
                    <div>
                        <a href="/buy">Buy</a>
                    </div>
                    <div className="flex gap-2 content-center">
                        <a className="pt-0.5" href="/">
                                <Info size={20}/>
                        </a> 
                        <a href="/contact" >
                                Need Help
                        </a>
                    </div>
                    <div className="flex gap-2 content-center">
                        <a className="pt-0.5" href="/">
                                <Headphones size={20}/>
                        </a> 
                        <a href="/contact" >
                                Customber Support
                        </a>
                    </div>
                </div>

                <div className="flex gap-10 pt-3">
                    <div className="flex gap-2 content-center">
                        <a className="pt-0.5" href="/">
                                <Phone size={20}/>
                        </a> 
                        <a href="/contact" >
                                +91-965-080-XXXX
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}