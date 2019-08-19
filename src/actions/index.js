import 'babel-polyfill';

// Action creator
export const selectAnimation = (selectedAnimation, currAnimations = [], currAnimationNames = []) => {
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