import { dream11Img, offcialPartner } from "../../assets/assets";
import Dream11Card from "./Dream11Card";
import "./OfficialPartner.css";

const OfficialPartner = () => {
  return (
    <section className="official-partner-section">
      <div className="heading">
        Official <span>Partner</span>
      </div>
      <div className="official-partner-logo">
        {offcialPartner.map((partner) => (
          <img src={partner.img} key={partner.id} alt="Official Partner" />
        ))}
      </div>

      <div className="heading mt-70">
        It's easy to start playing <span>on Dream11</span>
      </div>
      <div className="bluebg-gradient">Play Fantasy Cricket on Dream11 and win big!</div>
      <div className="app-para">
      <p>Enter into the thrilling world of Fantasy sports, a strategy-based online sports game wherein you can create a virtual team of real players playing in real life matches. Create your team to win points based on all the players' performance in a live game.</p>
      </div>

      <div className="dream11-cards">
        {dream11Img.map((card) => <Dream11Card key={card.count} {...card} />)}
      </div>
    </section>
  );
};

export default OfficialPartner;
