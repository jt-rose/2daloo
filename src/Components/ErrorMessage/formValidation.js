const correctLength = (max, min=0) => (text) => {
    const textLength = text.length;
    return textLength >= min && textLength <= max;
};

export const checkTitleLength = correctLength(50, 1);
export const checkContentLength = correctLength(300, 1);
export const checkTagNameLength = correctLength(25, 1);
export const checkTagDescriptionLength = correctLength(25);

export const confirmUnique = (newTitle, titleList) => {
    const duplicateFound = titleList.some(title => title === newTitle);
    return !duplicateFound;
};


export const confirmSpecialCharacter = text => text.match(/[!@#$%&*?]/);
export const confirmUpperAndLowerCase = text => {
    const upperFound = /[A-Z]/.test(text);
    const lowerFound = /[a-z]/.test(text);
    return upperFound && lowerFound;
}
export const confirmNumberIncluded = text => text.match(/[0-9]/);

const confirmNewEmail = email => "check DB for email"
const confirmNewUsername = username => "check DB for username"
const confirmSamePassword = (password, confirmation) => password === confirmation;

//xss