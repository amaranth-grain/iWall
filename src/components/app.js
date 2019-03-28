import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import socketIOClient from 'socket.io-client'

import imgList from '../../scripts/image_list';

import Background from './background';
import UpperClouds from './upperClouds';
import LowerClouds from './lowerClouds';
import ImageListItem from './image_list_item';


export default class App extends Component {
		constructor(props) {
			super(props);
			this.state = {
					images: [],
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
			//hospital collides with helicopter and heart
			if(img.imageName === "img20" && this.state.images.find(image => (image.imageName === "img14" || image.imageName === "img15"))){
				return;
			} else if ((img.imageName === "img14" || img.imageName === "img15") && this.state.images.find(image => image.imageName === "img20")){
				return;
			}

			//building collides with mountain
			if(img.imageName === "img2" && this.state.images.find(image => image.imageName === "img23")){
				return;
			} else if (img.imageName === "img23" && this.state.images.find(image => image.imageName === "img2")){
				return;
			}

			//building collides with speech bubble
			if(img.imageName === "img0" && this.state.images.find(image => image.imageName === "img23")){
				return;
			} else if (img.imageName === "img23" && this.state.images.find(image => image.imageName === "img0")){
				return;
			}

			//dshop collides with trophy
			if(img.imageName === "img11" && this.state.images.find(image => image.imageName === "img5")){
				return;
			} else if (img.imageName === "img5" && this.state.images.find(image => image.imageName === "img11")){
				return;
			}

			//3 way collision of music, megaphone, and ic
			if(img.imageName === "img16" && this.state.images.find(image => (image.imageName === "img3" || image.imageName === "img4"))){
				return;
			} else if (img.imageName === "img3" && this.state.images.find(image => (image.imageName === "img4" || image.imageName === "img16"))){
				return;
			} else if (img.imageName === "img4" && this.state.images.find(image => (image.imageName === "img3" || image.imageName === "img16"))){
				return;
			}

			if (!this.state.images.find(image => image.imageName === img.imageName) && this.state.images.length < 3) {
				switch (img.imageName) {
					case "img3":
					case "img4":
					case "img6":
					case "img10":
						this.setState({
							images: [...this.state.images, img],
							showUpperClouds: false,
							// for testing only, comment out when in production
							keyboardInput: ""
						});
						break;
					case "img2":
					case "img14":
					case "img15":
					case "img20":
						this.setState({
							images: [...this.state.images, img],
							showLowerClouds: false,
							// for testing only, comment out when in production
							keyboardInput: ""
						});
						break;
					default:
						this.setState({
							images: [...this.state.images, img],
							// for testing only, comment out when in production
							keyboardInput: ""
						});
				}
			} else {
				this.setState({
					// for testing only, comment out when in production
					keyboardInput: ""
				});
			}
		}

		//comment contents for componenet placement
		removeImage = (img) => {
			const newImages = this.state.images.filter(image => image.imageName !== img.imageName);
			switch (img.imageName) {
				case "img3":
				case "img4":
				case "img6":
				case "img10":
					this.setState({ 
						images: newImages,
						showUpperClouds: true
					});
					break;
				case "img2":
				case "img14":
				case "img15":
				case "img20":
					this.setState({ 
						images: newImages,
						showLowerClouds: true
					});
					break;
				default:
					this.setState({ images: newImages });
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
			console.log(this.state);

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
