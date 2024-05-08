// metadata.js
function updateMetadata() {
    fetch('https://streams.radiomast.io/d12679e5-06b3-4f6c-ae90-4fe125e30dfb/metadata')
        .then(response => response.json())
        .then(data => {
            const metadataArtistDiv = document.getElementById('metadataArtist');
            const metadataTitleDiv = document.getElementById('metadataTitle');

            metadataSplit = data.metadata.split(" - ");

            metadataArtistDiv.textContent = decodeURIComponent(metadataSplit[0]);
            metadataTitleDiv.textContent = decodeURIComponent(metadataSplit[1]);
        })
        .catch(error => {
            console.error('Fout bij het ophalen van metadata:', error);
        });
}

// Roep de functie elke 30 seconden aan
updateMetadata();
setInterval(updateMetadata, 30000);
