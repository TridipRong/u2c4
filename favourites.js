// write js code here corresponding to favourites.html
var matchfavArr=JSON.parse(localStorage.getItem("favourites"))
displayData(matchfavArr);
function displayData(data){
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(elem,index) {
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
        td6.innerText="Delet";
        td6.style.color="red";
        td6.style.cursor="pointer"
        td6.setAttribute("click","deleteText")
        td6.addEventListener("click",function(){
            deletMatch(elem,index)
        });
    row.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(row)
});
}
function deletMatch(elem,index){
    matchfavArr.splice(index,1);
    localStorage.setItem("favourites",JSON.stringify(matchfavArr))
    window.location.reload();
}

