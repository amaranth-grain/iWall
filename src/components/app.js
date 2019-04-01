import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AnimationList from './AnimationList';
import Background from './Background';
import UpperClouds from './upperClouds';
import LowerClouds from './lowerClouds';

export default class App extends Component {
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
			return (
				<div className = "wall-area">
					<Background />
					<UpperClouds />
					<LowerClouds />
					<AnimationList />
				</div>
   			);
		}
}
