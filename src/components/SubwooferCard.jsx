const SubwooferCard = ({ item, addToCart }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="card border-0 shadow-sm text-center p-3 h-100">
        <div className="position-relative mb-3">
          <img
            src={item.image}
            alt={item.title}
            className="img-fluid"
            style={{ maxHeight: "180px", objectFit: "contain" }}
          />
          {item.sale && (
            <span className="badge bg-danger position-absolute top-0 end-0 m-2">SALE!</span>
          )}
        </div>
        <div className="card-body p-0 d-flex flex-column">
          <h6 className="fw-normal mb-2">{item.title}</h6>
          <div className="mt-auto">
            {item.oldPrice && (
              <span className="text-muted text-decoration-line-through me-2 small">{item.oldPrice}</span>
            )}
            <span className="fw-bold">{item.price}</span>
            <button
              className="btn btn-outline-dark btn-sm w-100 mt-3"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartOffcanvas"
              onClick={() => addToCart(item)}
            >
              <i className="bi bi-bag-plus me-1"></i>Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubwooferCard;
