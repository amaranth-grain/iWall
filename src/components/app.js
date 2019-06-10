import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AnimationList from './AnimationList';
import Background from './Background';
import UpperClouds from './upperClouds';
import LowerClouds from './lowerClouds';

let particles = [];
let intensity = 5;

export default class App extends Component {
		render () {
			return (
				<div className = "wall-area">
					{/* <P5Wrapper sketch={sketch}/> */}
					<Background />
					<UpperClouds />
					<LowerClouds />
					<AnimationList />
				</div>
   		);
		}
}

function sketch (p) {
	let rotation = 0;
  
	p.setup = function () {
	   	//p.createCanvas(600, 400, p.WEBGL);

		   p.createCanvas(p.displayWidth, p.displayHeight, p.WEBGL);
		   
		// Add an initial set of boids into the system
		for (let i = 0; i < 5; i++) {
			particles[i] = new Particle(p.random(p.width), p.random(p.height));
		}
	};

  
	p.draw = function () {

	  	p.background(255);
		// Run all the boids
		for (let i = 0; i < particles.length; i++) {
			particles[i].update();
			particles[i].render();
			particles[i].borders();
		}
  };

    // Boid class
// Methods for Separation, Cohesion, Alignment added
class Particle {
	constructor(x, y) {
	  this.speed = p.random(8, 16);
	  this.randomness = p.random (0.5, 1);
	  this.position = p.createVector(x, y);
	  this.lastPosition = this.position;
	  this.angle = 0.1;
	  this.r = 3.0;
	}

	// Method to update location
update() {
    this.speed = intensity * this.randomness;
    this.lastPosition = this.position;
    this.position.x += this.speed * p.sin (this.angle);
    this.position.y += this.speed * p.cos (this.angle);
  }

  // Draw boid as a circle
  render() {
    p.fill(127, 127);
    p.stroke(127);
    p.strokeWeight(1);
    //ellipse(this.position.x, this.position.y, 16, 16);
    p.line (this.position.x, this.position.y, this.position.x + this.speed * p.sin (this.angle), this.position.y + this.speed  * p.cos (this.angle));
      //(this.positon.x + this.speed * sin (this.angle)), (this.position.y + this.speed * cos (this.angle)));
  }

  // Wraparound
  borders() {
    if (this.position.x < -this.r) this.position.x = p.width + this.r;
    if (this.position.y < -this.r) this.position.y = p.height + this.r;
    if (this.position.x > p.width + this.r) this.position.x = -this.r;
    if (this.position.y > p.height + this.r) this.position.y = -this.r;
  }

}
};