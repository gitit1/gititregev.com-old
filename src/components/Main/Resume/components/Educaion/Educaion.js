import React from 'react';
import './Educaion.scss';

class Educaion extends React.Component {
    render() {
        return (
            <div className='educaion d-flex justify-content-center'>
                <div className='box-title'>
                    <p>Educaion</p>
                </div>
                <div className='box-info'>

                    <div className='box-shaddow'>
                        <p>The Academic College of Tel-Aviv, Yaffo</p>
                        <p>​2012 - 2016</p>
                        <p>​​Bachelor of Applied Science (B.A.Sc.)</p>
                    </div>
                    <br/>
                    <div className='box-shaddow'>
                        <p>See-Security: Cyber & Information Security College</p>
                        <p>2015</p>
                        <p>HDE, CEH, Information Security & Cyber</p>
                    </div>
                    <br />
                    <div className='box-shaddow'>
                        <p>Shenkar College of Engineering and Design</p>
                        <p>2006 - 2008</p>
                        <p>Electronic Engineer</p>
                    </div>
                    <br />
                </div>
            </div>
        )
    };
}
export default Educaion;
