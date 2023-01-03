import { useState, useEffect } from "react";
import GoodsCard from "./GoodsCard";
import './index.css';

const Task2 = () => {
  const [productList, setProductList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/products?skip=12&limit=6');
    const json = await response.json();

    const { products } = json;
    setProductList(products);
    setLoaded(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!loaded && <p>Loading...</p>}
      {loaded && <ul className="product-list">
        {productList.map((product) =>
          <GoodsCard key={product.id} title={product.title} url={product.thumbnail} price={product.price} />)}
      </ul>}
    </>
  )
};

export default Task2;
