// 1. Joke API

fetch("https://official-joke-api.appspot.com/jokes/random")
  .then(res => res.json())
  .then(jokeData => {
    const joke = {
      setup: jokeData.setup,
      punchline: jokeData.punchline
    };

    console.log("Joke:", joke);
  })
  .catch(err => console.error(err));


// 2. Quotes API

fetch("https://api.quotable.io/random")
  .then(res => res.json())
  .then(quoteData => {
    const quote = {
      content: quoteData.content,
      author: quoteData.author
    };

    console.log("Quote:", quote);
  })
  .catch(err => console.error(err));


// 3. University API

fetch("http://universities.hipolabs.com/search?country=India")
  .then(res => res.json())
  .then(universities => {

    const universityData = universities
      .slice(0, 5)
      .map(u => ({
        name: u.name,
        website: u.web_pages[0]
      }));

    console.log("Universities:", universityData);
  })
  .catch(err => console.error(err));


// 4. Agify API

fetch("https://api.agify.io/?name=hemraj")
  .then(res => res.json())
  .then(ageData => {

    const result = {
      name: ageData.name,
      predictedAge: ageData.age
    };

    console.log("Predicted Age:", result);
  })
  .catch(err => console.error(err));


// 5. Genderize API

fetch("https://api.genderize.io/?name=alex")
  .then(res => res.json())
  .then(genderData => {

    const result = {
      name: genderData.name,
      gender: genderData.gender,
      probability: genderData.probability
    };

    console.log("Gender Prediction:", result);
  })
  .catch(err => console.error(err));


// 6. Advice Slip API

fetch("https://api.adviceslip.com/advice")
  .then(res => res.json())
  .then(adviceData => {

    const advice = {
      id: adviceData.slip.id,
      advice: adviceData.slip.advice
    };

    console.log("Advice:", advice);
  })
  .catch(err => console.error(err));


// 7. CoinDesk Bitcoin API

fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then(res => res.json())
  .then(bitcoinData => {

    const bitcoin = {
      currency: bitcoinData.bpi.USD.code,
      rate: bitcoinData.bpi.USD.rate
    };

    console.log("Bitcoin Price:", bitcoin);
  })
  .catch(err => console.error(err));


// 8. Open Brewery API

fetch("https://api.openbrewerydb.org/v1/breweries")
  .then(res => res.json())
  .then(breweries => {

    const breweryData = breweries
      .slice(0, 5)
      .map(b => ({
        name: b.name,
        city: b.city
      }));

    console.log("Breweries:", breweryData);
  })
  .catch(err => console.error(err));