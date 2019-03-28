import React, { Component } from 'react';
import cloud1 from '../../assets/images/anim/cloud.png';

export default class Clouds extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        console.log(this.props.showClouds);
        if (this.props.showClouds[0] === true && this.props.showClouds[1] === true) {
            return (
                <div>
                    <img src= { cloud1 } className="cloud1"/>
                    <img src= { cloud1 } className="cloud2"/>
                    <img src= { cloud1 } className="cloud5"/>
                    <img src= { cloud1 } className="cloud3"/>
                    <img src= { cloud1 } className="cloud4"/>
                </div>
            );
        } else if (this.props.showClouds[1] === true) {
            return (
                <div>
                    <img src= { cloud1 } className="cloud5"/>
                    <img src= { cloud1 } className="cloud3"/>
                    <img src= { cloud1 } className="cloud4"/>
                </div>
            );
        } else if (this.props.showClouds[0] === true) {
            return (
                <div>
                    <img src= { cloud1 } className="cloud1"/>
                    <img src= { cloud1 } className="cloud2"/>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}