// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

wallet_amount=localStorage.getItem("amount") || 0;
document.querySelector("#wallet").innerText=wallet_amount;

var id;
async function searchMovies()
{
    try
    {
        const query=document.querySelector("#search").value;

        let res=await fetch(`https://www.omdbapi.com/?apikey=79d6703&s=${query}`);
        let data=await res.json();
        console.log(data.Search)
        let movies=data.Search;

        return movies;
        // appendMovies(data.Search)
    }
    catch (err)
    {
        console.log(err)
    }
}


function appendMovies(data)
{
    document.querySelector("#movies").innerHTML="";
    data.forEach(element => {
        
        var div=document.createElement("div");

        var img=document.createElement("img");
        img.src=element.Poster;

        var title=document.createElement("p");
        title.innerText=element.Title;

        var btn=document.createElement("button");
        btn.innerText="Book Now";
        btn.setAttribute("class","book_now")

        btn.addEventListener("click",function() {
            movDetails(element)
        })

        div.append(img,title,btn)

        document.querySelector("#movies").append(div)
    });
}



function movDetails(element)
{
    // console.log(element);

    localStorage.setItem("movie",JSON.stringify(element));
    window.location.href="../checkout.html";
}













async function main()
{
    let data=await searchMovies();
    if(data==undefined)
    {
        return false;
    }
    
    appendMovies(data)


}

function debouncing(func,delay)
{ 
    if(id)
    {
        clearTimeout(id)
    }
    
    id=setTimeout(() => {
        func()
    }, delay);
}