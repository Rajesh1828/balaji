import React, { useContext, useEffect, useState } from "react";
import { GiftContext } from "../../../context/GiftContext";
import ProductItem from "../ProductItem/ProductItem";

const LatestProducts = () => {
  const { products } = useContext(GiftContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <>
      {latestProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5  md:px-5 py-5">
          {latestProducts.map((item, index) => (
            <ProductItem
              key={item.id || index}
              id={item.id}
              name={item.name}
              images={item.images}
              price={item.price}
            />
          ))}
        </div>
      ) : (
        <div>No data</div>
      )}
    </>
  );
};

export default LatestProducts;
