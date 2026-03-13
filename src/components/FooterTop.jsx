const FooterTop = () => {
  return (
    <div className="container py-4">
      <div className="row align-items-center text-center text-md-start gy-3">

        {/* Logo */}
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center gap-2">
          <img src="./public/images/logo.png" alt="logo" height="30" />
          <span className="fw-bold fs-5">AUDIO PRO</span>
        </div>

        {/* Links */}
        <div className="col-12 col-md-4">
          <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3 m-0">
            <li><a href="#" className="text-dark text-decoration-none small">Our Story</a></li>
            <li><a href="#" className="text-dark text-decoration-none small">Privacy Policy</a></li>
            <li><a href="#" className="text-dark text-decoration-none small">Terms &amp; Conditions</a></li>
            <li><a href="#" className="text-dark text-decoration-none small">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end gap-3 fs-5">
          <a href="#" className="text-dark"><i className="ri-facebook-fill"></i></a>
          <a href="#" className="text-dark"><i className="ri-instagram-line"></i></a>
          <a href="#" className="text-dark"><i className="ri-twitter-x-line"></i></a>
          <a href="#" className="text-dark"><i className="ri-youtube-fill"></i></a>
        </div>

      </div>
    </div>
  );
};

export default FooterTop;
