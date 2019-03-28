import React, { Component } from 'react';
import cloud1 from '../../assets/images/anim/cloud.png';

export default class LowerClouds extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        // console.log(this.props.showLowerClouds);
        if (this.props.showLowerClouds === true) {
            return (
                <div>
                    <img src= { cloud1 } className="cloud3"/>
                    <img src= { cloud1 } className="cloud4"/>
                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}