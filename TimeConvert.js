/**
 * Have the function TimeConvert(num) take the num parameter being passed
 * and return the number of hours and minutes the parameter converts to 
 * (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.
 * Once your function is working, take the final output string and concatenate it with your ChallengeToken,
 * and then replace every fourth character with an underscore.
 *Your ChallengeToken: ehima19j3
 */

 //120

 function TimeConvert(num) {
    const ChallengeToken = 'ehima19j3';
    newHour = `${Math.floor(num / 60)}:${num % 60}`;

    finalString = (newHour + ChallengeToken).split('').map((value,index)=>{
        return(index+1)%4 === 0 ? '_' : value;
    }).join('');
    return finalString;
 };

 console.log(TimeConvert(63)); //1:3
 console.log(TimeConvert(120)); //2:0
 console.log(TimeConvert(340)); //5:40