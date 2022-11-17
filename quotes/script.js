const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

//let apiQuotes = [];

//show loading
function loading(v) {
    loader.hidden = !v;
    quoteContainer.hidden = v;
}

//hide loading
function complete() {
    loader.hidden = v;
    quoteContainer.hidden = !v;
}

function NewQuote() {
    loading(true);
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    if (!quote.author) { authorText.textContent = 'Desconocido'} else { authorText.textContent = quote.author;  }

    if (quote.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }


    //set quote, hide loader
    quoteText.textContent = quote.text;
    loading(false)
      
};


//Get quotes from API
// async function GetQuotes(){
//   loading();
//     const apiUrl = 'https://type.fit/api/quotes';
//     try{
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         console.log(apiQuotes[12])

//         NewQuote();

//     }catch{

//     }
// }



//Tweet Quote
function TweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event listeners
newQuoteBtn.addEventListener('click', NewQuote);
twitterBtn.addEventListener('click', TweetQuote)


//On Load
//GetQuotes();
NewQuote();