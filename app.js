document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("submit");
    var inputArray = [];
    var todoList = document.getElementById('to-do-list');
    button.addEventListener("click", addToList);
    todoList.addEventListener("click", deletecheck);

    
   
    
    
    function addToList(){
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
            doneButton.classList.add('removeButton', 'trash-icon');
            removeButton.classList.add('doneButton', 'tick-icon');
        }
      
    }

    

    function deletecheck(e) {
        const item = e.target;
        if(item.classList[0] === 'removeButton')
        {
            const todo = item.parentElement;
            todo.remove();
        }

        if (item.classList[0] === 'doneButton')
        {
            const todo = item.parentElement;
            todo.classList.toggle('complete');
            }

    }
  
})
