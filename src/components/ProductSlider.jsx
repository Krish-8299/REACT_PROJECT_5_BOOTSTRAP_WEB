import productsData from "./productsdata";

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
};

const ProductSlider = ({ addToCart }) => {
  // 4 products per slide
  const slides = chunkArray(productsData, 4);

  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Header row */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">FEATURED PRODUCTS</h2>
            <p className="text-muted small mb-0">Our top picks — updated every season</p>
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn btn-dark px-3"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="prev"
              title="Previous"
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="btn btn-dark px-3"
              type="button"
              data-bs-target="#productCarousel"
              data-bs-slide="next"
              title="Next"
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          id="productCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div className="carousel-inner">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}
              >
                {/* 4 cards in one row */}
                <div className="row g-4">
                  {slide.map((product, i) => (
                    <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                      <div className="card h-100 border-0 shadow-sm text-center p-3">

                        {/* Image + badge */}
                        <div className="position-relative">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="card-img-top img-fluid mb-3"
                            style={{ maxHeight: "190px", objectFit: "contain" }}
                          />
                          {product.sale && (
                            <span className="badge bg-danger position-absolute top-0 end-0 m-2">
                              SALE!
                            </span>
                          )}
                        </div>

                        {/* Body */}
                        <div className="card-body p-0 d-flex flex-column">
                          <h6 className="fw-normal mb-2 lh-sm">{product.title}</h6>
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
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide-to={i}
                aria-current={i === 0 ? "true" : undefined}
                aria-label={`Slide ${i + 1}`}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "none",
                  background: i === 0 ? "#000" : "#ccc",
                  padding: 0,
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
              ></button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSlider;
