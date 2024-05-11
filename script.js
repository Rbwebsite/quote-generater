const link = "https://api.quotable.io/random" 

const btn = document.getElementById("btn")
const Quote = document.getElementById("Quote")
const author = document.getElementById("author")
const copyButton = document.getElementById('copyQuote');


function getQuote(){
   fetch(link)
   .then( (value)=> {
    return value.json()
})
.then( 
    (value)=>{
            Quote.innerHTML = `"${value.content}"`
            author.innerHTML = `"${value.author}"`

    }
)
.catch((error)=>{console.log(error);})
}

copyButton.addEventListener('click', () => {
    const textToCopy = Quote.innerHTML;
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
     document.body.removeChild(textarea);
    alert('Quote copied to clipboard!');
});


btn.addEventListener('click',getQuote)

