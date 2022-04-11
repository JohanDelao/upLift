let quotes = ["You only lose if you quit!", "Your time is limited, so don't waste it living someone else's life", "Don't let the noise of other's opinions drown out your own inner voice", "I dare you to be great! I challenge you to be great in every single thing you do", "Gotta be able to sacrifice what you are, for what you will become",
"Too many of us are not living our dreams because we are living our fears","The greatest revenge is massive success", "Someone's opinion of you does not have to become your reality", "If I fail, I'll try again, and again, and again, as for as long as I try, theres always a chance for me to get back up"]

let arrayLength = quotes.length;
let randomQuoteNum = Math.floor(Math.random()*arrayLength);

document.getElementById("quoteBox").innerHTML = `<h2 id="quote">"${quotes[randomQuoteNum]}"</h2>`


console.log(quotes.length)