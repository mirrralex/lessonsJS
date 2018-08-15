function simpleNumbers(start, end) {
	let arr = [start];

	for(let i = 1; i<=end-1; i++) {
		arr[i] = arr[i-1]+1;
	}

	for (let i = 0; i <= arr.length-1; i++) {
		if((arr[i] % 2) != 0) {
			if((arr[i] % 3) != 0) {
				if ((arr[i] % 5) != 0) {
					if((arr[i] % 7) != 0) {
						console.log("Делители этого числа: 1 и " + arr[i]);
					} else if(arr[i] == 7) {
						console.log("Делители этого числа: 1 и " + arr[i]);
						}
				} else if(arr[i] == 5) {
					console.log("Делители этого числа: 1 и " + arr[i]);
					}
			} else if(arr[i] == 3) {
				console.log("Делители этого числа: 1 и " + arr[i]);
				}
		} else if(arr[i] == 2) {
			console.log("Делители этого числа: 1 и " + arr[i]);
			}
	}
}
simpleNumbers(1,100);