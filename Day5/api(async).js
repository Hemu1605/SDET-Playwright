// 1. Joke API

async function getJoke() {
    try {
        let res = await fetch("https://official-joke-api.appspot.com/jokes/random");
        let jokeData = await res.json();

        const joke = {
            setup: jokeData.setup,
            punchline: jokeData.punchline
        };

        console.log("Joke:", joke);

    } catch (err) {
        console.error(err);
    }
}

getJoke();


// 2. Quotes API

async function getQuote() {
    try {
        let res = await fetch("https://api.quotable.io/random");
        let quoteData = await res.json();

        const quote = {
            content: quoteData.content,
            author: quoteData.author
        };

        console.log("Quote:", quote);

    } catch (err) {
        console.error(err);
    }
}

getQuote();


// 3. University API

async function getUniversities() {
    try {
        let res = await fetch("http://universities.hipolabs.com/search?country=India");
        let universities = await res.json();

        const universityData = universities
            .slice(0, 5)
            .map(u => ({
                name: u.name,
                website: u.web_pages[0]
            }));

        console.log("Universities:", universityData);

    } catch (err) {
        console.error(err);
    }
}

getUniversities();


// 4. Agify API

async function getAgePrediction() {
    try {
        let res = await fetch("https://api.agify.io/?name=hemraj");
        let ageData = await res.json();

        const result = {
            name: ageData.name,
            predictedAge: ageData.age
        };

        console.log("Predicted Age:", result);

    } catch (err) {
        console.error(err);
    }
}

getAgePrediction();


// 5. Genderize API

async function getGenderPrediction() {
    try {
        let res = await fetch("https://api.genderize.io/?name=alex");
        let genderData = await res.json();

        const result = {
            name: genderData.name,
            gender: genderData.gender,
            probability: genderData.probability
        };

        console.log("Gender Prediction:", result);

    } catch (err) {
        console.error(err);
    }
}

getGenderPrediction();


// 6. Advice Slip API

async function getAdvice() {
    try {
        let res = await fetch("https://api.adviceslip.com/advice");
        let adviceData = await res.json();

        const advice = {
            id: adviceData.slip.id,
            advice: adviceData.slip.advice
        };

        console.log("Advice:", advice);

    } catch (err) {
        console.error(err);
    }
}

getAdvice();


// 7. CoinDesk Bitcoin API

async function getBitcoinPrice() {
    try {
        let res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        let bitcoinData = await res.json();

        const bitcoin = {
            currency: bitcoinData.bpi.USD.code,
            rate: bitcoinData.bpi.USD.rate
        };

        console.log("Bitcoin Price:", bitcoin);

    } catch (err) {
        console.error(err);
    }
}

getBitcoinPrice();


// 8. Open Brewery API

async function getBreweries() {
    try {
        let res = await fetch("https://api.openbrewerydb.org/v1/breweries");
        let breweries = await res.json();

        const breweryData = breweries
            .slice(0, 5)
            .map(b => ({
                name: b.name,
                city: b.city
            }));

        console.log("Breweries:", breweryData);

    } catch (err) {
        console.error(err);
    }
}

getBreweries();