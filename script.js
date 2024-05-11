const link = "https://api.quotable.io/random" 

const btn = document.getElementById("btn")
const Quote = document.getElementById("Quote")
const author = document.getElementById("author")


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

btn.addEventListener('click',getQuote)