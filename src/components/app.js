import React, { Component } from 'react';
import AnimationList from './AnimationList';
import Background from './Background';
import UpperClouds from './upperClouds';
import LowerClouds from './lowerClouds';
import ReactRain from "react-rain-animation";
import "react-rain-animation/lib/style.css";

export default class App extends Component {
		render () {
			return (
				<div className = "wall-area">
					<ReactRain numDrops="50" />
					<Background />
					<UpperClouds />
					<LowerClouds />
					<AnimationList />
				</div>
   		);
		}
}