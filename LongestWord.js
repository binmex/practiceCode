function LongestWord(sen) { 
    let oracion = sen.replace(/[^A-Za-z0-9 ]/g, '')
    let maxWord = "" 
      let words = oracion.split(' ')
      words.forEach((value,index)=>{
        if(value.length > maxWord.length){
          maxWord = value
        }
      })
      return maxWord
    }
       
    // keep this function call here 
    console.log(LongestWord(readline()));

    /**
     * Input: "fun&!! time"
     * Output: time
     * Input: "I love dogs"
     * Output: love
     */