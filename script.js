let allResources = [];

async function loadResources() {
    try {
        const response = await fetch('data/resources.json');
        allResources = await response.json();
        displayResources(allResources);
    } catch (error) {
        console.error("Eroare la încărcarea JSON:", error);
    }
}

function displayResources(data) {
    const container = document.getElementById('resource-list');
    container.innerHTML = ""; 

    data.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p><strong>Tip:</strong> ${item.type}</p>
            <p><strong>Locație:</strong> ${item.location}</p>
            <p><strong>Tag-uri:</strong> ${item.tags.join(", ")}</p>
            <hr>
        `;
        container.appendChild(div);
    });
}

function filterStudy() {
    const studyRooms = allResources.filter(r => r.type === "studiu");
    displayResources(studyRooms);
}

function loadAll() {
    displayResources(allResources);
}

// Încărcare inițială
loadResources();