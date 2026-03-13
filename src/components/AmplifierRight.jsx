const AmplifierRight = ({ bannerImage, title }) => {
  return (
    <div className="col-lg-4 mb-4 mb-lg-0">
      <img
        src={bannerImage}
        alt={title}
        className="img-fluid w-100 rounded-3 shadow"
      />
    </div>
  );
};

export default AmplifierRight;
