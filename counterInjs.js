let counter = document.getElementById("counter");
        let value = 0
        console.log(counter);

        function inc(){
         value = Number(counter.innerText)
         value = value + 1;
         counter.innerHTML = value;
        }
     
        function dec(){
         value = Number(counter.innerText)
         // value = value - 1;
      let c =    value > 0 ? value -1 : 0 
         counter.innerHTML = c;
            
        }