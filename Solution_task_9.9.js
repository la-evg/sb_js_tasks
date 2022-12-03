function SentenceToWords(sentence){
    words = [];
    word = "";
    for (char of sentence){
    if(char != " "){
      word = word.concat(char)
    }
    else{
      words.push(word)
      word = "";
    }
  }
  words.push(word)
  return words
  }
  
  console.log(SentenceToWords(sentence))