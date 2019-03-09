function charCount(str) {
	// make object to return at end
	const result = {};
	// loop over string, for each char...
	for (let i = 0; i < str.length; i++) {
		const char = str[i].toLowerCase();
		//if char is alphanum and is key, add one to count
		if (result[char] > 0) {
			result[char]++;
			// if char is alphanum & not in obj, add to object and set val to 1
		} else {
			result[char] = 1;
		}
	}

	// ignore other characters like punctuation and spaces
	// return object at end
	return result;
}

charCount("hello"); //?.$
charCount("hello joel"); //?.$
charCount("hello joel L 47!"); //?.$
