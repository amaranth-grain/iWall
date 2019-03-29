import React, { Component } from 'react';
import { connect } from 'react-redux';

import cloud1 from '../../assets/images/anim/cloud.png';

class LowerClouds extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
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

const mapStateToProps = (state) => {
    return {
        showLowerClouds: state.clouds[1]
    };
}

export default connect(mapStateToProps)(LowerClouds);