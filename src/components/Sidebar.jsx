import { Drawer } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import {
  addProduct,
  deleteProduct,
  removeProduct,
} from "../redux/actions/product";
import { AiFillLock } from "react-icons/ai";

const Sidebar = ({ drawer, handleDrawer }) => {
  const [item, setItem] = useState(0);
  const [total, setTotal] = useState(0);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    let val = products.reduce((a, c) => (a = a + c.qty), 0);
    let totalPrice = products.reduce((a, c) => (a = a + c.qty * c.price), 0);
    setItem(val);
    setTotal(totalPrice);
  }, [products]);

  const handleIncrement = (item) => {
    dispatch(addProduct(item));
  };

  const handleDecrement = (id) => {
    dispatch(removeProduct(id));
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <Drawer anchor="right" open={drawer} onClose={handleDrawer}>
      <div className="sidebar">
        <div className="sidebar_title">
          <div>
            <p>
              <span>YOUR BAG</span>({item} Item)
            </p>
            <IoMdClose className="close" onClick={handleDrawer} />
          </div>
        </div>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product_list">
              <img src={product.src} alt={product.title} />
              <div>
                <span>{product.title}</span>
                <div className="action_btn">
                  <span onClick={() => handleIncrement(product)}>+</span>
                  <span>{product.qty}</span>
                  <span onClick={() => handleDecrement(product?.id)}>-</span>
                </div>
              </div>
              <div className="price_section">
                <IoMdClose
                  className="delete_product"
                  onClick={() => handleDeleteProduct(product?.id)}
                />
                <div></div>
                <span>${product.price}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="footer">
          <div>
            <span>SUBTOTAL</span>
            <span>${total}</span>
          </div>
          <button className="submit_btn">
            <AiFillLock />
            CHECKOUT
          </button>
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly 
          </p>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
