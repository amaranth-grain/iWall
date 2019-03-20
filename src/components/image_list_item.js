import React, { Component } from 'react';

class ImageListItem extends Component {
		// DO PROP VALIDATION HERE
		// image: {}
		// removeImage: () => {}

		constructor(props) {
			super(props);
		}

		componentDidMount() {
			const { removeImage, image, handleShowAnimations } = this.props;

			console.log('componentDidMount')

			// This condition should only happen for mp4's instead of timeout to restore the animations
			if (image.mediaType === "mp4") {
				var vid = document.getElementById(image.imageName);
				console.log(vid);

				vid.onended = function () {
					console.log('Video has ended');
					handleShowAnimations(true);
				};
			} else {
				setTimeout(() => { removeImage(image)}, image.duration*1000);
			}
		
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
			let css = `individual-item ${image.imageName} fade`;
			let css1 = `individual-item heartsLarge backgroundfade`;
			const sat1 = `individual-item sat sat1`;
			const sat2 = `individual-item sat sat2`;
			const sat3 = `individual-item sat sat3`;
			let media;

			// TODO: Replace with Chao's video instead of dshop.mp4
			if (image.path === "dshop.mp4") {
				console.log(image.imageName);
				this.props.handleShowAnimations(false);
				media = (
					<video id={image.imageName} ref="vidRef" width="320" height="240" autoPlay className={css}>
						<source src={ imagePath } type="video/mp4" />
						<iframe src={`../../assets/sounds/${image.sound}`} allow="autoplay" id="audio"></iframe>
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
