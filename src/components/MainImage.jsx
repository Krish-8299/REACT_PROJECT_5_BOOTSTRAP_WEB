const MainImage = ({ image }) => {
  return (
    <div className="text-center">
      <img src={image} alt="Hero" className="img-fluid rounded-3 shadow" />
    </div>
  );
};

export default MainImage;
