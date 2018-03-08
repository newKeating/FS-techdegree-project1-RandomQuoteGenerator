// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

const quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: "Dr. Seuss"
  },
  {
    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    source: "Helen Keller"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    source: "Aristotle"
  },
  {
    quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    source: "Robert Louis Stevenson"
  },
  {
    quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    source: "Buddha"
  },
  {
    quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    source:"Ralph Waldo Emerson"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston Churchill"
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: "Eleanor Roosevelt"
  },
  {
    quote: "People don't buy what you do; they buy why you do it.",
    source: "Simon Sinek",
    citation: "TED",
    year: "2009"
  },
  {
    quote: "There's a big difference between trying to do something and actually doing it.",
    source: "Tina Seelig",
    citation: "What I Wish I Knew When I Was 20",
    year: "2009"
  }
];

const getRandomQuote = () => {
  let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
  return randomQuote;
};

const printQuote = () => {
  let quoteObject = getRandomQuote();
  let quote = quoteObject.quote;
  let source = quoteObject.source;
  let citation = quoteObject.citation;
  let year = quoteObject.year;
  let html =  `<p class="quote"> ${quote} </p>
              <p class="source"> ${source}`
    if(citation)  {
      html +=  `<span class="citation"> ${citation} </span>`
    }
    if(year)  {
      html += `<span class="year"> ${year} </span>`
    }
    html += "</p>"
    document.getElementById('quote-box').innerHTML = html;
};

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
