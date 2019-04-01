import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectAnimation, deleteAnimation } from '../actions';
import ImageListItem from './image_list_item';

import socketIOClient from 'socket.io-client';

import imgList from '../../scripts/image_list';

class AnimationList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            endpoint: "http://127.0.0.1:4001",
            keyboardInput: ""
        }
    }

    componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("test", data => {
            this.convertSerialPortDataToJSX(data);
        });
    }

    convertSerialPortDataToJSX = (data) => {
        const enc = new TextDecoder("utf-8");
        const convertedData = enc.decode(data).trim().toString();

        if (convertedData.includes("was just touched")) {
            const imgName = "img" + parseInt(convertedData.match(/\d+/)[0], 10);
            const imgData = imgList[imgName];
            this.props.selectAnimation(imgData, this.props.currAnimations, this.props.currAnimationNames);
        }
    }

    // for testing
    componentWillMount() {
        window.addEventListener('keydown', this.handleKeyboardInput.bind(this));
    }

    // for testing
    handleKeyboardInput = event => {
        if (event.key == "Enter") {
            console.log(this.state.keyboardInput);
            const imgData = imgList[`img${this.state.keyboardInput}`];
            this.props.selectAnimation(imgData, this.props.currAnimations, this.props.currAnimationNames);
            this.setState({
                keyboardInput: ""
            })
        } else if (event.key == "Backspace") {
            console.log("Input Cleared")
            this.setState({
                keyboardInput: ""
            })
        } else {
            this.setState({
                keyboardInput: this.state.keyboardInput + event.key
            })
        }
    }

    removeImage = (animation) => {
        this.props.deleteAnimation(animation);
    }

    renderList() {
        // console.log(this.props.currAnimations);
        return this.props.currAnimations.map( (animation) => {
			const animationKey = animation.imageName;
			return <ImageListItem key={animationKey}  image={animation} removeImage={this.removeImage} />;
        });
    }

    render() {
        // console.log(this.props);
        return <div>{this.renderList()}</div>;
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        animations: state.animations,
        currAnimations: state.currAnimations.currAnimations,
        currAnimationNames: state.currAnimations.currAnimationNames
    };
}

export default connect(mapStateToProps, { selectAnimation, deleteAnimation })(AnimationList);