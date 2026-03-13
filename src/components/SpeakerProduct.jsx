const SpeakerProduct = ({ item, addToCart }) => {
  return (
    <div className="col-12 col-sm-6 col-lg-3 mb-4">
      <div className="card border-0 shadow-sm text-center p-2 h-100">
        <div className="position-relative mb-2">
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid"
            style={{ maxHeight: "150px", objectFit: "contain" }}
          />
          {item.sale && (
            <span className="badge bg-danger position-absolute top-0 end-0 m-1">SALE!</span>
          )}
        </div>
        <p className="small mb-1">{item.title}</p>
        <strong className="small">{item.price}</strong>
        <button
          className="btn btn-outline-dark btn-sm mt-2"
          data-bs-toggle="offcanvas"
          data-bs-target="#cartOffcanvas"
          onClick={() => addToCart(item)}
        >
          <i className="bi bi-bag-plus me-1"></i>Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SpeakerProduct;
