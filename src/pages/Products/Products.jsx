import { Outlet, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Products = () => {

  const [goods, setGoods] = useState([])
  const location = useLocation()
  const { pathname } = location


  console.log(location)

  useEffect(() => {
    function fetchHeros() {
      fetch(`https://62becfba0bc9b125615fd0f7.mockapi.io/api/products`)
        .then((result) => result.json())
        .then((res) =>
          setGoods(
            prevGoods => [...prevGoods, ...res]
          )
        );
    }
    fetchHeros()
  }, [])

  return (
    <>
      <h2>Products</h2>
      <NavLink to="/products/partners">Partners</NavLink>
      <ol>
        { goods.map((item) => (
          <li key={ item.name }>
            <NavLink to={ `/products/details/${item.id}` } state={ { from: pathname } }>{ item.name } - { item.price }
            </NavLink >
          </li>
        )) }
      </ol>
      <Outlet />
    </>
  );
};

export default Products;


