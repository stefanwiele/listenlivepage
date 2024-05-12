// metadata.js
// get metadata from radiomast endpoint

const metadataEndpoint = 'https://streams.radiomast.io/d12679e5-06b3-4f6c-ae90-4fe125e30dfb/metadata';

function updateMetadata() {
    fetch(metadataEndpoint)
        .then(response => response.json())
        .then(data => {
            const metadataArtistDiv = document.getElementById('metadataArtist');
            const metadataTitleDiv = document.getElementById('metadataTitle');

            // split artist and title
            metadataSplit = data.metadata.split(" - ");

            metadataArtistDiv.textContent = decodeURIComponent(metadataSplit[0]);
            metadataTitleDiv.textContent = decodeURIComponent(metadataSplit[1]);
        })
        .catch(error => {
            console.error('Fout bij het ophalen van metadata:', error);
        });
}

// Initial load
updateMetadata();

// Call function every 30 seconds
setInterval(updateMetadata, 30000);
