let count = 0;
function numberVisited(){
    count = count + 1;
    document.getElementById("count-el").innerHTML = count;
}

function save(){
    document.getElementById("result").innerHTML="Total Visiters of the Day "+count;
}
