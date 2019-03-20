import React from 'react';
// import landscape_img from '../../assets/images/after-vinyl---export-projections.jpg';
//import landscape_img from '../../assets/images/Background.jpg';
import landscape_img from '../../assets/images/projectednew.jpg';
import ic from '../../assets/images/9-permanent.png';
import bubbles1 from '../../assets/images/bubbles/bubbles1.png';
import bubbles2 from '../../assets/images/bubbles/bubbles2.png';
import bubbles3 from '../../assets/images/bubbles/bubbles3.png';
import cloud1 from '../../assets/images/anim/cloud.png';
import cloudFilled from '../../assets/images/anim/cloud_filled.png';
import cloudFilled2 from '../../assets/images/anim/cloud_2_filled.png';
import cloudFilled3 from '../../assets/images/anim/cloud_3_filled.png';
import cloudFilled4 from '../../assets/images/anim/cloud_4_filled.png';
import elevator from '../../assets/images/anim/Elevator.png';
import flag from '../../assets/images/anim/Flag_Fill.png';
import wave from '../../assets/images/anim/wave.png';

// FOR FUN
//import mario from '../../assets/images/anim/mario.png';
//import yoshi from '../../assets/images/anim/yoshi.png';


const Background = () => {
	return (
		<div >
			<img src={ landscape_img } className="artboard-background"  />
			<img src={ bubbles1 } className="bubblegroup1"  />
			<img src={ bubbles2 } className="bubblegroup2"  />
			<img src={ bubbles3 } className="bubblegroup3"  />
			<img src={ ic } className="ic"  />
			<img src= { cloud1 } className="cloud1"/>
			<img src= { cloud1 } className="cloud5"/>
			<img src= { cloud1 } className="cloud2"/>
			<img src= { cloud1 } className="cloud3"/>
			<img src= { cloud1 } className="cloud4"/>
			<img src= { elevator } className="elevator" />
			<img src= { flag } className="flag" />
			<img src= { wave } className="wave" />
		</div>
	);
}

export default Background;
