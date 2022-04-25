for(i=1;i<21;i++)
{
    if(i % 2 !=0)
    {
        console.log(i)
    }
}

for(i=100;i>0;i--)
{
    if(i % 3 ==0)
    {
        console.log(i)
    }
}

for(i=4;i>=-3.5;i=i-1.5)
{
    console.log(i)
}

function sigma()
{
    var sum = 0;
    for(i=1;i<101;i++)
    {
        sum += i;
    }
    console.log(sum)
}

function factorial()
{
    var product = 1
    for(i=1;i<13;i++)
    {
        product = product * i
    }
    console.log(product)
}

