import SpeakerProduct from "./SpeakerProduct";

const SpeakerRight = ({ title, description, products, buttonText, addToCart }) => {
  return (
    <div className="col-lg-8">
      <h2 className="fw-bold mb-3">{title}</h2>
      <p className="text-muted mb-4">{description}</p>
      <div className="row g-3">
        {products.map((item) => (
          <SpeakerProduct key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
      <button className="btn btn-dark px-4 py-2 mt-3">{buttonText}</button>
    </div>
  );
};

export default SpeakerRight;
