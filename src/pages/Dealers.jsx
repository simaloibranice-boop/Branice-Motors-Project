import React from "react";

function Dealers() {
    const data = [
        ["Toyota Kenya","Nairobi","0722 111 222"],
        ["Nissan Motors","Mombasa","0733 333 444"],
        ["Subaru Auto World","Kisumu","0712 555 666"],
        ["Isuzu Dealers","Nakuru","0700 777 888"],
        
    ];
 return (
  <div className="bg-blue-500 text-black min-h-screen flex flex-col">
    <h1 className="text-3xl font-bold text-indigo-700 dark:text-yellow-400 mb-4 ">
        Trusted Dealers
    </h1>
    <p className="mb-6 text-white">
        Find verified dealers for genuine cars, trucks,bikes and their spares.
    </p>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
     {data.map(([name, place, contact], i) => (
       <div key={i} className="bg-blue-300 p-4 rounded-lg shadow">
         <h2 className="text-lg font-semibold text-yellow-400">{name}</h2>
         <p className="text-yellow-200">{place}</p>
         <p className="text-yellow-200">{contact}</p>
       </div>
     ))}
    </div>
  </div>
 );

};

export default Dealers;