function Count(list){
    count = 0;
    
    for(num of list){
      if (num % 2 == 0) {count++}
    }
    return count
  }
  
console.log(Count(list))