function alwaysHungry(arr)
{
    counter = 0
    for(i=0;i<arr.length;i++)
    {
        if(arr[i] == 'food')
        {
            counter += 1
            console.log('yummy')
        }
    }
    if(counter == 0)
        {
            console.log("I'm hungry")
        }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


function highPass(arr, cutoff)
{
    var filteredArr = [];
    for(i=0;i<arr.length;i++)
    {
        if(arr[i] > cutoff)
        {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

function betterThanAverage(arr) {
    var sum = 0;
    for(i=0;i<arr.length;i++)
    {
        sum += arr[i]
    }
    var count = 0
    for(i=0;i<arr.length;i++)
    {
        if(arr[i] > sum/arr.length)
        {
            count += 1
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function reverse(arr) {
    for(i=0;i<arr.length/2;i++)
    {
        var temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp

    }
    return arr;
}

function fibonacciArray(n)
{
    var fibArr = [0,1]
    for(i=0;i<n-2;i++)
    {
        fibArr.push(fibArr[i] + fibArr[i+1])
    }
    return fibArr

}

console.log(fibonacciArray(10))
