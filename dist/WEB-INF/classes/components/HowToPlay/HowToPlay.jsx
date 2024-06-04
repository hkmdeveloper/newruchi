import { FaStar, FaStarHalfStroke } from 'react-icons/fa6';
import { assets, userReview } from '../../assets/assets';
import CustomerReview from './CustomerReview';
import './HowToPlay.css';

const HowToPlay = () => {
  return (
    <section className='howtoplay-section'>
        <div className='heading'>
        How to <span>Play</span>
        </div>
        <div className='app-para'>
            <p>Ready to challenge other sports fans? Watch this video to learn how to play on Dream11 and get started now. Compete with sports fans, make a perfect Dream11 team with the best combination of players as per your knowledge and skill and win big.</p>
        </div>
        <div className='video-div'>
            <img src={assets.howToPlay} alt="How to play" />
        </div>
        <div className='devider'>
            <img src={assets.border} alt="Border line" style={{maxWidth : '100%'}} />
        </div>

        <div className='review-rating-section'>
            <div className='heading'>
            Reviews & <span>Rating</span>
            </div>
            <div className='customer-review'>
                {userReview.map(user => <CustomerReview key={user.id} {...user} />)}
            </div>
            <div className='rating-star-box'>
            App Rating <div className='stars'><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfStroke /></div> 4.7 | <span className='text-gray'>2,750,143 ratings</span>
            </div>
        </div>
    </section>
  )
}

export default HowToPlay