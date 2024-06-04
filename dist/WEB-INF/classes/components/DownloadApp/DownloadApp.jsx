import { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import "./DownloadApp.css";

const DownloadApp = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="download-app-container">
        <div className="download-wrapper">
          <div className="download-app-heading">
            Download official <br />
            Dream11 app
          </div>
          <div className="download-app-inputs">
            <div className="app-input-controls">
              <span className="country-code">+91</span>
              <input type="text" placeholder="Enter Mobile Number" />
            </div>
            <a href="#" className="get-app-link-btn">Get app link</a>
            {/* <a href="http://www.google.com" className="get-app-link-btn">Get app link</a> */}
          </div>
        </div>
      </div>
      <div className={`download_mobile_app ${scrolled ? "scrolled" : ""}`} >
        <a href="http://www.google.com">
          <img src={assets.downloadAppBtn} alt="Download App" />
        </a>
      </div>
    </>
  );
};

export default DownloadApp;