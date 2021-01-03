document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("submit");
    var inputArray = [];
    
    
   
    button.addEventListener("click", (e) => {
        var input = document.getElementById("to-do-sub").value;
        inputArray.push(input)
        if (inputArray.length > 0) {
            for (let i = 0; i < inputArray.length; i++) {
                let newEl = document.createElement('li');
                let newText = document.createTextNode(inputArray[i]);
                newEl.appendChild(newText);
                let position = document.getElementById('to-do-list');
                position.appendChild(newEl);
                
                
            
            }
        }
        
        
        
      
    })
       

})
