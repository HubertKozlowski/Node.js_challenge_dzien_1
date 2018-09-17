const arr = process.argv.slice(2, process.argv.length);

console.log(arr.reduce((a, b) => Number(a) + Number(b)));
