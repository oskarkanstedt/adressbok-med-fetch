/*fetch('adressbok-1.json')
    .then(response => response.json())
    .then(data => console.log(data)); */

const data = { username: 'example' };



fetch('adressbok-1.json', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
