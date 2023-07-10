const allCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data) )
}
const displayCountries = countries =>{
    console.log(countries[0]);
    const allCountriesHTML = countries.map(country => getAllCountriesHTML(country));
    // console.log(allCountriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = allCountriesHTML.join(' ');
}
//option 02
const getAllCountriesHTML = ({name, flags, area, continents, capital
}) =>{
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>area:${area}</p>
            <p>continents:${continents}</p>
            <p>capital:${capital}</p>
            <img src="${flags.png}">
        </div>
    `
}
//option 01
// const getAllCountriesHTML = country =>{
    // const {name, flags} = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `
// }

// orginal
// const getAllCountriesHTML = country =>{
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }
allCountries();