import React, { Component } from 'react';

class ImageListItem extends Component {
		// DO PROP VALIDATION HERE
		// image: {}
		// removeImage: () => {}

		constructor(props) {
			super(props);
		}

		componentDidMount() {
			const { removeImage, image } = this.props;
			setTimeout(() => { removeImage(image)}, image.duration*1000);
		}

		shouldComponentUpdate() {
			return false;
		}

		render() {
			const image = this.props.image;
			const imagePath = `../../assets/images/people/${image.path}`;
			const imageBackground = `../../assets/images/people/${image.background}`;
			const satBackground1 = `../../assets/images/people/${image.background1}`;
			const satBackground2 = `../../assets/images/people/${image.background2}`;
			const satBackground3 = `../../assets/images/people/${image.background3}`;
			let css = `individual-item ${image.imageName}`;
			let css1 = `individual-item heartsLarge backgroundfade`;
			const sat1 = `individual-item sat sat1`;
			const sat2 = `individual-item sat sat2`;
			const sat3 = `individual-item sat sat3`;
			let media;

			if (image.mediaType === "mp4") {
				media = (
					<video id={image.imageName} ref="vidRef" width="320" height="240" autoPlay className={css}>
						<source src={ imagePath } type="video/mp4" />
						<iframe src={ `../../assets/sounds/${image.sound}`} allow="autoplay" id="audio"></iframe>
					</video>
				);
			} else if (image.path === "sattext.gif") {
				media = (
					<div>
						<img src={ imagePath+"?a="+Math.random()} className={css}  />
						<img src={ satBackground1+"?a="+Math.random()} className={sat1}  />
						<img src={ satBackground2+"?a="+Math.random()} className={sat2}  />
						<img src={ satBackground3+"?a="+Math.random()} className={sat3}  />
						<iframe src={ `../../assets/sounds/${image.sound}`} allow="autoplay" id="audio"></iframe>
					</div>
				);
			} else if (image.path === "dshop.gif") {
				css = `individual-item ${image.imageName} fade1`;
				media = (
					<div>
						<img src={ imagePath+"?a="+Math.random()} className={css}  />
						<iframe src={ `../../assets/sounds/${image.sound}`} allow="autoplay" id="audio"></iframe>
					</div>
				);
			} else if (image.background !== "") {
				if(image.background == "spotlight.gif"){
					css1 = `individual-item labs backgroundfade`
				}
				media = (
					<div>
						<img src={ imagePath+"?a="+Math.random()} className={css}  />
						<img src={ imageBackground+"?a="+Math.random()} className={css1}  />
						<iframe src={ `../../assets/sounds/${image.sound}`} allow="autoplay" id="audio"></iframe>
					</div>
				);
			}	else {
				media = (
					<div>
						<img src={ imagePath+"?a="+Math.random()} className={css}  />
						<iframe src={ `../../assets/sounds/${image.sound}`} allow="autoplay" id="audio"></iframe>
					</div>
				);
			}

			return (
 				<div>
					{media}
				</div>
   		 );
   	}
}
export default ImageListItem;
