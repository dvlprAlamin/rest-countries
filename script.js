// fetch all country data 
fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => countryInfo(data))


// added country info in inner html
function countryInfo(data) {
    data.forEach(country => {
        document.getElementById('countries').innerHTML += `
            <div class='country'>
                <img src="${country.flag}">
                <h1>Name: ${country.name}</h1>
                <h3>Capital: ${country.capital}</h3>
                <button onclick="detailsInfo('${country.name}')">Details</button>
            </div>
            `
    });
};


// show country details and transfer country details into details table
function detailsInfo(countryName) {
    fetch('https://restcountries.eu/rest/v2/name/' + countryName)
    .then(res => res.json())
    .then(data => {
        document.getElementById('flag').innerHTML = `
        <img src='${data[0].flag}'>
        `
        document.getElementById('name').innerText = countryName;
        document.getElementById('native-name').innerText = data[0].nativeName;
        document.getElementById('alpha3Code').innerText = data[0].alpha3Code;
        document.getElementById('capital').innerText = data[0].capital;
        document.getElementById('area').innerText = data[0].area + ' Square km';
        document.getElementById('currency').innerText = data[0].currencies[0].name + ' ( ' + data[0].currencies[0].symbol + ' )';
        document.getElementById('population').innerText = data[0].population;
        document.getElementById('region').innerText = data[0].region;
        document.getElementById('sub-region').innerText = data[0].subregion;
        document.getElementById('numericCode').innerText = data[0].numericCode;
        document.getElementById('timezone').innerText = data[0].timezones;
        document.getElementById('callingCodes').innerText = '+' + data[0].callingCodes[0];
        document.getElementById('topLevelDomain').innerText = data[0].topLevelDomain;
    })
    document.getElementById('country-details').style.display = 'block';
};


// close button event handler
document.getElementById('close-btn').addEventListener('click', () => {
    console.log('ffffffffffff')
    document.getElementById('country-details').style.display = 'none';
});