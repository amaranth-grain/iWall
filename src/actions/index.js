import imgList from '../../scripts/image_list';

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