import { assets } from "../../assets/assets";
import './Header.css';
const Header = () => {
  return (
    <header className="header-section">
      <div className="header-row">
        <div className="menu-logo">
          <div className="menu-icon">
            <img
              src={assets.menuOpen}
              alt="Menu Icon"
              style={{ width: "45px" }}
            />
          </div>
          <div className="logo">
            <img src={assets.logoWhite} alt="Logo" />
          </div>
        </div>

        <div className="select-menu">
            <select>
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
            </select>
        </div>
        
      </div>
    </header>
  );
}

export default Header;