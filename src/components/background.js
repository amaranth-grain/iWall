import React from 'react';
// import landscape_img from '../../assets/images/after-vinyl---export-projections.jpg';
// import landscape_img from '../../assets/images/Background.jpg';
import landscape_img from '../../assets/images/projected.jpg';
import ic from '../../assets/images/9-permanent.png';
import bubbles1 from '../../assets/images/bubbles/bubbles1.png';
import bubbles2 from '../../assets/images/bubbles/bubbles2.png';
import bubbles3 from '../../assets/images/bubbles/bubbles3.png';


const Background = () => {
	return (
		<div >
			<img src={ landscape_img } className="artboard-background"  />
			<img src={ bubbles1 } className="bubblegroup1"  />
			<img src={ bubbles2 } className="bubblegroup2"  />
			<img src={ bubbles3 } className="bubblegroup3"  />
			<img src={ ic } className="ic"  />
		</div>
	);
}

export default Background;
