function loadQuotes() {
    return fetch('data/quotes.json')
    .then(response => response.json())
    .then(json => json.quotes);
}

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function displayQuote(quotes) {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}

loadQuotes()
.then(quotes => {
    displayQuote(quotes);
})






