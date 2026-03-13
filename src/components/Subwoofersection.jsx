import SubwooferCard from "./SubwooferCard";
import Subwooferdata from "./subwooferdata";

const SubwoofersSection = ({ addToCart }) => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold mb-3">SUBWOOFERS</h2>
        <p className="text-muted fs-5 mb-5 col-lg-8">
          You can survive with just a regular set of speakers. You don&apos;t,
          strictly speaking, need a sub.
        </p>
        <div className="row g-4">
          {Subwooferdata.map((item, index) => (
            <SubwooferCard key={index} item={item} addToCart={addToCart} />
          ))}
        </div>
        <button className="btn btn-dark px-4 py-2 mt-3">SHOP SUBWOOFERS</button>
      </div>
    </section>
  );
};

export default SubwoofersSection;
