import { useCart } from "../../components/Providers/Cart/index";
const CartProducts = () => {
  const { cart, deleteProduct } = useCart();
  return (
    <>
      {cart.length > 0 && (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <img alt={product.title} src={product.image} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{`R$${product.price}`}</p>
              <button onClick={() => deleteProduct(product)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default CartProducts;
