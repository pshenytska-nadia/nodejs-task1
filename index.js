function mostRepeatedLetter(text) {
    if (!text || typeof text !== 'string') {
        return 'Invalid input.';
    }

    const simplifiedText = text.toLowerCase().replace(/[^a-z]/g, '');
    const letterCountMap = new Map();

    for (const char of simplifiedText) {
        letterCountMap.set(char, (letterCountMap.get(char) || 0) + 1);
    }

    let mostRepeated = '';
    let maxCount = 0;

    letterCountMap.forEach((count, letter) => {
        if (count > maxCount) {
            mostRepeated = letter;
            maxCount = count;
        }
    });

    return mostRepeated;
}

module.exports = mostRepeatedLetter