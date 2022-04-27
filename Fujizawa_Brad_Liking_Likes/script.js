var count = 0;
var countElement = document.querySelector("#count");

var count1 = 0;
var countElement1 = document.querySelector('#count1')

var count2 = 0;
var countElement2 = document.querySelector('#count2')


console.log(countElement)

function counter()
{
    count++
    countElement.innerText = count + ' like(s)'
    console.log(count)
}

function counter1()
{
    count1++
    countElement1.innerText = count1 + ' like(s)'
    console.log(count)
}

function counter2()
{
    count2++
    countElement2.innerText = count2 + ' like(s)'
    console.log(count)
}