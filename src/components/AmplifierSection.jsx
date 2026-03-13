import AmplifierLeft from "./AmplifierLeft";
import AmplifierRight from "./AmplifierRight";
import amplifierSectionData from "./amplifiersectiondata";

const AmplifierSection = ({ addToCart }) => {
  const { title, description, bannerImage, buttonText, products } = amplifierSectionData;
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          <AmplifierLeft
            title={title}
            description={description}
            products={products}
            buttonText={buttonText}
            addToCart={addToCart}
          />
          <AmplifierRight bannerImage={bannerImage} title={title} />
        </div>
      </div>
    </section>
  );
};

export default AmplifierSection;
