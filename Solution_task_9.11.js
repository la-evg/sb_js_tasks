function average(list){
    let sum = 0;
    
    for(num of list){
      sum += num
    }
    return Math.round(sum / list.length)
  }
  
  console.log(average(list))