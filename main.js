function uniqueHexColorGenerator(numberOfUniqueHexCodes = 100) {
    // all possible hex letters
    const hexLang = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    // array of unique hex codes
    let uniqueHexCodes = [];
    // generate hex codes until uniqueHexCodes is equal to the length desired
    while (uniqueHexCodes.length < numberOfUniqueHexCodes) {
        let thisHexCode = '';
        // add random hex letters until thisHexCode has a length of 6 characters
        while (thisHexCode.length < 6) {
            thisHexCode += hexLang[Math.floor(Math.random() * hexLang.length)];
        }
        if (!uniqueHexCodes.includes(thisHexCode)) {
            uniqueHexCodes.push(thisHexCode);
        }
    }
    return uniqueHexCodes;
}