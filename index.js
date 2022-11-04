let arr = ["python", "c++", "c", "scala", "java"]


let find_the_letter = (arr, letter) => {
	counter = 0;
	for (let x = 0; x < arr.length; x++) {
		for (let y = 0; y < arr[x].length; y++) {
			if (letter === arr[x][y]) {
				counter = counter + 1;
			}
		}
	}
	console.log(`В этом списке ${counter} ${letter}`);
}

find_the_letter(arr, "a");
