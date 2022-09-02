import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Products from "./pages/Products/Products.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";
import Partners from "./components/Partners/Partners.jsx";
import ProductsDetails from "./components/ProductsDetails/ProductsDetails.jsx";

const App = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/products" element={ <Products /> }>
          <Route path="details/:id" element={ <ProductsDetails /> } />
          <Route path="partners" element={ <Partners /> } />
        </Route>
        <Route path="/contacts" element={ <Contacts /> } />
      </Routes>
    </>
  );
};

export default App;
