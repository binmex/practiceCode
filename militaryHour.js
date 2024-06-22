function timeConversion(s) {
    
    let period = s.slice(-2)
    let time = s.slice(0,-2)
    
    let [hour,minutes,seconds] = time.split(':')
    console.log(`${hour} ${minutes} ${seconds}`)
    
    if(period === 'AM'){
        if(hour === '12'){
            hour ='00'
        }
    }else{
        if(hour !== '12'){
            hour = (parseInt(hour)+12).toString()
            console.log(hour)
        }
    }
    
    
    return `${hour}:${minutes}:${seconds}`

}

timeConversion("07:05:45PM") //19:05:45