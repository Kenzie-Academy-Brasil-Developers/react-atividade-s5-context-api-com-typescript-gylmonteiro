import products from "../ProductsList/index";
import { useCart } from "../Providers/Cart/index";

const ShowPrducts = () => {
  const { addProduct } = useCart();
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img alt={product.title} src={product.image} />
            <h2>{product.title}</h2>
            <span>{`R$ ${product.price}`}</span>
            <button onClick={() => addProduct(product)}>Adicionar</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowPrducts;
