import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import socketIOClient from 'socket.io-client'

import imgList from '../../scripts/image_list';

import Background from './background';
import UpperClouds from './upperClouds';
import LowerClouds from './lowerClouds';
import ImageListItem from './image_list_item';

// array of array of animations that should not play simultaneously
const mapToCheck = {
	img0: ["img23", "img16"],
	img1: ["img16"],
	img2: ["img23", "img16"],
	img3: ["img4", "img16"],
	img4: ["img3", "img16"],
	img5: ["img11", "img16"],
	img6: ["img16"],
	img7: ["img16"],
	img8: ["img16"],
	img9: ["img16"],
	img10: ["img16"],
	img11: ["img5", "img16"],
	// img12: [],                         // no animation attached
	img13: ["img16"],
	img14: ["img15", "img16", "img20"],
	img15: ["img14", "img16", "img20"],
	// img16: [],                         // special case: SAP Labs Canada Rocks
	img17: ["img16"],
	img18: ["img16"],
	img19: ["img16"],
	img20: ["img14", "img15", "img16"],
	// img21: [],
	// img22: [],
	img23: ["img16"],
	img24: ["img16"]
}

export default class App extends Component {
		constructor(props) {
			super(props);
			this.state = {
					images: [],
					imageNames: [],
					endpoint: "http://127.0.0.1:4001",
					showUpperClouds: true,
					showLowerClouds: true,
					keyboardInput: ""
				};
		}

		componentDidMount() {
			// const { endpoint } = this.state;
			// const socket = socketIOClient(endpoint);
			// socket.on("test", data => {
			// 	this.convertSerialPortDataToJSX(data);
			// });
		}

		handleKeyboardInput = event => {
			if (event.key == "Enter") {
				console.log(this.state.keyboardInput);
				this.testAddImage(this.state.keyboardInput);
			} else if (event.key == "Backspace") {
				console.log("Input Cleared")
				this.setState({
					keyboardInput: ""
				})
			} else {
				this.setState({
					keyboardInput: this.state.keyboardInput + event.key
				})
			}
		}

		testAddImage = key => {
			const imgData = imgList[`img${key}`];
			this.addImage(imgData);
		}

		componentWillMount() {
			window.addEventListener('keydown', this.handleKeyboardInput.bind(this));
		}

		addImage = img => {
			const newImages = [...this.state.images, img];
			const newImageNames = [... this.state.imageNames, img.imageName];

			console.log(`newImages: ${newImages}`);
			console.log(`newImageNames: ${newImageNames}`);

			const namesToCheck = (mapToCheck[img.imageName] === undefined) ? 0: mapToCheck[img.imageName];
			
			// console.log(namesToCheck);
			console.log(`this.state.imageNames: ${this.state.imageNames}`);

			// check for SAP Labs Canada Rocks
			if (img.imageName === "img16" && this.state.imageNames.length !== 0) {
				return;
			}

			console.log("Passed SLCR Check");

			// check for collisions
			for (var i = 0; i < namesToCheck.length; i++) {
				if (this.state.imageNames.includes(namesToCheck[i])) {
					return;
				}
			}

			if (!this.state.images.find(image => image.imageName === img.imageName) && this.state.images.length < 3) {
				switch (img.imageName) {
					// turn off upper clouds
					case "img3":
					case "img4":
					case "img6":
					case "img10":
						this.setState({
							images: newImages,
							imageNames: newImageNames,
							showUpperClouds: false,
							// for testing only, comment out when in production
							keyboardInput: ""
						});
						break;
					// turn off lower clouds
					case "img2":
					case "img14":
					case "img15":
					case "img20":
						this.setState({
							images: newImages,
							imageNames: newImageNames,
							showLowerClouds: false,
							// for testing only, comment out when in production
							keyboardInput: ""
						});
						break;
					default:
						this.setState({
							images: newImages,
							imageNames: newImageNames,
							// for testing only, comment out when in production
							keyboardInput: ""
						});
				}
			} else {
				// this case is just for resetting keyboard input
				this.setState({
					// for testing only, comment out when in production
					keyboardInput: ""
				});
			}
		}

		//comment contents for componenet placement
		removeImage = (img) => {
			const newImages = this.state.images.filter(image => image.imageName !== img.imageName);
			const newImageNames = this.state.imageNames.filter(imageName => imageName !== img.imageName);

			switch (img.imageName) {
				// turn on upper clouds
				case "img3":
				case "img4":
				case "img6":
				case "img10":
					this.setState({ 
						images: newImages,
						imageNames: newImageNames,
						showUpperClouds: true
					});
					break;
				// turn on lower clouds
				case "img2":
				case "img14":
				case "img15":
				case "img20":
					this.setState({ 
						images: newImages,
						imageNames: newImageNames,
						showLowerClouds: true
					});
					break;
				default:
					this.setState({
						images: newImages,
						imageNames: newImageNames,
					});
			}
		}

		convertSerialPortDataToJSX = (data) => {
			const enc = new TextDecoder("utf-8");
			const convertedData = enc.decode(data).trim().toString();

			if (convertedData.includes("was just touched")) {
				const imgName = "img" + parseInt(convertedData.match(/\d+/)[0], 10);
				const imgData = imgList[imgName];
				this.addImage(imgData);
			}
		}

		render() {
			const imageItems = this.state.images.map((image, index) => {
				const imageKey = image.imageName;
				return <ImageListItem key={imageKey}  image={image} removeImage={this.removeImage} />
			});
			// console.log(mapToCheck);

			return (
    			<div className="wall-area">
     		 		<Background />
					<UpperClouds showUpperClouds = {this.state.showUpperClouds} />
					<LowerClouds showLowerClouds = {this.state.showLowerClouds} />
     		 		{imageItems}
     		 	</div>
   		);
		}
}
