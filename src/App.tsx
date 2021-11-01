import "./App.css";
import ShowPrducts from "./components/ShowProducts";
import CartProducts from "./components/CartProducts";
import GlobalStyle from "../src/Styles/global";
function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>Products</h1>
        <ShowPrducts />
        <h1>Cart</h1>
        <CartProducts />
      </div>
    </>
  );
}

export default App;
