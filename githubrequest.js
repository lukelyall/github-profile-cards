const username = 'lukelyall';

// fetching api data
fetch(`https://api.github.com/users/${username}`)
  .then(response => {
    if(!response.ok){
       throw new Error(`${response.status}`);
    }
    return response.json()
  })
  .then(data => {
    displayUserInfo(data);
  })
  .catch(error => console.error(error))

  function displayUserInfo(user) {
    // html elements
    const avatarElement = document.getElementById('avatar');
    const usernameElement = document.getElementById('username');
    const accountElement = document.getElementById('account');
    const followersElement = document.getElementById('followers');
    const followingElement = document.getElementById('following');
    const reposElement = document.getElementById('public-repos');
    
    // filling the elements with data
    avatarElement.src = user.avatar_url;
    usernameElement.textContent = user.login;
    followersElement.textContent = `Followers: ${user.followers}`;
    followingElement.textContent = `Following: ${user.following}`;
    reposElement.textContent = `Public Repos: ${user.public_repos}`;

    // creating an href for link to Github
    const account = document.createElement('a');
    account.href = user.html_url;
    account.textContent = 'Github';
    account.target = '_blank';
    accountElement.appendChild(account);
  }