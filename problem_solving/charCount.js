function charCount(str) {
	// make object to return at end
	const result = {};
	// loop over string, for each char...
	for (let char of str) {
		char = char.toLowerCase();
		// if char is alphanum and is key, add one to count
		// ignore other characters like punctuation and spaces
		if (/[a-z0-9/]/.test(char)) {
			result[char] = ++result[char] || 1;
		}
	}

	// return object at end
	return result;
}

charCount("hello joel999"); //?.$
charCount("hello7___**sdhJKhdj"); //?.$
charCount("hello joel L 47!"); //?.$
