const correctLength = (max, min=0) => (text) => {
    const textLength = text.length;
    return textLength >= min && textLength <= max;
};

export const checkTitleLength = correctLength(50, 1);
export const checkContentLength = correctLength(300, 1);
export const checkTagNameLength = correctLength(1, 1);
export const checkTagDescriptionLength = correctLength(25);

//xss