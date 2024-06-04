import Accordion from "./Accordion";
import "./Faqs.css";
import { faqs } from "./faqs";

const Faqs = () => {
  return (
    <section className="faqs-section">
      <div className="container">
        <div className="heading">FAQs</div>
        <div className="faqs-container">
            {faqs.map((faq)=> <Accordion key={faq.id} {...faq} />)}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
