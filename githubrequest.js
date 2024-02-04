const username = 'lukelyall';

fetch(`https://api.github.com/users/${username}`)
  .then(response => {
    if(!response.ok){
       throw new Error(`${response.status}`);
    }
    return response.json()
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error(error))