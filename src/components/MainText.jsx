const MainText = ({ title, description, buttonText }) => {
  return (
    <div className="text-center text-md-start">
      <h1 className="fw-bold mb-3 display-6">
        {title.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </h1>
      <p className="mb-4 text-secondary">{description}</p>
      <div className="d-flex justify-content-center justify-content-md-start">
        <button className="hero-btn">{buttonText}</button>
      </div>
    </div>
  );
};

export default MainText;
