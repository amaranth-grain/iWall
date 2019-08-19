import React, { Component } from 'react';
import { connect } from 'react-redux';

import touchpoint_down from '../../assets/images/people/touchpoint_down.png';
import touchpoint_up from '../../assets/images/people/touchpoint_up.png';
import touchpoint_left from '../../assets/images/people/touchpoint_left.png';
import touchpoint_right from '../../assets/images/people/touchpoint_right.png';

class Cues extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        if (this.props.showCues === true) {
            return (
                <div className="fadein">
				    <img src = { touchpoint_down } className="cueSat"/>
				    <img src = { touchpoint_down } className="cueDshop"/>
				    <img src = { touchpoint_left } className="cueMessage"/>
				    <img src = { touchpoint_up } className="cueHeart"/>
				    <img src = { touchpoint_down } className="cueSAC"/>
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
        showCues: state.currAnimations.showCues
    };
}

export default connect(mapStateToProps)(Cues);