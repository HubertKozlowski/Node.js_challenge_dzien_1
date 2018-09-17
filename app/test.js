
setTimeout(() => {
    console.log('Wygląda na to, że wszystko działa :) - wyświetlam się po 2sec');
}, 2000);

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
