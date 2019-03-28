import React, { Component } from 'react';
import cloud1 from '../../assets/images/anim/cloud.png';

export default class UpperClouds extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.showUpperClouds);
        if (this.props.showUpperClouds === true) {
            return (
                <div>
                    <img src= { cloud1 } className="cloud1"/>
                    <img src= { cloud1 } className="cloud2"/>
                    <img src= { cloud1 } className="cloud5"/>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}