const CartOffcanvas = ({ cartItems, removeFromCart, updateQty }) => {
  const subtotal = cartItems.reduce((sum, item) => {
    const raw = item.price.replace(/[^\d,]/g, "").replace(",", ".");
    const price = parseFloat(raw) || 0;
    return sum + price * item.qty;
  }, 0);

  const totalItems = cartItems.reduce((s, i) => s + i.qty, 0);

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="cartOffcanvas"
      aria-labelledby="cartOffcanvasLabel"
      style={{ width: "400px", maxWidth: "100vw" }}
    >
      {/* ── Header ── */}
      <div className="offcanvas-header border-bottom py-3 bg-dark text-white">
        <h5 className="offcanvas-title fw-bold mb-0 d-flex align-items-center gap-2" id="cartOffcanvasLabel">
          <i className="bi bi-bag"></i>
          Your Cart
          {totalItems > 0 && (
            <span className="badge bg-danger rounded-pill">{totalItems}</span>
          )}
        </h5>
        <button
          type="button"
          className="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      {/* ── Body ── */}
      <div className="offcanvas-body d-flex flex-column p-0" style={{ overflow: "hidden" }}>

        {/* ── Empty State ── */}
        {cartItems.length === 0 && (
          <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center text-muted px-4">
            <i className="bi bi-bag-x-fill" style={{ fontSize: "4rem", opacity: 0.25 }}></i>
            <h6 className="mt-3 fw-semibold text-dark">Your cart is empty</h6>
            <p className="small mb-4">Add some products to get started.</p>
            <button className="btn btn-dark px-4" data-bs-dismiss="offcanvas">
              Continue Shopping
            </button>
          </div>
        )}

        {/* ── Cart Items (scrollable) ── */}
        {cartItems.length > 0 && (
          <div className="flex-grow-1 px-3 py-2" style={{ overflowY: "auto" }}>
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center gap-3 py-3 border-bottom"
              >
                {/* Product Image */}
                <div
                  className="flex-shrink-0 bg-light rounded d-flex align-items-center justify-content-center"
                  style={{ width: "68px", height: "68px", minWidth: "68px" }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "58px", height: "58px", objectFit: "contain" }}
                  />
                </div>

                {/* Title + Price */}
                <div className="flex-grow-1 overflow-hidden">
                  <p
                    className="mb-1 fw-semibold lh-sm"
                    style={{
                      fontSize: "13px",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.title}
                  </p>
                  <span className="fw-bold" style={{ fontSize: "14px" }}>
                    {item.price}
                  </span>
                </div>

                {/* Qty Controls + Remove */}
                <div className="d-flex flex-column align-items-end gap-2 flex-shrink-0">
                  {/* +/− stepper */}
                  <div
                    className="d-flex align-items-center"
                    style={{
                      border: "1.5px solid #dee2e6",
                      borderRadius: "6px",
                      overflow: "hidden",
                      height: "32px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => updateQty(item.title, -1)}
                      style={{
                        width: "32px",
                        height: "32px",
                        border: "none",
                        background: "#f8f9fa",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        lineHeight: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRight: "1.5px solid #dee2e6",
                        color: "#333",
                        flexShrink: 0,
                      }}
                    >
                      −
                    </button>
                    <span
                      style={{
                        minWidth: "32px",
                        textAlign: "center",
                        fontSize: "14px",
                        fontWeight: "600",
                        background: "#fff",
                        height: "32px",
                        lineHeight: "32px",
                        display: "block",
                      }}
                    >
                      {item.qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQty(item.title, 1)}
                      style={{
                        width: "32px",
                        height: "32px",
                        border: "none",
                        background: "#f8f9fa",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                        lineHeight: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderLeft: "1.5px solid #dee2e6",
                        color: "#333",
                        flexShrink: 0,
                      }}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove button */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.title)}
                    className="btn btn-link p-0 text-danger d-flex align-items-center gap-1"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                    title="Remove item"
                  >
                    <i className="bi bi-trash3"></i>
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Footer / Summary ── */}
        {cartItems.length > 0 && (
          <div className="border-top px-3 pt-3 pb-4 bg-white flex-shrink-0">
            {/* Subtotal row */}
            <div className="d-flex justify-content-between align-items-center mb-1">
              <span className="fw-semibold fs-6">Subtotal</span>
              <span className="fw-bold fs-6">
                {subtotal.toFixed(2).replace(".", ",")} €
              </span>
            </div>
            <p className="text-muted mb-3" style={{ fontSize: "12px" }}>
              Shipping &amp; taxes calculated at checkout.
            </p>
            {/* CTA Buttons */}
            <button className="btn btn-dark w-100 py-2 mb-2 fw-semibold">
              CHECKOUT &nbsp;<i className="bi bi-arrow-right"></i>
            </button>
            <button
              className="btn btn-outline-dark w-100 py-2"
              data-bs-dismiss="offcanvas"
            >
              CONTINUE SHOPPING
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default CartOffcanvas;
