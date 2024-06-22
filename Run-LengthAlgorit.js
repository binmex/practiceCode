/**
 * Have the function RunLength(str) take the str parameter being passed
 * and return a compressed version of the string using the Run-length
 * encoding algorithm. This algorithm works by taking the occurrence of each
 * repeating character and outputting that number along with a single character
 * of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p.
 *  The string will not contain any numbers, punctuation, or symbols.
 * Once your function is working, take the final output string and concatenate
 *  it with your ChallengeToken, and then replace every fourth character with an underscore.

Your ChallengeToken: ehima19j3
 */

function RunLength(str) {
    const challengeToken = 'ehima19j3'
    let count = 1
    let finalString = ''
    str = str.replace(/(\W|\d)/g,'')
    for(let i = 0; i < str.length; i++){
        if(str[i] === str[i+1]){
            count++
        }else{
            finalString += count+str[i]
            count = 1
        }
    }
    finalString = finalString+challengeToken

    finalString = finalString.split('').map((value,index)=>{
        return ((index+1) % 4) === 0 ? '_' : value
    }).join('')

    return finalString
};

console.log(RunLength("wwwggopp")); //3w2g1o2p
console.log(RunLength("www67gg1o%p()p"));
console.log(RunLength("aabbcc"));