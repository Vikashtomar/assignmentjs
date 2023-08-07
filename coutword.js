  
        function countWordOccurrences(sentence,word)
        {
          let s = sentence.toLowerCase().split(" ");
          let w = word.toLowerCase()
          let result = 0;
          for(let i=0; i<sentence.length; i++){
            if(s[i] == w){
              // console.log(result)
               result++

            }
       
            
          }
          console.log(result);
        }
        countWordOccurrences("this is hello. hello","hello")
