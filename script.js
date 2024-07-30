const repoListElement = document.getElementById('repoList');
const githubUsername = 'itskme'; 
const apiUrl = `https://api.github.com/users/${githubUsername}/repos?sort=created&direction=desc&per_page=5`;


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const repoList = data.map(repo => {
            const createdAt = new Date(repo.created_at);
            const formattedDate = `${createdAt.toLocaleDateString()} ${createdAt.toLocaleTimeString()}`;

            return `<li><a href="${repo.html_url}">${repo.name}</a> - ${formattedDate}</li>`;
        }).join('');

        repoListElement.innerHTML = repoList;
    })
    .catch(error => console.error('Error:', error));