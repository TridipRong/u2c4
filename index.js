// write js code here corresponding to index.html
// You should add submit event on the fordo
document.querySelector("#masaiForm").addEventListener("submit",addMatch);
var matchArr=JSON.parse(localStorage.getItem("schedule")) || []
function addMatch(){
    event.preventDefault();
    var matchObj={
        matchNumber:masaiForm.matchNum.value,
        firstTeam:masaiForm.teamA.value,
        secondTeam:masaiForm.teamB.value,
        matchDate:masaiForm.date.value,
        matchVanue:masaiForm.venue.value,
    }
    matchArr.push(matchObj);
    localStorage.setItem("schedule",JSON.stringify(matchArr))
    
    window.location.href="./matches.html";
}