import { combineReducers } from 'redux';

// array of array of animations that should not play simultaneously
const mapToCheck = {
	img0: ["img23", "img16"],
	img1: ["img16"],
	img2: ["img23", "img16"],
	img3: ["img4", "img16"],
	img4: ["img3", "img16"],
	img5: ["img11", "img16"],
	img6: ["img16"],
	img7: ["img16"],
	img8: ["img16"],
	img9: ["img16"],
	img10: ["img16"],
	img11: ["img5", "img16"],
	// img12: [],                         // no animation attached
	img13: ["img16"],
	img14: ["img15", "img16", "img20"],
	img15: ["img14", "img16", "img20"],
	// img16: [],                         // special case: SAP Labs Canada Rocks
	img17: ["img16"],
	img18: ["img16"],
	img19: ["img16"],
	img20: ["img14", "img15", "img16"],
	// img21: [],
	// img22: [],
	img23: ["img0", "img16"],
	img24: ["img16"]
}

const animations = [
    "img0", "img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12", "img13", "img14", "img15", "img16",
    "img17", "img18", "img19", "img20", "img21", "img22", "img23", "img24"
]

const animationsReducer = () => {
    return animations;
};

const cloudsReducer = (clouds = [true, true], action) => {
    if (action.type === 'ANIMATION_SELECTED') {
        const animation = action.payload.selectedAnimation;

        switch (animation.imageName) {
            // turn off upper clouds
            case "img3":
            case "img4":
            case "img6":
            case "img10":
                return [false, clouds[1]];
            // turn off lower clouds
            case "img2":
            case "img14":
            case "img15":
            case "img20":
                return [clouds[0], false];
            default:
                return clouds;
        }
    }

    if (action.type === 'ANIMATION_DELETED') {
        const animation = action.payload.deletedAnimation;

        switch (animation.imageName) {
            // turn on upper clouds
            case "img3":
            case "img4":
            case "img6":
            case "img10":
                return [true, clouds[1]];
            // turn on lower clouds
            case "img2":
            case "img14":
            case "img15":
            case "img20":
                return [clouds[0], true];
            default:
                return clouds;
        }
    }

    return clouds;
};

const currAnimationsReducer = (currAnimations = { currAnimations: [], currAnimationNames: [] }, action) => {
    // console.log(action.payload);
    if (action.type === 'ANIMATION_SELECTED') {
        const animation = action.payload.selectedAnimation;
        const namesToCheck = (mapToCheck[animation.imageName] === undefined) ? []: mapToCheck[animation.imageName];

        // check for SAP Labs Canada Rocks
        if (animation.imageName === "img16" && currAnimations.currAnimations.length !== 0) {
            return currAnimations;
        }

        // console.log(namesToCheck);
        // console.log(currAnimations.currAnimationNames);

        // check for collisions
        for (var i = 0; i < namesToCheck.length; i++) {
            if (currAnimations.currAnimationNames.includes(namesToCheck[i])) {
                return currAnimations;
            }
        }

        if (currAnimations.currAnimationNames.find(name => name === animation.imageName)) {
            return currAnimations;
        }

        if (currAnimations.currAnimations.length >= 3) {
            return currAnimations;
        }

        console.log("Passed");

        return {
          currAnimations: [... action.payload.currAnimations, animation],
          currAnimationNames: [... action.payload.currAnimationNames, animation.imageName]
        };
    }
    
    if (action.type === 'ANIMATION_DELETED') {
        const animation = action.payload.deletedAnimation;

        const newAnimations = currAnimations.currAnimations.filter(anim => anim.imageName !== animation.imageName);
        const newAnimationNames = currAnimations.currAnimationNames.filter(name => name !== animation.imageName);

        return {
            currAnimations: newAnimations,
            currAnimationNames: newAnimationNames
        }
    }

    return currAnimations;
};

const weatherReducer = (currWeather = "Sunny", action) => {
    // console.log(action.payload.data);

    if (action.type === "FETCH_WEATHER") {
        // console.log("Weather: " + action.payload.data.weather[0].main);
        return action.payload.data.weather[0].main;
    }

    return currWeather;
}

export default combineReducers({
    animations: animationsReducer,
    currAnimations: currAnimationsReducer,
    clouds: cloudsReducer,
    weather: weatherReducer
});