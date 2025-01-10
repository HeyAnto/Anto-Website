const username = "HeyAnto";
const reposDiv = document.getElementById("repos");
const excludedRepos = ["Memory-Game", "GMTK-Game-Jam"];

async function fetchRepos() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    if (!response.ok) {
      throw new Error(
        `Erreur lors de la récupération des repos: ${response.status}`
      );
    }

    const repos = await response.json();

    const filteredRepos = repos.filter(
      (repo) =>
        !excludedRepos.includes(repo.name) && !repo.fork && repo.description
    );

    filteredRepos.forEach((repo) => {
      const repoName = repo.name.replace(/-/g, " ");
      const repoElement = document.createElement("p");
      repoElement.innerHTML = `
        <a class="link-btn" href="${repo.html_url}" target="_blank">${repoName}</a><br>
        ${repo.description}
      `;
      reposDiv.appendChild(repoElement);
    });
  } catch (error) {
    console.error(error);
    reposDiv.innerHTML = `<p>Impossible de charger les repositories pour l'instant.</p>`;
  }
}

fetchRepos();
