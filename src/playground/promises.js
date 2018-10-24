const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data');
  }, 5500)
});

console.log('before')

promise.then((data) => {
  console.log('1', data);

  return 'some data';
}).then((str) => {
  console.log('does this run?', str);
}).catch(() => {
    console.log('error: ', error)
})


console.log('after')