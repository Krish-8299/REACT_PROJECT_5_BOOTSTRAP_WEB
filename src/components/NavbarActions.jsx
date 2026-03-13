const NavbarActions = ({ actions }) => {
  return (
    <div className="d-flex align-items-center gap-3">
      {actions.map((action, index) => (
        <div
          key={index}
          className="d-flex align-items-center gap-1 fs-5 cursor-pointer"
          role="button"
          // Last action opens cart offcanvas
          {...(index === actions.length - 1
            ? {
                "data-bs-toggle": "offcanvas",
                "data-bs-target": "#cartOffcanvas",
              }
            : {})}
        >
          {action.icon}
          {action.text && (
            <span className="d-none d-xl-inline small">{action.text}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavbarActions;
