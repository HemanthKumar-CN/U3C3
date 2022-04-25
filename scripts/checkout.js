// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

wallet_amount=localStorage.getItem("amount") || 0;
document.querySelector("#wallet").innerText=wallet_amount;

data=JSON.parse(localStorage.getItem("movie"));
// console.log(data)

document.querySelector("#movie").innerHTML="";
// data.forEach(function (element) {

//     var div=document.createElement("div");

//     var title=document.createElement("p");
//     title.innerText=element.Title;

//     var img=document.createElement("img");
//     img.src=element.Poster;

//     div.append(title,img);

//     document.querySelector("movie").append(div);
// })

var div=document.createElement("div");

    var title=document.createElement("h2");
    title.innerText=data.Title;

    var img=document.createElement("img");
    img.src=data.Poster;

    div.append(title,img);

    document.querySelector("#movie").append(div);





    document.querySelector("#confirm").addEventListener("click",payfn);

    function payfn()
    {
        seats=document.querySelector("#number_of_seats").value;
        Total=Number(seats)*100;
        // console.log(Total)

        balance=Number(localStorage.getItem("amount"));
        // console.log(balance)

        if(Total>balance)
        {
            alert("Insufficient Balance!")
        }
        else{

            alert("Booking Successful!")

            // console.log(balance-Total);
            s=balance-Total;
            localStorage.setItem("amount",s)

            am=localStorage.getItem("amount");

            document.querySelector("#wallet").innerText=am;

        }

        document.querySelector("#user_name").value="";
        document.querySelector("#number_of_seats").value="";
    }