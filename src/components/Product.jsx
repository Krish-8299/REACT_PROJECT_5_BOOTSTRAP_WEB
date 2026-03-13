const Product = ({ product, addToCart }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card border-0 shadow-sm h-100 text-center p-3">
        <div className="position-relative">
          <img
            src={product.image}
            alt={product.title}
            className="card-img-top img-fluid mb-3"
            style={{ maxHeight: "200px", objectFit: "contain" }}
          />
          {product.sale && (
            <span className="badge bg-danger position-absolute top-0 end-0 m-2">
              SALE!
            </span>
          )}
        </div>
        <div className="card-body p-0 d-flex flex-column">
          <h6 className="fw-normal mb-2">{product.title}</h6>
          <div className="mb-3">
            {product.oldPrice && (
              <span className="text-muted text-decoration-line-through me-2 small">
                {product.oldPrice}
              </span>
            )}
            <span className="fw-bold">{product.price}</span>
          </div>
          <button
            className="btn btn-dark btn-sm w-100 mt-auto"
            data-bs-toggle="offcanvas"
            data-bs-target="#cartOffcanvas"
            onClick={() => addToCart(product)}
          >
            <i className="bi bi-bag-plus me-1"></i>Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
