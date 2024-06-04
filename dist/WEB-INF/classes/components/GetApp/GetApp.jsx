import { assets } from '../../assets/assets';
import './GetApp.css';

const GetApp = () => {
  return (
    <section className='get-app-section'>
        <div className='heading'>
        Get the app and <span>Win Crores</span>
        </div>
        <div className='get-app-row'>
            <div className='mobile-app-image'>
                <img src={assets.mobileApp} alt="Mobile App" />
            </div>
            <div className='mobile-app-right'>
                <ul>
                    <li>
                        <img src={assets.icon1} alt="games" />
                        <p>Play with over 20 Crore Dream11 users or create your own private contest</p>
                    </li>
                    <li>
                        <img src={assets.icon2} alt="Friends" />
                        <p>Invite your friends & collect big rewards</p>
                    </li>
                    <li>
                        <img src={assets.icon3} alt="Awards" />
                        <p>Play more, earn DreamCoins & get exciting rewards</p>
                    </li>
                </ul>
                <div className='download-platform'>
                    <div className='andriod'>
                        <img src={assets.android} alt="Android" />
                    </div>
                    <div className='ios'>
                    <img src={assets.ios} alt="IOS" />
                    </div>
                </div>
                <div className='qr-code'>
                    <img src={assets.qrCode} alt="QR Code" />
                    <p>Scan the QR Code to download <br />the Fantasy Cricket App</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default GetApp;