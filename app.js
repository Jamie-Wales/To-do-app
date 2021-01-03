document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("submit");
    var inputArray = [];
    
    
   
    button.addEventListener("click", (e) => {
        var input = document.getElementById("to-do-sub").value;
        if (input.length == 0){
            alert('Please enter valid input')
        } else {
            inputArray.unshift(input)
            let newEl = document.createElement('li');
            let newText = document.createTextNode(inputArray[0]);
            newEl.appendChild(newText);
            let position = document.getElementById('to-do-list');
            position.appendChild(newEl);
            newEl.classList.add('element');
            let doneButton = document.createElement("button");
            let removeButton = document.createElement("button");
            newEl.appendChild(doneButton);
            newEl.appendChild(removeButton);
            doneButton.classList.add('doneButton');
            removeButton.classList.add('removeButton');
        }
        
    
       
        
        
        
        
        
      
    })

    
       

    

})
