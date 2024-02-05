var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var allDates = JSON.parse(request.response);
    console.log(allDates);

// Get all the countries from Asia continent /region using Filter function    
    var asiaCountries = allDates.filter((ans)=>ans.continents == "Asia");
    // console.log(asiaCountries);


// Get all the countries with a population of less than 2 lakhs using Filter function 
    var countriesPop = allDates.filter((ans2)=>ans2.population < 200000); 
    // console.log(countriesPop);


// Print the following details name, capital, flag, using forEach function
// name
allDates.forEach(function(ans3) {
        // console.log(ans3.name);
    });  

// capital
allDates.forEach(function(ans3) {
    // console.log(ans3.capital);
});

// flag
allDates.forEach(function(ans3) {
    // console.log(ans3.flag);
});
    

// Print the total population of countries using reduce function
var totalPop = allDates.reduce((exp,currentVal)=>exp+currentVal.population,0)
// console.log(totalPop);


// Print the country that uses US dollars as currency. currencies
 var currenciesInBollars = allDates.filter((countryCurrencies)=>countryCurrencies.currencies == 'DOLLARS');
 console.log(currenciesInBollars);
}