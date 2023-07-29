const searchBtn = document.querySelector(".searchBtn"); 
const inputField = document.querySelector(".input-field"); 
const refrenceConatainer = document.querySelector(".main-section"); 

const apiCall = () =>{
    let url = `https://restcountries.com/v3.1/name/${inputField.value}?fullText=true`; 
    let apiObject = new XMLHttpRequest(); 
    apiObject.open('GET', url); 
    apiObject.onload = () =>{
        const data = JSON.parse(apiObject.response); 
        console.log(data);
        const insertedData = `
            <div class="card" style="width: 18rem;">
                <ul class="list-group list-group-flush">
                    <img src = "${data[0].flags.png}" class="img-fluid" alt="${data[0].flags.alt}">
                    <li class=" title list-group-item text-center">${data[0].name.common}</li>
                    <li class="list-group-item text-center">Capital: ${data[0].capital}</li>
                    <li class="list-group-item text-center">Population: ${data[0].population}</li>
                    <li class="list-group-item text-center">TimeZone: ${data[0].timezones}</li>
                    <li class="list-group-item text-center">Continent: ${data[0].region}</li>
                    <p class = "link-danger"><a href="${data[0].maps.googleMaps}" class="link1 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover target = "_blank">Google Maps Link</a></p>
                </ul>
            </div>
        `; 
        refrenceConatainer.insertAdjacentHTML('afterbegin', insertedData); 
    }
    apiObject.send(); 
}; 

searchBtn.addEventListener("click", () =>{
    apiCall(); 
    inputField.value = ''; 
    refrenceConatainer.innerHTML = ``; 
}); 