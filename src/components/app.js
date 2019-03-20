import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import socketIOClient from 'socket.io-client'

import imgList from '../../scripts/image_list';

import Background from '../components/background';
import ImageListItem from '../components/image_list_item';


export default class App extends Component {
		constructor(props) {
			super(props);
			this.state = {
					images: [],
					endpoint: "http://127.0.0.1:4001",
					keyboardInput: "",
					showAnimation: true
				};

			this.handleShowAnimations = this.handleShowAnimations.bind(this);
		}

		componentDidMount() {
			const { endpoint } = this.state;
			const socket = socketIOClient(endpoint);
			socket.on("test", data => {
				this.convertSerialPortDataToJSX(data);
			});
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

		handleShowAnimations() {
			this.setState({
				showAnimation: false
			});

			console.log('handleShowAnimations() called');
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
				this.setState({
					images: [...this.state.images, img],
					// for testing only, comment out when in production
					keyboardInput: ""
				});
			} else {
				this.setState({
					// for testing only, comment out when in production
					keyboardInput: ""
				});
			}
		}

		removeImage = (img) => {
			const newImages = this.state.images.filter(image => image.imageName !== img.imageName);
			this.setState({ images: newImages });
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
				return <ImageListItem key={imageKey}  image={image} removeImage={this.removeImage} handleShowAnimations={this.handleShowAnimations}/>
			});

			return (
    			<div className="wall-area">
     		 		<Background showAnimation={this.state.showAnimation}/>
     		 		{imageItems}
					<div>Input image #: {this.state.keyboardInput}</div>
     		 	</div>
   		);
		}
}
