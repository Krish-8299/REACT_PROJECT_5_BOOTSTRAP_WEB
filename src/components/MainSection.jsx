import MainText from "./MainText";
import MainImage from "./MainImage";
import mainData from "./maindata";

const MainSection = () => {
  return (
    <section className="py-5 main-section">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-5 order-2 order-md-1 p-4 p-md-5 rounded-3">
            <MainText
              title={mainData.title}
              description={mainData.description}
              buttonText={mainData.buttonText}
            />
          </div>
          <div className="col-12 col-md-7 order-1 order-md-2">
            <MainImage image={mainData.image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
