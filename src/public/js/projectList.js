const projectsString = `
[
    {
        "id": 1,
        "title": "FilmCritic",
        "description": "Social media for movie reviews.",
        "fileName": "filmcritic"
    },
    {
        "id": 2,
        "title": "Sorting Aglorithms",
        "description": "A satisfying visual display of some sorting algorithms.",
        "fileName": "sortingalgos"
    },
    {
        "id": 3,
        "title": "Tony's Tacos",
        "description": "A resteraunt ordering app for my favorite local resteraunt.",
        "fileName": "tonystacos"
    },
    {
        "id": 4,
        "title": "Stock Trading Bot",
        "description": "A python script using Alpaca Tradings API.",
        "fileName": "tradingbot"
    }
]
`

function fillProjectList() {
    var projects = JSON.parse(projectsString)

    var list = document.getElementById('project-list')
    projects.forEach(x => {
        list.innerHTML += `
        
            <div class="project-item">
                <a href="${x.fileName}.html">
                    <h2>${x.title}</h2>
                </a>
                <p>${x.description}</p>
            </div>
        `
    })
}