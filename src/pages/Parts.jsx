import React, { useState } from "react";
import partsData from "../data/parts";
import {db} from "../firebaseConfig";
import {collection, addDoc} from "firebase/firestore";
import UploadParts from "../UploadParts";

function Parts() {
  const [cart, setCart] = useState([]);


  const toggleCart = (part) => {
    setCart((prevCart) => 
        prevCart.includes(part) 
        ? prevCart.filter((p) => p !== part)
        : [...prevCart, part]
    );
  };

 const handleCheckout = async () => {
    try {
        await addDoc(collection(db, "orders"), 
        { 
            items: cart,
            total: cart.reduce((sum, p) => sum + p.price, 0),
            timestamp: new Date(),
        });
        alert("Thank you for your payment!");
        setCart([]);
    } catch (error) {
        console.error("Error saving order:", error);
        alert("Failed to complete payment. Please try again.");
    }
   };
              
   return (
    <div className="bg-blue-500 text-black min-h-screen flex flex-col items-center p-6">
        <h2 className="text-4xl font-bold mb-4">Parts</h2>
        <UploadParts />    
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {partsData.map((part) => (
                <div key={part.id} className={` bg-white p-4 rounded-lg shadow hover:shadow-lg transition ${cart.includes(part) ? "bg-white" : ""}`}>
                   <h3 className="font-semibold text-black">{part.name}</h3> 
                   <p className="text-black">Category: {part.category}</p>
                   <p className="text-black">Price: ksh{part.price}</p>
                   <button
                   onClick={() => toggleCart(part)}
                   className={`mt-3 px-4 py-1 rounded ${cart.includes(part) ? "bg-white text-black" : "bg-yellow-500 text-white"}`}>
                    {cart.includes(part) ? "Remove" : "Add"}
                   </button>
                </div>
            ))}
        </div>
       <h2 className="text-2xl font-bold mt-8">Cart</h2>
       {cart.length === 0 ? <p>Cart is empty</p> : <ul>{cart.map((item, i) => 
        <li key={i}>{item.name} - ksh{item.price}</li>)}</ul>}
 {cart.length > 0 && (
   <div className="mt-10 border-t pt-6">
    <h3 className="text-4xl font-bold text-orange-300 mb-4">Checkout</h3>
    <p className="text-black">
        Paybill: <strong>222111</strong>
    </p>
    <p className="text-blue-700">
        Account No: <strong>053000100644</strong>
    </p>
    <p className="mt-4 text-black">
        Total: Ksh {cart.reduce((sum, p) => sum + p.price, 0)}
    </p>
    <button 
    className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black px-6 
    py-2 rounded-lg"
    onClick={handleCheckout}
    >

        Complete Payment
    </button>
   </div>
 )}

    </div>
   );
}

export default Parts;