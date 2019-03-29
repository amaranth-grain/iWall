import React, { Component } from 'react';
import { connect } from 'react-redux';

import cloud1 from '../../assets/images/anim/cloud.png';

class UpperClouds extends Component {
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

const mapStateToProps = (state) => {
    return {
        showUpperClouds: state.clouds[0]
    };
}

export default connect(mapStateToProps)(UpperClouds);