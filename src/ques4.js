async function getGitHubUser(username) {
  try {
    const userResponse = await fetch(`https://api.github.com/users/${username}`);

    const userData = await userResponse.json();

    console.log("User Details:");
    console.log(`Name: ${userData.name}`);
    console.log(`Username: ${userData.login}`);
    console.log(`Bio: ${userData.bio}`);
    console.log(`Location: ${userData.location}`);
    console.log(`Public Repos: ${userData.public_repos}`);
    console.log(`Followers: ${userData.followers}`);
    console.log(`Following: ${userData.following}`);

  } catch (error) {
    console.error("Error:", error);
  }
}

getGitHubUser("SanskritiGupta18");