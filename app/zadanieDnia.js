const arr = process.argv.slice(2, process.argv.length);

arr.forEach((val, index) => {

	setTimeout(() => {
	    console.log(`${val}`);
	}, 1000 * val);

});
