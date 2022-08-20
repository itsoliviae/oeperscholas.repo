const iss_url = 'https://api.wheretheiss.at/v1/satellites/25544'
async function getISS() {
    const response = await fetch(iss_url);
    const data = await response.json();
    const { latitude, longitude } = data;


    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    
    
}

getISS();