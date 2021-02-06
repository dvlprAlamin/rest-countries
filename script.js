

fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => {
    data.forEach(country => {
        document.getElementById('countries').innerHTML += `
            <div class='country'>
                <img src="${country.flag}">
                <h1>Name: ${country.name}</h1>
                <h3>Capital: ${country.capital}</h3>
            </div>
            `
    });
    // for (let i = 0; i < data.length; i++) {
    //     const country = data[i];
    //     let name = country.name;
    //     let capital = country.capital;
    //     let flag = country.flag;
    //     let countries = document.getElementById('countries');
    //     countries.innerHTML += `
    //     <div class='country'>
    //         <img src="${flag}">
    //         <h1>Name: ${name}</h1>
    //         <h3>Capital: ${capital}</h3>
    //     `
    // }
})


let countries = document.getElementById('countries');
// fetch('https://restcountries.eu/rest/v2/name/aruba?fullText=true')