const NavbarBrand = ({ brand }) => {
  return (
    <a className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-5" href="/">
      <img src={brand.logo} alt={brand.name} height="30" />
      {brand.name}
    </a>
  );
};

export default NavbarBrand;
