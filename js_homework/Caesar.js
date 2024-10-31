function cesar(str, shift, action) {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
    const alphabetLength = alphabet.length;

    shift = action === 'encode' ? shift % alphabetLength : -shift % alphabetLength;

    let result = '';

    for (let char of str) {
        const index = alphabet.indexOf(char.toUpperCase());

        if (index !== -1) {
            let newIndex = (index + shift + alphabetLength) % alphabetLength;
            result += char === char.toLowerCase() ? alphabet[newIndex].toLowerCase() : alphabet[newIndex];
        } else {
            result += char;
        }
    }

    return result;
}

const encodedMessage = cesar("эзтыхз фзъзъз", 8, 'decode');
const decodedMessage = cesar("хакуна матата", 8, 'encode');
console.log(encodedMessage);
console.log(decodedMessage);