export default function isPalindrome(string) {
    string = string.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    if (string.length == 1) {
        return true;
    } else {
        if (string[0] == string[string.length - 1]) {
            if (string.length === 2) {
                return true;
            }
            return isPalindrome(string.substr(1, string.length - 2));
        } else {
            return false;
        }
    }
}