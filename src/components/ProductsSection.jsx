import Product from "./Product";
import productsData from "./productsdata";

const ProductsSection = ({ addToCart }) => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-5 mt-3">EXPLORE BEST SELLERS</h2>
        <div className="row g-4">
          {productsData.map((item, index) => (
            <Product key={index} product={item} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
