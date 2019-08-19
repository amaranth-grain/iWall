import React from 'react';

import landscape_img from '../../assets/images/projectednew.jpg';
import ic from '../../assets/images/9-permanent.png';
import bubbles1 from '../../assets/images/bubbles/bubbles1.png';
import bubbles2 from '../../assets/images/bubbles/bubbles2.png';
import bubbles3 from '../../assets/images/bubbles/bubbles3.png';
import elevator from '../../assets/images/anim/Elevator.png';
import flag from '../../assets/images/anim/Flag_Fill.png';
import wave from '../../assets/images/anim/wave.png';
import guitarist from '../../assets/images/people/guitarist.png';
import swing from '../../assets/images/people/swing.png';
import tree1 from '../../assets/images/people/tree1.png';
import tree2 from '../../assets/images/people/tree2.png';
import tree3 from '../../assets/images/people/tree3.png';
import tree4 from '../../assets/images/people/tree4.png';


const Background = () => (
	<div>
		<img src={ landscape_img } className="artboard-background"  />
		<img src={ bubbles1 } className="bubblegroup1"  />
		<img src={ bubbles2 } className="bubblegroup2"  />
		<img src={ bubbles3 } className="bubblegroup3"  />
		<img src={ ic } className="ic"  />
		<img src= { elevator } className="elevator" />
		<img src= { flag } className="flag" />
		<img src= { wave } className="wave" />
		<img src= { wave } className="wave2" />
		<img src= { guitarist } className="guitarist" />
		<img src= { swing } className="swing" />
		<img src = { tree1 } className="tree1"/>
		<img src = { tree2 } className="tree2"/>
		<img src = { tree3 } className="tree3"/>
		<img src = { tree4 } className="tree4"/>
		<img src = { tree4 } className="tree5"/>
		<img src = { tree2 } className="tree6"/>
	</div>
);

export default Background;