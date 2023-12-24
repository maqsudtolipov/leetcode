/**
 * @param {string} s
 * @return {number}
 */
// Build-in js string methods
const lengthOfLastWordJS = function(s) {
	const result =  s.trim().split(' ').at(-1).length;
	console.log(s.trim().split(' '))

	return result;
};

console.log(lengthOfLastWordJS('Hello my   friend'))

/*
* Loop backwards
* when you see a word (not a white space character) - start counting the letters
* return count of letters
*/
const lengthOfLastWord = function(s) {
	let length = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] !== ' ') {
			length += 1;
		} else if (length >= 1 && s[i] === ' ') {
			return length;
		}
	}
};

console.log(lengthOfLastWord('Hello my friend     '))