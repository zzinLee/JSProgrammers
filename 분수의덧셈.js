function solution(num1, denom1, num2, denom2)
{
    const num = num1*denom2 + num2*denom1;
    const denom = denom1*denom2;

    let min = (num>denom) ? denom : num;

    while(num%min !== 0 || denom%min !== 0)
    {
        min--;
    }

    return [num/min, denom/min];
}