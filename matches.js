// write js code here corresponding to matches.html

var matchArr=JSON.parse(localStorage.getItem("schedule"))
var matchfavArr=JSON.parse(localStorage.getItem("favourites")) || []
displayData(matchArr);
function vanueFilter (){
    var selected=document.getElementById("filterVenue").value
    var filterdList=matchArr.filter(function(elem){
        return elem.matchVanue==selected;
    });
    console.log(filterdList)
    displayData(filterdList);
    }
function displayData(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(elem) {
        var row=document.createElement("tr")
        var td1=document.createElement("td")
        td1.innerText=elem.matchNumber
        var td2=document.createElement("td")
        td2.innerText=elem.firstTeam
        var td3=document.createElement("td")
        td3.innerText=elem.secondTeam
        var td4=document.createElement("td")
        td4.innerText=elem. matchDate
        var td5=document.createElement("td")
        td5.innerText=elem.matchVanue
        var td6=document.createElement("td")
        td6.innerText="Add as Favourites";
        td6.style.color="green"
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            matchFav(elem)
        });
        
        row.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(row)

   

    });
    function matchFav(elem){
        matchfavArr.push(elem);
        console.log(matchfavArr)
        localStorage.setItem("favourites", JSON.stringify(matchfavArr))
    }
}
