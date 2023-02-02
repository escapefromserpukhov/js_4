function getPasswordChecker(password) {
    return function(guess) {
        if (password === guess) {
            return true;
        }
        return false;
    }
}

const check = getPasswordChecker('qwerty');

console.log(check('qwe'));
console.log(check('qwert'));
console.log(check('qwerty'));
