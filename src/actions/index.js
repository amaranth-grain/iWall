import 'babel-polyfill';
import axios from 'axios';

import imgList from '../../scripts/image_list';

const API_KEY = '7cb2afc8370fc561554bab673509709c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/`;

// Action creator
export const selectAnimation = (selectedAnimation, currAnimations = [], currAnimationNames = []) => {
    // for keyboard testing, comment out when not using keyboard
    // const imgData = imgList[`img${selectedAnimation}`];

    // Return an action
    return {
        type: 'ANIMATION_SELECTED',
        // payload: animation
        payload: {
            selectedAnimation: selectedAnimation,
            currAnimations: currAnimations,
            currAnimationNames: currAnimationNames
        }
    }
};

export const deleteAnimation = (deletedAnimation, currAnimations = [], currAnimationNames = []) => {
    return {
        type: 'ANIMATION_DELETED',
        payload: {
            deletedAnimation: deletedAnimation,
            currAnimations: currAnimations,
            currAnimationNames: currAnimationNames
        }
    }
};

export const fetchWeather = async () => {
    const url = `${ROOT_URL}weather?q=Vancouver,ca&appid=${API_KEY}`
    const request = await axios.get(url);

    // console.log('Request:', request);

    return {
        type: "FETCH_WEATHER",
        payload: request
    };
}