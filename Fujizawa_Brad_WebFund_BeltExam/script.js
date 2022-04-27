function hide(elem)
{
    elem.parentElement.remove();
}


const timeout = setTimeout(scoreAlert, 13000);

function scoreAlert()
{
    alert("The Ninjas have won!")
}

var count1 = 314;
var countElement1 = document.querySelector("#score1");
function team1Counter()
{
    count1++
    countElement1.innerText = count1 
    console.log(count1)
}

var count2 = 115;
var countElement2 = document.querySelector("#score2");
function team2Counter()
{
    count2++
    countElement2.innerText = count2
    console.log(count2)
}

