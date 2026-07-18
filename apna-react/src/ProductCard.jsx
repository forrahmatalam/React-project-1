import React from "react";

function ProductCard({product ,dlt}) {
  


  return (
    <div className="border border-gray-400 rounded-2xl m-9 overflow-hidden">

      <div className="w-60 h-40 overflow-hidden">
        <img
          src={product.image}
          alt="Image of Product"
        />
      </div>
      <div className="px-5 py-4 flex flex-col">
        <h2 className="font-semibold">{product.title.substring(0, 18)}</h2>
        <p>Category - {product.category}</p>
        <p>Price - {product.price} </p>

        <button onClick={() => dlt(product.id)} className="bg-red-500 mt-2 text-white px-4 py-2 rounded-md hover:bg-red-300">Delete</button>
      </div>

    </div>
  );
}

export default ProductCard;
