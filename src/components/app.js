import React, { Component } from 'react';
import AnimationList from './AnimationList';
import Background from './Background';
import UpperClouds from './upperClouds';
import LowerClouds from './lowerClouds';
import Cues from './Cues';

export default class App extends Component {
		render () {
			return (
				<div className = "wall-area">
					<Background />
					<UpperClouds />
					<LowerClouds />
					<AnimationList />
					<Cues />
				</div>
   		);
	}
}