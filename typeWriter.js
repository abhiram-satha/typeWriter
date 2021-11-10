const sentence = 'hello there from lighthouse labs';

let x = 1000;

for (const char of sentence) {
  
  setTimeout(() => {
    process.stdout.write(char)
  }, x);
  //console.log('\n');
  x += 50;
}

setTimeout(() => {
  console.log('')
}, x);
