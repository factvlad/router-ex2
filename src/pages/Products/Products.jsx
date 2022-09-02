import { Outlet, NavLink } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h2>Products</h2>
      <NavLink to="/products/partners">Partners</NavLink>
      <Outlet />
    </>
  );
};

export default Products;
