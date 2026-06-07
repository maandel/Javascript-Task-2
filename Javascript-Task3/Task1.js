async function getGitHubUser(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`User "${username}" not found.`);
    }
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const user = await response.json();
  return user;
}

getGitHubUser("maandel")
  .then(user => console.log(user))
  .catch(err => console.error(err.message));