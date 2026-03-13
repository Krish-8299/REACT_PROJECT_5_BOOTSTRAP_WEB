import SpeakerLeft from "./SpeakerLeft";
import SpeakerRight from "./SpeakerRight";
import speakerSectionData from "./speakersectiondata";

const SpeakerSection = ({ addToCart }) => {
  const { title, description, bannerImage, buttonText, products } = speakerSectionData;
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center g-5">
          <SpeakerLeft bannerImage={bannerImage} title={title} />
          <SpeakerRight
            title={title}
            description={description}
            products={products}
            buttonText={buttonText}
            addToCart={addToCart}
          />
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
