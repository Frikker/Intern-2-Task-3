export default function substr(str, beginning = 0, length = str.length) {
    let substring = '';
    if (str.length > beginning && length !== 0) {
        for (let i = 0; i < length; i++) {
            substring += str[(beginning + i)];
        }
    }
    return substring;
}