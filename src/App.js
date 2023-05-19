import React, { useState } from "react";
import { products } from "./data";
import Product from "./components/Product";
import Sidebar from "./components/Sidebar";
import { BsHandbag } from "react-icons/bs";
import { useSelector } from "react-redux";

const App = () => {
  const [drawer, setDrawer] = useState(false);
  const total = useSelector((state) => state?.productReducer?.products);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <>
      <header>
        <h2>Featured Collection</h2>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to
        </p>
      </header>
      <div className="container">
        {products.map((product) => (
          <div key={product?.id} className="product">
            <Product product={product} handleDrawer={handleDrawer} />
          </div>
        ))}
      </div>
      <Sidebar drawer={drawer} handleDrawer={handleDrawer} />
      <button className="cart" onClick={handleDrawer}>
        <BsHandbag />
        {total.length > 0 && <span>{total.length}</span>}
      </button>
    </>
  );
};

export default App;
