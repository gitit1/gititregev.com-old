import React from 'react';
import ImageGallery from 'react-image-gallery';
import tripickLogo from '../../../../../../assets/images/tripick/logo1.png'
import tripick1 from '../../../../../../assets/images/tripick/1.png';
import tripick2 from '../../../../../../assets/images/tripick/2.png';
import tripick3 from '../../../../../../assets/images/tripick/3.png';
import tripick4 from '../../../../../../assets/images/tripick/4.png';
import tripick5 from '../../../../../../assets/images/tripick/5.png';
import tripick6 from '../../../../../../assets/images/tripick/6.png';
import tripick7 from '../../../../../../assets/images/tripick/7.png';
import tripick8 from '../../../../../../assets/images/tripick/8.png';

const images = [
  { original: tripick1, thumbnail: tripick1 },
  { original: tripick2, thumbnail: tripick2 },
  { original: tripick3, thumbnail: tripick3 },
  { original: tripick4, thumbnail: tripick4 },
  { original: tripick5, thumbnail: tripick5 },
  { original: tripick6, thumbnail: tripick6 },
  { original: tripick7, thumbnail: tripick7 },
  { original: tripick8, thumbnail: tripick8 }

];
const TriPick = () => (
    <div className='d-flex justify-content-center sections'>
        <div className='left-section'>
            <ImageGallery items={images} showPlayButton={false} showThumbnails={false} showFullscreenButton={false}/>
        </div>
        <div className='right-section'>
        <div className='box-shaddow'>
            <div className="header">
                <a href="http://tripick.gititregev.com/" target="_blank">
                    <img src={tripickLogo} alt="TriPick Logo"/>                
                </a>
            </div>
            <div className="description">
                <h6>Description</h6>
                <p>This site was my final project for my information system degree. the site won as one of the best 10 projects.</p>
                <p>The idea behind this project is helping travelers finding partners for a shared whole trip or just some part of the trip</p>
                <p>You can also get informaition about the countries and what other travelars are recomending doing in thouse countries and best activities/sights</p>
            </div>
            <div>
                <div className="features">
                    <h6>Features</h6>
                    <div>
                        <ul>
                            <li>Search/Filter and Sort the DB</li>
                            <li>Rating Data System</li>
                            <li>Users System</li>
                            <li>Ability to Send & Recieve Messages Between Users</li>
                            <li>Facebook API</li>
                            <li>Email System</li>
                        </ul>
                    </div>
                </div>
                <div className="technical">
                <h6>Technologies</h6>
                    <div>
                        <ul>
                            <li>HTML 5</li>
                            <li>Javascript</li>
                            <li>Jquery</li>
                            <li>CSS</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
                <div className='clear'></div>
            </div>
            <div className="other">
                <a href="http://tripick.gititregev.com/files/technical.pdf" target="_blank" rel="noopener noreferrer">[Technical Poster]</a>
                <a href="http://tripick.gititregev.com/files/market.pdf" target="_blank" rel="noopener noreferrer">[Market Poster]</a>
                <a href="http://tripick.gititregev.com/files/TripickFinal.pptx" target="_blank" rel="noopener noreferrer">[Project Power Point]</a>
                <a href="http://tripick.gititregev.com/files/top10.mp4" target="_blank" rel="noopener noreferrer">[Top 10 video (explain about the system)]</a>
            </div>
        </div>
        </div>
  </div>
);

export default TriPick;