import NavbarBrand from "./NavbarBrand";
import navbarData from "./navbardata";
import { FiSearch, FiMenu } from "react-icons/fi";
import { HiOutlineUser, HiOutlineShoppingBag } from "react-icons/hi";

// Smooth scroll + close offcanvas on nav link click
const handleNavClick = (e, href) => {
  e.preventDefault();
  // Close the offcanvas via Bootstrap API
  const offcanvasEl = document.getElementById("navOffcanvas");
  if (offcanvasEl) {
    const bsOffcanvas = window.bootstrap?.Offcanvas?.getInstance(offcanvasEl);
    if (bsOffcanvas) bsOffcanvas.hide();
  }
  // Scroll to section after tiny delay (let offcanvas close)
  setTimeout(() => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, 300);
};

const Navbar = ({ cartCount }) => {
  return (
    <>
      {/* ══════════════════════════════════════
          MAIN NAVBAR  (sticky, always visible)
      ══════════════════════════════════════ */}
      <nav className="navbar navbar-expand-lg navbar-custom py-3 sticky-top bg-white shadow-sm">
        <div className="container">

          {/* Brand */}
          <NavbarBrand brand={navbarData.brand} />

          {/* ── Desktop: centered links ── */}
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav gap-1">
              {navbarData.menu.map((item, i) => (
                <li key={i} className="nav-item">
                  <a
                    href={item.href}
                    className="nav-link nav-link-custom fw-medium px-2"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right side actions (ALL screen sizes) ── */}
          <div className="d-flex align-items-center gap-3 ms-auto ms-lg-0">

            {/* Search — desktop only */}
            <button
              className="btn p-0 border-0 bg-transparent d-none d-lg-block"
              title="Search"
            >
              <FiSearch size={20} />
            </button>

            {/* Account — desktop only */}
            <button
              className="btn p-0 border-0 bg-transparent d-none d-lg-flex align-items-center gap-1"
              title="My Account"
            >
              <HiOutlineUser size={20} />
              <span className="small d-none d-xl-inline">My account</span>
            </button>

            {/* Cart — ALL screen sizes */}
            <button
              className="btn p-0 border-0 bg-transparent d-flex align-items-center gap-1 position-relative"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartOffcanvas"
              aria-controls="cartOffcanvas"
              title="Cart"
            >
              <HiOutlineShoppingBag size={22} />
              <span className="small d-none d-xl-inline">
                {cartCount > 0 ? `${cartCount} item(s)` : "0,00 €"}
              </span>
              {cartCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "10px" }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* ── Menu icon — ALL screen sizes (permanent) ── */}
            <button
              className="btn p-0 border-0 bg-transparent d-flex align-items-center"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#navOffcanvas"
              aria-controls="navOffcanvas"
              aria-label="Open navigation menu"
              title="Menu"
            >
              <FiMenu size={24} />
            </button>

          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          NAV OFFCANVAS
          Permanent on ALL screen sizes
          All section links with smooth scroll
      ══════════════════════════════════════ */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="navOffcanvas"
        aria-labelledby="navOffcanvasLabel"
        style={{ width: "300px" }}
      >
        {/* Header */}
        <div className="offcanvas-header py-3 bg-dark text-white">
          <div className="d-flex align-items-center gap-2">
            <img src={navbarData.brand.logo} alt="logo" height="28" />
            <span className="fw-bold fs-5" id="navOffcanvasLabel">
              {navbarData.brand.name}
            </span>
          </div>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        {/* Body */}
        <div className="offcanvas-body d-flex flex-column p-0">

          {/* ── Section Navigation ── */}
          <div className="flex-grow-1 overflow-auto">
            <p
              className="text-uppercase fw-semibold px-3 pt-3 pb-1 mb-0 text-muted"
              style={{ fontSize: "11px", letterSpacing: "0.08em" }}
            >
              Navigate to
            </p>
            <ul className="list-unstyled mb-0">
              {navbarData.menu.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="d-flex align-items-center justify-content-between px-3 py-3 text-dark text-decoration-none border-bottom nav-offcanvas-link"
                    style={{ fontSize: "15px", fontWeight: 500 }}
                  >
                    <span className="d-flex align-items-center gap-3">
                      <i className={`bi ${item.icon} fs-5`} style={{ width: "22px", textAlign: "center" }}></i>
                      {item.label}
                    </span>
                    <i className="bi bi-chevron-right text-muted" style={{ fontSize: "12px" }}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Bottom Actions ── */}
          <div className="border-top px-3 py-3 bg-light flex-shrink-0">
            <div className="d-flex flex-column gap-2">
              {/* Search */}
              <button className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center gap-2">
                <FiSearch size={15} />
                <span>Search Products</span>
              </button>
              {/* Account */}
              <button className="btn btn-outline-secondary w-100 py-2 d-flex align-items-center justify-content-center gap-2">
                <HiOutlineUser size={15} />
                <span>My Account</span>
              </button>
              {/* Open Cart */}
              <button
                className="btn btn-dark w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                data-bs-dismiss="offcanvas"
                data-bs-toggle="offcanvas"
                data-bs-target="#cartOffcanvas"
              >
                <HiOutlineShoppingBag size={15} />
                <span>
                  View Cart
                  {cartCount > 0 && (
                    <span className="badge bg-danger ms-2 rounded-pill">
                      {cartCount}
                    </span>
                  )}
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
