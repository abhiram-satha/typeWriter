const sentence = 'hello there from lighthouse labs';

let x = 1000;

for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char)
  }, x);
  x += 50;
  //return 'hi'
}

setTimeout(() => {
  console.log('')
}, x);


