 let authorEle=document.getElementById("author");
    let textEle=document.getElementById("text");
    let button=document.getElementById("button");
    let quotearr=[];
    let index=0;
    button.addEventListener("click",displayQuotes);
        
    function displayQuotes() {
        index=Math.floor(Math.random()*quotearr.length);
       
        console.log(index);
        textEle.textContent=quotearr[index].text;
    authorEle.innerHTML=`<strong>   —${quotearr[index].author}</strong>`;
    
        fetchquotes(index)
    }

async function fetchquotes(index){
    let url="https://jacintodesign.github.io/quotes-api/data/quotes.json";
    try{
    let response=await fetch(url)
    let data= await response.json()
    console.log(data)
    quotearr=data;
    
   
   }
   catch(error){
    console.log(error)
   }
}

    fetchquotes(index);