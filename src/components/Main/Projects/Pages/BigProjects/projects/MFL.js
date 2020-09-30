import React from 'react';
import ImageGallery from 'react-image-gallery';
import mfl1 from '../../../../../../assets/images/mfl/1.JPG';
import mfl2 from '../../../../../../assets/images/mfl/2.JPG';
import mfl3 from '../../../../../../assets/images/mfl/3.JPG';
import mfl4 from '../../../../../../assets/images/mfl/4.JPG';
import mfl5 from '../../../../../../assets/images/mfl/5.JPG';
import mfl6 from '../../../../../../assets/images/mfl/6.JPG';
import mfl7 from '../../../../../../assets/images/mfl/7.JPG';
import mfl8 from '../../../../../../assets/images/mfl/8.JPG';
import mfl9 from '../../../../../../assets/images/mfl/9.JPG';
import mfl10 from '../../../../../../assets/images/mfl/10.JPG';
import mfl11 from '../../../../../../assets/images/mfl/11.JPG';
import mfl12 from '../../../../../../assets/images/mfl/12.JPG';
import mfl13 from '../../../../../../assets/images/mfl/13.JPG';
import mfl14 from '../../../../../../assets/images/mfl/14.JPG';
import mfl15 from '../../../../../../assets/images/mfl/15.JPG';
import mfl16 from '../../../../../../assets/images/mfl/16.JPG';


const images = [
  { original: mfl1, thumbnail: mfl1 },
  { original: mfl2, thumbnail: mfl2 },
  { original: mfl3, thumbnail: mfl3 },
  { original: mfl4, thumbnail: mfl4 },
  { original: mfl5, thumbnail: mfl5 },
  { original: mfl6, thumbnail: mfl6 },
  { original: mfl7, thumbnail: mfl7 },
  { original: mfl8, thumbnail: mfl8 },
  { original: mfl9, thumbnail: mfl9 },
  { original: mfl10, thumbnail: mfl10 },
  { original: mfl11, thumbnail: mfl11 },
  { original: mfl12, thumbnail: mfl12 },
  { original: mfl13, thumbnail: mfl13 },
  { original: mfl14, thumbnail: mfl14 },
  { original: mfl15, thumbnail: mfl15 },
  { original: mfl16, thumbnail: mfl16 }

];
const MFL = () => (
    <div className='d-flex justify-content-center sections'>
        <div className='left-section'>
            <ImageGallery items={images} showPlayButton={false} showThumbnails={false} showFullscreenButton={true}/>
        </div>
        <div className='right-section'>
        <div className='box-shaddow'>
            <div className="header">
                <a href="http://www.myfanficslibrary.com" target="_blank">
                    <span>My Fanfics Library (MFL)</span>             
                </a>
            </div>
            <div className="description">
                <h6>Description</h6>
                <p>This is My biggest personal projects. I'm a huge reader of fanfics and the current sites are lacking.</p>
                <p>The idea behind is to be able to save all my favorites fandoms fanfics so I have a backup in case it got deleted.</p>
                <p>The second goal is to know what I already read while browsing on site, which is none exist on the big sites.</p>
                <p>The third goal is that all the data of the fanfics will be in one place so i won't have to search in 3 different sites.</p>
                <p>So I scraped the 3 biggest Fanfics sites (AO3, FF, Wattpad) and built my own platform to use the data.</p>
            </div>
            <div>
                <div className="features">
                    <h6>Features</h6>
                    <div>
                        <ul>
                            <li>Scraping and Merging massive amount of data</li>
                            <li>Users System</li>
                            <li>DB - filter/sort/CRUD</li>
                            <li>Manager area buikd with socket to control the downloader in server</li>
                            <li>Authentication System</li>
                            <li>Email System</li>
                            <li>And Much More...</li>
                        </ul>
                    </div>
                    <div>See full list of Features on <a href="http://www.myfanficslibrary.com/#/about" target="_blank">Site</a></div>
                </div>
                <div className="technical">
                <h6>Technologies</h6>
                    <div>
                        <ul>
                            <li>Client - React</li>
                            <li>Server - Node JS</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
                <div className='clear'></div>
            </div>
        </div>
        </div>
  </div>
);

export default MFL;