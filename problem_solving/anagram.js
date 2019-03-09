function isAnagram(first, second) {
	if (first.length !== second.length) {
		return false;
	}
	if (first === second) {
		return true;
	}

	const freqObjFirst = {};
	for (char of first) {
		freqObjFirst[char] = ++freqObjFirst[char] || 1;
	}

	for (char of second) {
		if (!freqObjFirst[char]) {
			return false;
		} else {
			freqObjFirst[char] -= 1;
		}
	}
	return true;
}

isAnagram("joel", "jeol"); //?
isAnagram("joel", "jole"); //?
isAnagram("kim", "mik"); //?
isAnagram("sam", "kelly"); //?
isAnagram("michelle", "liam"); //?
isAnagram("michelle", "liam"); //?
isAnagram("bar", "rab"); //?
