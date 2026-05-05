const API_KEY = "YOUR_API_KEY";

fetch(`http://api.marketstack.com/v1/eod?access_key=${API_KEY}&symbols=AAPL,GOOG,MSFT`)
  .then(res => res.json()) // Step 1: convert to JSON
  .then(data => {
    console.log(data); // check structure

    const stocks = data.data; // array of stock data

    // Step 2: FILTER → keep stocks with close price > 100
    const filtered = stocks.filter(stock => stock.close > 100);

    // Step 3: MAP → transform data
    const mapped = filtered.map(stock => ({
      symbol: stock.symbol,
      date: stock.date,
      closePrice: stock.close,
      high: stock.high,
      low: stock.low,
      priceRange: stock.high - stock.low
    }));

    // Step 4: REDUCE → calculate average closing price
    const avgPrice =
      mapped.reduce((sum, stock) => sum + stock.closePrice, 0) /
      (mapped.length || 1);

    return {
      totalStocks: mapped.length,
      averageClosingPrice: avgPrice,
      data: mapped
    };
  })
  .then(result => console.log(result))
  .catch(error => console.error("Error:", error));