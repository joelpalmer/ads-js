function countDown(num) {
	if (num <= 0) { // base case
		console.log("Done!");
		return;
	}
	console.log(num);
	num--;
	countDown(num);
}
countDown(3);