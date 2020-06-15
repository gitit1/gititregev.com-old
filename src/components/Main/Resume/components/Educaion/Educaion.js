import React from 'react';
import './Educaion.scss';

class Educaion extends React.Component {
    render() {
        return (
            <div className='educaion d-flex justify-content-center'>
                <div className='box-title'>
                    <p>Educaion</p>
                </div>
                <div className='box-info edu-info'>
                    <div className='box-shaddow'>
                        <h5>The Academic College of Tel-Aviv, Yaffo</h5>
                        <span>​2012 - 2016</span>
                        <p>​​Bachelor of Applied Science (B.A.Sc.)</p>
                    </div>
                    <br/>
                    <div className='box-shaddow'>
                        <h5>See-Security: Cyber & Information Security College</h5>
                        <span>2015</span>
                        <p>HDE, CEH, Information Security & Cyber</p>
                    </div>
                    <br />
                    <div className='box-shaddow'>
                        <h5>Shenkar College of Engineering and Design</h5>
                        <span>2006 - 2008</span>
                        <p>Electronic Engineer</p>
                    </div>
                    <br />
                </div>
            </div>
        )
    };
}
export default Educaion;
