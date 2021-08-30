//Declaration
const searchField = document.getElementById('search-field');
const cityName = document.getElementById('city-name');
const temp = document.getElementById('temp');
const iconImage = document.getElementById('icon-img');
const celciusSymbol=document.getElementById('celcius');
const shortDesc = document.getElementById('short-desc');
const errorMsg = document.querySelector('.alert');


//---Key Declaration---//
let key = `0077601c7f5382261f54579b08375e05`;

const weatherTeller = () => {
    

    //---Search Field Value---//
    const searchText = searchField.value;

    //-----Clear the search field----//
    searchField.value='';
    //---Base URL---//
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}`

    /* Fetching Data */
    fetch(url+'&appid='+key)
    .then(res=>res.json())
    .then(data=>displayWeather(data))
    .catch(err => displayerror(err))


}

/*----------Error Message------------*/

const displayerror = err =>{
    if(err){
    errorMsg.classList.remove('d-none');
    }
    
}

/*-----------Dispaly Weather------------- */
const displayWeather = data =>{
    let celcius = Math.round(parseFloat(data.main.temp)-273.15);
    //----Updating HTML---//
    cityName.innerText=data.name;
    celciusSymbol.innerText='°C'
    temp.innerText=celcius;
    shortDesc.innerText=data.weather[0].main;
    const wIcon = data.weather[0].icon;
    const iconURL = `http://openweathermap.org/img/w/` + wIcon + `.png`;

    iconImage.setAttribute('src',iconURL);

    

}

