// Store the wallet amount to your local storage with key "amount"
document.getElementById("add_to_wallet").addEventListener("click",onefn)


str_money=localStorage.getItem("amount");
var sum=Number(str_money)||0;
document.querySelector("#wallet").innerText=sum;
function onefn()
{
    money=document.querySelector("#amount").value;
    localStorage.setItem("amount",sum)

    n=Number(money);
    sum=sum+n;
    localStorage.setItem("amount",sum)
    
    x=localStorage.getItem("amount");
    // console.log(x)
    document.querySelector("#wallet").innerText=x;

    document.querySelector("#amount").value="";
    
}


