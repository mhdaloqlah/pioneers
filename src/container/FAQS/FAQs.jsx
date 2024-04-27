import data from "../../constants/Data";
import "./FAQs.css";
import FaqItem from "./FaqItem";

const Faqs = () => {
  return (
    <section className="faqs__section section__padding  " id="faqs">
      <h1 className="headtext__cormorant">FAQS</h1>
      <div className="faqs-app-container ">
        <ul className="faqs-items-container">
          {data.map((eachItem) => (
            <FaqItem key={eachItem.id} faqDetails={eachItem} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faqs;
