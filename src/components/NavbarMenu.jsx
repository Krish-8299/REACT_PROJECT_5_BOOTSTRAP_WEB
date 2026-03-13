const NavbarMenu = ({ menu }) => {
  return (
    <ul className="navbar-nav flex-row gap-3">
      {menu.map((item, index) => (
        <li key={index} className="nav-item">
          <a href={item.href} className="nav-link nav-link-custom">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarMenu;
