import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/product";

const Product = ({ product, handleDrawer }) => {
  const [images, setImages] = useState([]);
  const [active, setActive] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    let tempArr = [];
    for (let i = 0; i < product?.images?.length; i++) {
      tempArr.unshift({
        id: product?.images[i]?.id,
        src: product?.images[i]?.src,
      });
    }
    setActive({
      id: product?.images[product?.images?.length - 1]?.id,
      src: product?.images[product?.images?.length - 1]?.src,
    });
    setImages(tempArr);
  }, [product]);

  const handleClick = (item) => {
    setActive(item);
  };

  const handleAddProduct = () => {
    let data = {
      title: product.title,
      src: product?.images[product?.images?.length - 1]?.src,
      id: product?.images[product?.images?.length - 1]?.id,
      price: product?.variants[0]?.price,
      qty: 1,
    };
    dispatch(addProduct(data));
    handleDrawer();
  };

  return (
    <>
      <img src={active?.src} alt={product?.title} />
      <div className="product_details">
        <span>{product.title}</span>
        <span className="price">${product?.variants[0]?.price}</span>
      </div>
      <ul>
        {images.map((item) => (
          <li key={item.id} onClick={() => handleClick(item)}>
            <img
              src={item.src}
              alt=""
              className={item.id === active.id ? "active" : ""}
            />
          </li>
        ))}
      </ul>
      <button className="btn" onClick={handleAddProduct}>
        ADD TO CART
      </button>
    </>
  );
};

export default Product;
